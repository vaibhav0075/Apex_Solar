"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { formatINR } from "@/lib/calculator";

interface ROIGaugeProps {
  roi: number;
  paybackYears: number;
  lifetimeSavings: number;
}

const CX = 160;
const CY = 158;
const R = 96;
const STROKE = 16;
const MAX_ROI = 400;

/** θ from π (left) to 0 (right) along the top semicircle */
function pointOnArc(theta: number) {
  return {
    x: CX + R * Math.cos(theta),
    y: CY - R * Math.sin(theta),
  };
}

function arcPath() {
  const left = pointOnArc(Math.PI);
  const right = pointOnArc(0);
  return `M ${left.x} ${left.y} A ${R} ${R} 0 0 1 ${right.x} ${right.y}`;
}

export default function ROIGauge({ roi, paybackYears, lifetimeSavings }: ROIGaugeProps) {
  const clamped = Math.min(Math.max(roi, 0), MAX_ROI);
  const fillPercent = clamped / MAX_ROI;
  const arcLength = Math.PI * R;
  const filledLength = arcLength * fillPercent;
  const needleTheta = Math.PI - fillPercent * Math.PI;
  const needleTip = pointOnArc(needleTheta);

  const spring = useSpring(0, { stiffness: 55, damping: 16 });
  const displayRoi = useTransform(spring, (v) => `${Math.round(v)}%`);
  const [roiText, setRoiText] = useState("0%");

  useEffect(() => {
    spring.set(clamped);
    return displayRoi.on("change", setRoiText);
  }, [clamped, spring, displayRoi]);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
      <div>
        <h3 className="text-lg font-semibold text-foreground">Return on Investment</h3>
        <p className="text-sm text-slate-500">25-year projected performance</p>
      </div>

      <div className="relative mx-auto my-4 w-full max-w-[320px] flex-1">
        <svg viewBox="0 0 320 195" className="h-auto w-full" aria-label="ROI gauge">
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffb400" />
              <stop offset="55%" stopColor="#ffd54f" />
              <stop offset="100%" stopColor="#00c8ff" />
            </linearGradient>
          </defs>

          {/* Background track */}
          <path
            d={arcPath()}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth={STROKE}
            strokeLinecap="round"
          />

          {/* Filled arc */}
          <motion.path
            d={arcPath()}
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={arcLength}
            initial={{ strokeDashoffset: arcLength }}
            animate={{ strokeDashoffset: arcLength - filledLength }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Scale labels */}
          {[
            { pct: 0, label: "0%" },
            { pct: 50, label: "200%" },
            { pct: 100, label: "400%" },
          ].map(({ pct, label }) => {
            const theta = Math.PI - (pct / 100) * Math.PI;
            const labelR = R + STROKE / 2 + 14;
            const lx = CX + labelR * Math.cos(theta);
            const ly = CY - labelR * Math.sin(theta);
            return (
              <text
                key={pct}
                x={lx}
                y={ly + 3}
                textAnchor="middle"
                className="fill-slate-400 text-[9px] font-medium"
              >
                {label}
              </text>
            );
          })}

          {/* Needle */}
          <motion.line
            x1={CX}
            y1={CY}
            initial={{ x2: CX - R, y2: CY }}
            animate={{ x2: needleTip.x, y2: needleTip.y }}
            transition={{ duration: 1.1, ease: [0.34, 1.4, 0.64, 1] }}
            stroke="#0a4d9b"
            strokeWidth={2.5}
            strokeLinecap="round"
          />

          {/* Hub */}
          <circle cx={CX} cy={CY} r={9} fill="#0a4d9b" stroke="white" strokeWidth={3} />
        </svg>

        {/* Center value — HTML for crisp text */}
        <div className="pointer-events-none absolute inset-x-0 top-[38%] text-center">
          <motion.p
            key={roiText}
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl font-bold tabular-nums tracking-tight text-accent-deep"
          >
            {roiText}
          </motion.p>
          <p className="mt-0.5 text-xs font-medium text-slate-500">25-Year ROI</p>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-3">
        <motion.div
          key={`pb-${paybackYears}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3.5 text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Payback
          </p>
          <p className="mt-1 text-xl font-bold tabular-nums text-foreground">
            {paybackYears}
            <span className="ml-0.5 text-sm font-semibold text-slate-400">yrs</span>
          </p>
        </motion.div>
        <motion.div
          key={`ns-${lifetimeSavings}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 }}
          className="rounded-xl border border-primary/25 bg-primary/10 px-4 py-3.5 text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Net Savings
          </p>
          <p className="mt-1 text-xl font-bold tabular-nums text-primary">
            {formatINR(Math.max(lifetimeSavings, 0))}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
