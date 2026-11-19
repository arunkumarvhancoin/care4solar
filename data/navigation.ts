export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const solarServices: NavItem[] = [
  {
    title: "Residential Solar",
    href: "/residential-solar",
    description: "Turnkey rooftop systems for independent homes, villas, and housing societies.",
  },
  {
    title: "Commercial & Industrial",
    href: "/commercial-industrial-solar",
    description: "High-capacity solar infrastructure for businesses, factories, and warehouses.",
  },
  {
    title: "Operations & Maintenance",
    href: "/operations-maintenance",
    description: "Panel cleaning, remote monitoring, thermal inspections, and preventive AMC.",
  },
];

export const mainNav: NavItem[] = [
  { title: "Residential", href: "/residential-solar" },
  { title: "Commercial", href: "/commercial-industrial-solar" },
  { title: "Maintenance", href: "/operations-maintenance" },
  { title: "Projects", href: "/projects" },
  { title: "Insights", href: "/insights" },
  { title: "About", href: "/about" },
];

export const footerCompanyNav: NavItem[] = [
  { title: "About Care4Solar", href: "/about" },
  { title: "Featured Projects", href: "/projects" },
  { title: "Insights & Articles", href: "/insights" },
  { title: "Get in Touch", href: "/contact" },
];
