export interface ProjectItem {
  id: string;
  title: string;
  category: "Residential" | "Apartments" | "Commercial" | "Industrial";
  location: string;
  capacity: string;
  annualGeneration: string;
  mountingType: string;
  inverterSetup: string;
  image: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Urban Industrial Rooftop Array",
    category: "Industrial",
    location: "Peenya Industrial Area, Bengaluru",
    capacity: "250 kWp",
    annualGeneration: "365,000 kWh / Year",
    mountingType: "Non-penetrative standing-seam aluminum clamps",
    inverterSetup: "3x 80 kW string inverters with cloud SCADA telemetry",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1400&auto=format&fit=crop",
    description:
      "Engineered for an intensive daytime precision manufacturing plant. The array synchronizes directly with high-tension utility switchgear and features automated reverse-power protection for seamless factory load displacement.",
    highlights: [
      "Zero roof penetrations preserving factory building warranty",
      "DG-PV synchronisation controller reducing daytime diesel run hours",
      "Real-time string-level current monitoring via local industrial gateway",
    ],
    featured: true,
  },
  {
    id: "proj-2",
    title: "Gated Housing Society Common-Area Array",
    category: "Apartments",
    location: "East Bengaluru",
    capacity: "85 kWp",
    annualGeneration: "124,000 kWh / Year",
    mountingType: "Elevated hot-dip galvanized steel pergola (9ft clearance)",
    inverterSetup: "Centralized multi-MPPT grid-tied inverters with dual chemical earthing",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1400&auto=format&fit=crop",
    description:
      "Installed over multi-tower utility terraces to offset 100% of common electricity loads, including 8 passenger elevators, sewage treatment plant (STP) blowers, and campus pathway illumination.",
    highlights: [
      "Retains complete resident walking and utility space beneath the superstructure",
      "Dedicated DISCOM bi-directional net meter for common society billing",
      "Reduced monthly society maintenance fund overhead by ~42%",
    ],
    featured: true,
  },
  {
    id: "proj-3",
    title: "Private Contemporary Residence",
    category: "Residential",
    location: "Sadashivanagar, Bengaluru",
    capacity: "12 kWp",
    annualGeneration: "17,500 kWh / Year",
    mountingType: "Architectural low-profile flush mounting on ceramic tile roof",
    inverterSetup: "Hybrid 10 kW battery-ready inverter with rapid automatic transfer switch",
    image:
      "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1400&auto=format&fit=crop",
    description:
      "An all-black mono PERC architectural rooftop system engineered to match modern villa aesthetics while providing uninterrupted back-up power for climate control, home automation, and EV charging.",
    highlights: [
      "All-black aesthetic modules with concealed conduit routing",
      "Lithium battery storage providing silent emergency power during grid blackouts",
      "High-efficiency TopCon mono-crystalline modules with positive power tolerance",
    ],
    featured: true,
  },
  {
    id: "proj-4",
    title: "Logistics & Warehousing Facility",
    category: "Commercial",
    location: "Hosur Road Industrial Corridor",
    capacity: "400 kWp",
    annualGeneration: "585,000 kWh / Year",
    mountingType: "Lightweight aluminum rail clamps with continuous lifeline fall arresters",
    inverterSetup: "4x 100 kW centralized utility inverters with LT panel room tie-in",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1400&auto=format&fit=crop",
    description:
      "Spanning across 35,000 sq.ft of corrugated logistics roof sheets, this installation supplies daytime energy to cold storage chillers and material handling equipment with automated power-factor correction.",
    highlights: [
      "Comprehensive perimeter safety walkways and certified lifeline cables",
      "Automated power factor correction (APFC) relay coordination",
      "Expected levelized cost of energy (LCOE) locked under ₹3.20/kWh",
    ],
    featured: false,
  },
  {
    id: "proj-5",
    title: "Residential Villa Estate Installation",
    category: "Residential",
    location: "Whitefield, Bengaluru",
    capacity: "15 kWp",
    annualGeneration: "21,800 kWh / Year",
    mountingType: "Custom south-facing tilted aluminum structure with shadow buffer",
    inverterSetup: "Dual string inverters with integrated lightning surge arrestors",
    image:
      "https://images.unsplash.com/photo-1780445392694-c95056ed12e2?q=80&w=1400&auto=format&fit=crop",
    description:
      "Tailored for a multi-story residence with complex terrace shading profiles. 3D shadow modeling determined optimal string layout to bypass parapet and pergola shading throughout winter and summer solstices.",
    highlights: [
      "3D shadow simulation ensuring zero solar clipping between 9 AM and 4 PM",
      "Type-2 surge protection devices protecting high-end home electronics",
      "Mobile IoT app providing live solar vs grid consumption split",
    ],
    featured: false,
  },
  {
    id: "proj-6",
    title: "Commercial Office Park Rooftop",
    category: "Commercial",
    location: "Electronic City, Bengaluru",
    capacity: "180 kWp",
    annualGeneration: "260,000 kWh / Year",
    mountingType: "Ballasted concrete sleeper mounting preserving terrace waterproofing",
    inverterSetup: "2x 90 kW grid-interactive inverters tied into main distribution board",
    image:
      "https://images.unsplash.com/photo-1745187794292-ba0014281746?q=80&w=1400&auto=format&fit=crop",
    description:
      "Rooftop solar power installation powering central HVAC chiller pumps and internal building illumination, structured under an enterprise sustainability mandate with carbon credit tracking.",
    highlights: [
      "Zero terrace membrane punctures using structural concrete ballast",
      "Sub-metering per building wing for internal ESG energy auditing",
      "Over 210 metric tonnes of carbon emissions offset per annum",
    ],
    featured: false,
  },
];
