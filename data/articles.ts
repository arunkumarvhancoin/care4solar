export interface ArticleItem {
  id: string;
  category:
    | "Residential Solar"
    | "Solar Maintenance"
    | "Solar Technology"
    | "Commercial & Industrial Solar"
    | "Solar Performance";
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

export const articleCategories = [
  "All",
  "Residential Solar",
  "Solar Maintenance",
  "Solar Technology",
  "Commercial & Industrial Solar",
  "Solar Performance",
] as const;

export const sampleArticles: ArticleItem[] = [
  {
    id: "art-1",
    category: "Solar Performance",
    title: "Understanding Degradation Rates in Modern N-Type TopCon Photovoltaics",
    excerpt:
      "A technical examination of first-year light-induced degradation (LID) versus long-term linear degradation in next-generation silicon cell architectures.",
    readTime: "6 min read",
    date: "November 2024",
    author: "Technical Advisory Desk",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "art-2",
    category: "Solar Maintenance",
    title: "The Physics of Soiling: Why Tap Water Can Damage Solar Glass Anti-Reflective Coatings",
    excerpt:
      "Investigating mineral deposit calcification and mechanical abrasion risks when cleaning photovoltaic arrays without purified, de-ionized water.",
    readTime: "5 min read",
    date: "October 2024",
    author: "Asset Care Operations",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "art-3",
    category: "Residential Solar",
    title: "Net Metering vs Gross Metering: Evaluating DISCOM Grid Interconnection Policies",
    excerpt:
      "An engineering comparison of bidirectional energy billing, grid synchronization requirements, and feed-in tariff accounting mechanisms.",
    readTime: "7 min read",
    date: "September 2024",
    author: "Grid Interconnection Team",
    image:
      "https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "art-4",
    category: "Solar Technology",
    title: "Thermographic Hotspots: Detecting Early Cell Failures with Calibrated Infrared Imaging",
    excerpt:
      "How thermal imaging identifies solder joint fatigue, micro-cracks, and localized shunt resistance before catastrophic module failure occurs.",
    readTime: "8 min read",
    date: "August 2024",
    author: "Diagnostics & Telemetry",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "art-5",
    category: "Commercial & Industrial Solar",
    title: "CAPEX vs RESCO: Structuring Industrial Solar Investments for Operational Cash Flow",
    excerpt:
      "Financial analysis comparing on-balance-sheet capital expenditure with third-party Power Purchase Agreements (PPAs) for commercial rooftops.",
    readTime: "9 min read",
    date: "July 2024",
    author: "Commercial Project Advisory",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "art-6",
    category: "Residential Solar",
    title: "Net Metering Synchronization: What Happens During Utility Commissioning",
    excerpt:
      "A step-by-step technical guide for residential consumers on bi-directional meter testing, DISCOM safety inspections, and grid energization.",
    readTime: "6 min read",
    date: "June 2024",
    author: "Grid Interconnection Team",
    image:
      "https://images.unsplash.com/photo-1780445392792-556e5609c5ab?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
];
