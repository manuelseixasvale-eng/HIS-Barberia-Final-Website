"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const quoteWords = [
  "No", "es", "solo", "un", "corte."
];
const quoteWords2 = ["Es", "cómo", "te", "ves"];
const quoteWords3 = ["cuando", "importa."];

const stats = [
  { value: "MMXXV", label: "Fundación" },
  { value: "Dos", label: "Espacios en Madrid" },
  { value: "Uno", label: "Estándar de exigencia" },
];

function WordReveal({ words, delay = 0, className = "", italic = false }: {
  words: string[];
  delay?: number;
  className?: string;
  italic?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <span ref={ref} className={`inline ${italic ? "italic" : ""}`}>
      {words.map((word, i) => (
        <span key={i} className="word-reveal mr-[0.28em] last:mr-0">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.07,
              ease,
            }}
            className={className}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="relative section-pad overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #0f1c12 40%, #0A0A0A 100%)",
      }}
    >
      {/* Very subtle green breath */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 60%, rgba(45,74,62,0.16) 0%, transparent 60%)",
        }}
      />

      {/* Giant decorative quotation mark — background */}
      <div
        className="absolute -top-8 right-0 md:right-8 font-serif leading-none select-none pointer-events-none"
        aria-hidden
        style={{
          fontSize: "clamp(16rem, 30vw, 28rem)",
          color: "rgba(245,243,239,0.022)",
          lineHeight: 1,
        }}
      >
        &ldquo;
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Eyebrow */}
        <AnimatedSection>
          <div className="flex items-center gap-5">
            <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/25">
              Filosofía
            </span>
            <div className="w-8 h-px bg-clasica-green/40" />
          </div>
        </AnimatedSection>

        {/* Quote — word by word reveal */}
        <div className="mt-12 md:mt-16">
          <blockquote
            className="font-serif leading-[1.08] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
          >
            <WordReveal
              words={quoteWords}
              delay={0.1}
              className="text-his-white/88"
            />
            <br />
            <WordReveal
              words={quoteWords2}
              delay={0.5}
              className="text-clasica-warm/75"
              italic
            />
            {" "}
            <WordReveal
              words={quoteWords3}
              delay={0.78}
              className="text-his-white/88"
            />
          </blockquote>
        </div>

        {/* Divider */}
        <AnimatedSection delay={0.3} className="mt-16 md:mt-20">
          <div className="divider-line-clasica max-w-sm" />
        </AnimatedSection>

        {/* Body copy + Stats — asymmetric grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Copy — spans 3 cols */}
          <AnimatedSection delay={0.35} className="lg:col-span-3">
            <p className="font-sans text-[14.5px] text-his-white/45 leading-[1.95] max-w-lg">
              En HIS Barbería entendemos que la imagen no es vanidad — es identidad.
              Cada visita es un ritual. Cada corte, una decisión. Cada espacio, una
              expresión distinta del mismo nivel de exigencia.
            </p>
            <p className="font-sans text-[14.5px] text-his-white/45 leading-[1.95] max-w-lg mt-5">
              Classic y Urban comparten los mismos valores de fondo: precisión,
              calidad, atención absoluta. Pero cada uno habla su propio lenguaje.
              Encuentra el tuyo.
            </p>
          </AnimatedSection>

          {/* Stats — spans 2 cols */}
          <AnimatedSection delay={0.5} className="lg:col-span-2">
            <div className="flex flex-col gap-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 pb-8 border-b border-his-white/6 last:border-0 last:pb-0"
                >
                  <span
                    className="font-serif text-his-white/75 leading-none"
                    style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-sans text-[9.5px] tracking-[0.28em] uppercase text-his-white/28 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
