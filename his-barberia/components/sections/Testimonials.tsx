"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    quote: "Entrar en Classic es como suspender el tiempo. El corte es perfecto, pero lo que te llevas es algo más difícil de describir.",
    author: "Rafael M.",
    title: "Cliente desde 2025",
    brand: "clasica" as const,
  },
  {
    quote: "Urban entiende lo que quiero antes de que yo lo explique. Precisión absoluta, ambiente sin igual.",
    author: "Javier T.",
    title: "Cliente habitual",
    brand: "urban" as const,
  },
  {
    quote: "El ritual de Classic no tiene precio. Desde la toalla caliente hasta el acabado — una experiencia que esperas cada semana.",
    author: "Marcos D.",
    title: "Cliente desde 2025",
    brand: "clasica" as const,
  },
  {
    quote: "He probado muchas barberías en Madrid. Ninguna tiene el nivel de detalle de Urban. Es otro mundo.",
    author: "Alejandro V.",
    title: "Cliente habitual",
    brand: "urban" as const,
  },
];

const shortQuotes = [
  '"Otro nivel."',
  "·",
  '"El mejor fade de Madrid."',
  "·",
  '"Una experiencia, no solo un corte."',
  "·",
  '"Vuelvo cada semana."',
  "·",
  '"Precisión absoluta."',
  "·",
  '"El ritual perfecto."',
  "·",
  '"Calidad sin compromisos."',
  "·",
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[current];
  const isClasica = active.brand === "clasica";

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #0b1810 50%, #0A0A0A 100%)",
        minHeight: "70vh",
      }}
    >
      {/* Ambient glow — shifts with brand */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isClasica
            ? "radial-gradient(ellipse at 35% 50%, rgba(45,74,62,0.18) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 65% 50%, rgba(184,184,184,0.09) 0%, transparent 60%)",
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Giant background quote mark */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "-2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(18rem, 35vw, 32rem)",
          fontFamily: "var(--font-cormorant)",
          color: "rgba(245,243,239,0.018)",
          lineHeight: 1,
        }}
        aria-hidden
      >
        &ldquo;
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-[70vh]">

        {/* Header eyebrow */}
        <AnimatedSection className="text-center pt-20 mb-12">
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/22">
            Testimonios
          </span>
        </AnimatedSection>

        {/* Main cycling quote */}
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 lg:px-16 text-center flex-1 flex flex-col items-center justify-center pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.75, ease }}
              className="flex flex-col items-center"
            >
              {/* The quote */}
              <blockquote
                className="font-serif italic text-his-white/82 text-center leading-[1.15] tracking-[-0.01em]"
                style={{ fontSize: "clamp(1.55rem, 3.8vw, 3.2rem)" }}
              >
                &ldquo;{active.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="mt-9 flex flex-col items-center gap-3">
                <div
                  className="w-10 h-px"
                  style={{
                    background: isClasica
                      ? "rgba(200,191,168,0.45)"
                      : "rgba(184,184,184,0.35)",
                  }}
                />
                <span
                  className="font-sans text-[10px] tracking-[0.38em] uppercase"
                  style={{
                    color: isClasica ? "rgba(200,191,168,0.7)" : "rgba(184,184,184,0.6)",
                  }}
                >
                  {active.author}
                </span>
                <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-his-white/22">
                  {active.title} · HIS {active.brand === "clasica" ? "Classic" : "Urban"}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="flex items-center gap-2.5 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-500 focus:outline-none"
                style={{
                  width: i === current ? "28px" : "6px",
                  height: "1px",
                  background: i === current
                    ? (testimonials[i].brand === "clasica" ? "rgba(200,191,168,0.7)" : "rgba(184,184,184,0.6)")
                    : "rgba(255,255,255,0.12)",
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom strip — short quote marquee */}
        <div
          className="relative overflow-hidden py-4 border-t mt-8"
          style={{ borderColor: "rgba(45,74,62,0.15)" }}
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #0A0A0A, transparent)" }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(270deg, #0A0A0A, transparent)" }}
          />

          <div className="marquee-track flex items-center whitespace-nowrap" style={{ animationDuration: "32s" }}>
            {[...shortQuotes, ...shortQuotes].map((q, i) => (
              <span
                key={i}
                className={`font-serif mx-5 ${
                  q === "·"
                    ? "text-clasica-green/50 text-sm"
                    : "italic text-[11px] text-his-white/22"
                }`}
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
