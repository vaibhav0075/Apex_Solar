"use client";

import Image from "next/image";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import SectionHeader from "@/components/shared/SectionHeader";
import { stats } from "@/data/company";
import { images } from "@/data/images";

export default function CompanyOverview() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-wide">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeInView direction="left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/15 to-accent/10 blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={images.industrialHero}
                  alt="Apex Solar engineers installing solar panels"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-xl">
                <p className="text-sm font-semibold text-accent-deep">Since 2015</p>
                <p className="text-xs text-slate-500">Engineering Excellence</p>
              </div>
            </div>
          </FadeInView>

          <div>
            <SectionHeader
              badge="About Apex Solar"
              title="Engineering India's Clean Energy Future"
              description="Apex Solar Infra Pvt. Ltd. is a leading solar energy solutions provider, delivering end-to-end engineering, procurement, and construction services for residential, commercial, and industrial clients across India."
              align="left"
              className="mb-8"
            />
            <FadeInView delay={0.2}>
              <p className="mb-4 text-slate-600 leading-relaxed">
                With a team of certified engineers and over a decade of experience, we combine
                cutting-edge technology with rigorous project management to deliver solar
                installations that exceed performance expectations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From initial consultation to long-term maintenance, we partner with our clients
                to maximize energy generation, reduce costs, and accelerate India&apos;s transition
                to renewable energy.
              </p>
            </FadeInView>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeInView key={stat.label} delay={i * 0.1}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
