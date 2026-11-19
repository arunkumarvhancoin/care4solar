import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Accordion, { type AccordionEntry } from "@/components/ui/Accordion";
import {
  Check,
  Minus,
  BarChart3,
  Compass,
  Sliders,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Solutions — On-Grid, Off-Grid & Hybrid Solar Systems | Care4Solar",
  description:
    "Explore on-grid, off-grid, and hybrid solar systems. Learn how each system operates, compare key capabilities, and find the right solar energy solution for your property.",
};

// FAQ entries tailored specifically to solar system selection
const solutionFaqs: AccordionEntry[] = [
  {
    id: "diff-systems",
    question: "What is the difference between on-grid, off-grid and hybrid solar?",
    answer:
      "An on-grid system connects directly to the electricity grid, utilizing net metering to export excess daytime power and lower your bill. An off-grid system functions completely disconnected from the grid, using battery banks for 24/7 power in remote locations. A hybrid system combines both: it stays grid-tied for net metering while maintaining dedicated battery reserves to keep critical appliances powered during utility blackouts.",
  },
  {
    id: "need-batteries",
    question: "Do I need batteries for my solar system?",
    answer:
      "Not necessarily. If your property has a stable utility connection and your primary goal is reducing daytime electricity costs, an on-grid system without batteries is the most cost-effective option. Batteries are only necessary if you experience frequent power cuts (hybrid system) or have no grid access at all (off-grid system).",
  },
  {
    id: "power-outage",
    question: "Will solar work during a power outage?",
    answer:
      "Standard on-grid solar systems automatically shut down during utility outages as a mandatory safety measure (anti-islanding) to protect maintenance workers repair lines. If you require power continuity during outages, a hybrid solar system or solar-plus-storage solution automatically isolates your home and runs critical loads from battery power.",
  },
  {
    id: "determine-capacity",
    question: "How do I determine the solar capacity I need?",
    answer:
      "System capacity is determined by reviewing your monthly electricity consumption (kWh units from your utility bills), available shadow-free rooftop area (approximately 80–100 sq. ft. per 1 kW), and daytime peak loads. During our initial consultation, we analyze your exact consumption history to recommend the optimal kilowatt size.",
  },
  {
    id: "best-system",
    question: "Which solar system is best for my property?",
    answer:
      "For urban homes and commercial buildings with reliable grid availability, an on-grid system offers the fastest payback and highest return on investment. For properties with regular power interruptions, a hybrid system provides the ideal balance of bill savings and uninterrupted backup. Off-grid systems are recommended for remote sites, agricultural estates, or un-electrified regions.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full bg-[#F7F7F3]">
      {/* =========================================================================
          SECTION 1 — HERO SECTION
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:h-[78vh] max-h-[820px] flex items-center overflow-hidden bg-[#18231c]">
        {/* Full-bleed background visual */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=2000&auto=format&fit=crop"
            alt="Solar installation on rooftop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Symmetrical cinematic dark scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35" />
        </div>

        {/* Hero Centered Editorial Content */}
        <div className="relative z-10 w-full py-16 sm:py-24">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <span className="text-sm sm:text-base font-mono font-semibold uppercase tracking-widest text-[#E5A100] block">
                Solar Solutions
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.08]">
                Find the solar solution <br />
                that fits.
              </h1>

              <p className="max-w-xl mx-auto text-lg sm:text-xl md:text-2xl text-[#F7F7F3]/90 leading-relaxed font-normal">
                Smarter solar systems designed around your property&apos;s energy needs.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — SOLAR SYSTEM TYPES (Primary Section)
          ========================================================================= */}
      <section id="system-types" className="py-20 sm:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mb-16 sm:mb-24">
            <span className="eyebrow block mb-3 text-sm tracking-widest">System Architecture</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#202720] leading-[1.12]">
              Different needs. Different solar systems.
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-[#374151] leading-relaxed">
              Every roof and facility operates with different grid conditions, daytime occupancy, and backup requirements. Explore the four core configurations to understand how each system works.
            </p>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {/* System 1: On-Grid Solar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#15532E] block">
                  Services We Provide · On-Grid Solar EPC
                </span>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
                    On-Grid Solar
                  </h3>
                  <p className="text-lg sm:text-xl text-[#374151] leading-relaxed">
                    A solar system connected to the electricity grid, allowing your property to use solar power while remaining connected to utility electricity.
                  </p>
                </div>

                <div className="p-5 bg-[#F7F7F3] border border-[#E5E8E3]">
                  <p className="text-xs sm:text-sm uppercase font-mono tracking-wider text-[#4B5563] font-bold mb-1">
                    Best suited for:
                  </p>
                  <p className="text-base sm:text-lg font-medium text-[#202720]">
                    Homes, offices and businesses with a reliable grid connection.
                  </p>
                </div>

                <ul className="space-y-3 pt-2 text-base sm:text-lg text-[#374151]">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Net metering exports surplus daytime power to lower your electric bill.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Lowest upfront cost with no battery bank required for maximum ROI.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Seamless grid sync whenever your power demand exceeds sunlight.</span>
                  </li>
                </ul>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                  <Button href="/contact" variant="primary" size="md" icon="arrow">
                    Request On-Grid Solar Service
                  </Button>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">
                    Turnkey EPC & Discom Net-Metering
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative aspect-[16/10] overflow-hidden border border-[#E5E8E3] bg-white shadow-xs">
                  <Image
                    src="/images/diagrams/on-grid-diagram.png"
                    alt="On-grid solar system diagram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* System 2: Off-Grid Solar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-1">
                <div className="relative aspect-[16/10] overflow-hidden border border-[#E5E8E3] bg-white shadow-xs">
                  <Image
                    src="/images/diagrams/off-grid-diagram.png"
                    alt="Off-grid standalone solar system diagram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 order-2">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#15532E] block">
                  Services We Provide · Off-Grid Solar EPC
                </span>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
                    Off-Grid Solar
                  </h3>
                  <p className="text-lg sm:text-xl text-[#374151] leading-relaxed">
                    A system designed to operate independently of the electricity grid, typically using batteries to store energy for use when solar generation is unavailable.
                  </p>
                </div>

                <div className="p-5 bg-[#F7F7F3] border border-[#E5E8E3]">
                  <p className="text-xs sm:text-sm uppercase font-mono tracking-wider text-[#4B5563] font-bold mb-1">
                    Best suited for:
                  </p>
                  <p className="text-base sm:text-lg font-medium text-[#202720]">
                    Remote locations or applications without reliable grid access.
                  </p>
                </div>

                <ul className="space-y-3 pt-2 text-base sm:text-lg text-[#374151]">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Complete independence from utility power lines with zero monthly bills.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Dedicated lithium battery bank sized for round-the-clock power.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Generator integration option for extended monsoon or cloudy periods.</span>
                  </li>
                </ul>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                  <Button href="/contact" variant="primary" size="md" icon="arrow">
                    Request Off-Grid Solar Service
                  </Button>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">
                    Autonomous Engineering & Battery Sizing
                  </span>
                </div>
              </div>
            </div>

            {/* System 3: Hybrid Solar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#15532E] block">
                  Services We Provide · Hybrid Solar EPC
                </span>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
                    Hybrid Solar
                  </h3>
                  <p className="text-lg sm:text-xl text-[#374151] leading-relaxed">
                    Combines solar generation, grid connectivity and battery storage, providing flexibility in how energy is generated, stored and used.
                  </p>
                </div>

                <div className="p-5 bg-[#F7F7F3] border border-[#E5E8E3]">
                  <p className="text-xs sm:text-sm uppercase font-mono tracking-wider text-[#4B5563] font-bold mb-1">
                    Best suited for:
                  </p>
                  <p className="text-base sm:text-lg font-medium text-[#202720]">
                    Properties looking to combine grid connectivity with battery backup.
                  </p>
                </div>

                <ul className="space-y-3 pt-2 text-base sm:text-lg text-[#374151]">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Instant automatic switchover to battery power during grid outages.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Intelligent energy management prioritizing self-consumption and savings.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Full net metering benefits combined with blackout peace of mind.</span>
                  </li>
                </ul>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                  <Button href="/contact" variant="primary" size="md" icon="arrow">
                    Request Hybrid Solar Service
                  </Button>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">
                    Grid-Sync & Sub-10ms Outage Backup
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative aspect-[16/10] overflow-hidden border border-[#E5E8E3] bg-white shadow-xs">
                  <Image
                    src="/images/diagrams/hybrid-diagram.png"
                    alt="Hybrid solar and battery backup system diagram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* System 4: Solar + Battery Storage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-1">
                <div className="relative aspect-[16/10] overflow-hidden border border-[#E5E8E3] bg-white shadow-xs">
                  <Image
                    src="/images/diagrams/storage-diagram.png"
                    alt="Solar plus modular battery storage addition diagram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 order-2">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#15532E] block">
                  Services We Provide · Battery Storage & Retrofits
                </span>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
                    Solar + Battery Storage
                  </h3>
                  <p className="text-lg sm:text-xl text-[#374151] leading-relaxed">
                    Store solar energy for later use with battery storage solutions, depending on the system configuration.
                  </p>
                </div>

                <div className="p-5 bg-[#F7F7F3] border border-[#E5E8E3]">
                  <p className="text-xs sm:text-sm uppercase font-mono tracking-wider text-[#4B5563] font-bold mb-1">
                    Best suited for:
                  </p>
                  <p className="text-base sm:text-lg font-medium text-[#202720]">
                    Properties looking to use stored solar energy beyond generation hours or support backup requirements.
                  </p>
                </div>

                <ul className="space-y-3 pt-2 text-base sm:text-lg text-[#374151]">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Stores daytime generation to power evening lighting and air conditioning.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Modular battery capacity designed to expand as your energy demands grow.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#15532E] mt-2.5 shrink-0" />
                    <span>Compatible with both new installations and retrofits on existing solar.</span>
                  </li>
                </ul>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                  <Button href="/contact" variant="primary" size="md" icon="arrow">
                    Request Battery Storage Service
                  </Button>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">
                    New Installations & Retrofit Upgrades
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3 — SYSTEM COMPARISON
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="eyebrow block mb-2 text-sm tracking-widest">Technical Matrix</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
              Which one fits your needs?
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-[#374151]">
              A practical, side-by-side comparison across connection, battery storage, and resilience.
            </p>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="bg-white border border-[#E5E8E3] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-[#E5E8E3] bg-[#F7F7F3]/70">
                    <th className="py-5 px-6 text-sm font-mono font-bold uppercase tracking-wider text-[#4B5563] w-[26%]">
                      Comparison Criteria
                    </th>
                    <th className="py-5 px-6 text-base font-semibold text-[#202720] w-[24%]">
                      On-Grid Solar
                    </th>
                    <th className="py-5 px-6 text-base font-semibold text-[#202720] w-[24%]">
                      Off-Grid Solar
                    </th>
                    <th className="py-5 px-6 text-base font-semibold text-[#15532E] w-[26%] bg-[#15532E]/5">
                      Hybrid Solar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E8E3] text-base text-[#374151]">
                  <tr>
                    <td className="py-5 px-6 font-semibold text-[#202720] bg-[#F7F7F3]/30">
                      Grid Connection
                    </td>
                    <td className="py-5 px-6">
                      <div className="inline-flex items-center space-x-2 text-[#15532E] font-medium">
                        <Check className="w-5 h-5 shrink-0" />
                        <span>Connected &amp; Required</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="inline-flex items-center space-x-2 text-[#4B5563]">
                        <Minus className="w-5 h-5 shrink-0" />
                        <span>None (Disconnected)</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 bg-[#15532E]/5">
                      <div className="inline-flex items-center space-x-2 text-[#15532E] font-medium">
                        <Check className="w-5 h-5 shrink-0" />
                        <span>Connected (Smart Switched)</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-5 px-6 font-semibold text-[#202720] bg-[#F7F7F3]/30">
                      Battery Storage
                    </td>
                    <td className="py-5 px-6">
                      <span className="text-[#4B5563]">Not required (Optional upgrade)</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-semibold text-[#202720]">Essential for 24/7 power</span>
                    </td>
                    <td className="py-5 px-6 bg-[#15532E]/5">
                      <span className="font-semibold text-[#15532E]">Integrated battery storage</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-5 px-6 font-semibold text-[#202720] bg-[#F7F7F3]/30">
                      Grid Dependence
                    </td>
                    <td className="py-5 px-6">
                      <span>High (Synchronized with grid)</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-semibold text-[#202720]">Zero (Fully autonomous)</span>
                    </td>
                    <td className="py-5 px-6 bg-[#15532E]/5">
                      <span>Flexible (Operates on grid or battery)</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-5 px-6 font-semibold text-[#202720] bg-[#F7F7F3]/30">
                      Backup Capability
                    </td>
                    <td className="py-5 px-6">
                      <span className="text-[#4B5563]">No backup during power cuts</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-semibold text-[#202720]">Continuous autonomous power</span>
                    </td>
                    <td className="py-5 px-6 bg-[#15532E]/5">
                      <span className="font-semibold text-[#15532E]">Instant backup for critical loads</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-5 px-6 font-semibold text-[#202720] bg-[#F7F7F3]/30">
                      Ideal Use
                    </td>
                    <td className="py-5 px-6 leading-relaxed">
                      Homes and businesses with steady grid power seeking maximum bill savings.
                    </td>
                    <td className="py-5 px-6 leading-relaxed">
                      Remote sites, agricultural facilities, or areas without electrical infrastructure.
                    </td>
                    <td className="py-5 px-6 bg-[#15532E]/5 font-medium text-[#202720] leading-relaxed">
                      Properties with frequent load shedding wanting both savings and resilience.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#F7F7F3]/50 border-t border-[#E5E8E3] text-sm text-[#4B5563] text-center">
              Note: Exact backup duration and storage capacity depend on the final engineered battery sizing and household load requirements.
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4 — OUR APPROACH (Engineering Workflow)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="eyebrow block mb-2 text-sm tracking-widest">Our Approach</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#202720] leading-[1.12]">
              Designed around your energy.
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-[#374151] leading-relaxed">
              We follow a structured 4-step engineering assessment to ensure your solar installation is precisely sized for your consumption, roof structural integrity, and local utility regulations.
            </p>
          </div>

          {/* Stepped Process Track */}
          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-[#E5E8E3] z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-[#F7F7F3] p-7 border border-[#E5E8E3] hover:border-[#15532E] transition-colors duration-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-mono font-bold text-[#15532E]">
                      01
                    </span>
                    <BarChart3 className="w-6 h-6 text-[#15532E]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#202720]">
                      Energy Requirements
                    </h3>
                    <p className="text-base text-[#374151] leading-relaxed">
                      Review past utility bills to establish your baseline and peak daytime consumption.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E8E3]">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#15532E] uppercase tracking-wider block">
                    Phase 1 · Consumption Profile
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#F7F7F3] p-7 border border-[#E5E8E3] hover:border-[#15532E] transition-colors duration-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-mono font-bold text-[#15532E]">
                      02
                    </span>
                    <Compass className="w-6 h-6 text-[#15532E]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#202720]">
                      Site Suitability
                    </h3>
                    <p className="text-base text-[#374151] leading-relaxed">
                      Survey roof orientation, structural integrity, and shadow patterns from nearby structures.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E8E3]">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#15532E] uppercase tracking-wider block">
                    Phase 2 · Roof Feasibility
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#F7F7F3] p-7 border border-[#E5E8E3] hover:border-[#15532E] transition-colors duration-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-mono font-bold text-[#15532E]">
                      03
                    </span>
                    <Sliders className="w-6 h-6 text-[#15532E]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#202720]">
                      System Selection
                    </h3>
                    <p className="text-base text-[#374151] leading-relaxed">
                      Select the ideal on-grid, hybrid, or off-grid configuration and optimal kilowatt capacity.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E8E3]">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#15532E] uppercase tracking-wider block">
                    Phase 3 · Sizing &amp; Specs
                  </span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-[#F7F7F3] p-7 border border-[#E5E8E3] hover:border-[#15532E] transition-colors duration-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-mono font-bold text-[#15532E]">
                      04
                    </span>
                    <ClipboardCheck className="w-6 h-6 text-[#15532E]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#202720]">
                      Installation Planning
                    </h3>
                    <p className="text-base text-[#374151] leading-relaxed">
                      Finalize engineering schematics, electrical conduits, and power board net metering permits.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E8E3]">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-[#15532E] uppercase tracking-wider block">
                    Phase 4 · Turnkey Blueprint
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5 — FAQs
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-3 mb-12 sm:mb-16">
              <span className="eyebrow block text-sm tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#202720]">
                A few things to know.
              </h2>
              <p className="text-lg sm:text-xl text-[#374151]">
                Practical answers to help you evaluate solar options for your property.
              </p>
            </div>

            <Accordion items={solutionFaqs} defaultOpenIndex={0} />
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6 — FINAL CTA
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#18231c] text-white overflow-hidden">
        {/* Full editorial visual background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
            alt="Architectural solar rooftop consultation"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121c15] via-[#15532E]/80 to-[#121c15]/90" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-mono font-semibold uppercase tracking-widest text-[#E5A100] block">
              Personalized Advisory
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14]">
              Not sure which solar system is right for you?
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#F7F7F3]/90 leading-relaxed max-w-xl mx-auto">
              We&apos;ll help you explore the right solar solution for your property and energy goals.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
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
