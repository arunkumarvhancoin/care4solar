export interface CostFactor {
  title: string;
  description: string;
}

export const costFactors: CostFactor[] = [
  {
    title: "Required System Capacity",
    description:
      "The total kilowatt-peak (kWp) required to meet your electricity consumption directly governs the number of solar modules, inverters, and structural materials needed.",
  },
  {
    title: "Panel Technology & Specification",
    description:
      "Selection between Mono PERC, TopCon, or Bifacial photovoltaic modules influences efficiency, temperature coefficient, and hardware expenditure.",
  },
  {
    title: "Inverter Architecture",
    description:
      "Whether the installation utilizes standard string inverters, hybrid inverters with energy storage readiness, or micro-inverters impacts the total electrical investment.",
  },
  {
    title: "Mounting Structure & Terrace Height",
    description:
      "Standard flush-mount rails, elevated super-structures, ballast blocks, or custom wind-engineered galvanized steel fabrications have different structural requirements.",
  },
  {
    title: "Rooftop Complexity & Accessibility",
    description:
      "Roof material (RCC concrete, tin sheet, clay tiles), elevation height, accessibility for lifting equipment, and shading obstacles influence labor and engineering design.",
  },
  {
    title: "Electrical Balance of System (BOS)",
    description:
      "Cable run lengths, AC/DC distribution boxes, dedicated chemical earthing pits, Type-2 surge protection devices (SPDs), and dual lightning arrestors ensure code-compliant safety.",
  },
  {
    title: "Government Subsidy Eligibility",
    description:
      "For eligible residential homeowners, government schemes like PM Surya Ghar may offset the net expenditure, subject to official scheme rules and DISCOM processing.",
  },
];

export interface PackageTier {
  name: string;
  badge: string;
  tagline: string;
  description: string;
  suitableFor: string;
  features: string[];
}

export const packageTiers: PackageTier[] = [
  {
    name: "Essential",
    badge: "Configurable Placeholder",
    tagline: "Reliable grid-tied solar foundation for standard residential roofs.",
    description:
      "Engineered for homeowners seeking a proven, high-efficiency solar system adhering strictly to standard grid-tied parameters.",
    suitableFor: "Standard residential homes with clear unshaded rooftop areas.",
    features: [
      "Tier-1 Mono-crystalline PV modules [Subject to selection]",
      "Standard high-efficiency string inverter",
      "Standard hot-dip galvanized mounting structures",
      "Basic AC/DC distribution protection & chemical earthing",
      "Web/App-based digital generation monitoring",
      "Net-metering documentation & liaison guidance",
    ],
  },
  {
    name: "Enhanced",
    badge: "Configurable Placeholder",
    tagline: "High-yield configuration with advanced protection & elevated mounting.",
    description:
      "Designed for premises with partial shading or requiring elevated mounting to maintain usable rooftop recreational space.",
    suitableFor: "Villas, multi-level homes, and small commercial rooftops.",
    features: [
      "High-efficiency TopCon / Mono PERC modules",
      "Multi-MPPT string inverter for dual-roof orientations",
      "Elevated or customized structural steel fabrication",
      "Dual chemical earthing pits & advanced class-II surge protection",
      "Real-time string-level telemetry with mobile alerts",
      "Comprehensive commissioning and handover testing",
    ],
  },
  {
    name: "Premium",
    badge: "Configurable Placeholder",
    tagline: "Future-ready hybrid architecture with energy resilience options.",
    description:
      "Comprehensive infrastructure engineered for high energy independence, battery backup readiness, and maximum architectural integration.",
    suitableFor: "Luxury residences, institutional setups, and estates.",
    features: [
      "Ultra-high efficiency all-black or bifacial modules",
      "Hybrid inverter architecture (battery storage ready)",
      "Engineered architectural structures with walkways and lifelines",
      "Industrial-grade switchgear, isolators, and heavy-duty cabling",
      "Full IoT sensor telemetry and health monitoring",
      "Dedicated priority service and scheduled maintenance care",
    ],
  },
];

export const inclusionsList = [
  {
    title: "Comprehensive Site Feasibility & Shadow Study",
    status: "Configurable / Subject to Quotation",
  },
  {
    title: "Custom 3D Engineering Layout & Single Line Diagram (SLD)",
    status: "Configurable / Subject to Quotation",
  },
  {
    title: "Photovoltaic Modules & Verified Inverter Hardware",
    status: "Configurable / Subject to Quotation",
  },
  {
    title: "Wind-load Rated Hot-Dip Galvanized Mounting Structures",
    status: "Configurable / Subject to Quotation",
  },
  {
    title: "Certified UV-Resistant DC Solar Cables & Conduit Routing",
    status: "Configurable / Subject to Quotation",
  },
  {
    title: "AC/DC Distribution Boxes with Dual Surge Protection (SPDs)",
    status: "Configurable / Subject to Quotation",
  },
  {
    title: "Dedicated Copper-bonded Chemical Earthing & Lightning Arrestor",
    status: "Configurable / Subject to Quotation",
  },
  {
    title: "Professional Installation & Safe Rooftop Mechanical Fixing",
    status: "Configurable / Subject to Quotation",
  },
  {
    title: "Testing, Inverter Synchronization & Commissioning",
    status: "Configurable / Subject to Quotation",
  },
  {
    title: "Assistance with DISCOM Net-Metering Application Filings",
    status: "Configurable / Subject to Quotation",
  },
];
