export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const solarServices: NavItem[] = [
  {
    title: "Residential Solar",
    href: "/solar-for-homes",
    description: "Rooftop solar systems engineered for modern individual homes and villas.",
  },
  {
    title: "Solar Pricing",
    href: "/solar-pricing",
    description: "Understand the financial and technical factors behind solar installation costs.",
  },
  {
    title: "Solar for Apartments",
    href: "/solar-for-apartments",
    description: "Shared rooftop solutions for housing societies, RWAs, and common areas.",
  },
  {
    title: "Commercial & Industrial",
    href: "/commercial-industrial-solar",
    description: "High-capacity solar infrastructure for businesses, factories, and warehouses.",
  },
  {
    title: "Solar Subsidy",
    href: "/solar-subsidy",
    description: "Official guidance on PM Surya Ghar eligibility and government rooftop incentives.",
  },
  {
    title: "Operations & Maintenance",
    href: "/operations-maintenance",
    description: "Panel cleaning, remote monitoring, thermal inspections, and maintenance care.",
  },
];

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Solar", href: "#solar-dropdown" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Insights", href: "/insights" },
];

export const footerCompanyNav: NavItem[] = [
  { title: "About Us", href: "/about" },
  { title: "Featured Projects", href: "/projects" },
  { title: "Knowledge Centre", href: "/insights" },
  { title: "Solar FAQs", href: "/faqs" },
  { title: "Contact Us", href: "/contact" },
];
