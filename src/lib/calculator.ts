export const propertyTypes = [
  { id: "residential", label: "Residential", factor: 1.0, costPerKw: 55000 },
  { id: "commercial", label: "Commercial", factor: 0.9, costPerKw: 50000 },
  { id: "industrial", label: "Industrial", factor: 0.85, costPerKw: 45000 },
] as const;

export type PropertyTypeId = (typeof propertyTypes)[number]["id"];

export interface CalculatorInput {
  bill: number;
  roofArea: number;
  propertyType: PropertyTypeId;
}

export interface CalculatorResults {
  systemSize: number;
  estimatedCost: number;
  annualSavings: number;
  monthlySavings: number;
  monthlyAfterSolar: number;
  paybackYears: number;
  roi: number;
  lifetimeSavings: number;
  co2Reduced: number;
  yearlyData: { year: number; savings: number; cumulative: number; investment: number }[];
}

export function calculateSolar(input: CalculatorInput): CalculatorResults {
  const type = propertyTypes.find((p) => p.id === input.propertyType) ?? propertyTypes[0];
  const monthlyUnits = input.bill / 8;
  const rawSize = (monthlyUnits / 120) * type.factor;
  const roofLimit = input.roofArea / 100;
  const systemSize = Math.max(1, Math.min(Math.round(rawSize * 10) / 10, roofLimit));

  const estimatedCost = Math.round(systemSize * type.costPerKw);
  const monthlySavings = Math.round(input.bill * 0.85);
  const monthlyAfterSolar = input.bill - monthlySavings;
  const annualSavings = monthlySavings * 12;
  const paybackYears =
    annualSavings > 0 ? Math.round((estimatedCost / annualSavings) * 10) / 10 : 0;
  const lifetimeYears = 25;
  const lifetimeSavings = annualSavings * lifetimeYears - estimatedCost;
  const roi =
    estimatedCost > 0
      ? Math.round(((annualSavings * lifetimeYears - estimatedCost) / estimatedCost) * 100)
      : 0;
  const co2Reduced = Math.round(systemSize * 1.2 * 12 * 10) / 10;

  const yearlyData = Array.from({ length: lifetimeYears }, (_, i) => {
    const year = i + 1;
    const savings = annualSavings * year;
    return {
      year,
      savings: annualSavings,
      cumulative: savings,
      investment: estimatedCost,
    };
  });

  return {
    systemSize,
    estimatedCost,
    annualSavings,
    monthlySavings,
    monthlyAfterSolar,
    paybackYears,
    roi,
    lifetimeSavings,
    co2Reduced,
    yearlyData,
  };
}

export function formatINR(value: number): string {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
  return `₹${value.toLocaleString("en-IN")}`;
}
