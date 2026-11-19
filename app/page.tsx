import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ImageReveal from "@/components/ui/ImageReveal";
import TiltCard from "@/components/ui/TiltCard";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import FullHeroCarousel from "@/components/sections/FullHeroCarousel";
import { projectsData } from "@/data/projects";
import { ArrowRight, Star } from "lucide-react";

const solutions = [
  {
    id: "residential",
    title: "Solar for Homes",
    tagline: "Independent houses and villas",
    description:
      "Cut 80–90% of electricity bills with rooftop solar sized to your roof. Includes PM Surya Ghar subsidy filing and net metering.",
    image:
      "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=800&auto=format&fit=crop",
    href: "/solar-for-homes",
  },
  {
    id: "apartments",
    title: "Solar for Apartments",
    tagline: "Housing societies and RWAs",
    description:
      "Power shared elevators, water pumps, and campus lighting with shared terrace solar to permanently lower society maintenance dues.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    href: "/solar-for-apartments",
  },
  {
    id: "commercial",
    title: "Commercial & Industrial",
    tagline: "Factories, warehouses, and offices",
    description:
      "Offset high daytime tariffs with heavy-duty rooftop arrays engineered for commercial roofs, backed by 40% accelerated depreciation.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop",
    href: "/commercial-industrial-solar",
  },
  {
    id: "maintenance",
    title: "Cleaning & Maintenance",
    tagline: "Protecting your solar generation",
    description:
      "Dust and soiling cause up to 30% generation loss. We provide reverse-osmosis demineralized washing and prompt electrical repairs.",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=800&auto=format&fit=crop",
    href: "/operations-maintenance",
  },
];

const hardwareComponents = [
  {
    title: "Tier-1 DCR Photovoltaic Modules",
    description:
      "TopCon and Mono PERC panels with 25-year performance warranties. Built with certified domestic cells to guarantee full eligibility for Central government subsidies.",
    image:
      "https://images.unsplash.com/photo-1719848574124-2f66fa842fd6?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "High-Efficiency Smart Inverters",
    description:
      "Dual MPPT tracking with 98.5%+ efficiency and real-time Wi-Fi phone telemetry so you can monitor daily generation effortlessly.",
    image:
      "https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Elevated Galvanized Superstructures",
    description:
      "Engineered from hot-dip galvanized steel, elevated above terrace level so you retain complete walking, gardening, and recreational space.",
    image:
      "https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Industrial Electrical Protection (BOS)",
    description:
      "Dedicated chemical earthing pits, Class-II surge arrestors (SPDs), UV-rated solar DC cabling, and lightning arrestors for complete building safety.",
    image:
      "https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=800&auto=format&fit=crop",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Site & Roof Assessment",
    description:
      "We inspect your rooftop structure, calculate shadow-free space, and review your electricity bills to determine the optimal system capacity.",
  },
  {
    number: "2",
    title: "Design, Proposal & Subsidy Filing",
    description:
      "You receive a clear engineering layout and quotation. We file your application on the PM Surya Ghar portal for up to ₹78,000 direct subsidy.",
  },
  {
    number: "3",
    title: "Installation & Net Metering",
    description:
      "Our team completes installation using Tier-1 hardware and coordinates with BESCOM/DISCOM to install and commission your bi-directional meter.",
  },
  {
    number: "4",
    title: "Scheduled Cleaning & Support",
    description:
      "We provide scheduled demineralized water cleaning and generation monitoring so your solar system continues to produce at peak efficiency.",
  },
];

const homeFaqs = [
  {
    id: "roof-space",
    question: "How much shadow-free rooftop space do I need?",
    answer:
      "As a standard guideline, a 1 kWp system requires approximately 80 to 100 square feet of shadow-free terrace space. A typical 3 kWp home system needs around 250 to 300 square feet.",
  },
  {
    id: "net-metering",
    question: "How does net metering work with BESCOM / local DISCOM?",
    answer:
      "A bi-directional meter records electricity you draw from the grid and solar power exported into the grid. Your monthly bill reflects net consumption. Care4Solar manages the entire DISCOM application, inspection, and meter replacement process.",
  },
  {
    id: "subsidy",
    question: "How do I receive the PM Surya Ghar government subsidy?",
    answer:
      "Under the PM Surya Ghar scheme, individual residential homeowners receive up to ₹78,000 for systems 3 kWp and above. The subsidy is credited directly to your bank account via DBT after DISCOM commissioning. We submit and track your portal application.",
  },
  {
    id: "cleaning",
    question: "Why does panel cleaning require demineralized water?",
    answer:
      "Regular tap water contains dissolved calcium and minerals that evaporate and form a stubborn white film on solar glass. Over time, this baked-on mineral layer blocks sunlight and causes permanent cell hotspots. Demineralized water dries completely spot-free, preserving 100% transmittance.",
  },
  {
    id: "power-cuts",
    question: "Will my solar panels work during a power cut?",
    answer:
      "Standard grid-tied solar systems automatically disconnect during grid outages as a mandatory safety measure for line workers (anti-islanding). If backup during power cuts is required, we design hybrid systems with lithium battery storage.",
  },
];

