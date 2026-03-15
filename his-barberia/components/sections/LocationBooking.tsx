"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BOOKSY_CLASICA, BOOKSY_URBAN } from "@/lib/constants";


interface LocationBookingProps {
  brand: "clasica" | "urban";
}

export default function LocationBooking({ brand }: LocationBookingProps) {
  const isClasica = brand === "clasica";
  const booksy = isClasica ? BOOKSY_CLASICA : BOOKSY_URBAN;

  return (
    <section
      id="reservas"
      className="relative section-pad overflow-hidden"
      style={{
        background: isClasica
          ? "linear-gradient(160deg, #0A0A0A 0%, #0c140f 50%, #0A0A0A 100%)"
          : "linear-gradient(160deg, #0A0A0A 0%, #0f0f0f 50%, #0A0A0A 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isClasica
            ? "radial-gradient(ellipse at 50% 50%, rgba(45,74,62,0.18) 0%, transparent 55%)"
            : "radial-gradient(ellipse at 50% 50%, rgba(184,184,184,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">

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
            <span
              className="italic"
              style={{ color: isClasica ? "rgba(200,191,168,0.65)" : "rgba(184,184,184,0.5)" }}
            >
              en dos clics.
            </span>
          </h2>
          <p className="mt-6 font-sans text-[13.5px] text-his-white/38 max-w-sm mx-auto leading-relaxed">
            Reserva directamente con el profesional de {isClasica ? "Clásica" : "Urban"} que prefieras.
          </p>
        </AnimatedSection>

        {/* Single booking card */}
        <AnimatedSection delay={0.18} className="mt-14">
          <motion.div
            className="relative overflow-hidden mx-auto max-w-md text-left"
            style={{
              background: isClasica
                ? "linear-gradient(150deg, #1a2c1f, #2D4A3E)"
                : "linear-gradient(150deg, #111111, #1A1A1A)",
              border: `1px solid ${isClasica ? "rgba(200,191,168,0.3)" : "rgba(184,184,184,0.2)"}`,
            }}
          >
            {/* Texture */}
            <div className={`absolute inset-0 ${isClasica ? "texture-linen opacity-40" : "texture-urban opacity-50"}`} />

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: isClasica
                  ? "linear-gradient(90deg, transparent, rgba(200,191,168,0.5), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(184,184,184,0.3), transparent)",
              }}
            />

            <div className="relative z-10 p-8 flex flex-col gap-5">
              <div>
                {isClasica ? (
                  <h3
                    className="font-serif leading-none"
                    style={{ fontSize: "1.8rem", color: "#C8BFA8" }}
                  >
                    Clásica
                  </h3>
                ) : (
                  <h3
                    className="font-sans font-light leading-none uppercase tracking-[-0.02em]"
                    style={{ fontSize: "1.8rem", color: "#B8B8B8" }}
                  >
                    Urban
                  </h3>
                )}
                <p
                  className="font-sans text-[9px] tracking-[0.28em] uppercase mt-2"
                  style={{ color: isClasica ? "rgba(200,191,168,0.45)" : "rgba(184,184,184,0.35)" }}
                >
                  {isClasica ? "Elegancia atemporal · Barbería · Estética" : "Estilo contemporáneo · Barbería · Peluquería"}
                </p>
              </div>

              <div
                className="h-px"
                style={{ background: isClasica ? "rgba(200,191,168,0.15)" : "rgba(184,184,184,0.1)" }}
              />

              <div className="flex flex-col gap-2">
                <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-his-white/22">
                  {isClasica ? "Calle Lagasca, 58" : "Calle San Marcos, 1"} · Madrid
                </span>
                <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-his-white/18">
                  {isClasica ? "Lu–Vi 10:00–20:00 · Sáb 10:00–19:00" : "Lu–Vi 10:00–21:00 · Sáb 10:00–20:00"}
                </span>
              </div>

              <motion.a
                href={booksy}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden flex items-center justify-center gap-4 w-full py-4 font-sans text-[10.5px] tracking-[0.35em] uppercase transition-all duration-400 mt-2"
                style={isClasica
                  ? { background: "rgba(45,74,62,0.8)", color: "#F5F3EF", border: "1px solid rgba(200,191,168,0.25)" }
                  : { border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }
                }
              >
                Reservar cita
                <span className="w-4 h-px bg-current opacity-60 group-hover:w-6 transition-all duration-400" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Ornament */}
        <AnimatedSection delay={0.35} className="mt-16">
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
