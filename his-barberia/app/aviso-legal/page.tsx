import type { Metadata } from "next";
import LegalSections, { CLASICA_ACCENT, URBAN_ACCENT } from "@/components/ui/LegalSections";
import type { LegalSection } from "@/components/ui/LegalSections";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Aviso Legal — HIS Barbería",
  robots: { index: false, follow: false },
};

const SECTIONS: LegalSection[] = [
  {
    id: "01",
    label: "Titular",
    heading: "Titular del Sitio Web",
    paragraphs: [
      "En cumplimiento de lo establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa al usuario de los datos identificativos del titular de este sitio web:",
      "<strong>Razón social:</strong> [NOMBRE EMPRESA]<br/><strong>CIF/NIF:</strong> [CIF]<br/><strong>Domicilio social:</strong> [DIRECCIÓN], Madrid<br/><strong>Correo electrónico:</strong> <a href='mailto:[EMAIL]' class='text-his-white/60 hover:text-his-white underline underline-offset-2 transition-colors'>[EMAIL]</a>",
    ],
  },
  {
    id: "02",
    label: "Objeto",
    heading: "Objeto y Ámbito de Aplicación",
    paragraphs: [
      "El presente Aviso Legal regula el acceso y uso del sitio web <strong>hisbarberia.com</strong> (en adelante, «el Sitio Web»), cuya titularidad corresponde a [NOMBRE EMPRESA].",
      "El acceso al Sitio Web y la utilización de sus contenidos implica la aceptación plena y sin reservas de las presentes condiciones. El titular se reserva el derecho a modificar en cualquier momento el contenido del Aviso Legal, siendo responsabilidad del usuario revisar periódicamente las condiciones vigentes.",
    ],
  },
  {
    id: "03",
    label: "Propiedad Intelectual",
    heading: "Propiedad Intelectual e Industrial",
    paragraphs: [
      "Todos los contenidos del Sitio Web —incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros— son propiedad de [NOMBRE EMPRESA] o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.",
      "Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación, total o parcial, de los contenidos del Sitio Web sin la autorización previa y por escrito del titular. El uso no autorizado de dichos contenidos podrá dar lugar al ejercicio de las acciones legales que correspondan.",
    ],
  },
  {
    id: "04",
    label: "Responsabilidad",
    heading: "Exención de Responsabilidad",
    paragraphs: [
      "[NOMBRE EMPRESA] no garantiza la disponibilidad ininterrumpida del Sitio Web ni la ausencia de errores en sus contenidos. El titular no será responsable de los daños o perjuicios que pudieran derivarse del uso del Sitio Web, de la imposibilidad de acceso al mismo, o de la presencia de virus u otros elementos lesivos en los contenidos.",
      "La información publicada en el Sitio Web tiene carácter meramente informativo. El titular se reserva el derecho a modificar, suspender, cancelar o restringir el contenido, la configuración o los servicios del Sitio Web en cualquier momento sin necesidad de previo aviso.",
    ],
  },
  {
    id: "05",
    label: "Terceros",
    heading: "Enlaces a Sitios de Terceros",
    paragraphs: [
      "El Sitio Web puede contener enlaces a sitios web de terceros. Estos enlaces se facilitan únicamente a efectos informativos. [NOMBRE EMPRESA] no tiene control sobre los contenidos de esos sitios y no asume responsabilidad alguna por los contenidos, información, comunicaciones o actividades de dichos sitios.",
      "La inclusión de cualquier enlace no implica la aprobación por parte del titular del sitio enlazado ni la existencia de relación alguna entre [NOMBRE EMPRESA] y los titulares de dichos sitios.",
    ],
  },
  {
    id: "06",
    label: "Legislación",
    heading: "Legislación Aplicable y Jurisdicción",
    paragraphs: [
      "El presente Aviso Legal se rige en su totalidad por la legislación española. Las partes, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten a la jurisdicción de los Juzgados y Tribunales de la ciudad de <strong>Madrid</strong> para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del Sitio Web.",
      "Lo dispuesto en el presente Aviso Legal no afecta a los derechos que la legislación vigente reconoce a los consumidores y usuarios en cada caso.",
    ],
  },
];

