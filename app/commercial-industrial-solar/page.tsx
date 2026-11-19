import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial & Industrial Solar",
  description:
    "High-capacity commercial and industrial rooftop solar infrastructure engineered for factories, manufacturing facilities, warehouses, and corporate campuses.",
};

export default function CommercialIndustrialSolarPage() {
  const customerSegments = [
    {
      title: "Manufacturing Plants",
      desc: "Offsetting intensive daytime machine loads, injection molding, CNC operations, and compressor lines with high-voltage solar tie-ins.",
      image:
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Warehouses & Logistics Hubs",
      desc: "Capitalizing on vast expanse metal shed roofing to generate megawatts of clean power with lightweight aluminum standing-seam clamps.",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Commercial Office Campuses",
      desc: "Grid-synchronous installations that lower daytime HVAC chilling energy consumption and demonstrate tangible corporate ESG progress.",
      image:
        "https://images.unsplash.com/photo-1745187794292-ba0014281746?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Educational & Healthcare Facilities",
      desc: "Reliable power generation with synchronized diesel generator controllers (DG-PV synch) for hospital equipment and university campuses.",
      image:
        "https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative py-14 sm:py-20 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-[#15532E] leading-tight">
                Solar infrastructure built around business performance.
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-[#374151] leading-relaxed">
                Commercial and industrial energy costs represent a major share of operational
                expenditure. We engineer high-capacity solar systems built for high uptime, HT
                grid synchronicity, and long-term durability.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <Button href="/contact" variant="primary" size="lg" icon="arrow" magnetic={true} className="w-full sm:w-auto">
                  Request Technical Feasibility
                </Button>
                <Button href="/operations-maintenance" variant="outline" size="lg" className="w-full sm:w-auto">
                  Industrial Asset Maintenance
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E5E8E3] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop"
                  alt="Industrial factory rooftop solar array"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 02 — THE BUSINESS CASE (Editorial Rows) */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="The Business Case"
            title="The business case for commercial solar."
            description="Industrial electricity tariffs are significantly higher than base residential rates. On-site solar generation offers immediate operational advantages."
            className="mb-14"
          />

          <div className="divide-y divide-[#E5E8E3] border-y border-[#E5E8E3]">
            {[
              {
                num: "1",
                title: "Direct OPEX Reduction",
                desc: "Solar energy generation aligns with peak daytime production shifts, directly offsetting high commercial tariff units and demand charges.",
              },
              {
                num: "2",
                title: "Accelerated Tax Depreciation",
                desc: "Eligible commercial entities can claim accelerated tax depreciation on solar capital equipment, significantly improving after-tax payback metrics.",
              },
              {
                num: "3",
                title: "DG Fuel Displacement",
                desc: "Using PV-Diesel hybrid controllers, solar integrates with on-site diesel generators during outages, reducing expensive diesel fuel consumption.",
              },
              {
                num: "4",
                title: "Unused Roof Monetization",
                desc: "Convert vast factory roofs into productive generation zones without requiring additional land acquisition or site clearances.",
              },
              {
                num: "5",
                title: "Carbon Footprint & ESG Reporting",
                desc: "Demonstrate measurable greenhouse gas reductions required by corporate supply chain compliance and institutional sustainability scorecards.",
              },
              {
                num: "6",
                title: "Long-Term Power Cost Hedging",
                desc: "Lock in levelized cost of energy (LCOE) across a 25-year timeline, protecting operating margins from municipal utility tariff increases.",
              },
            ].map((driver) => (
              <div
                key={driver.num}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#F7F7F3] transition-colors px-2 sm:px-4"
              >
                <div className="md:col-span-1 text-lg font-mono font-bold text-[#E5A100]">
                  {driver.num}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                    {driver.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm text-[#374151] leading-relaxed">
                    {driver.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 03 — CUSTOMER SEGMENTS */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Industry Sectors"
            title="Sectors we engineer for."
            description="Tailored solar engineering for varied facility types, structural roof profiles, and electrical switchgear requirements."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerSegments.map((seg) => (
              <div key={seg.title} className="bg-white border border-[#E5E8E3] overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={seg.image}
                    alt={seg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-semibold text-[#202720]">{seg.title}</h3>
                  <p className="text-xs text-[#374151] leading-relaxed">{seg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 04 — PROJECT MODELS (CAPEX vs RESCO) */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Commercial Financing Models"
            title="Project commercial models."
            description="Explore the two principal deployment frameworks. Availability and contractual terms depend on project size, credit evaluation, and site feasibility."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CAPEX Model */}
            <div className="p-8 bg-[#F7F7F3] border border-[#E5E8E3] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E8E3]">
                <h3 className="text-2xl font-semibold text-[#202720]">CAPEX Model</h3>
                <span className="text-xs font-mono uppercase text-[#15532E] font-semibold">
                  Self-Financed
                </span>
              </div>
              <p className="text-sm text-[#374151] leading-relaxed">
                The enterprise funds the system installation directly as a capital asset. The
                business owns 100% of the hardware, claims accelerated depreciation benefits, and
                retains the full financial value of all generated electricity.
              </p>
              <ul className="space-y-2 text-xs text-[#202720]">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Maximum long-term cumulative savings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Eligible for corporate tax depreciation benefits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Complete asset ownership and control</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-[#E5E8E3] text-xs font-mono text-[#374151]">
                Ideal for companies with available capital budget seeking maximum ROI.
              </div>
            </div>

            {/* RESCO Model */}
            <div className="p-8 bg-[#F7F7F3] border border-[#E5E8E3] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E8E3]">
                <h3 className="text-2xl font-semibold text-[#202720]">RESCO / OPEX Model</h3>
                <span className="text-xs font-mono uppercase text-[#E5A100] font-semibold">
                  PPA / Third-Party Financed
                </span>
              </div>
              <p className="text-sm text-[#374151] leading-relaxed">
                A third-party energy investor finances, installs, and maintains the solar system on
                your facility&apos;s rooftop. The facility enters into a long-term Power Purchase
                Agreement (PPA) to buy generated solar power at a predetermined tariff lower than
                grid rates.
              </p>
              <ul className="space-y-2 text-xs text-[#202720]">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>No upfront capital investment required</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Operations & maintenance handled by investor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Guaranteed unit tariff below standard DISCOM rates</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-[#E5E8E3] text-xs font-mono text-[#374151]">
                Subject to minimum system capacity, credit rating, and site feasibility.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 05 — TECHNICAL CONSIDERATIONS */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Technical Standards"
            title="Technical considerations for commercial installations."
            description="Industrial facilities demand adherence to stringent electrical switchyard safety, structural certifications, and telemetry standards."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Factory Load Profiles & Peak Coincidence",
                desc: "Detailed analysis of 15-minute interval demand data to match solar generation with active production hours.",
              },
              {
                title: "Rooftop Sheet Profile & Purling Structural Strength",
                desc: "Non-penetrative standing seam clamps or certified rivet fixings evaluated to preserve factory warranty.",
              },
              {
                title: "High-Tension (HT) Yard & Transformer Interconnection",
                desc: "Integration with step-up transformers, vacuum circuit breakers (VCBs), and synchronized net-metering relays.",
              },
              {
                title: "Zero Export Relays (Reverse Power Protection)",
                desc: "Where net metering is restricted, reverse power relays prevent solar power from feeding into unapproved grids.",
              },
              {
                title: "Industrial SCADA & Cloud Telemetry",
                desc: "String-level telemetry integrated directly into factory energy management systems and central plant control rooms.",
              },
              {
                title: "Comprehensive Industrial Safety Compliance",
                desc: "Certified lifeline cables, designated walkways, safety nets, and compliance with factory inspectorate guidelines.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white border border-[#E5E8E3] space-y-2.5">
                <h3 className="text-sm font-semibold text-[#202720]">{item.title}</h3>
                <p className="text-xs text-[#374151] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 06 — CTA */}
      <CTASection
        heading="Let's assess your facility's solar potential."
        description="Connect with our commercial engineering team to schedule a detailed site feasibility and preliminary load analysis."
        primaryCtaText="Request Commercial Survey"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
