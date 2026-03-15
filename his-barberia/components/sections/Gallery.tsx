"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { GALLERY_PHOTOS } from "@/lib/photos";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const clasicaItems = [
  { id: 1, label: "Afeitado clásico", num: "01", photoIndex: 0, tall: true },
  { id: 2, label: "El ritual",        num: "02", photoIndex: 1, tall: false },
  { id: 3, label: "Precisión",        num: "03", photoIndex: 2, tall: false },
];

const urbanItems = [
  { id: 4, label: "Fade perfecto", num: "04", photoIndex: 3, tall: false },
  { id: 5, label: "Urban style",   num: "05", photoIndex: 4, tall: true },
  { id: 6, label: "Detalle",       num: "06", photoIndex: 5, tall: false },
];

export default function Gallery() {
  return (
    <section id="galeria" className="relative section-pad bg-his-black overflow-hidden">
      {/* Full bleed on desktop — no max-w constraint on the grid itself */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/25">
            Galería
          </span>
          <h2
            className="font-serif text-his-white leading-tight tracking-[-0.02em] mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}
          >
            Dos atmósferas.
            <br />
            <span className="italic text-his-white/38">Un estándar.</span>
          </h2>
        </AnimatedSection>
      </div>

      {/* Classic group */}
      <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-1 h-1 rounded-full bg-clasica-warm/45" />
          <span className="font-sans text-[8.5px] tracking-[0.45em] uppercase text-clasica-warm/45">
            Classic
          </span>
          <div className="flex-1 h-px bg-clasica-green/15" />
        </div>

        <div className="grid grid-cols-12 gap-2.5 mb-2.5" style={{ height: "420px" }}>
          {/* Tall left */}
          <GalleryCell item={clasicaItems[0]} className="col-span-5" variant="clasica" delay={0} />
          {/* Two stacked right */}
          <GalleryCell item={clasicaItems[1]} className="col-span-4" variant="clasica" delay={0.06} />
          <GalleryCell item={clasicaItems[2]} className="col-span-3" variant="clasica" delay={0.1} />
        </div>
      </div>

      {/* Urban group */}
      <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto mt-6">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-1 h-1 bg-urban-silver/35" />
          <span className="font-sans text-[8.5px] tracking-[0.45em] uppercase text-urban-silver/35">
            Urban
          </span>
          <div className="flex-1 h-px bg-urban-charcoal/60" />
        </div>

        <div className="grid grid-cols-12 gap-2.5" style={{ height: "420px" }}>
          {/* Two stacked left */}
          <GalleryCell item={urbanItems[0]} className="col-span-3" variant="urban" delay={0.04} />
          <GalleryCell item={urbanItems[1]} className="col-span-4" variant="urban" delay={0.08} />
          {/* Tall right */}
          <GalleryCell item={urbanItems[2]} className="col-span-5" variant="urban" delay={0} />
        </div>
      </div>

      {/* Bottom caption */}
      <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto mt-8">
        <AnimatedSection delay={0.2} className="flex items-center gap-6">
          <div className="h-px flex-1 bg-his-white/5" />
          <p className="font-sans text-[8px] tracking-[0.45em] uppercase text-his-white/15">
            Classic · Urban · Madrid
          </p>
          <div className="h-px flex-1 bg-his-white/5" />
        </AnimatedSection>
      </div>
    </section>
  );
}

interface GalleryCellProps {
  item: {
    id: number;
    label: string;
    num: string;
    photoIndex: number;
    tall: boolean;
  };
  className?: string;
  variant: "clasica" | "urban";
  delay: number;
}

function GalleryCell({ item, className = "", variant, delay }: GalleryCellProps) {
  const isClasica = variant === "clasica";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.85, delay, ease }}
      whileHover={{ scale: 1.015 }}
      className={`group relative overflow-hidden cursor-default h-full ${className}`}
    >
      {/* Photo */}
      <Image
        src={GALLERY_PHOTOS[item.photoIndex]}
        alt={item.label}
        fill
        className="transition-transform duration-700 group-hover:scale-[1.05]"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      {/* Brand gradient — bottom only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isClasica
            ? "linear-gradient(to top, rgba(26,46,34,0.95) 0%, rgba(26,46,34,0.4) 35%, transparent 62%)"
            : "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 35%, transparent 62%)",
        }}
      />

      {/* Classic: warm corner flare */}
      {isClasica && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 85% 90%, rgba(200,191,168,0.14) 0%, transparent 50%)",
          }}
        />
      )}

      {/* Classic: linen texture */}
      {isClasica && (
        <div className="absolute inset-0 texture-linen opacity-50" />
      )}

      {/* Urban: diagonal line overlay */}
      {!isClasica && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 16px,
                rgba(184,184,184,0.04) 16px,
                rgba(184,184,184,0.04) 17px
              )
            `,
          }}
        />
      )}

      {/* Urban: cool vignette */}
      {!isClasica && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 20% 10%, rgba(184,184,184,0.07) 0%, transparent 50%)",
          }}
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-his-black/0 group-hover:bg-his-black/18 transition-all duration-500 pointer-events-none" />

      {/* Bottom gradient for label legibility */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(to top, rgba(10,10,10,0.7), transparent)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
        {/* Top: number */}
        <span
          className={`font-serif text-[0.7rem] ${
            isClasica ? "text-clasica-warm/30" : "text-urban-silver/22"
          }`}
        >
          {item.num}
        </span>

        {/* Bottom: label + brand */}
        <div className="flex items-end justify-between">
          <span className="font-serif text-[0.95rem] text-his-white/55 group-hover:text-his-white/90 transition-colors duration-400 leading-tight">
            {item.label}
          </span>
          <span
            className={`font-sans text-[7.5px] tracking-[0.3em] uppercase ${
              isClasica ? "text-clasica-warm/30" : "text-urban-silver/22"
            }`}
          >
            {isClasica ? "Classic" : "Urban"}
          </span>
        </div>
      </div>

      {/* Classic corner ornament on hover */}
      {isClasica && (
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-clasica-warm/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
    </motion.div>
  );
}
