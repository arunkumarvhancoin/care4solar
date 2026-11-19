import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import { faqsData } from "@/data/faqs";
import { Home, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Residential Solar — Homes & Housing Societies",
  description:
    "Turnkey rooftop solar solutions engineered for individual homes, villas, and apartment communities. Custom designed for maximum savings, zero roof damage, and seamless net metering.",
};

export default function ResidentialSolarPage() {
  const residentialFaqs = faqsData.filter((f) => f.category === "Residential");

  const solutions = [
    {
      icon: Home,
      type: "For Independent Homes & Villas",
      headline: "Eliminate high domestic electricity slabs.",
      description:
        "Custom-engineered for single-family residences. Sized accurately to your monthly consumption, air conditioning loads, and home EV charging without over-spending on unneeded hardware.",
      image:
        "https://images.unsplash.com/photo-1780445392792-556e5609c5ab?q=80&w=1200&auto=format&fit=crop",
      highlights: [
        "Typically sizes from 3 kWp to 15 kWp based on past 12-month power bills",
        "Direct DISCOM net metering rolling back peak grid charges",
        "Hybrid battery-ready architecture for uninterrupted backup during outages",
        "Elevated or ballasted structures preserving terrace recreational usability",
      ],
    },
    {
      icon: Building2,
      type: "For Apartments & Housing Societies (RWAs)",
      headline: "Permanently slash common-area maintenance bills.",
      description:
        "Shared terrace solar systems engineered specifically for residential societies. Directly offsets the heavy recurring costs of elevators, basement lighting, water filtration, and clubhouse loads.",
      image:
        "https://images.unsplash.com/photo-1793119985840-10f7beb15e1a?q=80&w=1200&auto=format&fit=crop",
      highlights: [
        "Powers common amenities: lifts, STPs, water pumps, and campus security lights",
        "Smart DG synchronization prevents reverse feed-in during diesel generator running",
        "Non-penetrative ballasted engineering protects terrace waterproofing warranties",
        "Turnkey RWA presentation support and documentation for society general meetings",
      ],
    },
  ];

  const components = [
    {
      title: "Tier-1 Mono PERC & TopCon Modules",
      desc: "High-efficiency bifacial/monofacial panels engineered for low-light performance and 25-year linear generation warranties.",
      image:
        "https://images.unsplash.com/photo-1719848574124-2f66fa842fd6?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Smart Dual-MPPT Inverters",
      desc: "High-efficiency grid-tied or hybrid inverters with built-in Wi-Fi cloud telemetry and real-time generation smartphone tracking.",
      image:
        "https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Architectural Mounting Structures",
      desc: "Hot-dip galvanized steel or anodized aluminium structures designed to withstand certified wind-load ratings without roof leaks.",
      image:
        "https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Complete BOS & Surge Protection",
      desc: "Dedicated AC/DC distribution boxes, Class-II surge protection devices (SPDs), dual chemical earthing, and lightning arrestors.",
      image:
        "https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      <PageHero
        title="Residential solar for homes & societies."
        description="Custom-engineered rooftop solar for independent villas and housing societies. Sized accurately to your actual loads with turnkey DISCOM net metering."
        image="https://images.unsplash.com/photo-1780445392792-556e5609c5ab?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Residential rooftop solar installation"
        primaryCtaText="Request Site Survey"
        primaryCtaHref="/contact"
        secondaryCtaText="View Projects"
        secondaryCtaHref="/projects"
      />

      {/* Solutions Grid: Homes & Apartments */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mb-10">
            <SectionHeading
              title="Tailored rooftop engineering for every residential property."
              description="Individual homes require high-efficiency generation for daily household consumption; apartment societies require communal load optimization and seamless utility coordination."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div
                  key={sol.type}
                  className="bg-[#F7F7F3] border border-[#E5E8E3] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#15532E]/40 transition-all shadow-xs"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#E5E8E3]">
                    <Image
                      src={sol.image}
                      alt={sol.type}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2.5">
                        <span className="p-2 bg-white rounded-sm border border-[#E5E8E3] text-[#15532E]">
                          <IconComp className="w-5 h-5" />
                        </span>
                        <span className="text-xs font-semibold text-[#15532E] uppercase tracking-wider">
                          {sol.type}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#202720] leading-snug">
                        {sol.headline}
                      </h3>

                      <p className="text-sm text-[#374151] leading-relaxed">
                        {sol.description}
                      </p>

                      <ul className="space-y-2.5 pt-2">
                        {sol.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[#374151]">
                            <CheckCircle2 className="w-4 h-4 text-[#15532E] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button href="/contact" variant="outline" size="sm">
                        Request Consultation for {sol.type.includes("Apartment") ? "Society" : "Home"}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Engineering Standards & Hardware Components */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mb-10">
            <SectionHeading
              title="Built with Tier-1 engineering components."
              description="A solar system is an investment designed to perform continuously for over 25 years. We never cut corners on electrical switchgear or structural materials."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map((comp) => (
              <div
                key={comp.title}
                className="bg-white border border-[#E5E8E3] rounded-sm overflow-hidden flex flex-col hover:border-[#15532E]/30 transition-all shadow-xs"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#E5E8E3]">
                  <Image
                    src={comp.image}
                    alt={comp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1">
                  <h3 className="text-base font-semibold text-[#202720]">{comp.title}</h3>
                  <p className="text-xs text-[#374151] leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specific Residential Solar FAQs */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeading
              title="Residential solar questions answered."
              description="Direct, technical answers regarding rooftop suitability, RWA permissions, power outages, and waterproofing."
              align="center"
            />
            <Accordion items={residentialFaqs} />
            <div className="text-center pt-2">
              <Button href="/contact" variant="ghost" size="sm" icon="arrow">
                Have specific requirements? Speak with an engineer
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <CTASection
        heading="Ready to switch your home or society to solar?"
        description="Share your monthly electricity bill or request an on-site feasibility inspection with our engineering team."
        primaryCtaText="Book Site Survey"
        primaryCtaHref="/contact"
      />
    </div>
  );
}