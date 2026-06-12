import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FadeInView from "@/components/animations/FadeInView";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/sections/home/CTASection";
import { caseStudies } from "@/data/case-studies";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real-world solar success stories showcasing measurable results, savings, and ROI for our clients.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        description="Discover how we've helped organizations across industries achieve their clean energy goals."
        image={images.industrial}
      />

      <section className="section-padding">
        <div className="container-wide space-y-16">
          {caseStudies.map((study, i) => (
            <FadeInView key={study.slug} delay={i * 0.1}>
              <Link href={`/case-studies/${study.slug}`} className="group block">
                <div className={`grid items-center gap-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "" : ""
                }`}>
                  <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}>
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-deep/60 to-transparent" />
                  </div>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <Badge className="mb-3">{study.industry}</Badge>
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-accent-deep md:text-3xl">
                      {study.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">{study.client}</p>
                    <p className="mt-4 text-slate-600 leading-relaxed line-clamp-3">
                      {study.challenge}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-6">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-slate-500">Annual Savings</p>
                          <p className="text-sm font-semibold text-foreground">{study.savings}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-xs text-slate-500">ROI Period</p>
                          <p className="text-sm font-semibold text-foreground">{study.roi}</p>
                        </div>
                      </div>
                    </div>

                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-deep">
                      Read Full Case Study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
