"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  className?: string;
}

export default function PageHero({
  title,
  description,
  image,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[50vh] items-center overflow-hidden pt-28",
        className
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 gradient-sky" />
      )}

      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-wide relative z-10 section-padding !pb-16 !pt-8">
        <TextReveal
          text={title}
          as="h1"
          className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
        />
        {description && (
          <motion.p
            className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
