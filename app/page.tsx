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
    title: "Residential Solar",
    tagline: "Homes & Housing Societies",
    description:
      "Cut 80–90% of electricity bills with rooftop solar for villas and apartment societies, with seamless net metering and durable mounting.",
    image:
      "https://images.unsplash.com/photo-1780445392792-556e5609c5ab?q=80&w=800&auto=format&fit=crop",
    href: "/residential-solar",
  },
  {
    id: "commercial",
    title: "Commercial & Industrial",
    tagline: "Factories & Warehouses",
    description:
      "Lower high daytime commercial tariffs with durable rooftop arrays, backed by 40% accelerated depreciation tax benefits.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop",
    href: "/commercial-industrial-solar",
  },
  {
    id: "maintenance",
    title: "Cleaning & Maintenance",
    tagline: "Asset Protection & AMC",
    description:
      "Dust and bird droppings cause up to 30% power loss. We provide reverse-osmosis panel washing and rapid electrical repairs.",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=800&auto=format&fit=crop",
    href: "/operations-maintenance",
  },
];

const hardwareComponents = [
  {
    title: "High-Efficiency Panels",
    description:
      "Quality panels with 25-year warranties designed to generate strong power even on overcast days.",
    image:
      "https://images.unsplash.com/photo-1719848574124-2f66fa842fd6?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Smart Inverters",
    description:
      "Converts solar power for home use and tracks daily generation directly on your phone.",
    image:
      "https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Elevated Structures",
    description:
      "Rust-proof galvanized steel elevated to keep your terrace completely open for walking and daily use.",
    image:
      "https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Electrical Safety Gear",
    description:
      "Dedicated safety switches, surge protection, earthing, and lightning arrestors to protect appliances.",
    image:
      "https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=800&auto=format&fit=crop",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Site & Roof Survey",
    description:
      "We inspect your terrace, measure shadow-free space, and review power bills to calculate your ideal system size.",
    image:
      "https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "2",
    title: "Design & Layout",
    description:
      "We prepare a shadow analysis, custom roof layout, and a clear, transparent list of quality components.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "3",
    title: "Installation & Approvals",
    description:
      "We handle rooftop installation and complete all coordination with your power company for net metering.",
    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "4",
    title: "Regular Cleaning & Care",
    description:
      "We provide regular panel washing and system checkups so your installation continues producing at peak capacity.",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=800&auto=format&fit=crop",
  },
];

const homeFaqs = [
  {
    id: "roof-space",
    question: "How much rooftop space do I need?",
    answer:
      "About 80 to 100 square feet of open terrace space per 1 kW. A typical 3 kW home system needs around 250 to 300 square feet.",
  },
  {
    id: "net-metering",
    question: "How does net metering work?",
    answer:
      "A bi-directional meter records power drawn from and exported to the grid. Your monthly bill reflects net consumption. Care4Solar manages the entire power company application and meter connection.",
  },
  {
    id: "lifespan",
    question: "What is the expected lifespan of a rooftop solar system?",
    answer:
      "Quality solar panels are designed to last 25+ years with a 25-year performance warranty. Inverters carry 5 to 10-year warranties, and structures are rust-proof to withstand outdoor weather.",
  },
  {
    id: "cleaning",
    question: "Why does panel cleaning require purified water?",
    answer:
      "Ordinary tap water contains minerals that dry into white stains on panel glass, blocking sunlight. We use purified water and soft brushes so panels dry spot-free and generate full power.",
  },
  {
    id: "power-cuts",
    question: "Will solar work during power cuts?",
    answer:
      "Standard grid-tied systems shut down during power cuts to keep utility repair workers safe. If you need backup during outages, we can add a lithium battery or connect solar to your backup generator.",
  },
];

const testimonials = [
  {
    id: "1",
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
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* 1. Hero Carousel + Docked 4-Item Impact Strip */}
      <FullHeroCarousel />

      {/* 2. Core Proposition — Concise & Direct */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#202720] leading-tight">
                We install rooftop solar and keep it performing.
              </h2>
              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                Most solar companies disappear once panels are bolted to your roof. When dirt
                accumulates, inverters trip, or generation drops, support is hard to find.
              </p>
              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                Care4Solar combines precision rooftop engineering with regular cleaning and
                maintenance—so your system actually delivers real savings for 25 years.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href="/about" variant="outline" size="md" icon="arrow">
                  About Care4Solar
                </Button>
                <Button href="/contact" variant="primary" size="md" magnetic={true}>
                  Request Site Visit
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

      {/* 3. Solutions — Concise Cards */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="Solar solutions for every property."
              description="From independent homes to apartment communities, factories, and maintenance for existing plants."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-[#15532E] block">
                        {solution.tagline}
                      </span>
                      <h3 className="text-xl font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors mt-0.5">
                        {solution.title}
                      </h3>
                      <p className="mt-1.5 text-sm sm:text-base text-[#374151] leading-relaxed">
                        {solution.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E5E8E3] flex items-center text-sm font-semibold text-[#15532E] group-hover:text-[#E5A100] transition-colors">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Hardware Quality — Quick Specs */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="What goes on your rooftop."
              description="A solar system is a 25-year structural installation. We only use industrial-grade, certified components."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="text-lg font-semibold text-[#202720]">{item.title}</h3>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. How We Work — 4 Simple Steps */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="How we work with you."
              description="A clear, hassle-free path from your initial roof survey to clean power generation."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-[#E5E8E3] flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F3]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 w-7 h-7 bg-[#15532E] text-white text-sm font-bold font-mono flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="text-lg font-semibold text-[#202720]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Why Care Matters — Short & Impactful */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#202720] leading-tight">
                Dirty panels lose up to 30% of their power.
              </h2>
              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                In Indian cities, dust and soot settle quickly on solar glass. Washing with ordinary
                tap water leaves white mineral stains that can permanently reduce output.
              </p>
              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                Care4Solar cleans panels safely using purified water and soft brushes, restoring
                lost power and protecting your 25-year investment.
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
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <SectionHeading
              title="Completed solar installations."
              description="A look at some of our recent installations across residential, apartment, and commercial properties."
            />
            <Button href="/projects" variant="outline" size="sm" icon="arrow" className="shrink-0">
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-[#15532E] block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold text-[#202720]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#374151] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5E8E3] flex items-center justify-between text-sm text-[#374151]">
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
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="What our customers say."
              description="Real feedback from homeowners, housing societies, and commercial facility managers."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#F7F7F3] border border-[#E5E8E3] p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-[#E5A100]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-base text-[#202720] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#E5E8E3] flex items-center space-x-3.5">
                  <div className="relative w-11 h-11 shrink-0 overflow-hidden rounded-full border border-[#E5E8E3]">
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-base text-[#202720]">{t.author}</div>
                    <div className="text-sm text-[#15532E] font-medium">{t.role}</div>
                    <div className="text-xs sm:text-sm text-[#374151]">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Frequently Asked Questions */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionHeading
              title="Everything you need to know about rooftop solar."
              description="Clear, honest answers to the most common questions from property owners."
              align="center"
            />

            <Accordion items={homeFaqs} />

            <div className="text-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#15532E] hover:text-[#E5A100] transition-colors"
              >
                <span>Have specific roof or electrical questions? Speak directly with an engineer</span>
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
