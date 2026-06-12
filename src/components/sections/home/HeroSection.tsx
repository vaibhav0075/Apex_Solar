"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Play } from "lucide-react";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import EnergyParticles from "@/components/three/EnergyParticles";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { images } from "@/data/images";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 gradient-sky" />
      <HeroScene />
      <EnergyParticles count={40} />

      {/* Sunlight rays */}
      <div className="pointer-events-none absolute -right-20 top-0 h-[600px] w-[600px] opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[300px] w-1 origin-bottom animate-ray-pulse bg-gradient-to-t from-primary/40 to-transparent"
            style={{
              transform: `rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-wide relative z-10 grid items-center gap-12 section-padding lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-white/70 px-5 py-2.5 text-base font-medium text-accent-deep backdrop-blur-sm sm:text-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            India&apos;s Premier Solar Engineering Company
          </motion.div>

          <TextReveal
            text={company.tagline}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          />

          <motion.p
            className="mt-6 max-w-xl text-xl leading-relaxed text-slate-600 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {company.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <MagneticButton>
              <Button asChild variant="primary" size="lg">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  <Play className="h-4 w-4" />
                  View Projects
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/15 blur-3xl" />
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/60 shadow-2xl shadow-accent-deep/10"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={images.hero}
              alt="Apex Solar installation — solar panels and renewable energy infrastructure"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-deep/20 to-transparent" />
            <motion.div
              className="absolute left-[20%] top-[15%] h-[35%] w-[55%] bg-gradient-to-r from-transparent via-white/25 to-transparent"
              animate={{ x: ["-120%", "220%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            />
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            className="absolute -left-8 bottom-12 glass rounded-2xl p-4 shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="text-2xl font-bold text-accent-deep">125+</div>
            <div className="text-xs text-slate-500">MW Installed</div>
          </motion.div>
          <motion.div
            className="absolute -right-6 top-8 glass rounded-2xl p-4 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="text-2xl font-bold text-primary">850+</div>
            <div className="text-xs text-slate-500">Projects Done</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
