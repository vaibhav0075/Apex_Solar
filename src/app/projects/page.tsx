"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, Calendar, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/sections/home/CTASection";
import { projects } from "@/data/projects";
import { images } from "@/data/images";

const categories = ["all", "residential", "commercial", "industrial"] as const;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        title="Our Projects"
        description="A portfolio of successful solar installations delivering measurable impact across India."
        image={images.industrialHero}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-all ${
                  filter === cat
                    ? "bg-accent-deep text-white shadow-lg"
                    : "bg-white text-slate-600 shadow-md hover:shadow-lg"
                }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="overflow-hidden rounded-2xl border border-white/60 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent-deep/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <Badge className="absolute left-4 top-4 capitalize">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-deep">
                          {project.name}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Zap className="h-3 w-3" />
                            {project.capacity}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {project.year}
                          </span>
                        </div>
                        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-accent-deep opacity-0 transition-opacity group-hover:opacity-100">
                          View Details
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
