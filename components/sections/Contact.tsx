"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { BOOKSY_CLASICA, BOOKSY_URBAN } from "@/lib/constants";

const locations = [
  {
    id: "clasica",
    name: "Clásica",
    nameSans: false,
    tagline: "Elegancia atemporal",
    address: "C/ Ejemplo 12",
    district: "Salamanca · Retiro",
    city: "Madrid",
    hours: [
      { days: "Lu — Vi", time: "10:00 – 20:00" },
      { days: "Sábado", time: "10:00 – 19:00" },
      { days: "Domingo", time: "Cerrado" },
    ],
    phone: "+34 600 000 001",
    instagram: "@hisbarberia.clasica",
    booksy: BOOKSY_CLASICA,
    variant: "clasica" as const,
  },
  {
    id: "urban",
    name: "Urban",
    nameSans: true,
    tagline: "Estilo contemporáneo",
    address: "C/ Ejemplo 45",
    district: "Malasaña · Chamberí",
    city: "Madrid",
    hours: [
      { days: "Lu — Vi", time: "10:00 – 21:00" },
      { days: "Sábado", time: "10:00 – 20:00" },
      { days: "Domingo", time: "Cerrado" },
    ],
    phone: "+34 600 000 002",
    instagram: "@hisbarberia.urban",
    booksy: BOOKSY_URBAN,
    variant: "urban" as const,
  },
];

export default function Contact() {
  return (
    <>
      <section
        id="contacto"
        className="relative section-pad overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0A0A0A 0%, #0a0d0b 100%)",
        }}
      >
        {/* Subtle green ambient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 20% 60%, rgba(45,74,62,0.07) 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Header */}
          <AnimatedSection className="mb-14 md:mb-18">
            <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/25">
              Contacto y Ubicaciones
            </span>
            <h2
              className="font-serif text-his-white leading-tight tracking-[-0.02em] mt-4"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}
            >
              Encuéntranos.
              <br />
              <span className="italic text-his-white/38">Te esperamos.</span>
            </h2>
          </AnimatedSection>

          {/* Location cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.id} delay={i * 0.12}>
                <LocationCard location={loc} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width contact strip */}
      <ContactStrip />
    </>
  );
}

