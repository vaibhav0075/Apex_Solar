import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, TrendingUp, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FadeInView from "@/components/animations/FadeInView";
import CTASection from "@/components/sections/home/CTASection";
import { caseStudies } from "@/data/case-studies";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return { title: study.title, description: study.challenge };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      <section className="relative min-h-[45vh] pt-28">
        <Image src={study.image} alt={study.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-deep/90 via-accent-deep/60 to-accent-deep/40" />
        <div className="container-wide relative z-10 flex min-h-[45vh] flex-col justify-end section-padding !pb-12">
          <Badge className="mb-4 w-fit">{study.industry}</Badge>
          <h1 className="max-w-3xl text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {study.title}
          </h1>
          <p className="mt-2 text-white/70">{study.client}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/case-studies">
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>

          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Zap, label: "Capacity", value: study.capacity },
              { icon: TrendingUp, label: "Annual Savings", value: study.savings },
              { icon: Clock, label: "ROI Period", value: study.roi },
            ].map((stat) => (
              <FadeInView key={stat.label}>
                <div className="glass rounded-2xl p-6 text-center">
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                </div>
              </FadeInView>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <FadeInView>
              <h2 className="text-2xl font-bold text-foreground">The Challenge</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{study.challenge}</p>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h2 className="text-2xl font-bold text-foreground">Our Solution</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{study.solution}</p>
            </FadeInView>
          </div>

          <FadeInView className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">Installation Process</h2>
            <div className="mt-6 space-y-4">
              {study.process.map((step, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-accent-deep">
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </FadeInView>

          <FadeInView className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">Results Achieved</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {study.results.map((result) => (
                <div key={result} className="flex items-center gap-3 rounded-xl bg-background-alt p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-slate-700">{result}</span>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <CTASection />
    </>
  );
}
