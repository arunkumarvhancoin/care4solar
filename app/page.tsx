import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import FullHeroCarousel from "@/components/sections/FullHeroCarousel";
import { projectsData } from "@/data/projects";
import { ArrowRight, ArrowUpRight, Quote, ShieldCheck } from "lucide-react";

// 8 Required Homepage FAQs
const homeFaqs = [
  {
    id: "faq-suitability",
    question: "Is solar suitable for my property?",
    answer:
      "Most properties with an open, unshaded roof or terrace can support solar. We assess your roof space, orientation, and electrical setup during our initial survey to confirm suitability.",
  },
  {
    id: "faq-capacity",
    question: "How do I determine the solar capacity I need?",
    answer:
      "We calculate the right capacity from your average monthly electricity bill and available roof space. As a rule of thumb, 1 kW of solar produces around 4 units of electricity each day.",
  },
  {
    id: "faq-space",
    question: "How much space is required for installation?",
    answer:
      "Around 80 to 100 square feet of shadow-free rooftop space is needed for every 1 kW of solar panels. A typical 3 kW home setup needs about 250 to 300 square feet.",
  },
  {
    id: "faq-types",
    question: "What types of solar systems are available?",
    answer:
      "We install On-Grid systems (linked to the power grid for maximum bill savings), Hybrid systems (with battery backup for power cuts), and Off-Grid systems for standalone sites.",
  },
  {
    id: "faq-timeline",
    question: "How long does installation take?",
    answer:
      "Physical roof installation takes 2 to 4 days for homes and 2 to 3 weeks for commercial buildings. Utility net-meter approval typically takes another 3 to 4 weeks.",
  },
  {
    id: "faq-outages",
    question: "Can solar work during power outages?",
    answer:
      "Standard grid-tied systems shut off during outages to protect repair workers. Hybrid solar setups with battery storage switch on instantly to keep essential lights and appliances running.",
  },
  {
    id: "faq-lifespan",
    question: "What is the expected lifespan of a solar installation?",
    answer:
      "Quality solar panels are designed to perform for 25+ years and come with a 25-year performance warranty. Inverters carry 5 to 10-year warranties with straightforward extension options.",
  },
  {
    id: "faq-maintenance",
    question: "Do you provide maintenance after installation?",
    answer:
      "Yes. We provide complete maintenance services including panel cleaning with purified water, electrical health checks, and routine monitoring to keep your system performing at its best.",
  },
];

