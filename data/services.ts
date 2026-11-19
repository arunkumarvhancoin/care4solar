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
    slug: "/residential-solar",
    eyebrow: "Residential",
    shortDesc:
      "Custom rooftop solar sized for your home's actual power usage, roof space, and family energy needs.",
    image:
      "https://images.unsplash.com/photo-1780445392694-c95056ed12e2?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "On-grid, battery hybrid, or off-grid setups",
      "Terrace survey and sunlight shadow analysis",
      "High-efficiency panels with 25-year warranty",
      "Smartphone app to track daily generation",
    ],
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Solar",
    slug: "/commercial-industrial-solar",
    eyebrow: "Commercial & Industrial",
    shortDesc:
      "High-capacity rooftop solar for factories, warehouses, office buildings, and educational campuses.",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Self-financed (CAPEX) or zero-investment (RESCO) models",
      "Safe integration with factory switchboards and power lines",
      "Leak-proof clamps for industrial metal roof sheds",
      "Cloud monitoring with real-time generation alerts",
    ],
  },
  {
    id: "operations",
    title: "Operations & Maintenance",
    slug: "/operations-maintenance",
    eyebrow: "Asset Performance",
    shortDesc:
      "Routine cleaning, electrical health checks, and fast troubleshooting to keep your solar generating peak savings.",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "Safe panel cleaning with purified water",
      "24/7 remote monitoring and fault alerts",
      "Thermal inspections to catch hidden defects",
      "Annual Maintenance Contracts (AMC) with priority visits",
    ],
  },
];

export const omServices = [
  {
    id: "cleaning",
    number: "1",
    title: "Solar Panel Cleaning",
    description:
      "Regular washing using purified water and soft brushes to remove dust, bird droppings, and grime without scratching panel glass.",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1000&auto=format&fit=crop",
    keyPoints: [
      "Purified water that leaves zero mineral residue",
      "Soft brushes designed specifically for solar glass",
      "Prevents dust buildup from cutting power output",
      "Before-and-after generation checks",
    ],
  },
  {
    id: "monitoring",
    number: "2",
    title: "Remote Monitoring",
    description:
      "Live tracking of solar output on your phone or computer, with automated alerts if an inverter stops working or output dips.",
    image:
      "https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=1000&auto=format&fit=crop",
    keyPoints: [
      "Easy-to-use phone app for daily energy tracking",
      "Instant alerts if the system trips or drops power",
      "Monthly reports on total units and money saved",
      "Remote diagnostics to fix issues quickly",
    ],
  },
  {
    id: "thermal",
    number: "3",
    title: "Thermal Inspection",
    description:
      "Infrared camera scans that spot invisible micro-cracks, overheating cells, or loose wiring before they cause power loss or safety risks.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000&auto=format&fit=crop",
    keyPoints: [
      "Detects hidden panel defects invisible to the eye",
      "Prevents localized hotspots from damaging nearby panels",
      "Safety checks on junction boxes and connections",
      "Clear visual report with recommended fixes",
    ],
  },
  {
    id: "upgrades",
    number: "4",
    title: "System Upgrades & Repairs",
    description:
      "Full health assessments for aging or underperforming solar systems, replacing old inverters, upgrading safety wiring, or adding battery storage.",
    image:
      "https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=1000&auto=format&fit=crop",
    keyPoints: [
      "Upgrade to modern hybrid inverters",
      "Add lithium batteries for power backup",
      "Safety rewiring and earthing improvements",
      "Expand panel capacity for growing power needs",
    ],
  },
  {
    id: "amc",
    number: "5",
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Hassle-free yearly maintenance plans for homes, apartment societies, and commercial plants, including scheduled cleanings and priority technician visits.",
    image:
      "https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=1000&auto=format&fit=crop",
    keyPoints: [
      "Scheduled panel washing and regular safety audits",
      "Complete electrical checks on inverters and wiring",
      "Priority response for unexpected breakdowns",
      "Clear service reports after every visit",
    ],
  },
];
