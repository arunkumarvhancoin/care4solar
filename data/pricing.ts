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
  indicativeRange: string;
  suitableFor: string;
  features: string[];
}

export const packageTiers: PackageTier[] = [
  {
    name: "Essential",
    badge: "Standard On-Grid",
    tagline: "Reliable grid-tied solar foundation for standard residential roofs.",
    indicativeRange: "₹55,000 – ₹62,000 / kWp",
    description:
      "Engineered for homeowners seeking a proven, high-efficiency solar system adhering strictly to standard grid-tied parameters.",
    suitableFor: "Standard residential homes with clear unshaded rooftop areas.",
    features: [
      "Tier-1 Mono-crystalline PV modules (DCR compliant)",
      "High-efficiency string inverter (IP65 rated)",
      "Hot-dip galvanized mounting structures (tested to 150 km/h wind)",
      "Standard AC/DC distribution protection & chemical earthing",
      "Web & app-based digital generation telemetry",
      "End-to-end DISCOM net-metering documentation liaison",
    ],
  },
  {
    name: "Enhanced",
    badge: "High-Performance",
    tagline: "High-yield configuration with advanced protection & elevated mounting.",
    indicativeRange: "₹65,000 – ₹74,000 / kWp",
    description:
      "Designed for premises with partial shading or requiring elevated mounting to maintain usable rooftop recreational space.",
    suitableFor: "Villas, multi-level homes, and small commercial rooftops.",
    features: [
      "High-efficiency TopCon / Mono PERC modules with low temperature coefficient",
      "Multi-MPPT string inverter for dual-roof orientations",
      "Elevated super-structure retaining full usable terrace space",
      "Dual chemical earthing pits & Class-II surge protection devices (SPD)",
      "Real-time string-level telemetry with automated anomaly alerts",
      "Comprehensive commissioning and electrical handover testing",
    ],
  },
  {
    name: "Premium",
    badge: "Hybrid Battery-Ready",
    tagline: "Future-ready hybrid architecture with energy resilience options.",
    indicativeRange: "₹80,000 – ₹95,000 / kWp",
    description:
      "Comprehensive infrastructure engineered for high energy independence, battery backup readiness, and maximum architectural integration.",
    suitableFor: "Luxury residences, institutional campuses, and mission-critical facilities.",
    features: [
      "Ultra-high efficiency all-black or bifacial monocrystalline modules",
      "Intelligent hybrid inverter architecture with lithium battery readiness",
      "Engineered architectural structures with technician walkways and lifelines",
      "Industrial-grade switchgear, isolators, and heavy-duty UV solar cabling",
      "Full IoT sensor telemetry and health monitoring suite",
      "Dedicated priority service and scheduled annual maintenance coverage",
    ],
  },
];

export const inclusionsList = [
  {
    title: "Comprehensive Site Feasibility & 3D Shadow Study",
    status: "Standard Engineering Deliverable",
  },
  {
    title: "Electrical Single Line Diagram (SLD) & Structural Design",
    status: "Standard Engineering Deliverable",
  },
  {
    title: "Tier-1 Photovoltaic Modules & Verified Grid-Tied Inverter",
    status: "Included as Standard",
  },
  {
    title: "Wind-Load Rated Hot-Dip Galvanized Mounting Structures",
    status: "IS 4759 Certified Standard",
  },
  {
    title: "UV-Resistant DC Solar Cables & Heavy-Duty Conduit Routing",
    status: "Class-A Fire & UV Rated",
  },
  {
    title: "AC/DC Distribution Boxes with Dual Class-II Surge Protection (SPDs)",
    status: "Integrated Protection",
  },
  {
    title: "Dedicated Copper-Bonded Chemical Earthing & Lightning Arrestor",
    status: "Tested Resistance < 2 Ohms",
  },
  {
    title: "Professional Mechanical Installation & Cable Terminations",
    status: "Safety Certified Execution",
  },
  {
    title: "Inverter Synchronization, Testing & Commissioning",
    status: "Pre-Handover Verification",
  },
  {
    title: "DISCOM Net-Metering Application & Inspection Liaison",
    status: "Full Regulatory Support",
  },
];
