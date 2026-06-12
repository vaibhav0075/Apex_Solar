"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedSolarHero() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-4xl lg:max-w-none xl:max-w-[52rem]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-solar-blue-light/25 via-transparent to-solar-yellow/20 blur-3xl" />

      <motion.div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/70 bg-white/30 shadow-2xl shadow-solar-blue/15 backdrop-blur-sm sm:rounded-3xl lg:aspect-auto lg:h-[48vh]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="h-full w-full"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/solar.png"
            alt="Solar installation team mounting panels on a rooftop"
            fill
            className="relative z-0 object-cover"
            priority
          />
        </motion.div>

        {/* Subtle panel shimmer — no extra suns */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
          aria-hidden
        >
          <motion.div
            className="absolute left-[22%] top-[16%] h-[32%] w-[52%] bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ mixBlendMode: "soft-light" }}
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
