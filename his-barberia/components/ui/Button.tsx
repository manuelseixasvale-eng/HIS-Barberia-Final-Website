"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "clasica" | "urban";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  target,
  size = "md",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[11px]",
    md: "px-7 py-3.5 text-[11px]",
    lg: "px-10 py-4 text-[12px]",
  };

  const variantClasses = {
    primary:
      "bg-his-white text-his-black hover:bg-his-cream border border-his-white",
    outline:
      "bg-transparent text-his-white border border-his-white/30 hover:border-his-white/80 hover:bg-his-white/5",
    ghost:
      "bg-transparent text-his-white/70 hover:text-his-white border-none",
    clasica:
      "bg-clasica-green text-his-white border border-clasica-green hover:bg-clasica-green-light",
    urban:
      "bg-his-white text-his-black border border-his-white hover:bg-urban-accent",
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-sans font-medium tracking-[0.18em] uppercase
    transition-all duration-300
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
