"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-background-muted">
      <div className="container-wide">
        <SectionHeader
          badge="Testimonials"
          title="Trusted by Industry Leaders"
          description="Hear from our clients about their experience partnering with Apex Solar."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -8, y: x * 8 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="glass group relative rounded-2xl p-8 shadow-lg transition-shadow hover:shadow-xl"
    >
      <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />

      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>

      <p className="text-base leading-relaxed text-slate-700 md:text-lg">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-slate-200/60 pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-sm font-bold text-accent-deep">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-base font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-slate-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