// Testimonials across key sectors
const testimonials = [
  {
    id: "1",
    sector: "Residential Solar",
    metric: "Bills dropped: ₹6,400 → <₹600",
    quote:
      "Our monthly electricity bill in Whitefield dropped from ₹6,400 to under ₹600. Care4Solar handled the Bescom net metering and turnkey installation without any disruption to our home.",
    author: "Anand R.",
    role: "Homeowner · 5 kWp System",
    location: "Whitefield, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    sector: "Housing Society (RWA)",
    metric: "Saving ₹35,000+ / Month",
    quote:
      "We installed 25 kWp on our clubhouse roof. It powers all 4 elevators and water pumps during the day, saving our society over ₹35,000 every month.",
    author: "Preeti S.",
    role: "RWA Committee Member",
    location: "Sarjapur Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    sector: "Industrial O&M Care",
    metric: "Recovered +18% Power Output",
    quote:
      "Their regular purified panel washing recovered nearly 18% of power that we were losing to factory dust. Highly recommended.",
    author: "Karthik N.",
    role: "Operations Manager · 60 kWp Array",
    location: "Peenya Industrial Area",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
];

export default function HomePage() {
  // Real projects from dataset: 1 featured hero project + 2 supporting projects
  const mainFeaturedProject = projectsData.find((p) => p.id === "proj-1") || projectsData[0];
  const supportingProjects = projectsData.filter(
    (p) => p.id === "proj-6" || p.id === "proj-3"
  );

  return (
    <div className="flex flex-col w-full bg-[#F7F7F3]">
      {/* 1. Hero Carousel + Docked 4-Item Impact Strip */}
      <FullHeroCarousel />

      {/* =========================================================================
          SECTION 2 — COMPANY INTRODUCTION (EDITORIAL SPLIT)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Heading, Concise text, CTA & Credibility Strip */}
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block">About Care4Solar</span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#202720] leading-[1.18]">
                A smarter way to power what matters.
              </h2>

              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                Care4Solar designs, installs, and maintains rooftop solar systems for homes, businesses, and industrial facilities. We take care of the entire journey—from roof assessments and power company net metering to durable installation and ongoing system care.
              </p>

              <div>
                <Button href="/solutions" variant="secondary" size="md" icon="arrow">
                  Explore Our Solutions
                </Button>
              </div>
            </div>

            {/* Right Column: Large High-Quality Solar Installation Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden border border-[#E5E8E3] bg-[#F7F7F3]">
                <Image
                  src="https://images.unsplash.com/photo-1660330589243-4c640d878052?q=80&w=1400&auto=format&fit=crop"
                  alt="Engineers reviewing high efficiency rooftop solar installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4 — SOLAR SYSTEM COMPONENTS (IMAGE-LED TECHNICAL SHOWCASE)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="eyebrow block">System Anatomy</span>
            <SectionHeading
              title="The technology behind your solar."
              description="A solar installation is a 25-year structural asset. Here are the four key components that make it work."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Large System Visual */}
            <div className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden border border-[#E5E8E3] bg-white">
              <Image
                src="https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=1200&auto=format&fit=crop&q=80"
                alt="Solar panels, inverters, and mounting hardware components"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 border border-[#E5E8E3] text-xs text-[#374151] flex items-center justify-between">
                <span className="font-semibold text-[#15532E]">Certified Hardware</span>
                <span>Industrial-grade protection &amp; 25-year design life</span>
              </div>
            </div>

            {/* Right: Component Breakdowns with Icons */}
            <div className="lg:col-span-6 space-y-4">
              {/* Component 1: Solar Modules */}
              <div className="p-5 bg-white border border-[#E5E8E3] space-y-1.5 transition-colors hover:border-[#15532E]">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#202720]">Solar Modules</h3>
                  <div className="w-7 h-7 rounded-xs bg-[#15532E]/10 text-[#15532E] flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="3" y1="15" x2="21" y2="15" />
                      <line x1="9" y1="3" x2="9" y2="21" />
                      <line x1="15" y1="3" x2="15" y2="21" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-[#374151] leading-relaxed">
                  High-efficiency panels that convert sunlight into clean electricity, backed by 25-year performance warranties.
                </p>
              </div>

              {/* Component 2: Inverters */}
              <div className="p-5 bg-white border border-[#E5E8E3] space-y-1.5 transition-colors hover:border-[#15532E]">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#202720]">Inverters</h3>
                  <div className="w-7 h-7 rounded-xs bg-[#15532E]/10 text-[#15532E] flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="4" y="2" width="16" height="20" rx="2" />
                      <path d="M8 6h8" />
                      <path d="M8 10h3" />
                      <path d="M13 10c.8-.8 1.6-.8 2.4 0s1.6.8 2.4 0" />
                      <circle cx="8" cy="15" r="1" fill="currentColor" />
                      <circle cx="12" cy="15" r="1" fill="currentColor" />
                      <circle cx="16" cy="15" r="1" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Smart units that convert solar energy for your home or business while tracking daily generation on your phone.
                </p>
              </div>

              {/* Component 3: Mounting Structures */}
              <div className="p-5 bg-white border border-[#E5E8E3] space-y-1.5 transition-colors hover:border-[#15532E]">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#202720]">Mounting Structures</h3>
                  <div className="w-7 h-7 rounded-xs bg-[#15532E]/10 text-[#15532E] flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M2 19h20" />
                      <path d="M4 19l5-13h11l-5 13" />
                      <path d="M9 6v13" />
                      <path d="M15 6v13" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Rust-proof, elevated aluminum or galvanized steel frames engineered for zero roof damage and high wind resistance.
                </p>
              </div>

              {/* Component 4: Electrical Protection */}
              <div className="p-5 bg-white border border-[#E5E8E3] space-y-1.5 transition-colors hover:border-[#15532E]">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#202720]">Electrical Protection</h3>
                  <div className="w-7 h-7 rounded-xs bg-[#15532E]/10 text-[#15532E] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Safety breakers, surge protection devices, earthing, and lightning arrestors safeguarding your building and appliances.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5 — INSTALLATION PROCESS (CONNECTED TIMELINE)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl space-y-3 mb-16 sm:mb-20">
            <span className="eyebrow block">Step-by-Step Delivery</span>
            <SectionHeading
              title="From your rooftop to renewable energy."
              description="A clear, worry-free process handled from start to finish by our team."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4">
            {/* Step 1 */}
            <div className="bg-[#F7F7F3] p-6 border border-[#E5E8E3] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-2xl font-mono font-bold text-[#15532E]">01</span>
                <h4 className="text-lg font-semibold text-[#202720]">Consultation</h4>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Understand your energy requirements, consumption and goals.
                </p>
              </div>
              <div className="pt-2 text-xs font-mono uppercase tracking-wider text-[#15532E]/80">
                Initial Call
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F7F7F3] p-6 border border-[#E5E8E3] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-2xl font-mono font-bold text-[#15532E]">02</span>
                <h4 className="text-lg font-semibold text-[#202720]">Site Assessment</h4>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Evaluate the property, available space and installation feasibility.
                </p>
              </div>
              <div className="pt-2 text-xs font-mono uppercase tracking-wider text-[#15532E]/80">
                Roof Survey
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F7F7F3] p-6 border border-[#E5E8E3] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-2xl font-mono font-bold text-[#15532E]">03</span>
                <h4 className="text-lg font-semibold text-[#202720]">Design &amp; Planning</h4>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Plan the system around your requirements and site conditions.
                </p>
              </div>
              <div className="pt-2 text-xs font-mono uppercase tracking-wider text-[#15532E]/80">
                Custom Layout
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#F7F7F3] p-6 border border-[#E5E8E3] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-2xl font-mono font-bold text-[#15532E]">04</span>
                <h4 className="text-lg font-semibold text-[#202720]">Installation</h4>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Install the planned solar system and associated equipment.
                </p>
              </div>
              <div className="pt-2 text-xs font-mono uppercase tracking-wider text-[#15532E]/80">
                Setup &amp; Mounting
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-[#F7F7F3] p-6 border border-[#E5E8E3] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-2xl font-mono font-bold text-[#15532E]">05</span>
                <h4 className="text-lg font-semibold text-[#202720]">Commissioning</h4>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Check, verify and prepare the system for operation.
                </p>
              </div>
              <div className="pt-2 text-xs font-mono uppercase tracking-wider text-[#15532E]/80">
                Turn On Power
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6 — SOLAR BENEFITS (EDITORIAL IMAGE-AND-CONTENT LAYOUT)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Benefits Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="eyebrow block">Long-Term Impact</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#202720] leading-[1.18]">
                  Energy that works beyond today.
                </h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-1.5 border-l-2 border-[#15532E] pl-5">
                  <h3 className="text-lg font-semibold text-[#202720]">
                    Lower Electricity Dependence
                  </h3>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    Generate electricity from sunlight to help offset conventional electricity consumption.
                  </p>
                </div>

                <div className="space-y-1.5 border-l-2 border-[#15532E] pl-5">
                  <h3 className="text-lg font-semibold text-[#202720]">
                    Renewable Energy
                  </h3>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    Make use of a clean, renewable source of energy that reduces carbon footprint.
                  </p>
                </div>

                <div className="space-y-1.5 border-l-2 border-[#15532E] pl-5">
                  <h3 className="text-lg font-semibold text-[#202720]">
                    Greater Energy Control
                  </h3>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    Generate electricity on-site and gain greater visibility and control over your energy usage.
                  </p>
                </div>

                <div className="space-y-1.5 border-l-2 border-[#15532E] pl-5">
                  <h3 className="text-lg font-semibold text-[#202720]">
                    Long-Term Value
                  </h3>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    Invest in an energy solution designed for long-term use and dependable generation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Large Editorial Solar Photograph */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden border border-[#E5E8E3] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1400&auto=format&fit=crop"
                  alt="Rooftop solar installation array"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 7 — COMPLETED SOLAR INSTALLATIONS (EDITORIAL PORTFOLIO)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <span className="eyebrow block">Proven Track Record</span>
              <SectionHeading
                title="Real installations. Real spaces."
                description="Explore completed solar installations engineered across industrial, commercial, and residential properties."
              />
            </div>
            <div className="shrink-0">
              <Button href="/projects" variant="outline" size="md" icon="arrow">
                View All Projects
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Featured Project (Hero Showcase) */}
            <div className="lg:col-span-7 bg-[#F7F7F3] border border-[#E5E8E3] flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                  <Image
                    src={mainFeaturedProject.image}
                    alt={mainFeaturedProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#15532E] text-white text-xs font-mono px-3 py-1 font-semibold uppercase tracking-wider">
                    Featured / {mainFeaturedProject.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#374151] border-b border-[#E5E8E3] pb-3">
                    <span>{mainFeaturedProject.location}</span>
                    <span className="font-mono font-bold text-base text-[#15532E]">
                      {mainFeaturedProject.capacity}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#202720]">
                    {mainFeaturedProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    {mainFeaturedProject.description}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Link
                  href="/projects"
                  className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#15532E] hover:text-[#104324] transition-colors"
                >
                  <span>Read Project Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Supporting Projects (Stacked on the right) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {supportingProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#F7F7F3] border border-[#E5E8E3] p-5 sm:p-6 flex flex-col justify-between flex-1 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#15532E] px-2 py-0.5 bg-white border border-[#E5E8E3]">
                        {project.category}
                      </span>
                      <span className="font-mono font-bold text-[#15532E]">
                        {project.capacity}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#374151] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E5E8E3] flex items-center justify-between text-xs text-[#374151]">
                    <span>{project.location}</span>
                    <Link
                      href="/projects"
                      className="font-semibold text-[#15532E] hover:underline inline-flex items-center space-x-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8 — TESTIMONIALS (REFINED EDITORIAL GRID)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow block">Client Experiences</span>
              <SectionHeading
                title="Trust built through experience."
                description="Real feedback from homeowners, housing societies, and commercial facility managers."
              />
            </div>
            <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-[#374151]">
              <span className="w-1.5 h-1.5 bg-[#15532E]" />
              <span>Verified Customer Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-[#E5E8E3] p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#15532E] hover:shadow-sm relative group"
              >
                <div className="space-y-5">
                  {/* Sector Badge + Metric */}
                  <div className="flex items-center justify-between gap-2 text-xs border-b border-[#E5E8E3] pb-4">
                    <span className="font-mono uppercase font-semibold tracking-wider text-[#15532E]">
                      {t.sector}
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 bg-[#15532E]/5 border border-[#15532E]/15 text-[#15532E] font-medium">
                      {t.metric}
                    </span>
                  </div>

                  {/* Decorative Quote Icon */}
                  <div className="text-[#15532E]/20 group-hover:text-[#15532E]/35 transition-colors">
                    <Quote className="w-8 h-8 fill-current" />
                  </div>

                  {/* Quote Body */}
                  <p className="text-base sm:text-[17px] text-[#202720] leading-relaxed font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-[#E5E8E3] flex items-center space-x-3.5">
                  <div className="relative w-12 h-12 overflow-hidden border border-[#E5E8E3] shrink-0 bg-[#F7F7F3]">
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-semibold text-base text-[#202720]">{t.author}</div>
                    <div className="text-xs sm:text-sm text-[#15532E] font-medium">{t.role}</div>
                    <div className="text-xs text-[#374151]">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9 — FAQS (TWO-COLUMN EDITORIAL ACCORDION)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading & Guidance */}
            <div className="lg:col-span-5 space-y-4">
              <span className="eyebrow block">Common Questions</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#202720] leading-[1.18]">
                Everything you need to know about solar.
              </h2>
              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                Clear answers about rooftop suitability, system sizing, power cuts, and long-term maintenance.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#15532E] hover:text-[#104324] transition-colors"
                >
                  <span>Have specific roof questions? Talk to an engineer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Clean Accordion */}
            <div className="lg:col-span-7">
              <Accordion items={homeFaqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 10 — FINAL CTA (FULL-WIDTH IMPACTFUL CLOSING SECTION)
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#152019] text-white overflow-hidden">
        {/* Full-width solar background photo with subtle dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2400&auto=format&fit=crop"
            alt="Commercial rooftop solar installation"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101913] via-[#15532E]/75 to-[#101913]/90" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E5A100] block">
              Complimentary Site Survey
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Ready to make the switch?
            </h2>

            <p className="text-base sm:text-lg text-[#F7F7F3]/90 leading-relaxed max-w-xl mx-auto">
              Let&apos;s help you find the right solar solution for your energy requirements.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" icon="arrow" magnetic={true}>
                Get a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
