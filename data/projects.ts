export interface ProjectItem {
  id: string;
  title: string;
  category: "Residential" | "Apartments" | "Commercial" | "Industrial";
  location: string;
  capacity: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Urban Industrial Rooftop Array",
    category: "Industrial",
    location: "Peenya Industrial Area [Representative Placeholder]",
    capacity: "250 kWp [Representative Placeholder]",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
    description:
      "High-output rooftop installation engineered on standing-seam industrial metal roof sheets with centralized grid-tied string inverters.",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Gated Housing Society Common-Area Array",
    category: "Apartments",
    location: "East Bangalore [Representative Placeholder]",
    capacity: "85 kWp [Representative Placeholder]",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    description:
      "Elevated super-structure installation over high-rise apartment utility terraces powering common area lighting, water treatment, and elevators.",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Private Contemporary Residence",
    category: "Residential",
    location: "Sadashivanagar [Representative Placeholder]",
    capacity: "12 kWp [Representative Placeholder]",
    image:
      "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1200&auto=format&fit=crop",
    description:
      "All-black mono PERC architectural rooftop system paired with a hybrid battery-ready inverter for high self-consumption and clean aesthetics.",
    featured: true,
  },
  {
    id: "proj-4",
    title: "Logistics & Warehousing Facility",
    category: "Commercial",
    location: "Hosur Road Industrial Corridor [Representative Placeholder]",
    capacity: "400 kWp [Representative Placeholder]",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Extensive low-profile solar array distributed across corrugated roof structures with walk-paths and safety lifelines for seamless maintenance.",
    featured: false,
  },
  {
    id: "proj-5",
    title: "Residential Villa Estate Installation",
    category: "Residential",
    location: "Whitefield Suburb [Representative Placeholder]",
    capacity: "15 kWp [Representative Placeholder]",
    image:
      "https://images.unsplash.com/photo-1780445392694-c95056ed12e2?q=80&w=1200&auto=format&fit=crop",
    description:
      "Custom tilt mounting to eliminate shading from terrace pergolas, integrated with remote telemetry monitoring for real-time homeowner tracking.",
    featured: false,
  },
  {
    id: "proj-6",
    title: "Commercial Office Park Rooftop",
    category: "Commercial",
    location: "Electronic City [Representative Placeholder]",
    capacity: "180 kWp [Representative Placeholder]",
    image:
      "https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Grid-interactive solar power system integrated into multi-tenant building electrical distribution infrastructure.",
    featured: false,
  },
];
