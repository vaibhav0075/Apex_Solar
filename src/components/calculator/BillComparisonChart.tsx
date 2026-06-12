"use client";

import { motion } from "framer-motion";
import { formatINR } from "@/lib/calculator";

interface BillComparisonChartProps {
  currentBill: number;
  afterSolar: number;
  monthlySavings: number;
}

export default function BillComparisonChart({
  currentBill,
  afterSolar,
  monthlySavings,
}: BillComparisonChartProps) {
  const max = currentBill;
  const afterPercent = max > 0 ? (afterSolar / max) * 100 : 0;
  const savingsPercent = max > 0 ? (monthlySavings / max) * 100 : 0;

  const circumference = 2 * Math.PI * 54;
  const savingsOffset = circumference - (savingsPercent / 100) * circumference;

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
      <h3 className="text-lg font-semibold text-foreground">Monthly Bill Comparison</h3>
      <p className="mb-6 text-sm text-slate-500">Your bill before and after going solar</p>

      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-around">
        {/* Donut chart */}
        <div className="relative h-36 w-36">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="12" />
            <motion.circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="url(#savingsGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: savingsOffset }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="savingsGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffb400" />
                <stop offset="100%" stopColor="#00c8ff" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-accent-deep">{Math.round(savingsPercent)}%</span>
            <span className="text-xs text-slate-500">saved</span>
          </div>
        </div>

        {/* Bar comparison */}
        <div className="w-full max-w-xs space-y-5">
          <div>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="text-slate-600">Current Bill</span>
              <span className="font-semibold text-foreground">{formatINR(currentBill)}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full bg-slate-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="text-slate-600">After Solar</span>
              <span className="font-semibold text-accent">{formatINR(afterSolar)}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent-deep"
                initial={{ width: 0 }}
                animate={{ width: `${afterPercent}%` }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
          </div>

          <div className="rounded-xl bg-primary/10 px-4 py-3 text-center">
            <p className="text-xs text-slate-500">You save every month</p>
            <p className="text-xl font-bold text-primary">{formatINR(monthlySavings)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
