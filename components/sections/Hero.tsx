"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BOOKSY_CLASICA, BOOKSY_URBAN } from "@/lib/constants";
import { HERO_CLASICA, HERO_URBAN, OVERLAY_CLASICA, OVERLAY_URBAN } from "@/lib/photos";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex flex-col overflow-hidden">

      {/* ── Background Panels ──────────────────────────────────── */}
      <div className="absolute inset-0 flex flex-col md:flex-row">

        {/* Clásica panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease }}
          className="relative flex-1 overflow-hidden"
        >
          {/* Photo */}
          <Image
            src={HERO_CLASICA}
            alt="HIS Barbería Clásica interior"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          {/* Brand color wash */}
          <div className="absolute inset-0" style={{ background: OVERLAY_CLASICA }} />
          {/* Linen texture */}
          <div className="absolute inset-0 texture-linen opacity-60" />
          {/* Warm vignette bottom-right */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 80% 90%, rgba(200,191,168,0.1) 0%, transparent 55%)",
            }}
          />
          {/* Large watermark C */}
          <div
            className="absolute -bottom-12 -left-8 font-serif leading-none select-none pointer-events-none"
            style={{
              fontSize: "clamp(14rem, 28vw, 26rem)",
              color: "rgba(200,191,168,0.05)",
              fontStyle: "italic",
            }}
            aria-hidden
          >
            C
          </div>
        </motion.div>

        {/* Animated split line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, ease }}
          style={{ originY: 0 }}
          className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 z-10 pointer-events-none"
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-his-white/18 to-transparent" />
        </motion.div>

        {/* Urban panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.15, ease }}
          className="relative flex-1 overflow-hidden"
        >
          {/* Photo */}
          <Image
            src={HERO_URBAN}
            alt="HIS Barbería Urban interior"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
          {/* Brand color wash */}
          <div className="absolute inset-0" style={{ background: OVERLAY_URBAN }} />
          {/* Extra depth — ensures clear visual separation from Clásica */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.42) 100%)" }}
          />
          {/* Urban diagonal texture */}
          <div className="absolute inset-0 texture-urban opacity-70" />
          {/* Cool vignette top-left */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 20% 10%, rgba(184,184,184,0.06) 0%, transparent 55%)",
            }}
          />
          {/* Large watermark U */}
          <div
            className="absolute -top-8 -right-6 font-sans leading-none select-none pointer-events-none uppercase"
            style={{
              fontSize: "clamp(14rem, 28vw, 26rem)",
              fontWeight: 300,
              color: "rgba(184,184,184,0.04)",
              letterSpacing: "-0.04em",
            }}
            aria-hidden
          >
            U
          </div>
        </motion.div>
      </div>

      {/* ── Main Content Layer ─────────────────────────────────── */}
      <div className="relative z-20 flex flex-col h-full">

        {/* Top center: master brand */}
        <div className="flex justify-center pt-[108px]">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-sans text-[8.5px] tracking-[0.55em] uppercase text-his-white/25">
              Madrid · España
            </span>
          </motion.div>
        </div>

        {/* Center: HIS master brand */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            {/* HIS wordmark */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.4, ease }}
                className="font-serif text-[clamp(5rem,12vw,11rem)] text-his-white leading-[0.88] tracking-[-0.02em]"
              >
                HIS
              </motion.h1>
            </div>

            {/* Barbería sub-label */}
            <div className="overflow-hidden mt-1">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.62, ease }}
                className="block font-sans text-[clamp(0.5rem,1.4vw,0.8rem)] tracking-[0.65em] uppercase text-his-white/40"
              >
                Barbería
              </motion.span>
            </div>

            {/* Tagline */}
            <div className="overflow-hidden mt-7">
              <motion.p
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.85, ease }}
                className="font-serif italic text-[clamp(1rem,2.2vw,1.6rem)] text-his-white/50 text-center leading-snug"
              >
                El arte del detalle.
                <br />
                En dos expresiones.
              </motion.p>
            </div>
          </div>
        </div>

        {/* ── Bottom Split: Clásica left, Urban right ─────────── */}
        <div className="flex w-full">

          {/* Clásica bottom */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease }}
            className="flex-1 flex flex-col justify-end p-7 md:p-10 gap-4"
          >
            {/* Brand identity */}
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-[clamp(1.6rem,3.5vw,2.8rem)] text-clasica-warm/80 leading-none">
                Clásica
              </span>
              <span className="font-sans text-[8.5px] tracking-[0.3em] uppercase text-his-white/30 mt-1">
                Elegancia atemporal
              </span>
              <span className="font-sans text-[8.5px] tracking-[0.22em] uppercase text-his-white/18 mt-0.5">
                Barbería · Estética
              </span>
            </div>

            {/* CTA */}
            <a
              href={BOOKSY_CLASICA}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-sans text-[9.5px] tracking-[0.3em] uppercase text-his-white/50 hover:text-clasica-warm transition-colors duration-400 w-fit"
            >
              <span className="w-5 h-px bg-clasica-warm/40 group-hover:w-8 transition-all duration-400" />
              Reservar cita
            </a>
          </motion.div>

          {/* Center scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7, ease }}
            className="hidden md:flex flex-col items-center justify-end pb-8 px-4"
          >
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-px h-10 bg-gradient-to-b from-his-white/25 to-transparent" />
              <span className="font-sans text-[7px] tracking-[0.45em] uppercase text-his-white/20">
                Scroll
              </span>
            </motion.div>
          </motion.div>

          {/* Urban bottom */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.35, ease }}
            className="flex-1 flex flex-col items-end justify-end p-7 md:p-10 gap-4 text-right"
          >
            {/* Brand identity */}
            <div className="flex flex-col items-end gap-0.5">
              <span className="font-sans font-light text-[clamp(1.6rem,3.5vw,2.8rem)] text-urban-silver/70 leading-none tracking-[-0.03em] uppercase">
                Urban
              </span>
              <span className="font-sans text-[8.5px] tracking-[0.3em] uppercase text-his-white/30 mt-1">
                Estilo contemporáneo
              </span>
              <span className="font-sans text-[8.5px] tracking-[0.22em] uppercase text-his-white/18 mt-0.5">
                Barbería · Peluquería
              </span>
            </div>

            {/* CTA */}
            <a
              href={BOOKSY_URBAN}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-sans text-[9.5px] tracking-[0.3em] uppercase text-his-white/50 hover:text-urban-silver transition-colors duration-400 w-fit"
            >
              Reservar cita
              <span className="w-5 h-px bg-urban-silver/40 group-hover:w-8 transition-all duration-400" />
            </a>
          </motion.div>
        </div>

        {/* Very bottom: location strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9, ease }}
          className="flex justify-center pb-3"
        >
          <span className="font-sans text-[7.5px] tracking-[0.5em] uppercase text-his-white/15">
            Clásica · Urban · Madrid
          </span>
        </motion.div>
      </div>
    </section>
  );
}
