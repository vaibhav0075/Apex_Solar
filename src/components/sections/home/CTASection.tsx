"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";
import { company } from "@/data/company";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[400px]">
        <Image
          src={images.solar}
          alt="Solar panels at sunrise — Apex Solar Infra"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-deep/90 via-accent-deep/75 to-accent-deep/60" />

        <div className="pointer-events-none absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-0 h-full w-1 origin-top animate-ray-pulse bg-gradient-to-b from-primary/30 to-transparent"
              style={{
                transform: `rotate(${i * 30 - 75}deg)`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        <div className="container-wide relative z-10 flex min-h-[400px] flex-col items-center justify-center section-padding text-center text-white">
          <motion.h2
            className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready To Power Your Future With Solar?
          </motion.h2>
          <motion.p
            className="mt-4 max-w-xl text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get a free consultation and customized solar proposal for your property.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <MagneticButton>
              <Button asChild variant="primary" size="xl" className="animate-glow-pulse">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Hi,%20I'm%20interested%20in%20a%20free%20solar%20consultation!`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
