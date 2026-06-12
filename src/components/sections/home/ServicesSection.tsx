"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home, Building2, Factory, Wrench, Grid3X3, Shield,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="h-6 w-6" />,
  building: <Building2 className="h-6 w-6" />,
  factory: <Factory className="h-6 w-6" />,
  wrench: <Wrench className="h-6 w-6" />,
  grid: <Grid3X3 className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
};

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <StaggerItem>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white shadow-lg transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-deep/80 via-accent-deep/20 to-transparent" />
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent-deep shadow-lg">
            {iconMap[service.icon]}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-slate-600">
            {service.shortDescription}
          </p>
          <Link
            href={`/services#${service.id}`}
            className="mt-4 inline-flex items-center gap-1 text-base font-semibold text-accent-deep transition-colors group-hover:text-primary"
          >
            Learn more
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors group-hover:border-primary/30" />
      </motion.div>
    </StaggerItem>
  );
}

export default function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Solar Solutions"
          description="From residential rooftops to industrial-scale installations, we deliver engineered solar solutions tailored to your energy needs."
        />

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
