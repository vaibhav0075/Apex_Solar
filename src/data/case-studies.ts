import { images } from "./images";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  challenge: string;
  solution: string;
  process: string[];
  results: string[];
  savings: string;
  roi: string;
  capacity: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "auto-components-manufacturer",
    title: "5 MW Industrial Solar Transformation",
    client: "Leading Auto Components Manufacturer",
    industry: "Manufacturing",
    image: images.industrialHero,
    challenge:
      "Rising electricity costs consuming 18% of operational expenses, with peak demand charges during production hours causing unpredictable monthly bills exceeding ₹45 lakhs.",
    solution:
      "Designed and deployed a 5 MW rooftop solar system with central inverters, integrated with existing HT infrastructure and open access power purchase agreement for surplus generation.",
    process: [
      "Comprehensive energy audit across 3 manufacturing units",
      "Structural engineering assessment of 2.5 lakh sq.ft rooftop",
      "Phased installation during scheduled maintenance windows",
      "SCADA integration with existing energy management system",
      "DISCOM approval and net metering commissioning",
    ],
    results: [
      "42% reduction in total energy costs",
      "6,500 tons CO₂ avoided annually",
      "Peak demand charges reduced by 60%",
      "System availability exceeding 98.5%",
    ],
    savings: "₹4.2 Crore annually",
    roi: "3.2 years",
    capacity: "5 MW",
  },
  {
    slug: "hospital-critical-power",
    title: "Hospital Critical Power Solar Solution",
    client: "Multi-Specialty Hospital, Jaipur",
    industry: "Healthcare",
    image: images.commercial,
    challenge:
      "A 500-bed hospital required reliable, cost-effective power for critical care units while managing ₹15 lakh monthly electricity bills and maintaining 24/7 uptime requirements.",
    solution:
      "Hybrid solar system with 1.2 MW capacity, battery backup for critical loads, and intelligent load management prioritizing ICU and operation theatre power requirements.",
    process: [
      "Critical load mapping and redundancy planning",
      "Hybrid inverter system design with UPS integration",
      "Night-time installation to minimize disruption",
      "Staff training on system monitoring",
      "Emergency backup protocol establishment",
    ],
    results: [
      "99.9% uptime for critical medical equipment",
      "₹1.8 Crore annual electricity savings",
      "Green hospital certification achieved",
      "Patient comfort improved with stable power supply",
    ],
    savings: "₹1.8 Crore annually",
    roi: "4.1 years",
    capacity: "1.2 MW",
  },
  {
    slug: "logistics-warehouse-solar",
    title: "Warehouse Rooftop Solar Optimization",
    client: "National Logistics Provider",
    industry: "Warehousing",
    image: images.industrialAlt,
    challenge:
      "A 4 lakh sq.ft warehouse with vast unused rooftop space and high daytime energy consumption for climate control and automated sorting systems.",
    solution:
      "1.8 MW rooftop installation utilizing 95% of available roof area with drone-accessible design for efficient maintenance and thermal monitoring.",
    process: [
      "Roof load capacity and waterproofing assessment",
      "Optimized panel layout for maximum coverage",
      "Cable routing through existing infrastructure",
      "Integration with warehouse BMS",
      "Annual maintenance contract with drone inspections",
    ],
    results: [
      "35% reduction in warehouse operational costs",
      "3-year payback period achieved",
      "Roof lifespan extended with panel protection",
      "ESG reporting metrics improved significantly",
    ],
    savings: "₹95 Lakhs annually",
    roi: "3.0 years",
    capacity: "1.8 MW",
  },
];
