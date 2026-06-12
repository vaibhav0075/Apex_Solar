"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator,
  Zap,
  IndianRupee,
  TrendingDown,
  Clock,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LiveStat from "@/components/calculator/LiveStat";
import RangeSlider from "@/components/calculator/RangeSlider";
import SavingsChart from "@/components/calculator/SavingsChart";
import BillComparisonChart from "@/components/calculator/BillComparisonChart";
import ROIGauge from "@/components/calculator/ROIGauge";
import {
  propertyTypes,
  calculateSolar,
  formatINR,
  type PropertyTypeId,
} from "@/lib/calculator";

export default function SolarCalculator() {
  const [bill, setBill] = useState(5000);
  const [roofArea, setRoofArea] = useState(1000);
  const [propertyType, setPropertyType] = useState<PropertyTypeId>("residential");

  const results = useMemo(
    () => calculateSolar({ bill, roofArea, propertyType }),
    [bill, roofArea, propertyType]
  );

  const statCards = [
    {
      icon: Zap,
      label: "System Size",
      value: results.systemSize,
      suffix: " kW",
      decimals: 1,
      color: "text-primary",
    },
    {
      icon: IndianRupee,
      label: "Estimated Cost",
      display: formatINR(results.estimatedCost),
      color: "text-accent-deep",
    },
    {
      icon: TrendingDown,
      label: "Annual Savings",
      display: formatINR(results.annualSavings),
      color: "text-accent",
    },
    {
      icon: Clock,
      label: "Payback Period",
      value: results.paybackYears,
      suffix: " yrs",
      decimals: 1,
      color: "text-primary",
    },
    {
      icon: Leaf,
      label: "CO₂ Reduced / yr",
      value: results.co2Reduced,
      suffix: " tons",
      decimals: 1,
      color: "text-accent-deep",
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Inputs */}
      <Card className="overflow-hidden lg:col-span-2">
        <CardContent className="p-6 md:p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Calculator className="h-6 w-6 text-accent-deep" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Your Details</h2>
              <p className="text-sm text-slate-500">Drag sliders to see live estimates</p>
            </div>
          </div>

          <div className="space-y-8">
            <RangeSlider
              label="Monthly Electricity Bill"
              value={bill}
              min={500}
              max={500000}
              step={500}
              formatValue={(v) => formatINR(v)}
              onChange={setBill}
            />

            <RangeSlider
              label="Available Roof Area"
              value={roofArea}
              min={100}
              max={50000}
              step={50}
              unit=" sq.ft"
              onChange={setRoofArea}
            />

            <div>
              <label className="mb-3 block text-base font-medium text-foreground">
                Property Type
              </label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {propertyTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setPropertyType(type.id)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      propertyType === type.id
                        ? "bg-accent-deep text-white shadow-lg shadow-accent-deep/20"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Button asChild variant="primary" size="lg" className="mt-8 w-full">
            <Link href="/contact">
              Get Detailed Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Live results + charts */}
      <div className="space-y-6 lg:col-span-3">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {statCards.map((item, i) => (
            <motion.div
              key={item.label}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg bg-slate-50 p-2 ${item.color}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  {"display" in item && item.display ? (
                    <div>
                      <motion.p
                        key={item.display}
                        initial={{ opacity: 0.6, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold tabular-nums text-accent-deep"
                      >
                        {item.display}
                      </motion.p>
                      <p className="mt-0.5 text-sm font-medium text-slate-500">{item.label}</p>
                    </div>
                  ) : (
                    <LiveStat
                      value={item.value!}
                      label={item.label}
                      suffix={item.suffix}
                      decimals={item.decimals}
                    />
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <BillComparisonChart
          currentBill={bill}
          afterSolar={results.monthlyAfterSolar}
          monthlySavings={results.monthlySavings}
        />

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          <SavingsChart
            yearlyData={results.yearlyData}
            paybackYears={results.paybackYears}
          />
          <ROIGauge
            roi={results.roi}
            paybackYears={results.paybackYears}
            lifetimeSavings={results.lifetimeSavings}
          />
        </div>

        <p className="text-center text-xs text-slate-400">
          * Estimates are indicative based on average Indian tariffs and irradiance. Actual
          values depend on location, shading, and system design. Contact us for a detailed
          proposal.
        </p>
      </div>
    </div>
  );
}
