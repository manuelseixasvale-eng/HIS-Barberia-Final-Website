"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TEAM_MEMBERS } from "@/lib/constants";
import { TEAM_PHOTOS } from "@/lib/photos";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Team() {
  const clasicaMembers = TEAM_MEMBERS.filter((m) => m.location === "Classic");
  const urbanMembers = TEAM_MEMBERS.filter((m) => m.location === "Urban");

  return (
    <section id="equipo" className="relative section-pad bg-his-black overflow-hidden">
      <div className="divider-line" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-2">

        {/* Header */}
        <AnimatedSection className="mb-14 md:mb-18">
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/25">
            El Equipo
          </span>
          <h2
            className="font-serif text-his-white leading-tight tracking-[-0.02em] mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}
          >
            Los profesionales
            <br />
            <span className="italic text-his-white/38">detrás del detalle.</span>
          </h2>
          <p className="mt-4 font-sans text-[13px] text-his-white/28 max-w-sm leading-relaxed">
            Seleccionados por su técnica, su criterio y su pasión por el oficio.
          </p>
        </AnimatedSection>

        {/* Classic team */}
        <AnimatedSection delay={0.1} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-1 rounded-full bg-clasica-warm/50" />
            <span className="font-sans text-[8.5px] tracking-[0.45em] uppercase text-clasica-warm/50">
              Classic
            </span>
            <div className="flex-1 h-px bg-clasica-green/18" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {clasicaMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i + 1} variant="clasica" delay={i * 0.08} photo={TEAM_PHOTOS[i]} />
            ))}
          </div>
        </AnimatedSection>

        {/* Urban team */}
        <AnimatedSection delay={0.12}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-1 bg-urban-silver/40" />
            <span className="font-sans text-[8.5px] tracking-[0.45em] uppercase text-urban-silver/40">
              Urban
            </span>
            <div className="flex-1 h-px bg-urban-charcoal/70" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {urbanMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i + 1} variant="urban" delay={i * 0.08} photo={TEAM_PHOTOS[3 + i]} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

interface TeamCardProps {
  member: (typeof TEAM_MEMBERS)[number];
  index: number;
  delay: number;
  variant: "clasica" | "urban";
  photo: string;
}

function TeamCard({ member, index, delay, variant, photo }: TeamCardProps) {
  const isClasica = variant === "clasica";
  const numStr = String(index).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, delay, ease }}
      className="group relative overflow-hidden"
    >
      {/* Portrait area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>

        {/* Photo */}
        <Image
          src={photo}
          alt={member.name}
          fill
          className="transition-transform duration-700 group-hover:scale-[1.04]"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            filter: "saturate(0.35)",
          }}
        />

        {/* Brand gradient — bottom only, face stays visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isClasica
              ? "linear-gradient(to top, rgba(26,46,34,0.95) 0%, rgba(26,46,34,0.5) 38%, transparent 65%)"
              : "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 38%, transparent 65%)",
          }}
        />

        {/* Pattern overlay */}
        {isClasica ? (
          /* Classic: concentric rings ornament */
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 70%, rgba(200,191,168,0) 30%, rgba(200,191,168,0.06) 31%, rgba(200,191,168,0) 32%),
                radial-gradient(circle at 50% 70%, rgba(200,191,168,0) 42%, rgba(200,191,168,0.04) 43%, rgba(200,191,168,0) 44%),
                radial-gradient(circle at 50% 70%, rgba(200,191,168,0) 55%, rgba(200,191,168,0.03) 56%, rgba(200,191,168,0) 57%)
              `,
            }}
          />
        ) : (
          /* Urban: diagonal grid */
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(184,184,184,0.04) 20px,
                  rgba(184,184,184,0.04) 21px
                )
              `,
            }}
          />
        )}

        {/* Warm/cool top vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: isClasica
              ? "radial-gradient(ellipse at 50% 0%, rgba(200,191,168,0.08) 0%, transparent 60%)"
              : "radial-gradient(ellipse at 50% 0%, rgba(184,184,184,0.05) 0%, transparent 60%)",
          }}
        />

        {/* Large number — bottom right */}
        <div
          className="absolute bottom-2 right-3 font-serif select-none pointer-events-none leading-none"
          style={{
            fontSize: "clamp(5rem, 10vw, 7rem)",
            color: isClasica ? "rgba(200,191,168,0.10)" : "rgba(184,184,184,0.08)",
            fontStyle: "italic",
          }}
          aria-hidden
        >
          {numStr}
        </div>

        {/* Hover slide-up overlay */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <motion.div
            initial={false}
            className={`
              p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500
              ${isClasica
                ? "bg-gradient-to-t from-clasica-green-deep/95 to-transparent"
                : "bg-gradient-to-t from-his-black/95 to-transparent"
              }
            `}
            style={{ paddingTop: "3rem" }}
          >
            <h4 className="font-serif text-lg text-his-white leading-tight">
              {member.name}
            </h4>
            <p className={`font-sans text-[9px] tracking-[0.25em] uppercase mt-0.5 ${
              isClasica ? "text-clasica-warm/60" : "text-urban-silver/50"
            }`}>
              {member.role}
            </p>
            <p className="font-sans text-[10.5px] text-his-white/42 mt-2 leading-relaxed">
              {member.specialty}
            </p>
          </motion.div>
        </div>

        {/* Hover overlay tint */}
        <div className="absolute inset-0 bg-his-black/0 group-hover:bg-his-black/10 transition-all duration-500 pointer-events-none" />
      </div>

      {/* Card info footer — shows by default */}
      <div
        className={`p-4 border border-t-0 transition-all duration-400 ${
          isClasica
            ? "border-clasica-green/18"
            : "border-his-white/5"
        }`}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className={`font-serif text-[1.05rem] text-his-white/80 group-hover:${isClasica ? "text-clasica-warm" : "text-urban-silver"} transition-colors duration-300`}>
              {member.name}
            </h4>
            <p className={`font-sans text-[9px] tracking-[0.22em] uppercase mt-0.5 ${
              isClasica ? "text-clasica-warm/45" : "text-urban-silver/38"
            }`}>
              {member.role}
            </p>
          </div>
          <span
            className={`font-sans text-[8px] tracking-[0.2em] uppercase self-start mt-0.5 opacity-50 ${
              isClasica ? "text-clasica-warm" : "text-urban-silver"
            }`}
          >
            {numStr}
          </span>
        </div>
        <p className="font-sans text-[10.5px] text-his-white/22 mt-2 leading-relaxed">
          {member.specialty}
        </p>
      </div>
    </motion.div>
  );
}
