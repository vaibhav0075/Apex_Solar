import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";

const baseUrl = "https://apexsolarinfra.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/case-studies",
    "/calculator",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudyPages = caseStudies.map((s) => ({
    url: `${baseUrl}/case-studies/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...caseStudyPages];
}
