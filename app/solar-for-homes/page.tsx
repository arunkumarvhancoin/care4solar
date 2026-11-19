import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import { faqsData } from "@/data/faqs";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Residential Solar",
  description:
    "Rooftop solar solutions engineered for individual homes, villas, and residential properties. Sized to your actual consumption and roof architecture.",
};

export default function ResidentialSolarPage() {
  const residentialFaqs = faqsData.filter((f) => f.category === "Residential");

  const components = [
    {
      title: "Photovoltaic Solar Modules",
      desc: "High-efficiency Tier-1 Mono PERC or N-Type TopCon panels designed for superior temperature coefficient and diffuse light absorption.",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Solar Inverters",
      desc: "Grid-tied or hybrid inverters featuring dual MPPT tracking, high conversion efficiency, and built-in Wi-Fi telemetry reporting.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Mounting Structures",
      desc: "Hot-dip galvanized steel or anodized aluminium structures engineered to withstand local wind-load ratings without compromising terrace waterproofing.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Electrical Protection & BOS",
      desc: "Dedicated AC/DC distribution boxes, Class-II surge protection devices (SPDs), dual chemical earthing, and lightning arrestors.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section — Architectural Editorial Layout */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono tracking-[0.16em] uppercase text-[#15532E] border-l-2 border-[#15532E] pl-3 font-semibold">
                01 / INDIVIDUAL HOMES &amp; ESTATES
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#15532E] leading-tight">
                Bring the power of the sun home.
              </h1>
              <p className="max-w-xl text-base sm:text-xl text-[#747C75] leading-relaxed">
                Explore rooftop solar solutions designed around your home&apos;s energy consumption,
                available roof space and electricity requirements.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <Button href="/solar-calculator" variant="primary" size="lg" icon="arrow" className="w-full sm:w-auto">
                  Calculate Rooftop Requirement
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                  Request Site Survey
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E5E8E3] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern residence with rooftop solar panels"
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

      {/* SECTION 02 — WHY RESIDENTIAL SOLAR (Editorial Numbered List) */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="01 / ADVANTAGES"
            title="Why homeowners choose solar."
            description="Investing in rooftop solar offers predictable energy generation, financial protection against rising utility tariffs, and clean power generation."
            className="mb-14"
          />

          <div className="divide-y divide-[#E5E8E3] border-y border-[#E5E8E3]">
            {[
              {
                num: "01",
                title: "Reduced Grid Dependence",
                desc: "Generate your own clean kilowatt-hours during the daytime, lowering reliance on central utility supply during peak daytime tariff hours.",
              },
              {
                num: "02",
                title: "Electricity Bill Savings",
                desc: "Offset recurring electricity expenses through net-metering credits, subject to individual consumption patterns and local DISCOM tariff slabs.",
              },
              {
                num: "03",
                title: "Long-Term Asset Value",
                desc: "Solar systems deliver durable, 25-year design-life infrastructure that permanently enhances property valuation and energetic independence.",
              },
              {
                num: "04",
                title: "Optimized Rooftop Utility",
                desc: "Transform underutilized terrace space into a clean power plant with elevated structures that retain recreational walking space underneath.",
              },
              {
                num: "05",
                title: "Measurable Environmental Impact",
                desc: "Directly reduce thermal coal generation emissions by supplying clean solar kilowatt-hours into the residential distribution grid.",
              },
              {
                num: "06",
                title: "Real-Time Digital Visibility",
                desc: "Track generation yields, self-consumption ratios, and system health directly through secure mobile telemetry dashboards with proactive alerts.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#F7F7F3] transition-colors px-2 sm:px-4"
              >
                <div className="md:col-span-1 text-lg font-mono font-bold text-[#E5A100]">
                  {item.num}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm text-[#747C75] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 03 — SYSTEM CONFIGURATIONS */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="02 / ARCHITECTURES"
            title="System configurations explained."
            description="Selecting the right architecture depends on grid stability in your locality, battery backup needs, and budget. Not every configuration is suited to every residence."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* On-Grid */}
            <div className="bg-white border border-[#E5E8E3] p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#15532E] block">
                  Configuration 01 / Standard
                </span>
                <h3 className="text-xl font-semibold text-[#202720]">On-Grid System</h3>
                <p className="text-sm text-[#747C75] leading-relaxed">
                  Directly synchronized with the utility grid. Excess generation is exported via a bi-directional net meter. Shuts down during power outages to protect utility line workers.
                </p>
                <ul className="space-y-2 text-xs text-[#202720] pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                    <span>Lowest upfront capital investment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                    <span>Bi-directional net-metering credits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                    <span>Eligible for central PM Surya Ghar subsidy</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E5E8E3] text-xs font-mono text-[#747C75]">
                Best for areas with stable electrical grid power.
              </div>
            </div>

            {/* Hybrid */}
            <div className="bg-white border-2 border-[#15532E] p-8 flex flex-col justify-between space-y-6 relative shadow-xs">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E5A100] block">
                  Configuration 02 / Resilient
                </span>
                <h3 className="text-xl font-semibold text-[#202720]">Hybrid System</h3>
                <p className="text-sm text-[#747C75] leading-relaxed">
                  Combines the financial benefits of net-metering with battery storage. When the grid fails, intelligent transfer switches power your critical household appliances seamlessly.
                </p>
                <ul className="space-y-2 text-xs text-[#202720] pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                    <span>Continuous power during utility blackouts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                    <span>Net-metering energy export capability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                    <span>Maximizes self-consumption ratio</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E5E8E3] text-xs font-mono text-[#747C75]">
                Best for areas experiencing recurring power outages.
              </div>
            </div>

            {/* Off-Grid */}
            <div className="bg-white border border-[#E5E8E3] p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#747C75] block">
                  Configuration 03 / Autonomous
                </span>
                <h3 className="text-xl font-semibold text-[#202720]">Off-Grid System</h3>
                <p className="text-sm text-[#747C75] leading-relaxed">
                  Operates entirely independent of the electrical grid. Requires extensive battery banks sized for multiple days of autonomy and solar irradiance fluctuations.
                </p>
                <ul className="space-y-2 text-xs text-[#202720] pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                    <span>Total independence from utility infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                    <span>Dedicated high-capacity storage bank</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                    <span>Engineered for farmhouses &amp; remote estates</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E5E8E3] text-xs font-mono text-[#747C75]">
                Best where grid connectivity is absent or unreliable.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 04 — HOW IT WORKS */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="03 / PROJECT TIMELINE"
            title="How residential implementation works."
            description="Our structured six-step execution process ensures safety, proper permitting, and seamless grid synchronization."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Initial Enquiry & Load Review",
                desc: "We analyze your recent electricity bills to determine historical consumption patterns and sanctioned electrical load.",
              },
              {
                step: "02",
                title: "Site & Shadow Assessment",
                desc: "An engineer conducts a 3D shadow analysis of your rooftop to identify optimal panel azimuth and tilt angles.",
              },
              {
                step: "03",
                title: "Engineering Sizing & Proposal",
                desc: "We present a transparent bill of materials, system layout drawings, and estimated generation specifications.",
              },
              {
                step: "04",
                title: "DISCOM Sanctions & Approvals",
                desc: "Filing and tracking net-metering applications and technical feasibility with your local electricity board.",
              },
              {
                step: "05",
                title: "Installation & Commissioning",
                desc: "Mechanical mounting, electrical cabling, inverter connection, and dual chemical earthing installation.",
              },
              {
                step: "06",
                title: "Net Meter & Post-Install Care",
                desc: "DISCOM bi-directional meter installation, cloud telemetry activation, and handover documentation.",
              },
            ].map((item) => (
              <div key={item.step} className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] space-y-3">
                <span className="text-xl font-mono font-bold text-[#E5A100]">{item.step}</span>
                <h3 className="text-base font-semibold text-[#202720]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#747C75] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 05 — COMPONENTS */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="04 / BALANCE OF SYSTEM"
            title="System components engineered for longevity."
            description="Every rooftop installation relies on tested hardware categories built to withstand intense heat, monsoons, and high winds."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map((comp) => (
              <div key={comp.title} className="bg-white border border-[#E5E8E3] overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={comp.image}
                    alt={comp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-semibold text-[#202720]">{comp.title}</h3>
                  <p className="text-xs text-[#747C75] leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 06 — COMMON QUESTIONS PREVIEW */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeading
              eyebrow="05 / QUESTIONS"
              title="Common residential solar questions."
              description="Clear answers regarding rooftop suitability, power cuts, and system sizing."
              align="center"
            />
            <Accordion items={residentialFaqs} />
            <div className="text-center pt-4">
              <Button href="/faqs" variant="ghost" size="sm" icon="arrow">
                View all solar FAQs
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 07 — CTA */}
      <CTASection
        heading="Ready to explore solar for your home?"
        description="Share your monthly electricity bill details or request a preliminary site inspection with the Care4Solar team."
        primaryCtaText="Speak with an Engineer"
        primaryCtaHref="/contact"
        secondaryCtaText="Solar Calculator"
        secondaryCtaHref="/solar-calculator"
      />
    </div>
  );
}
