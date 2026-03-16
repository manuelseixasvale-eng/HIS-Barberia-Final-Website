"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BOOKSY_CLASICA, BOOKSY_URBAN } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Booking() {
  const [selected, setSelected] = useState<"clasica" | "urban" | null>(null);

  const handleBook = () => {
    const url = selected === "clasica" ? BOOKSY_CLASICA : BOOKSY_URBAN;
    window.open(url, "_blank");
  };

  return (
    <section
      id="reservas"
      className="relative section-pad overflow-hidden transition-all duration-1000"
      style={{
        background: selected === "clasica"
          ? "linear-gradient(160deg, #0c140f 0%, #0d1a12 40%, #0A0A0A 100%)"
          : selected === "urban"
          ? "linear-gradient(160deg, #0A0A0A 0%, #0f0f0f 40%, #0A0A0A 100%)"
          : "linear-gradient(160deg, #0A0A0A 0%, #0c140f 40%, #0A0A0A 100%)",
      }}
    >
      {/* Dynamic ambient glow based on selection */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: selected === "clasica"
            ? "radial-gradient(ellipse at 50% 50%, rgba(45,74,62,0.2) 0%, transparent 60%)"
            : selected === "urban"
            ? "radial-gradient(ellipse at 50% 50%, rgba(184,184,184,0.05) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 50% 50%, rgba(45,74,62,0.1) 0%, transparent 60%)",
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">

        {/* Header */}
        <AnimatedSection>
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/22">
            Reservas
          </span>
          <h2
            className="font-serif text-his-white leading-[0.92] tracking-[-0.02em] mt-6"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          >
            Tu cita,
            <br />
            <span className="italic text-clasica-warm/65">en dos clics.</span>
          </h2>
          <p className="mt-6 font-sans text-[13.5px] text-his-white/38 max-w-sm mx-auto leading-relaxed">
            Elige tu espacio y reserva directamente con el profesional que prefieras.
          </p>
        </AnimatedSection>

        {/* Step 1: Location selection */}
        <AnimatedSection delay={0.15} className="mt-16">
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="h-px flex-1 max-w-[60px] bg-his-white/10" />
            <span className="font-sans text-[8.5px] tracking-[0.45em] uppercase text-his-white/22">
              01 — Elige tu espacio
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-his-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">

            {/* Classic card */}
            <motion.button
              onClick={() => setSelected("clasica")}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden text-left transition-all duration-500"
              style={{
                background: selected === "clasica"
                  ? "linear-gradient(150deg, #1a2c1f, #2D4A3E)"
                  : "rgba(255,255,255,0.025)",
                border: `1px solid ${selected === "clasica" ? "rgba(200,191,168,0.35)" : "rgba(255,255,255,0.06)"}`,
              }}
            >
              {/* Inner linen texture */}
              <div className="absolute inset-0 texture-linen opacity-40" />

              {/* Selection glow */}
              <AnimatePresence>
                {selected === "clasica" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at 50% 100%, rgba(200,191,168,0.08) 0%, transparent 70%)",
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-his-white leading-none">
                      Classic
                    </h3>
                    <p className="font-serif italic text-[0.85rem] text-clasica-warm/55 mt-1">
                      Elegancia atemporal
                    </p>
                  </div>
                  {/* Selection indicator */}
                  <div
                    className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-400 ${
                      selected === "clasica"
                        ? "border-clasica-warm bg-clasica-warm"
                        : "border-his-white/18"
                    }`}
                  >
                    <AnimatePresence>
                      {selected === "clasica" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="w-1.5 h-1.5 rounded-full bg-clasica-green-deep"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <p className="font-sans text-[10.5px] text-his-white/32 leading-relaxed">
                  Barbería · Estética masculina
                </p>
                <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-clasica-warm/35">
                  C/ Ejemplo 12 · Madrid
                </span>
              </div>
            </motion.button>

            {/* Urban card */}
            <motion.button
              onClick={() => setSelected("urban")}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden text-left transition-all duration-500"
              style={{
                background: selected === "urban"
                  ? "linear-gradient(150deg, #111111, #1A1A1A)"
                  : "rgba(255,255,255,0.025)",
                border: `1px solid ${selected === "urban" ? "rgba(184,184,184,0.28)" : "rgba(255,255,255,0.06)"}`,
              }}
            >
              {/* Urban texture */}
              <div className="absolute inset-0 texture-urban opacity-50" />

              <AnimatePresence>
                {selected === "urban" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at 50% 0%, rgba(184,184,184,0.06) 0%, transparent 70%)",
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-sans font-light text-2xl text-his-white leading-none uppercase tracking-[-0.02em]">
                      Urban
                    </h3>
                    <p className="font-sans font-light text-[0.78rem] text-urban-silver/50 mt-1 tracking-[0.1em] uppercase">
                      Estilo contemporáneo
                    </p>
                  </div>
                  <div
                    className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-all duration-400 ${
                      selected === "urban"
                        ? "border-urban-silver bg-urban-silver"
                        : "border-his-white/18"
                    }`}
                  >
                    <AnimatePresence>
                      {selected === "urban" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="w-1.5 h-1.5 bg-his-black"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <p className="font-sans text-[10.5px] text-his-white/32 leading-relaxed">
                  Barbería · Peluquería contemporánea
                </p>
                <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-urban-silver/30">
                  C/ Ejemplo 45 · Madrid
                </span>
              </div>
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Step 2: Confirm — appears after selection */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.55, ease }}
              className="mt-10 flex flex-col items-center gap-5"
            >
              {/* Step indicator + connector */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 max-w-[60px] bg-his-white/10" />
                  <span className="font-sans text-[8.5px] tracking-[0.45em] uppercase text-his-white/22">
                    02 — Confirma tu reserva
                  </span>
                  <div className="h-px flex-1 max-w-[60px] bg-his-white/10" />
                </div>
                {/* Animated connector line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease, delay: 0.1 }}
                  style={{ originX: 0 }}
                  className={`h-px w-24 ${
                    selected === "clasica" ? "bg-clasica-warm/30" : "bg-urban-silver/25"
                  }`}
                />
              </div>

              {/* Book button */}
              <motion.button
                onClick={handleBook}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden px-12 py-5 font-sans text-[10.5px] tracking-[0.35em] uppercase transition-all duration-400"
                style={selected === "clasica"
                  ? { border: "1px solid rgba(200,191,168,0.2)", color: "rgba(200,191,168,0.55)" }
                  : { background: "#F5F3EF", color: "#0A0A0A" }
                }
              >
                <span className="relative z-10 flex items-center gap-3">
                  Reservar en {selected === "clasica" ? "Classic" : "Urban"}
                  <span className="w-4 h-px bg-current opacity-60 group-hover:w-6 transition-all duration-400" />
                </span>
                {selected !== "clasica" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-his-cream" />
                )}
              </motion.button>

              <p className="font-sans text-[9.5px] text-his-white/18 tracking-wide">
                Serás redirigido a Booksy para completar tu reserva
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom ornament */}
        <AnimatedSection delay={0.35} className="mt-20">
          <div className="flex items-center gap-6 justify-center">
            <div className="h-px flex-1 max-w-[80px] bg-his-white/8" />
            <p className="font-serif italic text-[1rem] text-his-white/18">
              &ldquo;Una cita. Una experiencia.&rdquo;
            </p>
            <div className="h-px flex-1 max-w-[80px] bg-his-white/8" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
