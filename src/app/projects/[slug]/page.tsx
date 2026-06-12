import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Zap, Calendar, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeInView from "@/components/animations/FadeInView";
import CTASection from "@/components/sections/home/CTASection";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative min-h-[50vh] pt-28">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-deep/90 via-accent-deep/50 to-accent-deep/30" />
        <div className="container-wide relative z-10 flex min-h-[50vh] flex-col justify-end section-padding !pb-12">
          <Badge className="mb-4 w-fit capitalize">{project.category}</Badge>
          <h1 className="text-4xl font-bold text-white md:text-5xl">{project.name}</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4" />
              {project.capacity}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeInView>
                <h2 className="text-2xl font-bold text-foreground">Project Overview</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{project.description}</p>
              </FadeInView>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.images.map((img, i) => (
                  <FadeInView key={i} delay={i * 0.1}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-md">
                      <Image src={img} alt={`${project.name} ${i + 1}`} fill className="object-cover" />
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <FadeInView>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-foreground">Technology Used</h3>
                  <ul className="mt-4 space-y-2">
                    {project.technology.map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>

              <FadeInView delay={0.1}>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-foreground">Key Benefits</h3>
                  <ul className="mt-4 space-y-2">
                    {project.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>

              <Button asChild variant="primary" className="w-full">
                <Link href="/contact">Start a Similar Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
