"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface HaircutsProps {
  brand: "clasica" | "urban";
}

const clasicaCuts = [
  {
    name: "Corte Clásico",
    descriptor: "Tijera · Navaja",
    description: "La expresión más elegante del oficio barbero. Tijera y peine, acabado impecable.",
    gradient: "linear-gradient(145deg, #1E3329 0%, #2D4A3E 60%, #3D6B59 100%)",
    image: "/haircuts/clasica/corte-clasico.png",
  },
  {
    name: "Afeitado Tradicional",
    descriptor: "Ritual completo",
    description: "Navaja de filo, toalla caliente, aceites esenciales. El ritual de siempre.",
    gradient: "linear-gradient(145deg, #0d1611 0%, #1E3329 60%, #2D4A3E 100%)",
    image: "/haircuts/clasica/afeitado-tradicional.png",
  },
  {
    name: "Corte + Barba",
    descriptor: "El más solicitado",
    description: "El servicio estrella de Classic. Corte a medida y barba perfectamente definida.",
    gradient: "linear-gradient(145deg, #162218 0%, #2D4A3E 50%, #3D6B59 100%)",
    image: "/haircuts/clasica/corte-barba.png",
  },
  {
    name: "Ritual Completo",
    descriptor: "Experiencia total",
    description: "Corte, barba y tratamiento facial. La experiencia HIS Classic en su máxima expresión.",
    gradient: "linear-gradient(145deg, #0d1611 0%, #1a2e20 50%, #2D4A3E 100%)",
    image: "/haircuts/clasica/ritual-completo.png",
  },
];

const urbanCuts = [
  {
    name: "Skin Fade",
    descriptor: "Al ras · Precisión",
    description: "Degradado hasta la piel. Precisión milimétrica para el resultado más limpio.",
    gradient: "linear-gradient(145deg, #111111 0%, #1A1A1A 60%, #222222 100%)",
    image: "/haircuts/urban/skin-fade.jpg",
  },
  {
    name: "Taper Fade",
    descriptor: "Clásico contemporáneo",
    description: "Del largo al corto sin fisuras. El equilibrio perfecto entre tradición y modernidad.",
    gradient: "linear-gradient(145deg, #0A0A0A 0%, #141414 60%, #1A1A1A 100%)",
    image: "/haircuts/urban/taper-fade.jpg",
  },
  {
    name: "Crop Top",
    descriptor: "Moderno · Limpio",
    description: "Contemporáneo, limpio, versátil. El corte favorito de la nueva generación urbana.",
    gradient: "linear-gradient(145deg, #0d0d0d 0%, #1A1A1A 50%, #242424 100%)",
    image: "/haircuts/urban/crop-top.jpg",
  },
  {
    name: "Burst Fade",
    descriptor: "Tendencia actual",
    description: "Degradado en arco alrededor de la oreja. Técnica de alta precisión con carácter propio.",
    gradient: "linear-gradient(145deg, #0A0A0A 0%, #111111 50%, #1A1A1A 100%)",
    image: "/haircuts/urban/burst-fade.jpg",
  },
];

export default function Haircuts({ brand }: HaircutsProps) {
  const isClasica = brand === "clasica";
  const cuts = isClasica ? clasicaCuts : urbanCuts;

  return (
    <section
      className="relative section-pad overflow-hidden"
      style={{
        background: isClasica
          ? "linear-gradient(180deg, #0A0A0A 0%, #0c1810 50%, #0e1d12 100%)"
          : "linear-gradient(180deg, #0A0A0A 0%, #111111 50%, #0f0f0f 100%)",
      }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isClasica
            ? "radial-gradient(ellipse at 80% 20%, rgba(45,74,62,0.16) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 20% 80%, rgba(184,184,184,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/25">
            Nuestros Cortes
          </span>
          <h2
            className="font-serif text-his-white leading-tight tracking-[-0.02em] mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}
          >
            El arte del detalle.
            <br />
            <span
              className="italic"
              style={{ color: isClasica ? "rgba(200,191,168,0.42)" : "rgba(184,184,184,0.35)" }}
            >
              En cada corte.
            </span>
          </h2>
        </AnimatedSection>

        {/* Grid — asymmetric 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {cuts.map((cut, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.figure
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden group cursor-default"
                style={{ aspectRatio: i % 3 === 0 ? "4/3" : "16/10" }}
              >
                {/* Background — real photo or gradient fallback */}
                {cut.image ? (
                  <Image
                    src={cut.image}
                    alt={cut.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ background: cut.gradient }}
                  />
                )}

                {/* Texture overlay */}
                <div
                  className={`absolute inset-0 pointer-events-none ${isClasica ? "texture-linen opacity-30" : "texture-urban opacity-35"}`}
                />

                {/* Bottom gradient for text */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }}
                />

                {/* Hover reveal overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center px-8"
                  style={{
                    background: isClasica
                      ? "rgba(45,74,62,0.55)"
                      : "rgba(10,10,10,0.65)",
                  }}
                >
                  <p className="font-sans text-[11.5px] text-his-white/80 text-center leading-relaxed max-w-[220px]">
                    {cut.description}
                  </p>
                </div>

                {/* Always-visible bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-end justify-between">
                    <div>
                      <figcaption
                        className="leading-none"
                        style={{
                          fontFamily: isClasica ? "var(--font-cormorant)" : "var(--font-inter)",
                          fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
                          fontWeight: isClasica ? 400 : 200,
                          fontStyle: isClasica ? "italic" : "normal",
                          textTransform: isClasica ? "none" : "uppercase",
                          letterSpacing: isClasica ? "0" : "-0.03em",
                          color: isClasica ? "#C8BFA8" : "#B8B8B8",
                        }}
                      >
                        {cut.name}
                      </figcaption>
                      <span
                        className="font-sans text-[8px] tracking-[0.3em] uppercase mt-1.5 block"
                        style={{ color: isClasica ? "rgba(200,191,168,0.45)" : "rgba(184,184,184,0.38)" }}
                      >
                        {cut.descriptor}
                      </span>
                    </div>
                    {/* Index number */}
                    <span
                      className="font-sans text-[8px] tracking-[0.22em] uppercase self-start"
                      style={{ color: "rgba(255,255,255,0.15)" }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: isClasica
                      ? "linear-gradient(90deg, transparent, rgba(200,191,168,0.5), transparent)"
                      : "linear-gradient(90deg, transparent, rgba(184,184,184,0.3), transparent)",
                  }}
                />
              </motion.figure>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
