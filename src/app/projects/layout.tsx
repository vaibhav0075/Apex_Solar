import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Apex Solar Infra's portfolio of residential, commercial, and industrial solar installations across India.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
