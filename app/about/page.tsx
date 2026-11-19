import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import TiltCard from "@/components/ui/TiltCard";
import { companyInfo } from "@/data/company";
import { Shield, Target, Users, Zap, Award, Compass, Cpu, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Care4Solar is an engineering-driven solar energy solutions company. Learn about our approach, technical integrity, and commitment to long-term solar asset care.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Technical Integrity",
      desc: "We prioritize honest engineering feasibility and conservative generation estimates over unrealistic marketing claims.",
      icon: Shield,
    },
    {
      title: "Operational Reliability",
      desc: "Our systems are built with Tier-1 modules, certified switchgear, and robust chemical earthing for 25-year structural resilience.",
      icon: Target,
    },
    {
      title: "Customer Responsibility",
      desc: "We stand beside our clients through every stage—from complex DISCOM net-metering navigation to long-term lifecycle support.",
      icon: Users,
    },
    {
      title: "Long-Term Performance",
      desc: "Installation is merely day one. Consistent preventative maintenance, panel washing, and monitoring protect your investment.",
      icon: Zap,
    },
  ];

  const approachSteps = [
    {
      step: "1",
      title: "Understanding Requirements",
      desc: "We analyze electrical consumption patterns, seasonal utility bill history, and daytime load curves.",
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
      <section className="relative pt-12 pb-16 sm:py-20 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-[#15532E] leading-tight">
                Care that goes beyond solar installation.
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-[#374151] leading-relaxed">
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

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 space-y-4">
              <SectionHeading
                title="Engineering discipline in every solar watt."
                description="Our mission is to make solar reliable, durable, and transparent."
              />
              <div className="relative aspect-[16/10] overflow-hidden border border-[#E5E8E3] bg-[#F7F7F3] mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1660330589243-4c640d878052?q=80&w=1200&auto=format&fit=crop"
                  alt="Care4Solar rooftop engineers inspecting solar array"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-[#374151] text-base leading-relaxed">
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
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-16 sm:py-20 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-10">
            <SectionHeading
              title="Our five-phase engineering approach."
              description="From initial energy assessment through to decades of post-installation care, our methodology is built on technical rigor."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {approachSteps.map((app) => (
              <div key={app.step} className="p-5 bg-white border border-[#E5E8E3] space-y-2.5">
                <span className="text-xl font-mono font-bold text-[#E5A100]">{app.step}</span>
                <h3 className="text-sm sm:text-base font-semibold text-[#202720]">{app.title}</h3>
                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-10">
            <SectionHeading
              title="The values that guide Care4Solar."
              description="Our four foundational pillars ensure that every project adheres to professional standards."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const IconComp = val.icon;
              return (
                <TiltCard key={val.title} maxTilt={3} className="h-full">
                  <div className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] space-y-3.5 h-full">
                    <div className="w-10 h-10 bg-white border border-[#E5E8E3] flex items-center justify-center text-[#15532E]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#202720]">{val.title}</h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#374151] leading-relaxed">
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

      {/* Quality Standards */}
      <section className="py-16 sm:py-20 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-10">
            <SectionHeading
              title="Tested engineering benchmarks."
              description="Every Care4Solar deployment follows verified national and international electrotechnical standards to guarantee 25-year structural longevity."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E5E8E3] flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F3]">
                <Image
                  src="https://images.unsplash.com/photo-1719848574124-2f66fa842fd6?q=80&w=800&auto=format&fit=crop"
                  alt="Tier-1 PV Modules"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[#15532E] mb-1.5">
                    <Award className="w-5 h-5 text-[#15532E]" />
                    <h3 className="text-base font-semibold text-[#202720]">Tier-1 PV Modules</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                    IEC 61215 &amp; IEC 61730 certified, BIS compliant, with positive power tolerance and 25-year linear output warranty.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E5E8E3] flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F3]">
                <Image
                  src="https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?q=80&w=800&auto=format&fit=crop"
                  alt="Wind-Rated Superstructures"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[#15532E] mb-1.5">
                    <Compass className="w-5 h-5 text-[#15532E]" />
                    <h3 className="text-base font-semibold text-[#202720]">Wind-Rated Superstructures</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                    Hot-dip galvanized structural steel (IS 4759, min 80μm coating) engineered to withstand wind gusts up to 180 km/h.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E5E8E3] flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F3]">
                <Image
                  src="https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=800&auto=format&fit=crop"
                  alt="Electrical Protection"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[#15532E] mb-1.5">
                    <ShieldCheck className="w-5 h-5 text-[#15532E]" />
                    <h3 className="text-base font-semibold text-[#202720]">Electrical Protection</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                    Dual chemical earthing pits (resistance &lt; 2 Ohms), Class-II surge arrestors, and UV-stabilized solar cabling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E5E8E3] flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F3]">
                <Image
                  src="https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=800&auto=format&fit=crop"
                  alt="Industrial Inverters"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[#15532E] mb-1.5">
                    <Cpu className="w-5 h-5 text-[#15532E]" />
                    <h3 className="text-base font-semibold text-[#202720]">Industrial Inverters</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                    IP65 outdoor ingress protection, European weighted efficiency &gt; 98.4%, with integrated DC arc-fault circuit interrupters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        heading="Let's build a more reliable solar future."
        description="Connect with the Care4Solar engineering team to discuss your solar requirement or explore an operations and maintenance plan."
        primaryCtaText="Speak with Our Team"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
