export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const solarServices: NavItem[] = [
  {
    title: "All Solutions",
    href: "/solutions",
    description: "End-to-end solar installations for homes, commercial establishments, and industry.",
  },
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
    title: "Maintenance",
    href: "/operations-maintenance",
    description: "Panel cleaning, remote monitoring, thermal inspections, and preventive AMC.",
  },
];

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Solutions", href: "/solutions" },
  { title: "Maintenance", href: "/operations-maintenance" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const footerCompanyNav: NavItem[] = [
  { title: "About Care4Solar", href: "/about" },
  { title: "Featured Projects", href: "/projects" },
  { title: "Insights & Articles", href: "/insights" },
  { title: "Get in Touch", href: "/contact" },
];
