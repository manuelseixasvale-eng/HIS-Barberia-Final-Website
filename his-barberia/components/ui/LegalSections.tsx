"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

export interface LegalSection {
  id: string;
  label: string;
  heading: string;
  paragraphs: string[];
}

interface Accent {
  label: "clasica" | "urban";
  numeralColorIdle: string;
  numeralColorHover: string;
  borderColor: string;
  sliderColor: string;
  headingColorIdle: string;
  headingColorHover: string;
  bg: string;
  bgHover: string;
}

export const CLASICA_ACCENT: Accent = {
  label: "clasica",
  numeralColorIdle:  "rgba(45,74,62,0.55)",
  numeralColorHover: "rgba(61,107,89,0.95)",
  borderColor:       "rgba(45,74,62,0.45)",
  sliderColor:       "linear-gradient(to bottom, #3D6B59, #2D4A3E, rgba(45,74,62,0.2))",
  headingColorIdle:  "#C8BFA8",
  headingColorHover: "#DDD4BE",
  bg:                "rgba(45,74,62,0.06)",
  bgHover:           "rgba(45,74,62,0.11)",
};

export const URBAN_ACCENT: Accent = {
  label: "urban",
  numeralColorIdle:  "rgba(184,184,184,0.28)",
  numeralColorHover: "rgba(232,232,232,0.80)",
  borderColor:       "rgba(184,184,184,0.25)",
  sliderColor:       "linear-gradient(to bottom, #B8B8B8, #888, rgba(184,184,184,0.2))",
  headingColorIdle:  "#E8E8E8",
  headingColorHover: "#F5F3EF",
  bg:                "rgba(184,184,184,0.03)",
  bgHover:           "rgba(184,184,184,0.06)",
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Props {
  sections: LegalSection[];
  accents: Accent[];
}

export default function LegalSections({ sections, accents }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      {sections.map((section, index) => {
        const accent = accents[index % 2];
        const isHovered = hoveredId === section.id;

        return (
          <div key={section.id}>
            {index > 0 && (
              <div
                className="h-px w-full transition-all duration-500"
                style={{
                  background: index % 2 === 1
                    ? "linear-gradient(90deg, rgba(45,74,62,0.55) 0%, rgba(45,74,62,0.15) 40%, transparent 100%)"
                    : "linear-gradient(90deg, rgba(184,184,184,0.30) 0%, rgba(184,184,184,0.08) 40%, transparent 100%)",
                }}
              />
            )}

            <AnimatedSection delay={0.05}>
              <div
                className="relative overflow-hidden cursor-default"
                style={{
                  background: isHovered ? accent.bgHover : accent.bg,
                  transition: "background 0.4s ease",
                }}
                onMouseEnter={() => setHoveredId(section.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Vertical slider — left edge */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] origin-top"
                  animate={{ scaleY: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.5, ease }}
                  style={{ background: accent.sliderColor }}
                />

                <div className="grid grid-cols-1 md:grid-cols-[28fr_72fr] gap-8 md:gap-16 py-12 md:py-16 px-0 md:pl-5">

                  {/* Left: ghost numeral + label */}
                  <div className="flex flex-row md:flex-col items-start gap-4 md:gap-3">
                    <motion.span
                      className="font-serif leading-none select-none shrink-0"
                      animate={{ color: isHovered ? accent.numeralColorHover : accent.numeralColorIdle }}
                      transition={{ duration: 0.4, ease }}
                      style={{ fontSize: "clamp(3.5rem, 5vw, 5rem)", letterSpacing: "-0.03em" }}
                      aria-hidden
                    >
                      {section.id}
                    </motion.span>
                    <SectionLabel color={accent.label} className="mt-2 md:mt-0">
                      {section.label}
                    </SectionLabel>
                  </div>

                  {/* Right: heading + paragraphs */}
                  <div
                    className="flex flex-col gap-5 pl-0 md:pl-6 border-l-0 md:border-l"
                    style={{ borderColor: accent.borderColor }}
                  >
                    <motion.h2
                      className="font-serif leading-tight"
                      animate={{ color: isHovered ? accent.headingColorHover : accent.headingColorIdle }}
                      transition={{ duration: 0.35, ease }}
                      style={{ fontSize: "clamp(1.3rem, 2vw, 1.65rem)" }}
                    >
                      {section.heading}
                    </motion.h2>
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="font-sans font-light text-his-white/48 leading-[1.85]"
                        style={{ fontSize: "13.5px", maxWidth: "65ch" }}
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        );
      })}

      {/* Back link */}
      <div
        className="flex h-px mt-2"
        style={{
          background: "linear-gradient(90deg, rgba(45,74,62,0.4) 0%, rgba(184,184,184,0.15) 50%, transparent 100%)",
        }}
        aria-hidden
      />
      <div className="py-12 md:py-16">
        <Link
          href="/"
          className="group inline-flex items-center gap-4 font-sans text-[10.5px] tracking-[0.28em] uppercase text-his-white/30 hover:text-his-white transition-colors duration-400"
        >
          <span
            className="block h-px transition-all duration-400 group-hover:w-12"
            style={{ width: "2rem", background: "rgba(200,191,168,0.45)" }}
            aria-hidden
          />
          Volver al inicio
        </Link>
      </div>
    </>
  );
}