function LocationCard({ location }: { location: (typeof locations)[number] }) {
  const isClasica = location.variant === "clasica";

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: isClasica
          ? "linear-gradient(145deg, #0d1611 0%, #111e17 100%)"
          : "linear-gradient(145deg, #0d0d0d 0%, #111111 100%)",
        border: `1px solid ${isClasica ? "rgba(45,74,62,0.25)" : "rgba(255,255,255,0.055)"}`,
      }}
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: isClasica
            ? "linear-gradient(90deg, transparent, rgba(45,74,62,0.6), rgba(200,191,168,0.3), transparent)"
            : "linear-gradient(90deg, transparent, rgba(184,184,184,0.15), transparent)",
        }}
      />

      {/* Clásica: linen background texture */}
      {isClasica && <div className="absolute inset-0 texture-linen opacity-40" />}

      {/* Urban: sharp mid-line accent */}
      {!isClasica && (
        <div
          className="absolute left-8 right-8 top-[45%] h-px"
          style={{ background: "rgba(184,184,184,0.05)" }}
        />
      )}

      {/* Brand watermark */}
      <div
        className="absolute bottom-4 right-6 font-serif select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(5rem, 9vw, 7.5rem)",
          color: isClasica ? "rgba(45,74,62,0.14)" : "rgba(184,184,184,0.05)",
          fontStyle: isClasica ? "italic" : "normal",
          fontFamily: isClasica ? "var(--font-cormorant)" : "var(--font-inter)",
          fontWeight: isClasica ? 400 : 300,
          textTransform: isClasica ? "none" : "uppercase",
          letterSpacing: isClasica ? "0" : "-0.04em",
        }}
        aria-hidden
      >
        {location.name}
      </div>

      <div className="relative z-10 p-8 md:p-10">

        {/* Header row */}
        <div className="flex items-start justify-between mb-8">
          <div>
            {isClasica ? (
              <h3 className="font-serif text-[1.9rem] text-clasica-warm leading-none">
                {location.name}
              </h3>
            ) : (
              <h3 className="font-sans font-light text-[1.9rem] text-urban-accent leading-none uppercase tracking-[-0.02em]">
                {location.name}
              </h3>
            )}
            <p
              className={`font-sans text-[9px] tracking-[0.28em] uppercase mt-1.5 ${
                isClasica ? "text-clasica-warm/40" : "text-urban-silver/32"
              }`}
            >
              {location.tagline}
            </p>
          </div>
          <span className="font-sans text-[7.5px] tracking-[0.38em] uppercase text-his-white/12">
            HIS
          </span>
        </div>

        {/* Info grid: 2 cols */}
        <div className="grid grid-cols-2 gap-6 mb-7">

          {/* Address */}
          <div>
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-his-white/22 block mb-2">
              Dirección
            </span>
            <p className="font-sans text-[12.5px] text-his-white/58 leading-snug">
              {location.address}
            </p>
            <p className="font-sans text-[11px] text-his-white/28 mt-0.5">
              {location.district}
            </p>
          </div>

          {/* Contact */}
          <div>
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-his-white/22 block mb-2">
              Contacto
            </span>
            <a
              href={`tel:${location.phone.replace(/\s/g, "")}`}
              className="font-sans text-[12px] text-his-white/50 hover:text-his-white transition-colors block leading-snug"
            >
              {location.phone}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-sans text-[11px] mt-0.5 transition-colors block ${
                isClasica
                  ? "text-clasica-warm/45 hover:text-clasica-warm"
                  : "text-urban-silver/38 hover:text-urban-silver"
              }`}
            >
              {location.instagram}
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="mb-7">
          <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-his-white/22 block mb-3">
            Horario
          </span>
          <div className="flex flex-col gap-1.5">
            {location.hours.map((h) => (
              <div key={h.days} className="flex items-center justify-between">
                <span className="font-sans text-[11.5px] text-his-white/38">
                  {h.days}
                </span>
                <span
                  className={`font-sans text-[11px] ${
                    h.time === "Cerrado"
                      ? "text-his-white/18"
                      : isClasica
                      ? "text-clasica-warm/55"
                      : "text-urban-silver/45"
                  }`}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Schematic map */}
        <div className="relative overflow-hidden mb-6" style={{ height: "140px" }}>
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background: isClasica
                ? "linear-gradient(135deg, #0a1410 0%, #112019 100%)"
                : "linear-gradient(135deg, #0a0a0a 0%, #141414 100%)",
            }}
          />

          {/* City block schematic — CSS drawn */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 140"
            preserveAspectRatio="xMidYMid slice"
          >
            <g stroke={isClasica ? "#2D4A3E" : "#333333"} strokeWidth="1" fill="none">
              {/* City block grid */}
              <rect x="10" y="10" width="60" height="30" />
              <rect x="80" y="10" width="40" height="50" />
              <rect x="130" y="10" width="70" height="25" />
              <rect x="210" y="10" width="80" height="45" />
              <rect x="10" y="55" width="30" height="70" />
              <rect x="50" y="65" width="55" height="60" />
              <rect x="130" y="50" width="40" height="35" />
              <rect x="180" y="65" width="110" height="60" />
              <rect x="10" y="140" width="280" height="0" />
              {/* Roads */}
              <line x1="0" y1="47" x2="300" y2="47" strokeOpacity="0.5" />
              <line x1="120" y1="0" x2="120" y2="140" strokeOpacity="0.5" />
            </g>
          </svg>

          {/* Location pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    isClasica
                      ? "bg-clasica-warm border-clasica-warm"
                      : "bg-urban-silver border-urban-silver"
                  }`}
                />
                <div
                  className={`absolute inset-0 rounded-full animate-ping opacity-35 ${
                    isClasica ? "bg-clasica-warm" : "bg-urban-silver"
                  }`}
                />
              </div>
              <div
                className={`mt-1 w-px h-3 ${
                  isClasica ? "bg-clasica-warm/40" : "bg-urban-silver/35"
                }`}
              />
            </div>
          </div>

          {/* Address label */}
          <div className="absolute bottom-2.5 left-3">
            <span className="font-sans text-[7.5px] tracking-[0.22em] uppercase text-his-white/28">
              {location.address} · {location.city}
            </span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={location.booksy}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group flex items-center justify-center gap-4 w-full py-4
            font-sans text-[9.5px] tracking-[0.3em] uppercase
            transition-all duration-400
            ${isClasica
              ? "bg-clasica-green text-his-white hover:bg-clasica-green-light"
              : "border border-his-white/10 text-his-white/55 hover:border-his-white/30 hover:text-his-white"
            }
          `}
        >
          Reservar en {location.name}
          <span className="w-4 h-px bg-current opacity-50 group-hover:w-6 transition-all duration-400" />
        </a>
      </div>
    </div>
  );
}

function ContactStrip() {
  return (
    <div
      className="relative overflow-hidden py-16 md:py-20 border-t"
      style={{
        background: "linear-gradient(90deg, #0d1611 0%, #0A0A0A 50%, #0d0d0d 100%)",
        borderColor: "rgba(45,74,62,0.2)",
      }}
    >
      {/* Left split */}
      <div
        className="absolute top-0 bottom-0 left-0 w-1/2"
        style={{ background: "rgba(45,74,62,0.04)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          <div className="flex flex-col gap-2">
            <h3
              className="font-serif text-his-white/80 leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
            >
              ¿Tienes alguna pregunta?
            </h3>
            <p className="font-sans text-[12px] text-his-white/30 leading-relaxed max-w-sm">
              Escríbenos directamente. Te respondemos a la mayor brevedad.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <a
              href="mailto:hola@hisbarberia.es"
              className="group font-serif text-[clamp(1.1rem,2.5vw,1.9rem)] text-his-white/60 hover:text-his-white transition-colors duration-400 flex items-center gap-4"
            >
              hola@hisbarberia.es
              <span className="w-6 h-px bg-his-white/25 group-hover:w-10 transition-all duration-500 hidden md:block" />
            </a>
            <div className="flex gap-5">
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-clasica-warm/40">
                Clásica: +34 600 000 001
              </span>
              <span className="text-his-white/10">·</span>
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-urban-silver/32">
                Urban: +34 600 000 002
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