const testimonials = [
  {
    id: "1",
    quote:
      "Our monthly electricity bill in Whitefield dropped from ₹6,400 to roughly ₹550. Care4Solar handled the Bescom meter installation and the central subsidy portal without us visiting any office.",
    author: "Anand R.",
    role: "Homeowner · 5 kWp Installation",
    location: "Whitefield, Bengaluru",
  },
  {
    id: "2",
    quote:
      "We installed a 25 kWp system on our society clubhouse terrace. It completely powers the four passenger elevators and water pumping systems during daytime, saving our association over ₹35,000 every month.",
    author: "Preeti S.",
    role: "RWA Management Committee",
    location: "Sarjapur Road, Bengaluru",
  },
  {
    id: "3",
    quote:
      "The monthly demineralized washing service is excellent. Our factory roof gathers heavy airborne particulate, and their cleaning routine recovered nearly 18% of generation that we were losing to dirt.",
    author: "Karthik N.",
    role: "Operations Manager · 60 kWp Array",
    location: "Peenya Industrial Area",
  },
];

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* 1. Hero Carousel + Docked 4-Item Impact Strip */}
      <FullHeroCarousel />

      {/* 2. Core Company Mission */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#202720] leading-tight">
                We install rooftop solar and keep it performing.
              </h2>
              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                Most rooftop solar companies focus purely on the sale. Once panels are bolted to
                your roof, support often ends. When dust accumulates, inverters show error codes, or
                generation drops, you need a team that answers the phone.
              </p>
              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
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

      {/* 3. Solutions by Property Type */}
      <section className="py-16 sm:py-20 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-10">
            <SectionHeading
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

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-xs text-[#374151] block">
                        {solution.tagline}
                      </span>
                      <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors mt-1">
                        {solution.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#374151] leading-relaxed">
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

      {/* 4. What Goes on Your Roof (Hardware & Engineering Quality) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-10">
            <SectionHeading
              title="What goes on your rooftop."
              description="A solar system is a 25-year structural and electrical installation. We only use industrial-grade, certified components."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwareComponents.map((item) => (
              <div
                key={item.title}
                className="bg-[#F7F7F3] border border-[#E5E8E3] flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="text-base font-semibold text-[#202720]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. How We Work (Integrated Process & Paperwork) */}
      <section className="py-16 sm:py-20 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-10">
            <SectionHeading
              title="How we work with you."
              description="A clear, hassle-free path from your first rooftop survey through government approvals to clean power generation."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-6 bg-white border border-[#E5E8E3] flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-2xl font-bold text-[#15532E] font-mono">
                    {step.number}
                  </span>
                  <h3 className="text-base font-semibold text-[#202720] mt-2">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#374151] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. The Reality of Maintenance / Why Care Matters */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#202720] leading-tight">
                Dirty panels lose up to 30% of their power.
              </h2>
              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                In Indian urban environments, airborne dust, vehicle soot, and bird droppings form an
                opaque layer on solar glass within weeks. Washing them with regular tap water causes
                hard mineral scaling that etches into the glass and creates permanent hotspots.
              </p>
              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                Care4Solar provides specialized reverse-osmosis demineralized water cleaning with soft
                rotary brushes, alongside regular inverter and electrical health checks—so your panels
                generate at peak output throughout their 25-year life.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href="/operations-maintenance" variant="secondary" size="md" icon="arrow">
                  Explore Maintenance Care
                </Button>
                <Button href="/contact" variant="outline" size="md">
                  Book a Cleaning Visit
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] overflow-hidden border border-[#E5E8E3] bg-[#F7F7F3]">
                <Image
                  src="https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1200&auto=format&fit=crop"
                  alt="Technician cleaning solar panel with specialized water brush"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Featured Projects */}
      <section className="py-16 sm:py-20 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <SectionHeading
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

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#202720]">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#374151] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5E8E3] flex items-center justify-between text-xs text-[#374151]">
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

      {/* 8. Customer Voices / Testimonials */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-10">
            <SectionHeading
              title="What our customers say."
              description="Real feedback from homeowners, housing societies, and commercial facility managers."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#F7F7F3] border border-[#E5E8E3] p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-[#E5A100]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#202720] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E8E3]">
                  <div className="font-semibold text-sm text-[#202720]">{t.author}</div>
                  <div className="text-xs text-[#15532E] font-medium">{t.role}</div>
                  <div className="text-[11px] text-[#374151]">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Frequently Asked Questions */}
      <section className="py-16 sm:py-20 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeading
              title="Everything you need to know about rooftop solar."
              description="Clear, honest answers to the most common questions from property owners considering solar."
              align="center"
            />

            <Accordion items={homeFaqs} />

            <div className="text-center pt-2">
              <Link
                href="/faqs"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#15532E] hover:text-[#E5A100] transition-colors"
              >
                <span>Browse all frequently asked questions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Contact CTA (Clean White Background, Centered) */}
      <CTASection />
    </div>
  );
}
