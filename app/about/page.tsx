import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import TiltCard from "@/components/ui/TiltCard";
import { companyInfo } from "@/data/company";
import { Shield, Target, Users, Zap, CheckCircle2, Award, Compass, Cpu, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Care4Solar is an engineering-driven solar energy solutions company. Learn about our approach, technical integrity, and commitment to long-term solar asset care.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Technical Integrity",
      desc: "We prioritize honest engineering feasibility and conservative generation modeling over unrealistic marketing claims or compromised hardware sizing.",
      icon: Shield,
    },
    {
      title: "Operational Reliability",
      desc: "Our systems are built with Tier-1 modules, certified balance-of-system switchgear, and robust chemical earthing to guarantee 25-year structural resilience.",
      icon: Target,
    },
    {
      title: "Customer Responsibility",
      desc: "We stand beside our clients through every stage—from complex DISCOM net-metering navigation to long-term lifecycle troubleshooting.",
      icon: Users,
    },
    {
      title: "Long-Term Performance",
      desc: "Installation is merely day one. We ensure that consistent preventative maintenance, thermography, and monitoring protect your return on investment.",
      icon: Zap,
    },
  ];

  const approachSteps = [
    {
      step: "1",
      title: "Understanding Requirements",
      desc: "We begin by analyzing actual electrical consumption patterns, seasonal utility bill history, and daytime load curves.",
    },
    {
      step: "2",
      title: "Technical Assessment",
      desc: "Detailed rooftop shadow modeling, structural weight-load evaluation, and electrical panel room inspection.",
    },
    {
      step: "3",
      title: "Appropriate Solar Solutions",
      desc: "Recommending tailored system configurations—on-grid, hybrid, or elevated superstructures—matched precisely to your site.",
    },
    {
      step: "4",
      title: "Responsible Implementation",
      desc: "Adhering to strict electrical codes, wind-rated structural fasteners, quality conduit runs, and utility liaison.",
    },
    {
      step: "5",
      title: "Ongoing Lifecycle Care",
      desc: "Post-commissioning performance observation, scheduled panel cleaning, and Annual Maintenance Contracts (AMC).",
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#15532E] border-l-2 border-[#15532E] pl-3">
                <span>ABOUT CARE4SOLAR</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#15532E] leading-tight">
                Care that goes beyond solar installation.
              </h1>
              <p className="max-w-xl text-lg sm:text-xl text-[#747C75] leading-relaxed">
                Care4Solar is an engineering-driven company focused on helping customers make
                informed solar decisions and maintaining the long-term performance of their solar
                infrastructure.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="lg" icon="arrow" magnetic={true}>
                  Get in Touch
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E5E8E3] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=1200&auto=format&fit=crop"
                  alt="Solar engineers on rooftop solar array"
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

      {/* SECTION 02 — WHO WE ARE */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="Our Mission"
                title="Engineering discipline in every solar watt."
                description="Our mission is to make solar reliable, durable, and transparent."
              />
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#747C75] text-base leading-relaxed">
              <p>
                At <span className="font-semibold text-[#202720]">{companyInfo.name}</span>, we
                view solar not merely as an electrical appliance, but as long-term capital
                infrastructure. While the industry frequently focuses solely on rapid sales and
                quick installations, the true return on solar investment unfolds over 25 years of
                harsh outdoor exposure.
              </p>
              <p>
                We bridge the gap between technical system design and ongoing operational asset care.
                Whether supporting an individual homeowner installing a residential rooftop, a
                housing society managing common utility bills, or a factory reducing high industrial
                tariffs, we ensure every installation is sized conservatively, built with verified
                components, and maintained diligently.
              </p>
              <div className="p-4 bg-[#F7F7F3] border-l-4 border-[#15532E] text-xs font-mono text-[#202720]">
                Tagline Ethos: &ldquo;{companyInfo.tagline}&rdquo;
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 03 — OUR APPROACH */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Our Methodology"
            title="Our five-phase engineering approach."
            description="From initial energy assessment through to decades of post-installation care, our methodology is built on technical rigor."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachSteps.map((app) => (
              <div key={app.step} className="p-6 bg-white border border-[#E5E8E3] space-y-3">
                <span className="text-xl font-mono font-bold text-[#E5A100]">{app.step}</span>
                <h3 className="text-base font-semibold text-[#202720]">{app.title}</h3>
                <p className="text-xs sm:text-sm text-[#747C75] leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 04 — OUR VALUES */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Core Values"
            title="The values that guide Care4Solar."
            description="Our four foundational pillars ensure that every project adheres to professional standards."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const IconComp = val.icon;
              return (
                <TiltCard key={val.title} maxTilt={3} className="h-full">
                  <div className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] space-y-4 h-full">
                    <div className="w-10 h-10 bg-white border border-[#E5E8E3] flex items-center justify-center text-[#15532E]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#202720]">{val.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#747C75] leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 05 — OUR EXPERTISE */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="Core Capabilities"
                title="Verified company capabilities."
                description="We focus strictly on solar engineering disciplines where we offer deep competence."
              />
            </div>

            <div className="lg:col-span-7 bg-white border border-[#E5E8E3] p-6 sm:p-8 space-y-4">
              {[
                {
                  title: "Rooftop Solar EPC (Engineering, Procurement, Construction)",
                  detail:
                    "Turnkey deployment for residential homes, housing societies, commercial campuses, and manufacturing plants.",
                },
                {
                  title: "DISCOM Net-Metering & Regulatory Liaison",
                  detail:
                    "Technical filings, sanction letters, meter testing, and grid synchronization with regional electricity distribution companies.",
                },
                {
                  title: "Preventative & Corrective Solar Maintenance",
                  detail:
                    "Precision de-ionized water panel washing, infrared thermography, string diagnostics, and inverter repairs.",
                },
                {
                  title: "IoT Telemetry & Generation Tracking",
                  detail:
                    "Remote string current monitoring, daily yield logging, and automated fault alert triage.",
                },
                {
                  title: "PM Surya Ghar Subsidy Documentation Support",
                  detail:
                    "National portal registration, DCR compliance verification, and subsidy disbursement liaison.",
                },
              ].map((exp) => (
                <div
                  key={exp.title}
                  className="pb-4 border-b border-[#E5E8E3] last:border-b-0 space-y-1 text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15532E] shrink-0" />
                    <h4 className="font-semibold text-[#202720]">{exp.title}</h4>
                  </div>
                  <p className="text-xs text-[#747C75] pl-6 leading-relaxed">{exp.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 06 — ENGINEERING RIGOR & QUALITY ASSURANCE */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Quality Framework"
            title="Tested engineering benchmarks."
            description="Every Care4Solar deployment follows verified national and international electrotechnical standards to guarantee 25-year structural longevity."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] space-y-3">
              <Award className="w-6 h-6 text-[#15532E]" />
              <h3 className="text-base font-semibold text-[#202720]">Tier-1 PV Modules</h3>
              <p className="text-xs text-[#747C75] leading-relaxed">
                IEC 61215 &amp; IEC 61730 certified, BIS compliant, with positive power tolerance (0 to +5W) and 25-year linear performance warranty.
              </p>
            </div>

            <div className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] space-y-3">
              <Compass className="w-6 h-6 text-[#15532E]" />
              <h3 className="text-base font-semibold text-[#202720]">Wind-Rated Superstructures</h3>
              <p className="text-xs text-[#747C75] leading-relaxed">
                Hot-dip galvanized structural steel (IS 4759, min 80μm coating) engineered to withstand wind gusts up to 180 km/h.
              </p>
            </div>

            <div className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#15532E]" />
              <h3 className="text-base font-semibold text-[#202720]">Electrical Protection</h3>
              <p className="text-xs text-[#747C75] leading-relaxed">
                Dual chemical earthing pits (IS 3043 code, resistance &lt; 2 Ohms), Class-II surge arrestors, and UV-stabilized halogen-free cabling.
              </p>
            </div>

            <div className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] space-y-3">
              <Cpu className="w-6 h-6 text-[#15532E]" />
              <h3 className="text-base font-semibold text-[#202720]">Industrial Inverters</h3>
              <p className="text-xs text-[#747C75] leading-relaxed">
                IP65 outdoor ingress protection, European weighted efficiency &gt; 98.4%, with integrated DC arc-fault circuit interrupters.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 06 — CTA */}
      <CTASection
        heading="Let's build a more reliable solar future."
        description="Connect with the Care4Solar engineering team to discuss your solar requirement or explore an operations and maintenance plan."
        primaryCtaText="Speak with Our Team"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
