const words = [
  "Precisión",
  "·",
  "Calidad",
  "·",
  "Ritual",
  "·",
  "Identidad",
  "·",
  "Excelencia",
  "·",
  "Confianza",
  "·",
  "Detalle",
  "·",
  "Carácter",
  "·",
  "Oficio",
  "·",
  "Maestría",
  "·",
];

export default function Marquee() {
  const content = [...words, ...words]; // Doubled for seamless loop

  return (
    <div
      className="relative overflow-hidden py-5 border-y"
      style={{
        background: "linear-gradient(90deg, #0c140f, #0a0a0a 30%, #0a0a0a 70%, #0c140f)",
        borderColor: "rgba(45,74,62,0.2)",
      }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #0a0a0a, transparent)" }}
      />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #0a0a0a, transparent)" }}
      />

      <div className="marquee-track flex items-center gap-0 whitespace-nowrap">
        {content.map((word, i) => (
          <span
            key={i}
            className={`
              font-sans text-[9px] tracking-[0.38em] uppercase mx-4
              ${word === "·"
                ? "text-clasica-green/60"
                : "text-his-white/18 hover:text-his-white/40 transition-colors duration-300"
              }
            `}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
