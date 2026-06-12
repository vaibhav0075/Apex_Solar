"use client";

import { motion } from "framer-motion";
import {
  Home, Building2, Factory, GraduationCap, Heart, Warehouse, Cog,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import { industries } from "@/data/projects";

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="h-7 w-7" />,
  building: <Building2 className="h-7 w-7" />,
  factory: <Factory className="h-7 w-7" />,
  graduation: <GraduationCap className="h-7 w-7" />,
  heart: <Heart className="h-7 w-7" />,
  warehouse: <Warehouse className="h-7 w-7" />,
  cog: <Cog className="h-7 w-7" />,
};

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-background-muted">
      <div className="container-wide">
        <SectionHeader
          badge="Industries"
          title="Sectors We Serve"
          description="Trusted by organizations across diverse industries to deliver reliable, high-performance solar energy solutions."
        />

        <StaggerChildren className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" stagger={0.08}>
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-accent-deep transition-all duration-300 group-hover:from-primary group-hover:to-primary-light group-hover:text-accent-deep group-hover:shadow-lg group-hover:shadow-primary/30">
                  {iconMap[industry.icon]}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{industry.title}</h3>
                <p className="mt-1 text-base text-slate-500">{industry.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
