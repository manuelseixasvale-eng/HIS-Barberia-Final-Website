"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BOOKSY_CLASICA, BOOKSY_URBAN } from "@/lib/constants";
import { DUAL_CLASICA, DUAL_URBAN, OVERLAY_CLASICA, OVERLAY_URBAN } from "@/lib/photos";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function DualBrand() {
  const [hovered, setHovered] = useState<"clasica" | "urban" | null>(null);

  const clasicaFlex = hovered === "clasica" ? 1.06 : hovered === "urban" ? 0.94 : 1;
  const urbanFlex = hovered === "urban" ? 1.06 : hovered === "clasica" ? 0.94 : 1;

  return (
    <section id="espacios" className="relative section-pad overflow-hidden bg-his-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header — left-aligned, not centered */}
        <AnimatedSection className="mb-14 md:mb-18">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/25">
                Nuestros Espacios
              </span>
              <h2
                className="font-serif text-his-white leading-tight tracking-[-0.02em] mt-4"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}
              >
                Dos espacios.
                <br />
                <span className="italic text-his-white/40">Una familia.</span>
              </h2>
            </div>
            <p className="font-sans text-[12px] text-his-white/30 max-w-xs leading-relaxed self-end mb-1">
              Un mismo nivel de exigencia.
              <br />
              Dos lenguajes de estilo.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards — 2px gap, flex for hover expansion */}
        <div className="flex flex-col md:flex-row gap-[2px]" style={{ minHeight: "72vh" }}>

          {/* ── Clásica ─────────────────────────────────────────── */}
          <div
            className="min-h-[400px] md:min-h-0"
            style={{ flex: clasicaFlex, transition: "flex 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              onMouseEnter={() => setHovered("clasica")}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden h-full"
            >
              {/* Photo */}
              <Image
                src={DUAL_CLASICA}
                alt="HIS Barbería Clásica espacio"
                fill
                style={{ objectFit: "cover", objectPosition: "center 40%" }}
              />
              {/* Brand color wash */}
              <div className="absolute inset-0" style={{ background: OVERLAY_CLASICA }} />
              {/* Linen texture */}
              <div className="absolute inset-0 texture-linen opacity-60" />

              {/* Warm bottom vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 40% 100%, rgba(200,191,168,0.12) 0%, transparent 55%)",
                }}
              />

              {/* Hover brightness shift */}
              <div className="absolute inset-0 bg-clasica-warm/0 group-hover:bg-clasica-warm/3 transition-all duration-700" />

              {/* Roman numeral I — bottom right watermark */}
              <div
                className="absolute bottom-0 right-4 font-serif select-none pointer-events-none leading-none"
                style={{
                  fontSize: "clamp(12rem, 20vw, 18rem)",
                  color: "rgba(200,191,168,0.045)",
                  fontStyle: "italic",
                }}
                aria-hidden
              >
                I
              </div>

              {/* Single diagonal accent line */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, transparent 49.8%, rgba(200,191,168,0.06) 49.8%, rgba(200,191,168,0.06) 50.2%, transparent 50.2%)",
                }}
              />

              {/* Top label */}
              <div className="absolute top-8 left-8">
                <span className="font-sans text-[8.5px] tracking-[0.45em] uppercase text-clasica-warm/40">
                  HIS Barbería
                </span>
              </div>

              {/* Top-right corner ornament */}
              <div className="absolute top-8 right-8 w-5 h-5 border-t border-r border-clasica-warm/25" />

              {/* Content — bottom-left positioned */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex flex-col gap-5">

                {/* Brand name — BOTTOM LEFT, large */}
                <div>
                  <h3
                    className="font-serif text-his-white leading-none tracking-[-0.02em]"
                    style={{ fontSize: "clamp(3.2rem, 6vw, 5.8rem)" }}
                  >
                    Clásica
                  </h3>
                  <div className="mt-3 w-10 h-px bg-clasica-warm/35" />
                </div>

                {/* Tagline */}
                <div className="flex flex-col gap-1">
                  <p className="font-serif italic text-[1.05rem] text-clasica-warm/65">
                    Elegancia atemporal.
                  </p>
                  <p className="font-sans text-[11.5px] text-his-white/35 leading-relaxed max-w-xs">
                    Barbería de precisión y estética masculina de lujo.
                    Un espacio de ritmo clásico y atención al detalle.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {["Barbería", "Estética", "Afeitado clásico"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border border-clasica-warm/18 font-sans text-[8.5px] tracking-[0.22em] uppercase text-clasica-warm/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Location + CTA */}
                <div className="flex items-center justify-between pt-1">
                  <span className="font-sans text-[8.5px] tracking-[0.25em] uppercase text-his-white/22">
                    Madrid · C/ Ejemplo 12
                  </span>
                  <a
                    href={BOOKSY_CLASICA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2.5 font-sans text-[9px] tracking-[0.28em] uppercase text-clasica-warm hover:text-his-white transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="w-4 h-px bg-clasica-warm group-hover/btn:w-7 transition-all duration-400" />
                    Reservar
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Urban ───────────────────────────────────────────── */}
          <div
            className="min-h-[400px] md:min-h-0"
            style={{ flex: urbanFlex, transition: "flex 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              onMouseEnter={() => setHovered("urban")}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden h-full"
            >
              {/* Photo */}
              <Image
                src={DUAL_URBAN}
                alt="HIS Barbería Urban espacio"
                fill
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
              {/* Brand color wash */}
              <div className="absolute inset-0" style={{ background: OVERLAY_URBAN }} />
              {/* Urban diagonal texture */}
              <div className="absolute inset-0 texture-urban opacity-80" />

              {/* Cool top vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 60% 0%, rgba(184,184,184,0.07) 0%, transparent 50%)",
                }}
              />

              {/* Hover shift */}
              <div className="absolute inset-0 bg-his-white/0 group-hover:bg-his-white/[0.015] transition-all duration-700" />

              {/* Roman numeral II — top left watermark */}
              <div
                className="absolute -top-4 -left-4 font-sans select-none pointer-events-none leading-none font-light uppercase"
                style={{
                  fontSize: "clamp(10rem, 18vw, 16rem)",
                  color: "rgba(184,184,184,0.04)",
                  letterSpacing: "-0.04em",
                }}
                aria-hidden
              >
                II
              </div>

              {/* Top border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-urban-silver/10" />

              {/* Brand name — TOP RIGHT, aggressive position */}
              <div className="absolute top-8 right-8 text-right">
                <span className="font-sans text-[8.5px] tracking-[0.45em] uppercase text-urban-silver/35">
                  HIS Barbería
                </span>
                <h3
                  className="font-sans font-light text-his-white leading-none tracking-[-0.04em] uppercase mt-2"
                  style={{ fontSize: "clamp(3.2rem, 6vw, 5.8rem)" }}
                >
                  Urban
                </h3>
                <div className="mt-3 w-8 h-0.5 bg-urban-silver/25 ml-auto" />
              </div>

              {/* Content — bottom right */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex flex-col gap-5">

                {/* Tagline */}
                <div className="flex flex-col gap-1">
                  <p className="font-sans font-light text-[0.95rem] tracking-[0.12em] text-urban-silver/55 uppercase">
                    Estilo que define.
                  </p>
                  <p className="font-sans text-[11.5px] text-his-white/35 leading-relaxed max-w-xs">
                    Barbería moderna y peluquería contemporánea.
                    Fades, coloración y técnicas de vanguardia.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {["Barbería", "Peluquería", "Coloración"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border border-urban-silver/12 font-sans text-[8.5px] tracking-[0.22em] uppercase text-urban-silver/38"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Location + CTA */}
                <div className="flex items-center justify-between pt-1">
                  <span className="font-sans text-[8.5px] tracking-[0.25em] uppercase text-his-white/22">
                    Madrid · C/ Ejemplo 45
                  </span>
                  <a
                    href={BOOKSY_URBAN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2.5 font-sans text-[9px] tracking-[0.28em] uppercase text-urban-silver hover:text-his-white transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Reservar
                    <span className="w-4 h-px bg-urban-silver group-hover/btn:w-7 transition-all duration-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
