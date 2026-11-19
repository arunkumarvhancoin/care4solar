import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import {
  subsidyConfig,
  subsidyEligibilityCriteria,
  subsidyProcessSteps,
  documentChecklist,
  officialResources,
} from "@/data/subsidy";
import { CheckCircle2, AlertCircle, ExternalLink, ShieldCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Subsidy & Government Schemes",
  description:
    "Official guidance on PM Surya Ghar: Muft Bijli Yojana, eligibility requirements, application milestones, and DBT disbursement workflows for residential rooftop solar.",
};

export default function SolarSubsidyPage() {
  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#15532E] border-l-2 border-[#15532E] pl-3">
              <span>GOVERNMENT INCENTIVES & ASSISTANCE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#15532E] leading-tight">
              Understand the support available for rooftop solar.
            </h1>
            <p className="text-base sm:text-xl text-[#747C75] leading-relaxed">
              Explore the subsidy process, eligibility considerations and documentation involved in
              residential rooftop solar under current central government frameworks.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Button href="/contact" variant="primary" size="lg" icon="arrow" magnetic={true} className="w-full sm:w-auto">
                Speak with Subsidy Specialist
              </Button>
              <Button href="/solar-calculator" variant="outline" size="lg" className="w-full sm:w-auto">
                Estimate Capacity Sizing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 02 — PM SURYA GHAR INITIATIVE */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="PM Surya Ghar Scheme"
                title="PM Surya Ghar: Muft Bijli Yojana."
                description="The flagship central financial assistance scheme for residential individual households and common-meter housing society amenities across India."
              />
              <p className="text-sm text-[#747C75] leading-relaxed">
                Administered by the Ministry of New and Renewable Energy (MNRE), the initiative
                delivers direct financial incentives transferred directly into the consumer&apos;s bank
                account following successful inspection and net-meter commissioning.
              </p>

              {/* Official Disclaimer Alert */}
              <div className="p-4 bg-[#F7F7F3] border-l-4 border-[#E5A100] text-xs text-[#202720] space-y-1">
                <div className="flex items-center space-x-2 font-semibold">
                  <AlertCircle className="w-4 h-4 text-[#E5A100]" />
                  <span>Regulatory Notice:</span>
                </div>
                <p className="text-[#747C75] leading-relaxed">
                  {subsidyConfig.disclaimer}
                </p>
              </div>

              <div className="text-xs font-mono text-[#747C75] space-y-1">
                <div>Governing Body: {subsidyConfig.governingBody}</div>
                <div>Last Verified: {subsidyConfig.lastVerificationDate}</div>
              </div>
            </div>

            {/* Configurable Subsidy Slabs Grid */}
            <div className="lg:col-span-7 bg-[#F7F7F3] border border-[#E5E8E3] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E8E3]">
                <h3 className="text-base font-semibold text-[#202720]">
                  Indicative Central Subsidy Benchmark
                </h3>
                <span className="text-xs font-mono text-[#15532E] font-medium">
                  Central MNRE Slabs
                </span>
              </div>

              <div className="space-y-4">
                {subsidyConfig.tiers.map((tier) => (
                  <div
                    key={tier.capacitySlab}
                    className="p-4 bg-white border border-[#E5E8E3] space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-sm font-semibold text-[#202720]">
                        {tier.capacitySlab}
                      </span>
                      <span className="text-sm font-bold text-[#15532E]">
                        {tier.indicativeSubsidy}
                      </span>
                    </div>
                    <p className="text-xs text-[#747C75]">{tier.notes}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#747C75] italic">
                *Subsidy eligibility and amounts are subject to current government guidelines.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 03 — ELIGIBILITY CRITERIA */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Eligibility Criteria"
            title="Subsidy eligibility considerations."
            description="Central financial assistance is governed by strict technical rules regarding consumer meter type, equipment origin, and portal registration."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidyEligibilityCriteria.map((item, index) => (
              <div key={item.title} className="p-6 bg-white border border-[#E5E8E3] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#15532E]">
                  Requirement {index + 1}
                </span>
                <h3 className="text-base font-semibold text-[#202720]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#747C75] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 04 — STEP-BY-STEP PROCESS */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Application Process"
            title="Step-by-step subsidy disbursement roadmap."
            description="Our structured support guides homeowners from initial portal filing to official DBT subsidy disbursement."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidyProcessSteps.map((step) => (
              <div key={step.step} className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] space-y-3">
                <span className="text-xl font-mono font-bold text-[#E5A100]">{step.step}</span>
                <h3 className="text-base font-semibold text-[#202720]">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#747C75] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-[#F7F7F3] border border-[#E5E8E3] text-center text-xs text-[#747C75]">
            Important: Care4Solar provides full documentation liaison and engineering compliance,
            but does not guarantee government approval or timeline durations.
          </div>
        </Container>
      </section>

      {/* SECTION 05 & 06 — DOCUMENT CHECKLIST & OFFICIAL RESOURCES */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Document Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-[#15532E]">
                <FileText className="w-5 h-5 text-[#15532E]" />
                <h3 className="text-xl font-semibold text-[#202720]">
                  Required Application Documents
                </h3>
              </div>
              <p className="text-sm text-[#747C75]">
                General documentation checklist for the PM Surya Ghar National Portal. Exact
                documentation requirements depend on active state DISCOM policies.
              </p>

              <div className="bg-white border border-[#E5E8E3] p-6 space-y-3">
                {documentChecklist.map((doc) => (
                  <div key={doc} className="flex items-start space-x-3 text-sm text-[#202720]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Resources */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-2 text-[#15532E]">
                <ShieldCheck className="w-5 h-5 text-[#15532E]" />
                <h3 className="text-xl font-semibold text-[#202720]">
                  Verified Government Portals
                </h3>
              </div>
              <p className="text-sm text-[#747C75]">
                Direct links to verified government portals for official notifications, circulars,
                and national portal tracking.
              </p>

              <div className="space-y-4">
                {officialResources.map((res) => (
                  <a
                    key={res.name}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 bg-white border border-[#E5E8E3] hover:border-[#15532E] transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#202720] group-hover:text-[#15532E]">
                        {res.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-[#747C75] group-hover:text-[#15532E] transition-colors" />
                    </div>
                    <p className="mt-1.5 text-xs text-[#747C75] leading-relaxed">
                      {res.description}
                    </p>
                    <span className="mt-2 text-[11px] font-mono text-[#15532E] block">
                      {res.url}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 07 — CTA */}
      <CTASection
        heading="Need help understanding solar subsidy requirements?"
        description="Our team assists you with DCR module compliance, national portal documentation, and DISCOM feasibility filings."
        primaryCtaText="Consult a Subsidy Specialist"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
