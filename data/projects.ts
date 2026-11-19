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
    mountingType: "Leak-proof standing-seam roof clamps",
    inverterSetup: "3x 80 kW string inverters with online monitoring",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1400&auto=format&fit=crop",
    description:
      "Installed on a precision manufacturing facility to run machinery and factory equipment directly during daytime peak hours.",
    highlights: [
      "Zero roof drilling, preserving factory roof warranty",
      "Smart generator controller saves diesel during power cuts",
      "Live performance tracking on mobile and desktop",
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
    mountingType: "Elevated steel pergola with 9ft roof clearance",
    inverterSetup: "Centralized grid-tied inverters with safety earthing",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1400&auto=format&fit=crop",
    description:
      "Installed over apartment rooftops to power common utilities, including 8 elevators, water treatment plants, and campus lighting.",
    highlights: [
      "Full walking and terrace space preserved for residents",
      "Connected to common-area meter via net metering",
      "Cut monthly society maintenance costs by ~42%",
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
    mountingType: "Low-profile roof mounting for villa aesthetic",
    inverterSetup: "Hybrid inverter with battery backup",
    image:
      "https://images.unsplash.com/photo-1780445392792-556e5609c5ab?q=80&w=1400&auto=format&fit=crop",
    description:
      "All-black solar panels designed to blend with contemporary villa architecture while providing silent backup for air conditioning and EV charging.",
    highlights: [
      "Clean all-black look with concealed wiring",
      "Battery storage for silent backup during power cuts",
      "High-efficiency panels for maximum power in limited roof space",
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
    mountingType: "Lightweight roof clamps with safety walkways",
    inverterSetup: "4x 100 kW commercial inverters connected to main panel",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1400&auto=format&fit=crop",
    description:
      "Spanning 35,000 sq ft across warehouse roof sheds, powering daytime cold storage and logistics operations.",
    highlights: [
      "Installed with safety perimeter walkways for easy maintenance",
      "Clean power running heavy daytime refrigeration loads",
      "Significantly lower electricity unit cost compared to grid",
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
    mountingType: "Custom south-facing tilted structure",
    inverterSetup: "Dual string inverters with lightning surge protection",
    image:
      "https://images.unsplash.com/photo-1780445392694-c95056ed12e2?q=80&w=1400&auto=format&fit=crop",
    description:
      "Designed to avoid parapet and tree shadows, ensuring consistent generation throughout both summer and winter.",
    highlights: [
      "Custom angle layout to prevent shadows from blocking sunlight",
      "Electrical surge protection for sensitive home electronics",
      "Smartphone app showing real-time solar generation",
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
    mountingType: "Weighted concrete bases preserving roof waterproofing",
    inverterSetup: "2x 90 kW grid inverters connected to main switchboard",
    image:
      "https://images.unsplash.com/photo-1745187794292-ba0014281746?q=80&w=1400&auto=format&fit=crop",
    description:
      "Powers central air conditioning and office lighting, helping the enterprise cut power bills and achieve clean energy targets.",
    highlights: [
      "No drilling into roof slab, ensuring zero leak risk",
      "Real-time energy tracking per office wing",
      "Over 210 tonnes of annual carbon emissions offset",
    ],
    featured: false,
  },
];
