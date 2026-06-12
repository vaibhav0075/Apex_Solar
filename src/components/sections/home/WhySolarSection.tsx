"use client";

import { motion } from "framer-motion";
import {
  TrendingDown, Leaf, Award, BarChart3, Zap,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import { whySolar } from "@/data/projects";

const iconMap: Record<string, React.ReactNode> = {
  "trending-down": <TrendingDown className="h-8 w-8" />,
  leaf: <Leaf className="h-8 w-8" />,
  award: <Award className="h-8 w-8" />,
  chart: <BarChart3 className="h-8 w-8" />,
  zap: <Zap className="h-8 w-8" />,
};

export default function WhySolarSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeader
          badge="Why Solar"
          title="The Smart Investment for Your Future"
          description="Solar energy isn't just environmentally responsible — it's a financially sound decision with compelling returns."
        />

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" stagger={0.1}>
          {whySolar.map((item, i) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="group relative rounded-2xl border border-white/60 bg-white p-6 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
                whileHover={{ scale: 1.03 }}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 text-accent-deep transition-all duration-300 group-hover:from-primary group-hover:to-primary-light group-hover:shadow-lg group-hover:shadow-primary/25">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-accent-deep opacity-0 transition-opacity group-hover:opacity-100">
                  {i + 1}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
