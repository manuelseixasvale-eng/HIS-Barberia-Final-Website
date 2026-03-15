"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CLASICA_SERVICES, URBAN_SERVICES, BOOKSY_CLASICA, BOOKSY_URBAN } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Mark a "featured" service per category
const FEATURED: Record<string, string> = {
  "Corte + Barba": true,
  "Ritual completo": true,
  "Degradado": true,
  "Coloración": true,
} as unknown as Record<string, string>;

export default function Services() {
  const [active, setActive] = useState<"clasica" | "urban">("clasica");
  const isClasica = active === "clasica";
  const currentServices = isClasica ? CLASICA_SERVICES : URBAN_SERVICES;

  return (
    <section id="servicios" className="relative section-pad bg-his-black overflow-hidden">
      {/* Side ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: isClasica
            ? "radial-gradient(ellipse at 5% 50%, rgba(45,74,62,0.09) 0%, transparent 50%)"
            : "radial-gradient(ellipse at 95% 50%, rgba(184,184,184,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <AnimatedSection>
            <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/25">
              Servicios
            </span>
            <h2
              className="font-serif text-his-white leading-tight tracking-[-0.02em] mt-4"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}
            >
              Tu servicio,
              <br />
              <span className="italic text-his-white/38">tu espacio.</span>
            </h2>
          </AnimatedSection>

          {/* Premium brand switcher */}
          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-0 relative">
              {/* Sliding active indicator */}
              <div className="relative flex border border-his-white/8">
                <motion.div
                  className="absolute top-0 bottom-0 z-0"
                  style={{ width: "50%" }}
                  animate={{ x: isClasica ? "0%" : "100%" }}
                  transition={{ duration: 0.45, ease }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      background: isClasica
                        ? "linear-gradient(135deg, #1E3329, #2D4A3E)"
                        : "linear-gradient(135deg, #1A1A1A, #111111)",
                    }}
                  />
                </motion.div>

                <button
                  onClick={() => setActive("clasica")}
                  className="relative z-10 px-7 py-3 flex flex-col items-center gap-0.5 group"
                >
                  <span
                    className={`font-serif text-lg transition-colors duration-400 ${
                      isClasica ? "text-clasica-warm" : "text-his-white/30 group-hover:text-his-white/60"
                    }`}
                  >
                    Clásica
                  </span>
                  <span
                    className={`font-sans text-[7.5px] tracking-[0.3em] uppercase transition-colors duration-400 ${
                      isClasica ? "text-clasica-warm/50" : "text-his-white/18"
                    }`}
                  >
                    Barbería · Estética
                  </span>
                </button>

                <div className="w-px self-stretch bg-his-white/8" />

                <button
                  onClick={() => setActive("urban")}
                  className="relative z-10 px-7 py-3 flex flex-col items-center gap-0.5 group"
                >
                  <span
                    className={`font-sans font-light text-lg uppercase tracking-[-0.02em] transition-colors duration-400 ${
                      !isClasica ? "text-urban-silver" : "text-his-white/30 group-hover:text-his-white/60"
                    }`}
                  >
                    Urban
                  </span>
                  <span
                    className={`font-sans text-[7.5px] tracking-[0.3em] uppercase transition-colors duration-400 ${
                      !isClasica ? "text-urban-silver/50" : "text-his-white/18"
                    }`}
                  >
                    Barbería · Peluquería
                  </span>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Services */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
          >
            {currentServices.map((group, gi) => (
              <div key={gi} className="flex flex-col">

                {/* Category header */}
                <div className="flex items-center gap-4 mb-1 pb-4 border-b border-his-white/8">
                  <span
                    className={`font-sans text-[8.5px] tracking-[0.45em] uppercase ${
                      isClasica ? "text-clasica-warm/55" : "text-urban-silver/45"
                    }`}
                  >
                    0{gi + 1} — {group.category}
                  </span>
                  <span className="font-sans text-[8px] text-his-white/20 ml-auto">
                    {group.items.length} servicios
                  </span>
                </div>

                {/* Service rows */}
                <div className="flex flex-col">
                  {group.items.map((item, ii) => {
                    const isFeatured = Boolean(FEATURED[item.name]);
                    return (
                      <div
                        key={ii}
                        className="group/row flex items-start justify-between py-[18px] border-b border-his-white/5 hover:border-his-white/12 transition-all duration-300 gap-5"
                      >
                        <div className="flex flex-col gap-1 flex-1">
                          <div className="flex items-center gap-2.5">
                            <span className="font-serif text-[1.12rem] text-his-white/82 group-hover/row:text-his-white transition-colors duration-300">
                              {item.name}
                            </span>
                            {isFeatured && (
                              <span
                                className={`font-serif italic text-[9.5px] ${
                                  isClasica ? "text-clasica-warm/55" : "text-urban-silver/45"
                                }`}
                              >
                                — más solicitado
                              </span>
                            )}
                          </div>
                          <span className="font-sans text-[10.5px] text-his-white/28 leading-relaxed">
                            {item.description}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mt-0.5 flex-shrink-0">
                          <span
                            className={`font-sans text-[11px] tracking-[0.08em] whitespace-nowrap ${
                              isClasica ? "text-clasica-warm/55" : "text-urban-silver/45"
                            }`}
                          >
                            {item.price}
                          </span>
                          <span className="text-his-white/15 font-sans text-xs opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 -translate-x-1 group-hover/row:translate-x-0 transition-transform">
                            →
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.2} className="mt-14 pt-10 border-t border-his-white/6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="font-sans text-[11px] text-his-white/22 max-w-sm leading-relaxed">
              Los precios son orientativos. Disponibilidad y tarifas exactas en Booksy.
            </p>
            <a
              href={isClasica ? BOOKSY_CLASICA : BOOKSY_URBAN}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex items-center gap-4 px-8 py-4 font-sans text-[10px] tracking-[0.3em] uppercase transition-all duration-400
                ${isClasica
                  ? "bg-clasica-green text-his-white hover:bg-clasica-green-light"
                  : "border border-his-white/15 text-his-white/65 hover:border-his-white/40 hover:text-his-white"
                }
              `}
            >
              Reservar en {isClasica ? "Clásica" : "Urban"}
              <span className="w-4 h-px bg-current opacity-50 group-hover:w-7 transition-all duration-400" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