const ACCENTS = [CLASICA_ACCENT, URBAN_ACCENT];

const MARQUEE_ITEMS = [
  { text: "Aviso Legal",           brand: "clasica" },
  { text: "·",                     brand: "dot" },
  { text: "Propiedad Intelectual", brand: "urban" },
  { text: "·",                     brand: "dot" },
  { text: "LSSI-CE",               brand: "clasica" },
  { text: "·",                     brand: "dot" },
  { text: "Información Legal",     brand: "urban" },
  { text: "·",                     brand: "dot" },
  { text: "Términos de Uso",       brand: "clasica" },
  { text: "·",                     brand: "dot" },
  { text: "HIS Barbería",          brand: "urban" },
  { text: "·",                     brand: "dot" },
];

export default function AvisoLegalPage() {
  return (
    <main
      className="min-h-screen font-sans"
      style={{
        background: "linear-gradient(160deg, #0D1612 0%, #0A0A0A 40%, #0E0E0E 70%, #0A0C0E 100%)",
      }}
    >

      {/* ── Zone A: Hero ── */}
      <section
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ minHeight: "42vh" }}
      >
        {/* Clasica radial — left, strong */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 80% at 0% 100%, rgba(45,74,62,0.55) 0%, rgba(45,74,62,0.15) 45%, transparent 70%)" }}
          aria-hidden
        />
        {/* Urban radial — right, visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 100% 10%, rgba(184,184,184,0.12) 0%, rgba(120,120,120,0.06) 50%, transparent 70%)" }}
          aria-hidden
        />

        {/* Dual split top accent */}
        <div className="absolute top-0 left-0 right-0 flex h-[2px]" aria-hidden>
          <div className="flex-1" style={{ background: "rgba(45,74,62,0.9)" }} />
          <div className="flex-1" style={{ background: "rgba(184,184,184,0.35)" }} />
        </div>

        {/* Gold hairline below the split */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "2px", left: 0, right: 0, height: "1px",
            background: "linear-gradient(90deg, transparent 0%, #C9A84C 25%, #E8CF7A 50%, #C9A84C 75%, transparent 100%)",
            opacity: 0.45,
          }}
          aria-hidden
        />

        {/* Vertical centre split line */}
        <div
          className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 pointer-events-none hidden md:block"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-12 pt-32 md:pt-40">
          <SectionLabel color="muted" className="mb-6">
            Información Legal
          </SectionLabel>

          <h1
            className="font-serif leading-[0.92] mb-6"
            style={{
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              letterSpacing: "-0.02em",
              color: "#F5F3EF",
            }}
          >
            Aviso Legal
          </h1>

          {/* Dual brand labels under title */}
          <div className="flex items-center gap-5 mb-6">
            <span className="font-serif italic text-[0.95rem]" style={{ color: "rgba(200,191,168,0.5)" }}>
              Classic
            </span>
            <span className="w-6 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="font-sans font-light text-[0.85rem] uppercase tracking-[0.12em]" style={{ color: "rgba(184,184,184,0.38)" }}>
              Urban
            </span>
          </div>

          <p
            className="font-sans text-his-white/30 uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.28em" }}
          >
            Última actualización — Marzo 2026
          </p>
        </div>

        {/* Marquee strip */}
        <div
          className="relative z-10 overflow-hidden border-t"
          style={{ borderColor: "rgba(255,255,255,0.04)" }}
          aria-hidden
        >
          <div className="marquee-track flex items-center whitespace-nowrap py-3">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="font-sans text-[9px] uppercase tracking-[0.35em] mx-8 shrink-0"
                style={{
                  color:
                    item.brand === "clasica" ? "rgba(200,191,168,0.22)" :
                    item.brand === "urban"   ? "rgba(184,184,184,0.18)" :
                                              "rgba(201,168,76,0.18)",
                }}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zone B + C: Editorial content + back link ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <LegalSections sections={SECTIONS} accents={ACCENTS} />
        </div>
      </section>
    </main>
  );
}
