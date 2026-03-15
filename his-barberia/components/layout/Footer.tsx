import { NAV_LINKS, BOOKSY_CLASICA, BOOKSY_URBAN } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #080808 100%)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Split-color top accent */}
      <div className="flex h-px">
        <div className="flex-1" style={{ background: "rgba(45,74,62,0.35)" }} />
        <div className="flex-1" style={{ background: "rgba(184,184,184,0.08)" }} />
      </div>

      {/* Giant HIS watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-serif text-[28vw] leading-none"
          style={{ opacity: 0.022, letterSpacing: "-0.02em", color: '#C9A84C' }}
        >
          HIS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Main footer grid */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">

          {/* Brand — 4 cols */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[3rem] tracking-[0.02em] leading-none" style={{
                background: 'linear-gradient(135deg, #8B6520 0%, #C9A84C 30%, #F0D878 55%, #C9A84C 75%, #8B6520 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                HIS
              </span>
              <span className="font-sans text-[7.5px] tracking-[0.48em] uppercase text-his-white/28 mt-0.5">
                Barbería
              </span>
            </div>
            <p className="font-serif italic text-[1.15rem] text-his-white/38 mt-1 leading-snug">
              El arte del detalle.
              <br />
              En dos expresiones.
            </p>
            <div className="mt-1">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 font-sans text-[9.5px] tracking-[0.28em] uppercase text-his-white/28 hover:text-his-white transition-colors duration-400"
              >
                <span className="w-3 h-px bg-his-white/25 group-hover:w-5 transition-all duration-400" />
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation — 3 cols */}
          <div className="md:col-span-3 md:col-start-6 flex flex-col gap-3.5">
            <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-his-white/20 mb-1">
              Navegación
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-2 font-sans text-[10.5px] tracking-[0.18em] uppercase text-his-white/35 hover:text-his-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Spaces — 4 cols */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-5">
            <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-his-white/20 mb-1">
              Nuestros Espacios
            </span>

            {/* Clásica */}
            <div className="flex flex-col gap-1">
              <a
                href={BOOKSY_CLASICA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-[1.25rem] text-clasica-warm/70 hover:text-clasica-warm transition-colors duration-300 leading-none"
              >
                Clásica
              </a>
              <span className="font-sans text-[10px] text-his-white/25 mt-1">
                Calle Lagasca, 58 · Madrid
              </span>
              <span className="font-sans text-[9.5px] text-his-white/18">
                10:00 – 20:00 · Lu–Vi
              </span>
            </div>

            <div className="w-10 h-px bg-his-white/8" />

            {/* Urban */}
            <div className="flex flex-col gap-1">
              <a
                href={BOOKSY_URBAN}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-light text-[1.15rem] uppercase tracking-[-0.02em] text-urban-silver/55 hover:text-urban-silver transition-colors duration-300 leading-none"
              >
                Urban
              </a>
              <span className="font-sans text-[10px] text-his-white/25 mt-1">
                Calle San Marcos, 1 · Madrid
              </span>
              <span className="font-sans text-[9.5px] text-his-white/18">
                10:00 – 21:00 · Lu–Vi
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 border-t flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.04)" }}
        >
          <p className="font-sans text-[9.5px] tracking-[0.22em] text-his-white/18 uppercase">
            © {new Date().getFullYear()} HIS Barbería. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="font-sans text-[9.5px] tracking-[0.15em] uppercase text-his-white/18 hover:text-his-white/45 transition-colors"
            >
              Privacidad
            </a>
            <span className="text-his-white/10 text-xs">·</span>
            <a
              href="#"
              className="font-sans text-[9.5px] tracking-[0.15em] uppercase text-his-white/18 hover:text-his-white/45 transition-colors"
            >
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
