import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageReveal from "@/components/ui/ImageReveal";
import TiltCard from "@/components/ui/TiltCard";
import CTASection from "@/components/sections/CTASection";
import FullHeroCarousel from "@/components/sections/FullHeroCarousel";
import { projectsData } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "residential",
    title: "Solar for Homes",
    tagline: "Independent houses and villas",
    description:
      "Cut your monthly electricity bills with rooftop solar designed specifically for your roof layout. We manage shadow analysis, PM Surya Ghar subsidy paperwork, and DISCOM net-metering.",
    image:
      "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=800&auto=format&fit=crop",
    href: "/solar-for-homes",
  },
  {
    id: "apartments",
    title: "Solar for Apartments",
    tagline: "Housing societies and RWAs",
    description:
      "Power common area utilities—elevators, water pumps, clubhouses, and campus lighting—with shared terrace solar to permanently reduce society maintenance dues.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    href: "/solar-for-apartments",
  },
  {
    id: "commercial",
    title: "Commercial & Industrial",
    tagline: "Factories, warehouses, and offices",
    description:
      "Offset heavy daytime commercial tariffs with high-capacity solar installations engineered for metal roofs and RCC terraces, with 40% accelerated depreciation tax benefits.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop",
    href: "/commercial-industrial-solar",
  },
  {
    id: "maintenance",
    title: "Cleaning & Maintenance",
    tagline: "Protecting your solar generation",
    description:
      "Dust and environmental soiling reduce solar generation by up to 30%. We provide specialized demineralized water cleaning, inverter diagnostics, and preventive AMC support.",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=800&auto=format&fit=crop",
    href: "/operations-maintenance",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Site & Roof Assessment",
    description:
      "We inspect your rooftop structure, calculate shadow obstacles, and review recent electricity bills to determine the optimal system capacity.",
  },
  {
    number: "2",
    title: "System Design & Proposal",
    description:
      "You receive a clear engineering layout, expected monthly generation, component specifications, and a transparent quotation with subsidy details.",
  },
  {
    number: "3",
    title: "Installation & Net Metering",
    description:
      "Our team completes installation using Tier-1 panels and tested mounting structures, and manages DISCOM net-metering approvals.",
  },
  {
    number: "4",
    title: "Regular Cleaning & Care",
    description:
      "We provide scheduled panel cleaning, electrical safety checks, and prompt support so your solar system continues to produce at peak efficiency.",
  },
];

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* 1. Viewport-Scale Centered Hero Carousel */}
      <FullHeroCarousel />

      {/* 2. Core Company Introduction */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#15532E]">
                Why Care4Solar
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#202720] leading-tight">
                We install rooftop solar and keep it performing.
              </h2>
              <p className="text-base sm:text-lg text-[#747C75] leading-relaxed">
                Most rooftop solar companies focus purely on the sale. Once the panels are bolted to
                your roof, support often ends. When dust accumulates, inverters show error codes, or
                generation drops, you need a team that answers the phone.
              </p>
              <p className="text-base sm:text-lg text-[#747C75] leading-relaxed">
                Care4Solar combines quality rooftop engineering and installation with reliable
                ongoing maintenance—ensuring your system delivers clean power and maximum financial
                savings for its full 25-year lifespan.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href="/about" variant="outline" size="md" icon="arrow">
                  About Care4Solar
                </Button>
                <Button href="/contact" variant="primary" size="md" magnetic={true}>
                  Request a Site Visit
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ImageReveal
                src="https://images.unsplash.com/photo-1660330589243-4c640d878052?q=80&w=1200&auto=format&fit=crop"
                alt="Solar technicians checking rooftop solar panel installation"
                aspectRatio="aspect-[16/11]"
                className="border border-[#E5E8E3]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Solutions */}
      <section className="py-20 lg:py-28 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-14">
            <SectionHeading
              eyebrow="Our Solutions"
              title="Solar solutions for every type of property."
              description="From single homes to housing societies, commercial facilities, and maintenance for existing plants."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => (
              <TiltCard key={solution.id} maxTilt={3} className="h-full">
                <Link
                  href={solution.href}
                  className="group flex flex-col h-full bg-white border border-[#E5E8E3] hover:border-[#15532E] transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F3]">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-xs text-[#747C75] block">
                        {solution.tagline}
                      </span>
                      <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors mt-1">
                        {solution.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#747C75] leading-relaxed">
                        {solution.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5E8E3] flex items-center text-xs font-semibold text-[#15532E] group-hover:text-[#E5A100] transition-colors">
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. How We Work */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-14">
            <SectionHeading
              eyebrow="Our Process"
              title="How we work with you."
              description="A clear, hassle-free path from your first enquiry to long-term clean power generation."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-2xl font-bold text-[#15532E] font-mono">
                    {step.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-[#202720] mt-2">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#747C75] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Featured Projects */}
      <section className="py-20 lg:py-28 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <SectionHeading
              eyebrow="Recent Work"
              title="Completed solar installations."
              description="A look at some of our recent installations across residential, apartment, and commercial properties."
            />
            <Button href="/projects" variant="outline" size="sm" icon="arrow" className="shrink-0">
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <TiltCard key={project.id} maxTilt={3} className="h-full">
                <div className="flex flex-col h-full bg-white border border-[#E5E8E3] hover:border-[#15532E] transition-colors">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#15532E] text-white text-[11px] font-medium px-2 py-0.5">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#202720]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#747C75] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5E8E3] flex items-center justify-between text-xs text-[#747C75]">
                      <span>{project.location}</span>
                      <span className="font-semibold text-[#15532E]">{project.capacity}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Contact CTA */}
      <CTASection />
    </div>
  );
}
