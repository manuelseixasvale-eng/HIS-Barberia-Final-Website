"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { NAV_LINKS } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const pathname = usePathname();
  const brand = pathname.startsWith('/clasica') ? 'clasica'
              : pathname.startsWith('/urban')   ? 'urban'
              : null;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <ScrollProgress />

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Backdrop */}
        <div
          className={`
            absolute inset-0 transition-all duration-700
            ${scrolled
              ? "bg-his-black/88 backdrop-blur-2xl"
              : "bg-transparent"
            }
          `}
        />

        {/* Split bottom border on scroll */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px flex pointer-events-none">
            <div className="flex-1 bg-clasica-green/30" />
            <div className="flex-1 bg-his-white/5" />
          </div>
        )}

        {/* Nav content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-[88px]">

            {/* Logo */}
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="group flex flex-col leading-none"
            >
              {brand === 'clasica' ? (
                <Image
                  src="/logo-classic.png"
                  alt="HIS Barbería Classic"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              ) : brand === 'urban' ? (
                <Image
                  src="/logo-urban.png"
                  alt="HIS Barbería Urban"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              ) : (
                <Image
                  src="/logo-main.png"
                  alt="HIS Barbería"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              )}
            </a>

            {/* Desktop nav + CTAs — right aligned */}
            <div className="hidden md:flex items-center gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative font-sans text-[10.5px] tracking-[0.22em] uppercase text-his-white/45 hover:text-his-white transition-colors duration-300 px-3"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-3 w-0 h-px bg-his-white/40 group-hover:w-[calc(100%-1.5rem)] transition-all duration-400" />
                </a>
              ))}

              <div className="w-px h-4 bg-his-white/15 mx-2" />

              <div className="flex items-center gap-2.5">
              <a
                href="/clasica"
                className="group relative overflow-hidden px-5 py-2.5 font-sans text-[9.5px] tracking-[0.25em] uppercase text-clasica-warm border border-clasica-green/50 hover:border-clasica-green transition-all duration-400"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-his-white">
                  Classic
                </span>
                <div className="absolute inset-0 bg-clasica-green origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              </a>
              <a
                href="/urban"
                className="group relative overflow-hidden px-5 py-2.5 font-sans text-[9.5px] tracking-[0.25em] uppercase text-his-white/60 border border-his-white/15 hover:border-his-white/50 transition-all duration-400"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-his-black">
                  Urban
                </span>
                <div className="absolute inset-0 bg-his-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              </a>
              </div>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col gap-[5px] items-center justify-center"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease }}
                className="block w-6 h-px bg-his-white origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-4 h-px bg-his-white self-start ml-1"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease }}
                className="block w-6 h-px bg-his-white origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease }}
            className="fixed inset-0 z-40 bg-his-black flex flex-col overflow-hidden"
          >
            {/* Giant HIS watermark */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              aria-hidden
            >
              <span
                className="font-serif text-[22vw] text-his-white leading-none"
                style={{ opacity: 0.03, letterSpacing: "-0.02em" }}
              >
                HIS
              </span>
            </div>

            {/* Split color strip — top */}
            <div className="flex h-0.5">
              <div className="flex-1 bg-clasica-green/40" />
              <div className="flex-1 bg-urban-silver/15" />
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-10 relative z-10">
              {/* Nav links */}
              <nav className="flex flex-col gap-0 mb-10">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.065, duration: 0.55, ease }}
                    className="font-serif text-[2.8rem] text-his-white/75 hover:text-his-white py-2.5 border-b border-his-white/5 transition-colors leading-tight"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Booking CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.5, ease }}
                className="flex flex-col gap-2.5"
              >
                <a
                  href="/clasica"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-4 font-sans text-[10px] tracking-[0.3em] uppercase text-center bg-clasica-green text-his-white hover:bg-clasica-green-light transition-colors duration-300"
                >
                  Reservar en Classic
                </a>
                <a
                  href="/urban"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-4 font-sans text-[10px] tracking-[0.3em] uppercase text-center border border-his-white/15 text-his-white/60 hover:text-his-white hover:border-his-white/40 transition-all duration-300"
                >
                  Reservar en Urban
                </a>
              </motion.div>

              {/* Bottom brand line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="h-px flex-1 bg-his-white/8" />
                <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-his-white/20">
                  Madrid · Classic · Urban
                </p>
                <div className="h-px flex-1 bg-his-white/8" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
