import type { Metadata } from "next";
import LegalSections, { CLASICA_ACCENT, URBAN_ACCENT } from "@/components/ui/LegalSections";
import type { LegalSection } from "@/components/ui/LegalSections";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Política de Privacidad — HIS Barbería",
  robots: { index: false, follow: false },
};

const SECTIONS: LegalSection[] = [
  {
    id: "01",
    label: "Responsable",
    heading: "Responsable del Tratamiento",
    paragraphs: [
      "De conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos de los datos del responsable del tratamiento:",
      "<strong>Responsable:</strong> [NOMBRE EMPRESA]<br/><strong>CIF/NIF:</strong> [CIF]<br/><strong>Domicilio:</strong> [DIRECCIÓN], Madrid<br/><strong>Correo electrónico de contacto:</strong> <a href='mailto:[EMAIL]' class='text-his-white/60 hover:text-his-white underline underline-offset-2 transition-colors'>[EMAIL]</a>",
    ],
  },
  {
    id: "02",
    label: "Datos",
    heading: "Datos que Tratamos",
    paragraphs: [
      "En función de la interacción del usuario con el Sitio Web, podemos tratar las siguientes categorías de datos personales:",
      "<strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de sesión y datos de rendimiento recogidos de forma agregada a través de Vercel Analytics.<br/><br/><strong>Datos de reserva:</strong> nombre, número de teléfono y correo electrónico facilitados voluntariamente al realizar una reserva a través de la plataforma Booksy.<br/><br/>No tratamos categorías especiales de datos (datos de salud, biométricos, etc.) ni datos de menores de 14 años.",
    ],
  },
  {
    id: "03",
    label: "Finalidad",
    heading: "Finalidad y Base Legitimadora",
    paragraphs: [
      "Los datos son tratados con las siguientes finalidades y bases de legitimación conforme al artículo 6.1 del RGPD:",
      "<strong>Gestión de reservas</strong> — ejecutar el contrato de prestación de servicios (art. 6.1.b RGPD).<br/><br/><strong>Análisis de tráfico web</strong> — interés legítimo en conocer el rendimiento del Sitio Web y mejorar la experiencia del usuario (art. 6.1.f RGPD). Los datos se recogen de forma agregada y seudonimizada.<br/><br/><strong>Comunicaciones comerciales</strong> — únicamente con el consentimiento expreso y previo del usuario (art. 6.1.a RGPD), que puede ser retirado en cualquier momento.",
    ],
  },
  {
    id: "04",
    label: "Destinatarios",
    heading: "Destinatarios y Transferencias Internacionales",
    paragraphs: [
      "Los datos podrán ser comunicados a los siguientes encargados del tratamiento que actúan en nombre de [NOMBRE EMPRESA]:",
      "<strong>Booksy International Inc.</strong> — plataforma de gestión de reservas. Los datos transferidos se limitan a los estrictamente necesarios para gestionar la cita.<br/><br/><strong>Vercel Inc.</strong> — proveedor de infraestructura de alojamiento web y analítica de rendimiento. Los datos de navegación recogidos son anónimos o seudonimizados.",
      "No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo (EEE) sin las garantías adecuadas. Booksy y Vercel cuentan con cláusulas contractuales tipo aprobadas por la Comisión Europea u otro mecanismo de adecuación equivalente.",
    ],
  },
  {
    id: "05",
    label: "Conservación",
    heading: "Plazo de Conservación",
    paragraphs: [
      "Los datos personales se conservarán durante el tiempo estrictamente necesario para la finalidad para la que fueron recogidos y, en todo caso, durante los plazos legales que resulten de aplicación:",
      "<strong>Datos de reserva:</strong> durante la vigencia de la relación comercial y, una vez finalizada esta, durante los plazos de prescripción de las acciones legales que pudieran derivarse (con carácter general, 5 años).<br/><br/><strong>Datos de navegación:</strong> conforme a la política de retención de Vercel Analytics, en general no superiores a 24 meses en formato agregado.",
    ],
  },
  {
    id: "06",
    label: "Derechos",
    heading: "Derechos del Usuario",
    paragraphs: [
      "El usuario puede ejercitar en cualquier momento los siguientes derechos reconocidos por el RGPD y la LOPDGDD:",
      "<strong>Acceso</strong> a sus datos personales · <strong>Rectificación</strong> de datos inexactos · <strong>Supresión</strong> («derecho al olvido») · <strong>Limitación</strong> del tratamiento · <strong>Portabilidad</strong> de los datos · <strong>Oposición</strong> al tratamiento · <strong>No ser objeto</strong> de decisiones automatizadas",
      "Para ejercitar cualquiera de estos derechos, puede dirigirse por escrito a <a href='mailto:[EMAIL]' class='text-his-white/60 hover:text-his-white underline underline-offset-2 transition-colors'>[EMAIL]</a>, adjuntando copia de su documento de identidad. En caso de que no obtenga una respuesta satisfactoria, tiene derecho a presentar una reclamación ante la <a href='https://www.aepd.es' target='_blank' rel='noopener noreferrer' class='text-his-white/60 hover:text-his-white underline underline-offset-2 transition-colors'>Agencia Española de Protección de Datos (AEPD)</a>.",
    ],
  },
  {
    id: "07",
    label: "Seguridad",
    heading: "Medidas de Seguridad",
    paragraphs: [
      "[NOMBRE EMPRESA] ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.",
      "La transmisión de datos entre el usuario y el Sitio Web se realiza mediante protocolo seguro HTTPS con cifrado TLS. No obstante, ningún sistema de transmisión de datos a través de internet puede garantizar una seguridad absoluta.",
    ],
  },
  {
    id: "08",
    label: "Cookies",
    heading: "Política de Cookies",
    paragraphs: [
      "El Sitio Web puede utilizar cookies técnicas estrictamente necesarias para su correcto funcionamiento, así como cookies de analítica seudonimizadas a través de Vercel Analytics que no requieren consentimiento previo al no permitir la identificación individual de los usuarios.",
      "No se utilizan cookies de terceros con fines publicitarios ni de rastreo entre sitios. El usuario puede configurar su navegador para rechazar o eliminar las cookies; sin embargo, algunas funcionalidades del Sitio Web podrían verse afectadas.",
    ],
  },
];

const ACCENTS = [CLASICA_ACCENT, URBAN_ACCENT];

const MARQUEE_ITEMS = [
  { text: "Privacidad",           brand: "clasica" },
  { text: "·",                    brand: "dot" },
  { text: "RGPD",                 brand: "urban" },
  { text: "·",                    brand: "dot" },
  { text: "Protección de Datos",  brand: "clasica" },
  { text: "·",                    brand: "dot" },
  { text: "LOPDGDD",              brand: "urban" },
  { text: "·",                    brand: "dot" },
  { text: "Derechos ARCO+",       brand: "clasica" },
  { text: "·",                    brand: "dot" },
  { text: "HIS Barbería",         brand: "urban" },
  { text: "·",                    brand: "dot" },
];

export default function PrivacidadPage() {
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

        {/* Dual split top accent — mirrors footer */}
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
            Política de
            <br />
            <span style={{ color: "rgba(245,243,239,0.45)", fontStyle: "italic" }}>
              Privacidad
            </span>
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
