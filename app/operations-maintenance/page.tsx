import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Accordion, { type AccordionEntry } from "@/components/ui/Accordion";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Maintenance & Operations (O&M) — Panel Cleaning & Inspections | Care4Solar",
  description:
    "Expert solar maintenance services: purified panel cleaning, infrared thermal scans, inverter monitoring, and annual maintenance contracts (AMC) for peak solar performance.",
};

// Targeted Maintenance FAQs
const maintenanceFaqs: AccordionEntry[] = [
  {
    id: "cleaning-frequency",
    question: "How often should solar panels be cleaned?",
    answer:
      "For most rooftop installations, cleaning every 4 to 6 weeks is recommended to prevent dust, grime, and environmental soot from baking onto the glass. Installations situated near high-traffic roads, construction zones, or industrial corridors may benefit from more frequent cleanings.",
  },
  {
    id: "included-services",
    question: "What is included in solar maintenance?",
    answer:
      "A complete maintenance service covers purified water panel cleaning, visual inspection of mounting structures and roof clamps, AC/DC distribution box testing, inverter operating health checks, earthing resistance verification, and cable connection tightness.",
  },
  {
    id: "thermal-inspection",
    question: "What is a thermal inspection?",
    answer:
      "A thermal inspection uses calibrated infrared thermography to identify abnormal temperature spikes across individual solar cells and electrical junctions. These 'hotspots' reveal micro-cracks, failing bypass diodes, or loose connections that are invisible to the naked eye.",
  },
  {
    id: "maintenance-contracts",
    question: "Do you provide maintenance contracts?",
    answer:
      "Yes. We offer customized Annual Maintenance Contracts (AMC) for private residences, housing societies (RWAs), and commercial-industrial facilities. AMC packages include scheduled periodic cleanings, bi-annual electrical audits, generation tracking, and priority technician dispatch.",
  },
  {
    id: "existing-installations",
    question: "Can you inspect an existing solar installation?",
    answer:
      "Yes. We regularly inspect and maintain systems installed by third parties. Our engineering team conducts a thorough site audit to assess system degradation, identify generation bottlenecks, and bring the installation back up to peak output.",
  },
  {
    id: "booking-process",
    question: "How do I book a maintenance visit?",
    answer:
      "You can submit a service request with your installation capacity and location through our online form, or contact our team directly. We will review your installation details and confirm a convenient service appointment.",
  },
];

