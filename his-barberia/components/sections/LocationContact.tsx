"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { BOOKSY_CLASICA, BOOKSY_URBAN } from "@/lib/constants";

interface LocationContactProps {
  brand: "clasica" | "urban";
}

const locationData = {
  clasica: {
    name: "Clásica",
    tagline: "Elegancia atemporal",
    address: "Calle Lagasca, 58",
    district: "Salamanca · Retiro",
    city: "Madrid",
    hours: [
      { days: "Lu — Vi", time: "10:00 – 20:00" },
      { days: "Sábado", time: "10:00 – 19:00" },
      { days: "Domingo", time: "Cerrado" },
    ],
    phone: "+34 600 000 001",
    instagram: "@hisbarberia.clasica",
  },
  urban: {
    name: "Urban",
    tagline: "Estilo contemporáneo",
    address: "Calle San Marcos, 1",
    district: "Malasaña · Chamberí",
    city: "Madrid",
    hours: [
      { days: "Lu — Vi", time: "10:00 – 21:00" },
      { days: "Sábado", time: "10:00 – 20:00" },
      { days: "Domingo", time: "Cerrado" },
    ],
    phone: "+34 600 000 002",
    instagram: "@hisbarberia.urban",
  },
};

export default function LocationContact({ brand }: LocationContactProps) {
  const isClasica = brand === "clasica";
  const loc = locationData[brand];
  const booksy = isClasica ? BOOKSY_CLASICA : BOOKSY_URBAN;

  return (
    <section
      id="contacto"
      className="relative section-pad overflow-hidden"
      style={{
        background: isClasica
          ? "linear-gradient(180deg, #0A0A0A 0%, #0a0d0b 100%)"
          : "linear-gradient(180deg, #0A0A0A 0%, #0a0a0a 100%)",
      }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isClasica
            ? "radial-gradient(ellipse at 20% 60%, rgba(45,74,62,0.07) 0%, transparent 55%)"
            : "radial-gradient(ellipse at 80% 40%, rgba(184,184,184,0.03) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/25">
            Contacto
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

        {/* Single location card — full width */}
        <AnimatedSection delay={0.1}>
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
            {isClasica && <div className="absolute inset-0 texture-linen opacity-40" />}

            {/* Watermark */}
            <div
              className="absolute bottom-4 right-8 font-serif select-none pointer-events-none leading-none"
              style={{
                fontSize: "clamp(6rem, 12vw, 10rem)",
                color: isClasica ? "rgba(45,74,62,0.14)" : "rgba(184,184,184,0.05)",
                fontStyle: isClasica ? "italic" : "normal",
                fontFamily: isClasica ? "var(--font-cormorant)" : "var(--font-inter)",
                fontWeight: isClasica ? 400 : 300,
                textTransform: isClasica ? "none" : "uppercase",
                letterSpacing: isClasica ? "0" : "-0.04em",
              }}
              aria-hidden
            >
              {loc.name}
            </div>

            <div className="relative z-10 p-8 md:p-12">

              {/* Header row */}
              <div className="flex items-start justify-between mb-10">
                <div>
                  {isClasica ? (
                    <h3 className="font-serif text-[2rem] leading-none" style={{ color: "#C8BFA8" }}>
                      {loc.name}
                    </h3>
                  ) : (
                    <h3 className="font-sans font-light text-[2rem] leading-none uppercase tracking-[-0.02em]" style={{ color: "#E8E8E8" }}>
                      {loc.name}
                    </h3>
                  )}
                  <p
                    className="font-sans text-[9px] tracking-[0.28em] uppercase mt-1.5"
                    style={{ color: isClasica ? "rgba(200,191,168,0.4)" : "rgba(184,184,184,0.32)" }}
                  >
                    {loc.tagline}
                  </p>
                </div>
                <span className="font-sans text-[7.5px] tracking-[0.38em] uppercase text-his-white/12">HIS</span>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

                {/* Address */}
                <div>
                  <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-his-white/22 block mb-2">
                    Dirección
                  </span>
                  <p className="font-sans text-[12.5px] text-his-white/58 leading-snug">
                    {loc.address}
                  </p>
                  <p className="font-sans text-[11px] text-his-white/28 mt-0.5">
                    {loc.district}
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-his-white/22 block mb-2">
                    Contacto
                  </span>
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="font-sans text-[12px] text-his-white/50 hover:text-his-white transition-colors block leading-snug"
                  >
                    {loc.phone}
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[11px] mt-0.5 transition-colors block"
                    style={{ color: isClasica ? "rgba(200,191,168,0.45)" : "rgba(184,184,184,0.38)" }}
                  >
                    {loc.instagram}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-his-white/22 block mb-2">
                    Horario
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {loc.hours.map((h) => (
                      <div key={h.days} className="flex items-center justify-between gap-4">
                        <span className="font-sans text-[11.5px] text-his-white/38">
                          {h.days}
                        </span>
                        <span
                          className="font-sans text-[11px]"
                          style={{
                            color: h.time === "Cerrado"
                              ? "rgba(255,255,255,0.18)"
                              : isClasica
                              ? "rgba(200,191,168,0.55)"
                              : "rgba(184,184,184,0.45)",
                          }}
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Schematic map */}
              <div className="relative overflow-hidden mb-8" style={{ height: "140px" }}>
                <div
                  className="absolute inset-0"
                  style={{
                    background: isClasica
                      ? "linear-gradient(135deg, #0a1410 0%, #112019 100%)"
                      : "linear-gradient(135deg, #0a0a0a 0%, #141414 100%)",
                  }}
                />
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 140"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <g stroke={isClasica ? "#2D4A3E" : "#333333"} strokeWidth="1" fill="none">
                    <rect x="10" y="10" width="60" height="30" />
                    <rect x="80" y="10" width="40" height="50" />
                    <rect x="130" y="10" width="70" height="25" />
                    <rect x="210" y="10" width="80" height="45" />
                    <rect x="10" y="55" width="30" height="70" />
                    <rect x="50" y="65" width="55" height="60" />
                    <rect x="130" y="50" width="40" height="35" />
                    <rect x="180" y="65" width="110" height="60" />
                    <line x1="0" y1="47" x2="300" y2="47" strokeOpacity="0.5" />
                    <line x1="120" y1="0" x2="120" y2="140" strokeOpacity="0.5" />
                  </g>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex flex-col items-center">
                    <div className="relative">
                      <div
                        className="w-3 h-3 rounded-full border-2"
                        style={{
                          background: isClasica ? "#C8BFA8" : "#B8B8B8",
                          borderColor: isClasica ? "#C8BFA8" : "#B8B8B8",
                        }}
                      />
                      <div
                        className="absolute inset-0 rounded-full animate-ping opacity-35"
                        style={{ background: isClasica ? "#C8BFA8" : "#B8B8B8" }}
                      />
                    </div>
                    <div
                      className="mt-1 w-px h-3"
                      style={{ background: isClasica ? "rgba(200,191,168,0.4)" : "rgba(184,184,184,0.35)" }}
                    />
                  </div>
                </div>
                <div className="absolute bottom-2.5 left-3">
                  <span className="font-sans text-[7.5px] tracking-[0.22em] uppercase text-his-white/28">
                    {loc.address} · {loc.city}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 w-full py-4 font-sans text-[9.5px] tracking-[0.3em] uppercase transition-all duration-400"
                style={isClasica
                  ? { background: "#2D4A3E", color: "#F5F3EF" }
                  : { border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)" }
                }
              >
                Reservar en {loc.name}
                <span className="w-4 h-px bg-current opacity-50 group-hover:w-6 transition-all duration-400" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
