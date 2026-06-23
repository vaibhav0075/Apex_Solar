"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface RangeSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  formatValue?: (value: number) => string;
  onChange: (value: number) => void;
  className?: string;
}

export default function RangeSlider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  formatValue,
  onChange,
  className,
}: RangeSliderProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value.toString());
  const percent = ((value - min) / (max - min)) * 100;
  const display = formatValue ? formatValue(value) : `${value.toLocaleString("en-IN")}${unit}`;

  const handleBlur = () => {
    let parsed = Number(tempValue.replace(/[^0-9]/g, ""));
    if (isNaN(parsed)) parsed = value;
    if (parsed < min) parsed = min;
    if (parsed > max) parsed = max;
    onChange(parsed);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-end justify-between gap-4">
        <label className="text-base font-medium text-foreground">{label}</label>
        {isEditing ? (
          <input
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className="w-32 rounded-lg bg-primary/15 px-3 py-1 text-lg font-bold text-accent-deep tabular-nums outline-none ring-2 ring-primary/50"
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setTempValue(formatValue ? value.toString() : value.toLocaleString("en-IN"));
              setIsEditing(true);
            }}
            className="rounded-lg bg-primary/15 px-3 py-1 text-lg font-bold text-accent-deep tabular-nums hover:bg-primary/20 transition-colors"
          >
            {display}
          </button>
        )}
      </div>

      <div className="relative">
        <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
            style={{ width: `${percent}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="range-slider absolute inset-0 h-2.5 w-full cursor-pointer appearance-none bg-transparent"
          aria-label={label}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
        />
      </div>

      <div className="flex justify-between text-xs text-slate-400">
        <span>
          {formatValue ? formatValue(min) : `${min.toLocaleString("en-IN")}${unit}`}
        </span>
        <span>
          {formatValue ? formatValue(max) : `${max.toLocaleString("en-IN")}${unit}`}
        </span>
      </div>
    </div>
  );
}
