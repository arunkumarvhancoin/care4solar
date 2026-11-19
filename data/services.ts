export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  eyebrow: string;
  shortDesc: string;
  image: string;
  bullets: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Solar",
    slug: "/solar-for-homes",
    eyebrow: "Residential",
    shortDesc:
      "Engineered rooftop systems designed around your home's actual load profile, roof architecture, and long-term energy goals.",
    image:
      "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "On-grid, hybrid, and off-grid configurations",
      "Structural assessment and shadow analysis",
      "Tier-1 mono PERC and TopCon panel options",
      "Direct app-based generation monitoring",
    ],
  },
  {
    id: "apartments",
    title: "Solar for Apartments",
    slug: "/solar-for-apartments",
    eyebrow: "Housing Societies",
    shortDesc:
      "Shared rooftop solar solutions specifically structured for housing societies, apartment associations, and RWA common utilities.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Common lighting, pumps, and elevator offset",
      "Association resolution and RWA planning support",
      "DISCOM net metering coordination",
      "Non-penetrating ballasted mounting structures",
    ],
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Solar",
    slug: "/commercial-industrial-solar",
    eyebrow: "Commercial & Industrial",
    shortDesc:
      "High-capacity solar installations for manufacturing plants, logistics hubs, institutional campuses, and commercial complexes.",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "CAPEX and RESCO project deployment models",
      "HT/LT integration with existing transformer yards",
      "Industrial safety standards and wind load certifications",
      "SCADA integration and multi-inverter telemetry",
    ],
  },
  {
    id: "operations",
    title: "Operations & Maintenance",
    slug: "/operations-maintenance",
    eyebrow: "Asset Performance",
    shortDesc:
      "Comprehensive lifecycle maintenance to safeguard electrical safety, maximize generation yields, and extend equipment life.",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Precision panel cleaning & de-soiling",
      "Continuous string-level remote monitoring",
      "Calibrated drone and handheld thermal imaging",
      "Annual Maintenance Contracts (AMC) with periodic testing",
    ],
  },
];

export const omServices = [
  {
    id: "cleaning",
    number: "1",
    title: "Solar Panel Cleaning",
    description:
      "Systematic removal of dust, particulate matter, bird droppings, and industrial emissions using pH-neutral demineralized water and non-abrasive equipment to prevent micro-scratches and preserve anti-reflective coatings.",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1000&auto=format&fit=crop",
    keyPoints: [
      "pH-balanced wash avoiding thermal shock",
      "Non-abrasive microfiber brushes",
      "Elimination of persistent hotspot risks",
      "Before-and-after performance benchmarking",
    ],
  },
  {
    id: "monitoring",
    number: "2",
    title: "Remote Monitoring",
    description:
      "Real-time digital generation tracking, string current observation, and automated anomaly detection to spot inverter tripping, shade anomalies, and unexpected yield drop-offs immediately.",
    image:
      "https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=1000&auto=format&fit=crop",
    keyPoints: [
      "Cloud-connected telemetry & logging",
      "Automated alerting on underperformance",
      "Inverter MPPT tracking diagnostics",
      "Monthly generation vs. expectation reports",
    ],
  },
  {
    id: "thermal",
    number: "3",
    title: "Thermal Inspection",
    description:
      "High-resolution infrared thermography to identify localized cell hot spots, bypass diode failures, loose terminal junctions, and micro-cracking invisible to the naked eye.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000&auto=format&fit=crop",
    keyPoints: [
      "Calibrated thermographic analysis",
      "Identification of cell-level resistance points",
      "Fire risk prevention at AC/DC combiners",
      "Geo-referenced thermal audit reports",
    ],
  },
  {
    id: "upgrades",
    number: "4",
    title: "System Upgrades & Retrofits",
    description:
      "Engineering assessment of legacy solar plants requiring string inverter replacements, micro-inverter additions, lightning surge protection overhauls, or capacity expansion.",
    image:
      "https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=1000&auto=format&fit=crop",
    keyPoints: [
      "Modern hybrid inverter conversions",
      "DC cabling and disconnect upgrades",
      "Battery energy storage retrofits",
      "Earthing and lightning arrestor re-certification",
    ],
  },
  {
    id: "amc",
    number: "5",
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Structured maintenance agreements tailored to residential, apartment, and industrial plants encompassing scheduled health checks, preventive electrical servicing, and priority technical response.",
    image:
      "https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=1000&auto=format&fit=crop",
    keyPoints: [
      "Scheduled preventive maintenance intervals",
      "Comprehensive electrical safety audits",
      "Detailed health check logs and recommendations",
      "Dedicated technical support team",
    ],
  },
];
