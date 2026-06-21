import type { Metadata } from "next";
import Image from "next/image";
import { Award, Target, Eye, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeInView from "@/components/animations/FadeInView";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/home/CTASection";
import { coreValues, certifications, company } from "@/data/company";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Apex Solar Infra's mission, vision, and commitment to engineering India's clean energy future.",
};

const timeline = [
  { year: company.established, title: "Founded", description: "Apex Solar Infra established with a vision to democratize solar energy in India." },
  { year: company.established + 1, title: "Growing Strong", description: "Expanding our team and completing initial successful installations." },
  { year: company.established + 2, title: "Expanding Reach", description: "Serving more clients across different regions of India." },
];

const whyChoose = [
  "MNRE empanelled with proven track record",
  "In-house engineering and design team",
  "Tier-1 component partnerships",
  "End-to-end project management",
  "Comprehensive O&M services",
  "Transparent pricing and timelines",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Apex Solar Infra"
        description="Engineering excellence, sustainability, and innovation — powering India's transition to clean energy since 2015."
        image={images.hero}
      />

      <section className="section-padding">
        <div className="container-wide grid items-center gap-16 lg:grid-cols-2">
          <FadeInView direction="left">
            <SectionHeader
              badge="Our Story"
              title="A Decade of Solar Excellence"
              description="What began as a small team of passionate engineers has grown into one of India's most trusted solar energy companies."
              align="left"
            />
            <p className="mt-6 text-slate-600 leading-relaxed">
              Apex Solar Infra Pvt. Ltd. was founded with a singular mission: to make high-quality
              solar energy accessible to every segment of the Indian market. Today, we serve
              homeowners, businesses, factories, hospitals, schools, and institutions with
              engineered solutions that deliver measurable results.
            </p>
          </FadeInView>
          <FadeInView direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={images.industrial}
                alt="Apex Solar team at work"
                fill
                className="object-cover"
              />
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-padding bg-background-alt">
        <div className="container-wide grid gap-8 md:grid-cols-2">
          <FadeInView>
            <div className="glass rounded-2xl p-8">
              <Target className="mb-4 h-10 w-10 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                To accelerate India&apos;s renewable energy adoption by delivering engineered solar
                solutions that maximize energy generation, minimize environmental impact, and
                provide exceptional financial returns for our clients.
              </p>
            </div>
          </FadeInView>
          <FadeInView delay={0.15}>
            <div className="glass rounded-2xl p-8">
              <Eye className="mb-4 h-10 w-10 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                To become India&apos;s most trusted solar engineering company, setting the standard
                for quality, innovation, and sustainability in every project we undertake.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader badge="Values" title="What Drives Us" />
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-padding bg-background-muted">
        <div className="container-wide">
          <SectionHeader badge="Timeline" title="Our Journey" />
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent-deep" />
            {timeline.map((item, i) => (
              <FadeInView key={item.year} delay={i * 0.08}>
                <div className="relative mb-8 ml-14">
                  <div className="absolute -left-14 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xs font-bold text-accent-deep shadow-md">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader badge="Why Choose Us" title="The Apex Advantage" align="left" />
            <ul className="mt-6 space-y-3">
              {whyChoose.map((item) => (
                <FadeInView key={item}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                </FadeInView>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader badge="Certifications" title="Industry Recognized" align="left" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {certifications.map((cert) => (
                <FadeInView key={cert}>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <Award className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{cert}</span>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
