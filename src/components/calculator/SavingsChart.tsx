"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatINR } from "@/lib/calculator";

interface SavingsChartProps {
  yearlyData: { year: number; cumulative: number; investment: number }[];
  paybackYears: number;
}

const WIDTH = 520;
const HEIGHT = 280;
const PAD = { top: 28, right: 24, bottom: 44, left: 58 };
const CHART_W = WIDTH - PAD.left - PAD.right;
const CHART_H = HEIGHT - PAD.top - PAD.bottom;
const BAR_COUNT = 25;
const BAR_GAP = 5;

export default function SavingsChart({ yearlyData, paybackYears }: SavingsChartProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const investment = yearlyData[0]?.investment ?? 0;
  const maxValue = useMemo(
    () => Math.max(...yearlyData.map((d) => d.cumulative), investment) * 1.08,
    [yearlyData, investment]
  );

  const barWidth = (CHART_W - BAR_GAP * (BAR_COUNT - 1)) / BAR_COUNT;
  const paybackYear = Math.min(Math.max(Math.ceil(paybackYears), 1), BAR_COUNT);

  const yTicks = useMemo(() => {
    const step = maxValue / 4;
    return [0, step, step * 2, step * 3, maxValue].map((v) => ({
      value: v,
      y: PAD.top + CHART_H - (v / maxValue) * CHART_H,
      label: formatINR(Math.round(v)),
    }));
  }, [maxValue]);

  const investmentY = PAD.top + CHART_H - (investment / maxValue) * CHART_H;
  const xLabels = [1, 5, 10, 15, 20, 25];

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">25-Year Savings Growth</h3>
          <p className="text-sm text-slate-500">Cumulative savings vs. initial investment</p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-600">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-gradient-to-t from-[#e6a200] to-[#ffd54f]" />
            Cumulative Savings
          </span>
          <span className="flex items-center gap-2">
            <span className="h-0.5 w-5 border-t-2 border-dashed border-accent-deep" />
            Investment
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-gradient-to-t from-accent-deep to-accent" />
            Payback Year
          </span>
        </div>
      </div>

      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full min-w-[320px]"
          role="img"
          aria-label="25-year cumulative savings chart"
        >
          <defs>
            <linearGradient id="barGold" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#e6a200" />
              <stop offset="100%" stopColor="#ffd54f" />
            </linearGradient>
            <linearGradient id="barPayback" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#0a4d9b" />
              <stop offset="100%" stopColor="#00c8ff" />
            </linearGradient>
            <filter id="barShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* Grid lines + Y labels */}
          {yTicks.map((tick) => (
            <g key={tick.value}>
              <line
                x1={PAD.left}
                y1={tick.y}
                x2={WIDTH - PAD.right}
                y2={tick.y}
                stroke="#f1f5f9"
                strokeWidth={1}
              />
              <text
                x={PAD.left - 10}
                y={tick.y + 4}
                textAnchor="end"
                className="fill-slate-400 text-[9px]"
              >
                {tick.label}
              </text>
            </g>
          ))}

          {/* Investment line */}
          <line
            x1={PAD.left}
            y1={investmentY}
            x2={WIDTH - PAD.right}
            y2={investmentY}
            stroke="#0a4d9b"
            strokeWidth={1.5}
            strokeDasharray="6 5"
            opacity={0.55}
          />
          <rect
            x={PAD.left}
            y={investmentY - 18}
            width={88}
            height={16}
            rx={4}
            fill="white"
            stroke="#e2e8f0"
          />
          <text
            x={PAD.left + 44}
            y={investmentY - 7}
            textAnchor="middle"
            className="fill-accent-deep text-[8px] font-semibold"
          >
            Invest {formatINR(investment)}
          </text>

          {/* Bars */}
          {yearlyData.map((d, i) => {
            const barH = (d.cumulative / maxValue) * CHART_H;
            const x = PAD.left + i * (barWidth + BAR_GAP);
            const y = PAD.top + CHART_H - barH;
            const isPayback = d.year === paybackYear;
            const isHovered = hovered === d.year;

            return (
              <g
                key={d.year}
                onMouseEnter={() => setHovered(d.year)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer"
              >
                <motion.rect
                  x={x}
                  width={barWidth}
                  rx={3}
                  fill={isPayback ? "url(#barPayback)" : "url(#barGold)"}
                  filter="url(#barShadow)"
                  initial={{ height: 0, y: PAD.top + CHART_H }}
                  animate={{ height: barH, y }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.025,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  opacity={isHovered || isPayback ? 1 : 0.92}
                />
              </g>
            );
          })}

          {/* X-axis labels */}
          {xLabels.map((year) => {
            const i = year - 1;
            const x = PAD.left + i * (barWidth + BAR_GAP) + barWidth / 2;
            return (
              <text
                key={year}
                x={x}
                y={HEIGHT - 14}
                textAnchor="middle"
                className="fill-slate-500 text-[10px] font-medium"
              >
                {year}y
              </text>
            );
          })}

          {/* Baseline */}
          <line
            x1={PAD.left}
            y1={PAD.top + CHART_H}
            x2={WIDTH - PAD.right}
            y2={PAD.top + CHART_H}
            stroke="#e2e8f0"
            strokeWidth={1}
          />
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {hovered !== null && yearlyData[hovered - 1] && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="pointer-events-none absolute left-1/2 top-2 z-10 -translate-x-1/2 rounded-lg bg-accent-deep px-3 py-2 text-center shadow-lg"
            >
              <p className="text-[10px] font-medium text-white/70">Year {hovered}</p>
              <p className="text-sm font-bold text-white">
                {formatINR(yearlyData[hovered - 1].cumulative)}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {paybackYears > 0 && (
        <motion.p
          key={paybackYears}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-center text-sm text-slate-600"
        >
          Payback in approximately{" "}
          <span className="font-bold text-accent-deep">{paybackYears} years</span>
        </motion.p>
      )}
    </div>
  );
}
