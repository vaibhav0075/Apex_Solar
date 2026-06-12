"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiveStatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function LiveStat({
  value,
  label,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: LiveStatProps) {
  const spring = useSpring(value, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (v) => {
    const formatted =
      decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-IN");
    return `${prefix}${formatted}${suffix}`;
  });

  const [text, setText] = useState("");
  useEffect(() => {
    return display.on("change", (v) => setText(v));
  }, [display]);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <div className={cn(className)}>
      <motion.div className="text-2xl font-bold tabular-nums text-accent-deep">
        {text}
      </motion.div>
      <p className="mt-0.5 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}
