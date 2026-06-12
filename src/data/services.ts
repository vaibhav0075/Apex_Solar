import { images } from "./images";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  benefits: string[];
  features: string[];
  process: string[];
}

export const services: Service[] = [
  {
    id: "residential-solar",
    title: "Residential Solar",
    shortDescription: "Premium rooftop systems for homes with smart monitoring and maximum savings.",
    description:
      "Transform your home into a clean energy powerhouse. Our residential solar solutions are engineered for Indian rooftops — delivering optimal generation, seamless grid integration, and significant electricity bill reduction.",
    image: images.residential,
    icon: "home",
    benefits: [
      "Up to 90% reduction in electricity bills",
      "Government subsidy eligibility assistance",
      "25-year panel performance warranty",
      "Real-time energy monitoring app",
    ],
    features: [
      "Custom system sizing",
      "Net metering support",
      "Premium tier-1 panels",
      "Battery-ready design",
    ],
    process: [
      "Free home energy assessment",
      "Roof structural analysis",
      "Custom system design",
      "Professional installation",
      "Grid connection & commissioning",
    ],
  },
  {
    id: "commercial-solar",
    title: "Commercial Solar",
    shortDescription: "Scalable solar solutions for offices, retail, and commercial complexes.",
    description:
      "Reduce operational costs and demonstrate sustainability leadership. Our commercial installations are designed for high ROI, minimal business disruption, and compliance with green building standards.",
    image: images.commercial,
    icon: "building",
    benefits: [
      "Accelerated depreciation benefits",
      "Reduced peak demand charges",
      "Enhanced brand sustainability image",
      "Predictable long-term energy costs",
    ],
    features: [
      "Load analysis & optimization",
      "Rooftop & carport solutions",
      "Corporate ESG reporting support",
      "AMC packages available",
    ],
    process: [
      "Energy audit & feasibility study",
      "Financial modeling & ROI analysis",
      "Engineering & regulatory approvals",
      "Phased installation planning",
      "Performance monitoring setup",
    ],
  },
  {
    id: "industrial-solar",
    title: "Industrial Solar",
    shortDescription: "High-capacity installations for factories, plants, and manufacturing units.",
    description:
      "Power your industrial operations with reliable, large-scale solar infrastructure. We engineer systems that withstand harsh environments while delivering consistent, high-volume energy generation.",
    image: images.industrial,
    icon: "factory",
    benefits: [
      "Significant reduction in energy OPEX",
      "Open access & captive power options",
      "Carbon credit eligibility",
      "Enhanced operational resilience",
    ],
    features: [
      "MW-scale project execution",
      "Ground-mounted & rooftop systems",
      "Hybrid & storage integration",
      "SCADA monitoring systems",
    ],
    process: [
      "Site feasibility & land assessment",
      "Detailed engineering design",
      "Regulatory & DISCOM approvals",
      "EPC execution & quality control",
      "Long-term O&M partnership",
    ],
  },
  {
    id: "epc-services",
    title: "EPC Solutions",
    shortDescription: "End-to-end engineering, procurement, and construction for solar projects.",
    description:
      "As a full-service EPC contractor, Apex Solar manages every phase of your solar project — from concept to commissioning — with rigorous quality standards and on-time delivery.",
    image: images.industrialHero,
    icon: "wrench",
    benefits: [
      "Single-point project accountability",
      "Optimized procurement & logistics",
      "Rigorous quality assurance",
      "On-schedule project delivery",
    ],
    features: [
      "Detailed BOQ & cost engineering",
      "Vendor management",
      "Construction supervision",
      "Testing & commissioning",
    ],
    process: [
      "Project scoping & feasibility",
      "Engineering design package",
      "Procurement & supply chain",
      "Construction & installation",
      "Testing, commissioning & handover",
    ],
  },
  {
    id: "solar-infrastructure",
    title: "Solar Infrastructure",
    shortDescription: "Large-scale solar parks and renewable energy infrastructure development.",
    description:
      "We develop and deploy solar infrastructure at scale — from distributed generation networks to utility-scale solar parks that power communities and industries.",
    image: images.solar,
    icon: "grid",
    benefits: [
      "Scalable infrastructure development",
      "Land & regulatory expertise",
      "Grid integration planning",
      "Long-term asset management",
    ],
    features: [
      "Solar park development",
      "Transmission infrastructure",
      "Land acquisition support",
      "PPA structuring assistance",
    ],
    process: [
      "Site identification & due diligence",
      "Master planning & design",
      "Regulatory clearances",
      "Construction & grid connection",
      "Operations transfer",
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription: "Proactive O&M services to maximize system performance and lifespan.",
    description:
      "Protect your solar investment with our comprehensive operation and maintenance services. Our trained technicians ensure peak performance through preventive maintenance, rapid fault resolution, and performance analytics.",
    image: images.industrialAlt,
    icon: "shield",
    benefits: [
      "Maximized energy yield",
      "Extended system lifespan",
      "Reduced downtime",
      "Detailed performance reporting",
    ],
    features: [
      "Preventive maintenance schedules",
      "Thermal imaging inspections",
      "Panel cleaning services",
      "Remote monitoring & alerts",
    ],
    process: [
      "System health assessment",
      "Customized AMC planning",
      "Scheduled maintenance visits",
      "Performance optimization",
      "Annual health reports",
    ],
  },
];
