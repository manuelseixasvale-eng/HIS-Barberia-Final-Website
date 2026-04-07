"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CLASICA_INTERIOR, URBAN_INTERIOR, OVERLAY_URBAN } from "@/lib/photos";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface LocationHeroProps {
  brand: "clasica" | "urban";
}

export default function LocationHero({ brand }: LocationHeroProps) {
  const isClasica = brand === "clasica";

  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{
        minHeight: "72vh",
        background: isClasica
          ? "linear-gradient(160deg, #0d1a12 0%, #2D4A3E 60%, #1E3329 100%)"
          : "linear-gradient(160deg, #0A0A0A 0%, #111111 60%, #0A0A0A 100%)",
      }}
    >
      {/* Photo panel — both brands, desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease }}
        className="absolute inset-y-0 right-0 hidden md:block overflow-hidden"
        style={{ width: "60%" }}
      >
        <Image
          src={isClasica ? CLASICA_INTERIOR : URBAN_INTERIOR}
          alt={isClasica ? "HIS Barbería Classic interior" : "HIS Barbería Urban"}
          fill
          style={{ objectFit: "cover", objectPosition: isClasica ? "85% 35%" : "65% 45%" }}
          priority
        />
        {/* Brand tint over photo */}
        <div
          className="absolute inset-0"
          style={{ background: isClasica ? "rgba(45,74,62,0.15)" : OVERLAY_URBAN }}
        />
      </motion.div>

      {/* Bleed gradient — both brands, desktop only */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none hidden md:block"
        style={{
          left: "20%",
          right: 0,
          background: isClasica
            ? "linear-gradient(to right, rgba(30,51,41,1.00) 0%, rgba(30,51,41,0.92) 22%, rgba(30,51,41,0.60) 48%, rgba(30,51,41,0.18) 74%, rgba(30,51,41,0.00) 100%)"
            : "linear-gradient(to right, rgba(10,10,10,1.00) 0%, rgba(10,10,10,0.92) 22%, rgba(10,10,10,0.60) 48%, rgba(10,10,10,0.18) 74%, rgba(10,10,10,0.00) 100%)",
        }}
      />

      {/* Texture overlay */}
      <div
        className={`absolute inset-0 pointer-events-none ${isClasica ? "texture-linen opacity-50" : "texture-urban opacity-40"}`}
      />

      {/* Ambient top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isClasica
            ? "radial-gradient(ellipse at 50% 0%, rgba(200,191,168,0.08) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(184,184,184,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Large watermark letter */}
      <div
        className="absolute pointer-events-none select-none leading-none"
        style={{
          bottom: "-4rem",
          ...(isClasica ? { left: "-2rem" } : { right: "-1rem" }),
          fontSize: "clamp(16rem, 30vw, 28rem)",
          fontFamily: isClasica ? "var(--font-cormorant)" : "var(--font-inter)",
          fontWeight: isClasica ? 400 : 200,
          fontStyle: isClasica ? "italic" : "normal",
          textTransform: isClasica ? "none" : "uppercase",
          color: isClasica ? "rgba(200,191,168,0.06)" : "rgba(184,184,184,0.04)",
          letterSpacing: isClasica ? "0" : "-0.04em",
        }}
        aria-hidden
      >
        {isClasica ? "C" : "U"}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[72vh] max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">

        {/* Top breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="flex items-center gap-3 pt-[108px]"
        >
          <a
            href="/"
            className="font-sans text-[8.5px] tracking-[0.38em] uppercase text-his-white/30 hover:text-his-white/60 transition-colors duration-300"
          >
            HIS
          </a>
          <span className="text-his-white/18 text-xs">→</span>
          <span
            className="font-sans text-[8.5px] tracking-[0.38em] uppercase"
            style={{ color: isClasica ? "rgba(200,191,168,0.55)" : "rgba(184,184,184,0.45)" }}
          >
            {isClasica ? "Classic" : "Urban"}
          </span>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col gap-6 pb-16">

          {/* Brand name */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease }}
              style={{
                fontSize: "clamp(4.5rem, 13vw, 12rem)",
                lineHeight: 0.88,
                letterSpacing: isClasica ? "-0.02em" : "-0.04em",
                fontFamily: isClasica ? "var(--font-cormorant)" : "var(--font-inter)",
                fontWeight: isClasica ? 400 : 200,
                fontStyle: isClasica ? "italic" : "normal",
                textTransform: isClasica ? "none" : "uppercase",
                color: isClasica ? "#C8BFA8" : "#B8B8B8",
              }}
            >
              {isClasica ? "Classic" : "Urban"}
            </motion.h1>
          </div>

          {/* Tagline + divider */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="flex items-center gap-5"
          >
            <div
              className="w-8 h-px"
              style={{ background: isClasica ? "rgba(200,191,168,0.15)" : "rgba(184,184,184,0.15)" }}
            />
            <span
              className="font-sans text-[9.5px] tracking-[0.32em] uppercase"
              style={{ color: isClasica ? "rgba(200,191,168,0.5)" : "rgba(184,184,184,0.4)" }}
            >
              {isClasica ? "Barbería · Estética · Madrid" : "Barbería · Peluquería · Madrid"}
            </span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, ease }}
            className="flex items-center gap-3 mt-4"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-start gap-2"
            >
              <div
                className="w-px h-8"
                style={{
                  background: isClasica
                    ? "linear-gradient(to bottom, rgba(200,191,168,0.3), transparent)"
                    : "linear-gradient(to bottom, rgba(184,184,184,0.2), transparent)",
                }}
              />
              <span className="font-sans text-[7px] tracking-[0.45em] uppercase text-his-white/20">
                Scroll
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