export default function OperationsMaintenancePage() {
  return (
    <div className="flex flex-col w-full bg-[#F7F7F3]">
      {/* =========================================================================
          SECTION 1 — HERO SECTION
          ========================================================================= */}
      <section className="relative w-full min-h-[540px] sm:min-h-[620px] lg:h-[78vh] max-h-[820px] flex items-center overflow-hidden bg-[#18231c]">
        {/* Full-bleed background visual */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop"
            alt="Solar maintenance technician inspecting rooftop solar installation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle cinematic gradient overlay for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Hero Editorial Content */}
        <div className="relative z-10 w-full py-16 sm:py-24">
          <Container>
            <div className="max-w-3xl text-left space-y-6">
              <span className="text-sm font-mono font-semibold uppercase tracking-widest text-[#E5A100] block">
                Operations &amp; Maintenance
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.08]">
                Keep your solar <br />
                performing.
              </h1>

              <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-[#F7F7F3]/90 leading-relaxed font-normal">
                Regular cleaning, technical inspections and preventive maintenance designed to keep solar installations operating safely and efficiently.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="#services" variant="primary" size="lg" magnetic={true}>
                  Explore Services
                </Button>
                <Button href="/contact" variant="dark" size="lg" magnetic={true} icon="arrow">
                  Book a Maintenance Visit
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHY MAINTENANCE MATTERS (Editorial Split Layout)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large High-Quality Relevant Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#E5E8E3] bg-[#F7F7F3]">
                <Image
                  src="https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1400&auto=format&fit=crop"
                  alt="Solar panel surface washing with purified water and soft brush"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Editorial Content & Supporting Topics */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="eyebrow block text-sm tracking-widest">Asset Care</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720] leading-[1.14]">
                  Performance doesn&apos;t maintain itself.
                </h2>
                <p className="text-lg sm:text-xl text-[#374151] leading-relaxed">
                  Dust, debris, weather exposure and electrical wear can affect solar system performance over time. Regular maintenance helps identify issues, maintain system safety and support reliable energy generation.
                </p>
              </div>

              {/* Minimalist supporting topics with subtle separators (no boxed cards) */}
              <div className="pt-4 border-t border-[#E5E8E3] space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#202720]">
                    Accumulated dirt
                  </h3>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    Dust, grime and debris can obstruct sunlight reaching the panels, steadily reducing generation over weeks of exposure.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E8E3] space-y-2">
                  <h3 className="text-xl font-semibold text-[#202720]">
                    Wear &amp; faults
                  </h3>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    Loose connections, damaged components and hotspots may affect safety and performance if not caught early through scheduled inspections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3 — OUR MAINTENANCE SERVICES (Main Section, Alternating Layout)
          ========================================================================= */}
      <section id="services" className="py-20 sm:py-32 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mb-16 sm:mb-24">
            <span className="eyebrow block mb-3 text-sm tracking-widest">Scope of Work</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#202720] leading-[1.12]">
              Maintenance that covers more than cleaning.
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-[#374151] leading-relaxed">
              From routine cleaning to technical inspections and system monitoring, maintenance tailored to your installation.
            </p>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {/* Service 01 — Solar Panel Cleaning */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#15532E] block">
                  Service 01
                </span>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
                    Solar Panel Cleaning
                  </h3>
                  <p className="text-lg sm:text-xl text-[#374151] leading-relaxed">
                    Remove accumulated dust, grime and debris using appropriate cleaning methods to help maintain panel performance.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E5E8E3]">
                  <ul className="space-y-3 pt-2 text-base sm:text-lg text-[#374151]">
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Panel surface cleaning</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Removal of accumulated dirt and debris</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Visual inspection during cleaning</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <Button href="/contact" variant="primary" size="md">
                    Request Cleaning
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#E5E8E3] bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1200&auto=format&fit=crop"
                    alt="Solar technician cleaning rooftop solar panel surface"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 02 — Thermal & Safety Inspections */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-1">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#E5E8E3] bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop"
                    alt="Thermal safety inspection and electrical audit of solar equipment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 order-2">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#15532E] block">
                  Service 02
                </span>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
                    Thermal &amp; Safety Inspections
                  </h3>
                  <p className="text-lg sm:text-xl text-[#374151] leading-relaxed">
                    Inspect solar installations for potential hotspots, abnormal temperatures, visible damage and electrical safety concerns.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E5E8E3]">
                  <ul className="space-y-3 pt-2 text-base sm:text-lg text-[#374151]">
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Thermal inspection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Identification of potential hotspots</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Electrical and visual safety checks</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <Button href="/contact" variant="primary" size="md">
                    Request Inspection
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 03 — Inverter & System Monitoring */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#15532E] block">
                  Service 03
                </span>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
                    Inverter &amp; System Monitoring
                  </h3>
                  <p className="text-lg sm:text-xl text-[#374151] leading-relaxed">
                    Monitor system performance, inspect inverter operation and identify irregularities that may affect energy generation.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E5E8E3]">
                  <ul className="space-y-3 pt-2 text-base sm:text-lg text-[#374151]">
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Inverter inspection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>System performance monitoring</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Fault identification</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <Button href="/contact" variant="primary" size="md">
                    Request Monitoring
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#E5E8E3] bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=1200&auto=format&fit=crop"
                    alt="Solar inverter inspection and data logging monitor"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 04 — Annual Maintenance Contracts (AMC) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-1">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#E5E8E3] bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=1200&auto=format&fit=crop"
                    alt="Solar operations and maintenance engineering team on site"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 order-2">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#15532E] block">
                  Service 04
                </span>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
                    Annual Maintenance Contracts (AMC)
                  </h3>
                  <p className="text-lg sm:text-xl text-[#374151] leading-relaxed">
                    Scheduled maintenance for solar installations through planned inspections, cleaning and technical support.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E5E8E3]">
                  <ul className="space-y-3 pt-2 text-base sm:text-lg text-[#374151]">
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Scheduled maintenance visits</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Preventive inspections</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-5 h-5 flex items-center justify-center text-[#15532E] shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>Ongoing maintenance support</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <Button href="/contact" variant="primary" size="md">
                    Explore AMC
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4 — HOW MAINTENANCE WORKS (Compact 3-Step Process)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="eyebrow block mb-2 text-sm tracking-widest">Process</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#202720] leading-[1.12]">
              Maintenance, made straightforward.
            </h2>
          </div>

          {/* Stepped Process Track */}
          <div className="relative">
            <div className="hidden md:block absolute top-7 left-12 right-12 h-px bg-[#E5E8E3] z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 01 */}
              <div className="bg-[#F7F7F3] p-7 border border-[#E5E8E3] hover:border-[#15532E] transition-colors duration-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-3xl font-mono font-bold text-[#15532E] block">
                    01
                  </span>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#202720]">
                      Get in touch
                    </h3>
                    <p className="text-base text-[#374151] leading-relaxed">
                      Submit your service request and share your installation details.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E8E3]">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#15532E] uppercase tracking-wider block">
                    Step 1 · Request Submission
                  </span>
                </div>
              </div>

              {/* Step 02 */}
              <div className="bg-[#F7F7F3] p-7 border border-[#E5E8E3] hover:border-[#15532E] transition-colors duration-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-3xl font-mono font-bold text-[#15532E] block">
                    02
                  </span>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#202720]">
                      Assessment
                    </h3>
                    <p className="text-base text-[#374151] leading-relaxed">
                      We determine the maintenance or inspection required for your installation.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E8E3]">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#15532E] uppercase tracking-wider block">
                    Step 2 · Scope Evaluation
                  </span>
                </div>
              </div>

              {/* Step 03 */}
              <div className="bg-[#F7F7F3] p-7 border border-[#E5E8E3] hover:border-[#15532E] transition-colors duration-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-3xl font-mono font-bold text-[#15532E] block">
                    03
                  </span>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#202720]">
                      Service
                    </h3>
                    <p className="text-base text-[#374151] leading-relaxed">
                      Our team carries out the agreed maintenance or inspection.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E8E3]">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#15532E] uppercase tracking-wider block">
                    Step 3 · On-Site Execution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5 — FAQ SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-3 mb-12 sm:mb-16">
              <span className="eyebrow block text-sm tracking-widest">Common Inquiries</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
                Maintenance questions, answered.
              </h2>
              <p className="text-lg sm:text-xl text-[#374151]">
                Clear details on scheduling, cleaning techniques, and safety protocols.
              </p>
            </div>

            <Accordion items={maintenanceFaqs} defaultOpenIndex={0} />
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6 — FINAL CTA
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#18231c] text-white overflow-hidden">
        {/* Full-width visual background with dark scrim */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1660330589243-4c640d878052?q=80&w=2000&auto=format&fit=crop"
            alt="Solar maintenance engineers inspecting solar panels"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121c15] via-[#15532E]/80 to-[#121c15]/90" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-mono font-semibold uppercase tracking-widest text-[#E5A100] block">
              Ongoing Plant Reliability
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14]">
              Keep your solar generating at its best.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#F7F7F3]/90 leading-relaxed max-w-xl mx-auto">
              Whether you need a one-time cleaning, a technical inspection or ongoing maintenance, we&apos;re ready to help.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" icon="arrow" magnetic={true}>
                Book a Maintenance Visit
              </Button>
              <Button href="/projects" variant="dark" size="lg" magnetic={true}>
                View Our Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
