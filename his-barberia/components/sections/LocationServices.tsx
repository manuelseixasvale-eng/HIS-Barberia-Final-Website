"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { CLASICA_SERVICES, URBAN_SERVICES, BOOKSY_CLASICA, BOOKSY_URBAN } from "@/lib/constants";

const FEATURED: Record<string, boolean> = {
  "Corte + Barba": true,
  "Ritual completo": true,
  "Degradado": true,
  "Coloración": true,
};

interface LocationServicesProps {
  brand: "clasica" | "urban";
}

export default function LocationServices({ brand }: LocationServicesProps) {
  const isClasica = brand === "clasica";
  const services = isClasica ? CLASICA_SERVICES : URBAN_SERVICES;
  const booksy = isClasica ? BOOKSY_CLASICA : BOOKSY_URBAN;

  return (
    <section
      id="precios"
      className="relative section-pad overflow-hidden"
      style={{
        background: isClasica
          ? "linear-gradient(180deg, #080e0a 0%, #0c1810 50%, #080e0a 100%)"
          : "linear-gradient(180deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isClasica
            ? "radial-gradient(ellipse at 5% 40%, rgba(45,74,62,0.20) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 95% 40%, rgba(184,184,184,0.09) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-his-white/25">
            Precios
          </span>
          <h2
            className="font-serif text-his-white leading-tight tracking-[-0.02em] mt-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}
          >
            Nuestros servicios.
            <br />
            <span className="italic" style={{ color: isClasica ? "rgba(200,191,168,0.45)" : "rgba(184,184,184,0.38)" }}>
              Sin sorpresas.
            </span>
          </h2>
        </AnimatedSection>

        {/* Service categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {services.map((group, gi) => (
            <AnimatedSection key={gi} delay={gi * 0.1}>
              <div className="flex flex-col">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-1 pb-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <span
                    className="font-sans text-[8.5px] tracking-[0.45em] uppercase"
                    style={{ color: isClasica ? "rgba(200,191,168,0.55)" : "rgba(184,184,184,0.45)" }}
                  >
                    0{gi + 1} — {group.category}
                  </span>
                  <span className="font-sans text-[8px] text-his-white/20 ml-auto">
                    {group.items.length} servicios
                  </span>
                </div>

                {/* Service rows */}
                <div className="flex flex-col">
                  {group.items.map((item, ii) => {
                    const isFeatured = Boolean(FEATURED[item.name]);
                    return (
                      <div
                        key={ii}
                        className="group/row relative flex items-start justify-between py-[18px] border-b transition-all duration-300 gap-5 pl-3"
                        style={{ borderColor: "rgba(255,255,255,0.05)" }}
                      >
                        {/* Left accent bar — slides in on hover */}
                        <div
                          className="absolute left-0 top-3 bottom-3 w-[2px] origin-top scale-y-0 group-hover/row:scale-y-100 transition-transform duration-300"
                          style={{
                            background: isClasica
                              ? "rgba(200,191,168,0.6)"
                              : "rgba(184,184,184,0.45)",
                          }}
                        />

                        {/* Subtle background wash on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            background: isClasica
                              ? "linear-gradient(90deg, rgba(45,74,62,0.08) 0%, transparent 60%)"
                              : "linear-gradient(90deg, rgba(184,184,184,0.04) 0%, transparent 60%)",
                          }}
                        />

                        <div className="relative flex flex-col gap-1 flex-1">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="font-serif text-[1.12rem] text-his-white/75 group-hover/row:text-his-white transition-colors duration-300">
                              {item.name}
                            </span>
                            {isFeatured && (
                              <span
                                className={`font-serif italic text-[9.5px] transition-colors duration-300 ${
                                  isClasica
                                    ? "text-clasica-warm/50 group-hover/row:text-clasica-warm/80"
                                    : "text-urban-silver/40 group-hover/row:text-urban-silver/70"
                                }`}
                              >
                                — más solicitado
                              </span>
                            )}
                          </div>
                          <span className="font-sans text-[10.5px] text-his-white/28 group-hover/row:text-his-white/58 leading-relaxed transition-colors duration-300">
                            {item.description}
                          </span>
                        </div>

                        <span
                          className={`relative font-sans text-[11px] tracking-[0.08em] whitespace-nowrap mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                            isClasica
                              ? "text-clasica-warm/55 group-hover/row:text-clasica-warm/95"
                              : "text-urban-silver/45 group-hover/row:text-urban-silver/85"
                          }`}
                        >
                          {item.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.2} className="mt-14">
          <div className="pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="font-sans text-[11px] text-his-white/22 max-w-sm leading-relaxed">
              Los precios son orientativos. Disponibilidad y tarifas exactas en Booksy.
            </p>
            <a
              href={booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-4 font-sans text-[10px] tracking-[0.3em] uppercase transition-all duration-400"
              style={isClasica
                ? { background: "#2D4A3E", color: "#F5F3EF" }
                : { border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.65)" }
              }
            >
              Reservar ahora
              <span className="w-4 h-px bg-current opacity-50 group-hover:w-7 transition-all duration-400" />
            </a>
          </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
