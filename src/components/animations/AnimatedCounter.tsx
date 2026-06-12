"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn, formatNumber } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  label: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * end);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-4xl font-bold tracking-tight text-accent-deep md:text-5xl">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <p className="mt-2 text-base font-medium text-slate-600 md:text-lg">{label}</p>
    </div>
  );
}
