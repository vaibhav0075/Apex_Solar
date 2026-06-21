import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FadeInView from "@/components/animations/FadeInView";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/sections/home/CTASection";
import { services } from "@/data/services";
import { images } from "@/data/images";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive solar energy services including residential, commercial, industrial installations, EPC, infrastructure development, and O&M.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="End-to-end solar solutions engineered for performance, reliability, and maximum return on investment."
        image={images.solar}
      />

      <div className="section-padding">
        <div className="container-wide space-y-32">
          {services.map((service, i) => (
            <section
              key={service.id}
              id={service.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <FadeInView direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 blur-2xl" />
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeInView>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <FadeInView direction={i % 2 === 0 ? "right" : "left"}>
                  <Badge className="mb-4">Service {i + 1}</Badge>
                  <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-deep">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-deep">
                        Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild variant="primary">
                      <a
                        href={`https://wa.me/${company.whatsapp}?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(service.title)}!`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get a Quote
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </FadeInView>
              </div>
            </section>
          ))}
        </div>
      </div>

      <CTASection />
    </>
  );
}
