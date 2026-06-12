import { images } from "./images";

export interface Project {
  slug: string;
  name: string;
  location: string;
  capacity: string;
  year: number;
  category: "residential" | "commercial" | "industrial";
  image: string;
  images: string[];
  description: string;
  technology: string[];
  benefits: string[];
}

export const projects: Project[] = [
  {
    slug: "gurugram-tech-park",
    name: "Gurugram Tech Park",
    location: "Gurugram, Haryana",
    capacity: "2.5 MW",
    year: 2025,
    category: "commercial",
    image: images.commercial,
    images: [images.commercial, images.solar],
    description:
      "A landmark commercial rooftop installation powering a 12-acre tech campus with tier-1 modules and centralized monitoring.",
    technology: ["Mono PERC 540W Panels", "String Inverters", "SCADA Monitoring"],
    benefits: ["40% energy cost reduction", "LEED certification support", "5-year performance guarantee"],
  },
  {
    slug: "faridabad-manufacturing",
    name: "Faridabad Manufacturing Hub",
    location: "Faridabad, Haryana",
    capacity: "5 MW",
    year: 2024,
    category: "industrial",
    image: images.industrial,
    images: [images.industrial, images.industrialHero],
    description:
      "Industrial-scale rooftop solar for a leading auto components manufacturer, integrated with existing power infrastructure.",
    technology: ["Bifacial 550W Panels", "Central Inverters", "Energy Management System"],
    benefits: ["₹4.2 Cr annual savings", "Reduced carbon footprint by 6,500 tons/year", "Open access integration"],
  },
  {
    slug: "delhi-residential-complex",
    name: "Delhi Residential Complex",
    location: "New Delhi",
    capacity: "800 kW",
    year: 2024,
    category: "residential",
    image: images.residential,
    images: [images.residential, images.solar],
    description:
      "Community solar installation across 200+ residential units with individual net metering and shared common area systems.",
    technology: ["Mono PERC 450W Panels", "Micro Inverters", "Mobile Monitoring App"],
    benefits: ["Average 85% bill reduction per unit", "Subsidy facilitation for all residents", "10-year O&M contract"],
  },
  {
    slug: "noida-warehouse",
    name: "Noida Logistics Warehouse",
    location: "Noida, UP",
    capacity: "1.8 MW",
    year: 2023,
    category: "commercial",
    image: images.industrialAlt,
    images: [images.industrialAlt, images.commercial],
    description:
      "Large-format warehouse rooftop solar maximizing unused roof space for a leading logistics provider.",
    technology: ["Mono PERC 530W Panels", "String Inverters", "Drone Inspection Ready"],
    benefits: ["35% operational cost savings", "Rooftop utilization of 95%", "3-year payback period"],
  },
  {
    slug: "jaipur-hospital",
    name: "Jaipur Multi-Specialty Hospital",
    location: "Jaipur, Rajasthan",
    capacity: "1.2 MW",
    year: 2023,
    category: "commercial",
    image: images.commercial,
    images: [images.commercial, images.solar],
    description:
      "Critical infrastructure solar backup for a 500-bed hospital ensuring uninterrupted power for life-saving equipment.",
    technology: ["High-efficiency 540W Panels", "Hybrid Inverters", "Battery Backup Integration"],
    benefits: ["99.9% uptime for critical loads", "₹1.8 Cr annual savings", "Green hospital certification"],
  },
  {
    slug: "pune-school-campus",
    name: "Pune International School",
    location: "Pune, Maharashtra",
    capacity: "350 kW",
    year: 2025,
    category: "commercial",
    image: images.school,
    images: [images.school, images.solar],
    description:
      "Educational campus solar with integrated learning modules teaching students about renewable energy.",
    technology: ["Mono PERC 420W Panels", "Educational Dashboard", "Net Metering"],
    benefits: ["100% common area power offset", "Student sustainability curriculum", "Government subsidy secured"],
  },
];

export const industries = [
  { title: "Residential", icon: "home", description: "Homes & housing societies" },
  { title: "Commercial", icon: "building", description: "Offices & retail spaces" },
  { title: "Industrial", icon: "factory", description: "Factories & plants" },
  { title: "Schools", icon: "graduation", description: "Educational institutions" },
  { title: "Hospitals", icon: "heart", description: "Healthcare facilities" },
  { title: "Warehouses", icon: "warehouse", description: "Logistics & storage" },
  { title: "Manufacturing", icon: "cog", description: "Production units" },
];

export const processSteps = [
  { step: 1, title: "Consultation", description: "Understanding your energy needs and goals" },
  { step: 2, title: "Site Survey", description: "Detailed assessment of your property" },
  { step: 3, title: "Engineering Design", description: "Custom system design and optimization" },
  { step: 4, title: "Procurement", description: "Sourcing premium tier-1 components" },
  { step: 5, title: "Installation", description: "Professional mounting and wiring" },
  { step: 6, title: "Testing", description: "Rigorous quality and safety checks" },
  { step: 7, title: "Commissioning", description: "Grid connection and system activation" },
  { step: 8, title: "Monitoring", description: "Ongoing performance tracking and support" },
];

export const whySolar = [
  {
    title: "Reduced Electricity Bills",
    description: "Cut your energy costs by up to 90% with clean solar power generation.",
    icon: "trending-down",
  },
  {
    title: "Sustainability",
    description: "Reduce your carbon footprint and contribute to India's renewable energy goals.",
    icon: "leaf",
  },
  {
    title: "Government Incentives",
    description: "Benefit from subsidies, tax benefits, and accelerated depreciation schemes.",
    icon: "award",
  },
  {
    title: "Long-Term ROI",
    description: "Achieve payback in 3-5 years with 25+ years of free electricity generation.",
    icon: "chart",
  },
  {
    title: "Energy Independence",
    description: "Reduce dependence on grid power and protect against rising electricity tariffs.",
    icon: "zap",
  },
];
