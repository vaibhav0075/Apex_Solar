"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Zap, Calendar, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const featured = projects.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          badge="Portfolio"
          title="Featured Projects"
          description="Explore our portfolio of successful solar installations delivering measurable results across India."
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2" stagger={0.12}>
          {featured.map((project, i) => (
            <StaggerItem key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <motion.div
                  className={`relative overflow-hidden rounded-2xl shadow-lg ${
                    i === 0 ? "md:row-span-2 md:aspect-auto" : ""
                  }`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/12]" : "aspect-[16/10]"}`}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-deep/90 via-accent-deep/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold md:text-2xl">{project.name}</h3>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/80">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Zap className="h-3.5 w-3.5" />
                            {project.capacity}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {project.year}
                          </span>
                        </div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-accent-deep opacity-0 transition-all group-hover:opacity-100">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
