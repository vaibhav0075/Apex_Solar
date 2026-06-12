import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Calculator",
  description:
    "Calculate your ideal solar system size, estimated cost, annual savings, ROI, and payback period with Apex Solar's free calculator.",
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
