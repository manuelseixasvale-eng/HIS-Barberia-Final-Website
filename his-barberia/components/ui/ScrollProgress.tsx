"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none"
      aria-hidden
    >
      {/* Left half: Classic green */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #2D4A3E 0%, #3D6B59 50%, #B8B8B8 50%, #E8E8E8 100%)",
        }}
      />
    </motion.div>
  );
}
