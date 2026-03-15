interface SectionLabelProps {
  children: React.ReactNode;
  color?: "white" | "clasica" | "urban" | "muted";
  className?: string;
}

export default function SectionLabel({
  children,
  color = "muted",
  className = "",
}: SectionLabelProps) {
  const colorMap = {
    white: "text-his-white border-his-white/30",
    clasica: "text-clasica-warm border-clasica-warm/40",
    urban: "text-urban-silver border-urban-silver/30",
    muted: "text-his-white/40 border-his-white/15",
  };

  return (
    <span
      className={`
        inline-block font-sans font-medium tracking-[0.3em] uppercase text-[10px]
        border-b pb-1 mb-0
        ${colorMap[color]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
