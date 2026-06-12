"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeInView from "@/components/animations/FadeInView";
import { processSteps } from "@/data/projects";

export default function ProcessTimeline() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (!lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background-alt">
      <div className="container-wide">
        <SectionHeader
          badge="Our Process"
          title="From Consultation to Commissioning"
          description="A proven 8-step process ensuring seamless project delivery with transparency at every stage."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            ref={lineRef}
            className="absolute left-6 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-primary via-accent to-accent-deep md:left-1/2 md:-translate-x-px"
          />

          {processSteps.map((step, i) => (
            <FadeInView
              key={step.step}
              delay={i * 0.08}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative mb-10 flex items-center gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="ml-14 md:ml-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Step {step.step}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-base text-slate-600">{step.description}</p>
                  </div>
                </div>

                <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-primary-light text-sm font-bold text-accent-deep shadow-lg md:left-1/2 md:-translate-x-1/2">
                  {step.step}
                </div>

                <div className="hidden flex-1 md:block" />
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
