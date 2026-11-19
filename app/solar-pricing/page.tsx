import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import TiltCard from "@/components/ui/TiltCard";
import { costFactors, packageTiers, inclusionsList } from "@/data/pricing";
import { faqsData } from "@/data/faqs";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Pricing & Investment",
  description:
    "Understand the engineering parameters, equipment selection, and structural variables that govern solar installation costs.",
};

export default function SolarPricingPage() {
  const pricingFaqs = faqsData.filter((f) => f.category === "Pricing & Subsidy");

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="text-xs tracking-[0.16em] uppercase text-[#15532E] border-l-2 border-[#15532E] pl-3 font-semibold">
              Transparent Sizing &amp; Scope
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#15532E] leading-tight">
              Understand the investment behind solar.
            </h1>
            <p className="text-base sm:text-xl text-[#747C75] leading-relaxed">
              Solar system costs depend on capacity, equipment selection, rooftop conditions and
              installation requirements. We believe in transparent engineering clarity without
              fabricated price tags or hidden omissions.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Button href="/contact" variant="primary" size="lg" icon="arrow" className="w-full sm:w-auto">
                Request a Custom Quotation
              </Button>
              <Button href="/solar-calculator" variant="outline" size="lg" className="w-full sm:w-auto">
                Estimate Sizing Requirements
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 02 — WHAT AFFECTS PRICING (Editorial Grid) */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Cost Factors"
            title="What affects solar installation costs."
            description="A rooftop solar array is an engineered infrastructure asset customized to your building. Key technical variables govern the capital expenditure."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {costFactors.map((factor, index) => (
              <div
                key={factor.title}
                className="p-7 bg-[#F7F7F3] border border-[#E5E8E3] space-y-3"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold">
                  Factor {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-[#202720]">{factor.title}</h3>
                <p className="text-sm text-[#747C75] leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 03 — PACKAGE COMPARISON (Presentation Placeholders) */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeading
              eyebrow="System Packages"
              title="Configurable system tiers."
              description="These representative configurations illustrate how hardware options scale from standard grid-tied setups to resilient hybrid systems. Final quotations are custom-engineered for your specific site."
            />
            <div className="text-xs font-mono text-[#747C75] bg-white px-3 py-1.5 border border-[#E5E8E3] shrink-0">
              Representative Scope Specifications
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageTiers.map((tier) => (
              <TiltCard key={tier.name} maxTilt={3} className="h-full">
                <div className="bg-white border border-[#E5E8E3] flex flex-col justify-between p-8 h-full transition-all hover:border-[#15532E] shadow-xs">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E5E8E3]">
                      <h3 className="text-2xl font-semibold text-[#202720]">{tier.name}</h3>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#15532E] font-semibold bg-[#F7F7F3] px-2 py-0.5 border border-[#E5E8E3]">
                        {tier.badge}
                      </span>
                    </div>

                    <div className="py-2.5 px-3 bg-[#F7F7F3] border border-[#E5E8E3] flex items-center justify-between">
                      <span className="text-xs text-[#747C75]">Indicative Benchmark:</span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-[#15532E]">
                        {tier.indicativeRange}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-[#15532E] font-semibold uppercase tracking-wider">
                      {tier.tagline}
                    </p>
                    <p className="text-sm text-[#747C75] leading-relaxed">{tier.description}</p>

                    <div className="pt-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#747C75] block mb-1">
                        Ideal For:
                      </span>
                      <p className="text-xs text-[#202720] bg-[#F7F7F3] p-3 border border-[#E5E8E3]">
                        {tier.suitableFor}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-3 border-t border-[#E5E8E3]">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#747C75] block">
                        Scope Specifications:
                      </span>
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-2 text-xs text-[#202720]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2D9F5A] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#E5E8E3] mt-8">
                    <Button href="/contact" variant="primary" size="md" icon="arrow" magnetic={true} className="w-full">
                      Request a Quotation
                    </Button>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 04 — WHAT IS INCLUDED CHECKLIST */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="Scope of Delivery"
                title="What is included in an installation proposal."
                description="Our standard project delivery covers the entire lifecycle from preliminary shadow surveys to final DISCOM net-metering synchronization."
              />
              <p className="text-sm text-[#747C75] leading-relaxed">
                Every project proposal includes an itemized Bill of Materials (BOM) specifying
                module wattage, inverter specifications, structure thickness, and cable ratings.
              </p>
              <div className="p-4 bg-[#F7F7F3] border-l-2 border-[#15532E] text-xs text-[#747C75] space-y-1">
                <span className="font-semibold text-[#202720] block">Engineering Notice:</span>
                <span>
                  Items are verified and tailored during your preliminary technical survey. All
                  offerings remain subject to final site inspection and local utility guidelines.
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F7F7F3] border border-[#E5E8E3] p-6 sm:p-8">
              <h3 className="text-base font-semibold text-[#202720] mb-6 pb-3 border-b border-[#E5E8E3]">
                Standard Project Delivery Checklist
              </h3>
              <div className="space-y-3.5">
                {inclusionsList.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E5E8E3]/60 gap-2 text-sm"
                  >
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#15532E] shrink-0" />
                      <span className="text-[#202720] font-medium">{item.title}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#747C75] sm:text-right shrink-0">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 05 — PRICING FAQ */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeading
              eyebrow="Pricing Questions"
              title="Why solar quotations vary."
              description="Understand why identical kilowatt capacities may carry different investment figures across different buildings."
              align="center"
            />
            <Accordion items={pricingFaqs} />
          </div>
        </Container>
      </section>

      {/* SECTION 06 — CTA */}
      <CTASection
        heading="Get a solar quotation based on your requirements."
        description="Share your monthly consumption and rooftop profile to receive an itemized proposal with transparent engineering specifications."
        primaryCtaText="Request a Quotation"
        primaryCtaHref="/contact"
        secondaryCtaText="Solar Calculator"
        secondaryCtaHref="/solar-calculator"
      />
    </div>
  );
}
