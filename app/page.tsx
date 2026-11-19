import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import CTASection from "@/components/sections/CTASection";
import HeroCarousel from "@/components/sections/HeroCarousel";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* ==================================================
          SECTION 01 — HERO (Asymmetric Swiss Composition)
          ================================================== */}
      <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="text-xs font-mono tracking-[0.16em] uppercase text-[#15532E] border-l-2 border-[#15532E] pl-3 font-semibold">
                  SOLAR ENERGY / ENGINEERING / PERFORMANCE
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-[#15532E] leading-[1.08] sm:leading-[1.05]">
                  Powering solar.
                  <br />
                  <span className="text-[#202720]">Protecting performance.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="max-w-xl text-base sm:text-xl text-[#747C75] leading-relaxed font-normal">
                  Solar solutions, technical expertise and ongoing care to help your solar
                  infrastructure perform reliably.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <Button href="/solar-for-homes" variant="primary" size="lg" icon="arrow" className="w-full sm:w-auto">
                    Explore Solar Solutions
                  </Button>
                  <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                    Talk to Our Team
                  </Button>
                </div>
              </Reveal>

              {/* Minimalist architectural stats bar */}
              <Reveal delay={0.4}>
                <div className="pt-8 border-t border-[#E5E8E3] grid grid-cols-3 gap-4">
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#747C75]">
                      Engineering
                    </span>
                    <span className="text-sm font-semibold text-[#202720] mt-0.5 block">
                      Tier-1 Hardware
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#747C75]">
                      Maintenance
                    </span>
                    <span className="text-sm font-semibold text-[#202720] mt-0.5 block">
                      Structured AMC
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#747C75]">
                      Compliance
                    </span>
                    <span className="text-sm font-semibold text-[#202720] mt-0.5 block">
                      Grid Net-Metering
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Large Hero Visual Carousel */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2} className="relative">
                <HeroCarousel />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          SECTION 02 — COMPANY INTRODUCTION
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Editorial Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-semibold tracking-[0.16em] uppercase text-[#15532E]">
                01 / ABOUT CARE4SOLAR
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720] leading-tight">
                Solar is an investment.
                <br />
                <span className="text-[#15532E]">Its performance deserves care.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#747C75] leading-relaxed">
                Care4Solar focuses on helping customers make informed solar decisions and maintain
                the long-term performance of their solar installations. From residential rooftops
                to large-scale commercial facilities, we approach every project with engineering
                discipline and operational foresight.
              </p>
              <div className="pt-2">
                <Button href="/about" variant="outline" size="md" icon="arrow">
                  Read About Our Approach
                </Button>
              </div>
            </div>

            {/* Right Technical Photography */}
            <div className="lg:col-span-6">
              <ImageReveal
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                alt="Solar electrical engineering inspection"
                aspectRatio="aspect-[16/11]"
                className="border border-[#E5E8E3]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          SECTION 03 — SERVICES OVERVIEW (Asymmetric Grid)
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeading
              eyebrow="02 / OUR CAPABILITIES"
              title="Complete solar support. From planning to performance."
              description="Explore our six core solar domains, each designed to ensure technical compliance, high efficiency, and lasting asset durability."
            />
            <Button href="/contact" variant="outline" size="sm" icon="arrow" className="shrink-0">
              Request a Consultation
            </Button>
          </div>

          {/* 6 Approved Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="group flex flex-col bg-white border border-[#E5E8E3] transition-all duration-300 hover:border-[#15532E]/40 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#15532E] text-white text-[11px] font-mono px-2 py-0.5">
                    0{index + 1}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#15532E] block mb-1">
                      {service.eyebrow}
                    </span>
                    <h3 className="text-xl font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#747C75] leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E8E3]">
                    <Link
                      href={service.slug}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#15532E] group-hover:text-[#E5A100] transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ==================================================
          SECTION 04 — SOLAR FOR EVERY SCALE
          ================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="03 / SCALE & SECTORS"
            title="Solutions designed around your energy needs."
            description="Whether powering an individual residence, an apartment housing society, a corporate facility, or an industrial factory, our systems match specific electrical profiles."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Residential */}
            <Link
              href="/solar-for-homes"
              className="group block border border-[#E5E8E3] bg-[#F7F7F3] overflow-hidden transition-all duration-300 hover:border-[#15532E]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=800&auto=format&fit=crop"
                  alt="Residential solar"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono text-[#747C75] uppercase block mb-1">
                  Scale 01
                </span>
                <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                  Residential
                </h3>
                <p className="mt-1.5 text-xs text-[#747C75] leading-relaxed">
                  Bespoke rooftop arrays engineered for homeowners and independent villas.
                </p>
              </div>
            </Link>

            {/* Apartments */}
            <Link
              href="/solar-for-apartments"
              className="group block border border-[#E5E8E3] bg-[#F7F7F3] overflow-hidden transition-all duration-300 hover:border-[#15532E]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
                  alt="Apartments solar"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono text-[#747C75] uppercase block mb-1">
                  Scale 02
                </span>
                <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                  Apartments & RWAs
                </h3>
                <p className="mt-1.5 text-xs text-[#747C75] leading-relaxed">
                  Shared terrace solar powering common pumps, elevators, and campus lights.
                </p>
              </div>
            </Link>

            {/* Commercial */}
            <Link
              href="/commercial-industrial-solar"
              className="group block border border-[#E5E8E3] bg-[#F7F7F3] overflow-hidden transition-all duration-300 hover:border-[#15532E]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop"
                  alt="Commercial solar"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono text-[#747C75] uppercase block mb-1">
                  Scale 03
                </span>
                <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                  Commercial
                </h3>
                <p className="mt-1.5 text-xs text-[#747C75] leading-relaxed">
                  Energy cost reduction for corporate offices, schools, and healthcare campuses.
                </p>
              </div>
            </Link>

            {/* Industrial */}
            <Link
              href="/commercial-industrial-solar"
              className="group block border border-[#E5E8E3] bg-[#F7F7F3] overflow-hidden transition-all duration-300 hover:border-[#15532E]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop"
                  alt="Industrial solar"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono text-[#747C75] uppercase block mb-1">
                  Scale 04
                </span>
                <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                  Industrial Facilities
                </h3>
                <p className="mt-1.5 text-xs text-[#747C75] leading-relaxed">
                  Heavy-duty megawatts for manufacturing warehouses and processing factories.
                </p>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* ==================================================
          SECTION 05 — OPERATIONS AND MAINTENANCE FEATURE
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Large Maintenance Visual */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#E5E8E3] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1200&auto=format&fit=crop"
                  alt="Solar maintenance technician cleaning panels"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Maintenance Editorial Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-semibold tracking-[0.16em] uppercase text-[#15532E]">
                04 / LIFECYCLE SUPPORT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720] leading-tight">
                Installation is the beginning.
                <br />
                <span className="text-[#15532E]">Performance is the long game.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#747C75] leading-relaxed">
                Consistent maintenance and technical attention help solar installations remain
                reliable throughout their operational life. Without structured care, environmental
                soiling and unnoticed electrical anomalies degrade generation yields.
              </p>

              {/* Maintenance Pillars List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 bg-white border border-[#E5E8E3]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold block">01. Cleaning</span>
                  <span className="text-xs text-[#747C75] mt-1 block">
                    Demineralized wash preventing hotspot burn-in.
                  </span>
                </div>
                <div className="p-4 bg-white border border-[#E5E8E3]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold block">02. Monitoring</span>
                  <span className="text-xs text-[#747C75] mt-1 block">
                    Telemetry logging and yield anomaly alerts.
                  </span>
                </div>
                <div className="p-4 bg-white border border-[#E5E8E3]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold block">03. Thermal</span>
                  <span className="text-xs text-[#747C75] mt-1 block">
                    Infrared audits identifying cell micro-cracks.
                  </span>
                </div>
                <div className="p-4 bg-white border border-[#E5E8E3]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold block">04. Contracts</span>
                  <span className="text-xs text-[#747C75] mt-1 block">
                    Scheduled health checks and priority triage.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/operations-maintenance" variant="secondary" size="md" icon="arrow">
                  Explore Operations & Maintenance
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          SECTION 06 — PROJECT SHOWCASE (Max 3 Featured)
          ================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeading
              eyebrow="05 / REPRESENTATIVE WORKS"
              title="Solar solutions in practice."
              description="Sample representative installations illustrating engineering configurations across commercial, residential, and housing society sectors."
            />
            <Button href="/projects" variant="outline" size="sm" icon="arrow" className="shrink-0">
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col border border-[#E5E8E3] bg-[#F7F7F3] transition-all hover:border-[#15532E]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#15532E] text-white text-[10px] uppercase font-mono px-2 py-0.5 tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#747C75] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E8E3] space-y-1 text-xs text-[#747C75]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono uppercase text-[10px] text-[#747C75]">Location:</span>
                      <span className="font-medium text-[#202720]">{project.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono uppercase text-[10px] text-[#747C75]">Capacity:</span>
                      <span className="font-semibold text-[#15532E]">{project.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ==================================================
          SECTION 07 — HOW IT WORKS (Minimal Process Layout)
          ================================================== */}
      <section className="py-20 lg:py-28 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="06 / METHODOLOGY"
            title="A straightforward approach to solar."
            description="Our four-stage engagement framework guarantees clarity from initial energy assessment through to long-term lifecycle maintenance."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 bg-white border border-[#E5E8E3] flex flex-col justify-between space-y-4">
              <div>
                <span className="text-2xl font-mono font-bold text-[#E5A100]">01</span>
                <h3 className="text-lg font-semibold text-[#202720] mt-3">Understand</h3>
                <p className="mt-2 text-sm text-[#747C75] leading-relaxed">
                  Understand the customer&apos;s energy requirements, consumption patterns, and long-term utility goals.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E8E3] text-[11px] font-mono text-[#747C75] uppercase">
                Stage 01 / Discovery
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-white border border-[#E5E8E3] flex flex-col justify-between space-y-4">
              <div>
                <span className="text-2xl font-mono font-bold text-[#E5A100]">02</span>
                <h3 className="text-lg font-semibold text-[#202720] mt-3">Assess</h3>
                <p className="mt-2 text-sm text-[#747C75] leading-relaxed">
                  Review site conditions, shadow obstacles, structural roof feasibility, and sanctioned electrical load.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E8E3] text-[11px] font-mono text-[#747C75] uppercase">
                Stage 02 / Engineering
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-white border border-[#E5E8E3] flex flex-col justify-between space-y-4">
              <div>
                <span className="text-2xl font-mono font-bold text-[#E5A100]">03</span>
                <h3 className="text-lg font-semibold text-[#202720] mt-3">Implement</h3>
                <p className="mt-2 text-sm text-[#747C75] leading-relaxed">
                  Coordinate the appropriate solar solution, secure DISCOM net-metering sanctions, and execute safe commissioning.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E8E3] text-[11px] font-mono text-[#747C75] uppercase">
                Stage 03 / Commissioning
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-white border border-[#E5E8E3] flex flex-col justify-between space-y-4">
              <div>
                <span className="text-2xl font-mono font-bold text-[#E5A100]">04</span>
                <h3 className="text-lg font-semibold text-[#202720] mt-3">Maintain</h3>
                <p className="mt-2 text-sm text-[#747C75] leading-relaxed">
                  Support the installation through ongoing care, scheduled cleanings, telemetry monitoring, and periodic health checks.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E8E3] text-[11px] font-mono text-[#747C75] uppercase">
                Stage 04 / Asset Care
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          SECTION 08 — FINAL CTA
          ================================================== */}
      <CTASection
        heading="Let's make your solar investment work harder."
        description="Speak with the Care4Solar team about your solar requirements."
        primaryCtaText="Get in Touch"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
