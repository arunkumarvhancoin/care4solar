import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import { Home, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Residential Solar — Homes & Housing Societies",
  description:
    "Rooftop solar for independent homes, villas, and apartment communities. Custom designed for maximum savings, zero roof damage, and seamless net metering.",
};

export default function ResidentialSolarPage() {
  const solutions = [
    {
      icon: Home,
      type: "For Independent Homes & Villas",
      headline: "Eliminate high home electricity bills.",
      description:
        "Designed for your home's actual monthly power use, air conditioning, and EV charging without overselling panels you don't need.",
      image:
        "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1200&auto=format&fit=crop",
      highlights: [
        "Custom sized based on your past electricity bills",
        "Net metering rolls back your power meter to cut nighttime bills",
        "Option to add battery backup for power cuts",
        "Structures designed to keep your terrace open for daily use",
      ],
    },
    {
      icon: Building2,
      type: "For Apartments & Housing Societies (RWAs)",
      headline: "Permanently lower society maintenance bills.",
      description:
        "Shared rooftop solar designed for residential apartments, powering lifts, water pumps, common lighting, and clubhouses.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
      highlights: [
        "Powers common amenities: lifts, water pumps, and campus lighting",
        "Synchronizes safely with backup generators to save diesel fuel",
        "Weighted mounting protects terrace waterproofing with zero drilling",
        "Clear proposal presentation for society committee and AGM meetings",
      ],
    },
  ];

  const components = [
    {
      title: "High-Efficiency Solar Panels",
      desc: "Quality panels with 25-year performance warranties that generate power even on overcast days.",
      image:
        "https://images.unsplash.com/photo-1719848574124-2f66fa842fd6?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Smart Inverters",
      desc: "Converts solar power for home use and connects to a phone app for easy daily tracking.",
      image:
        "https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Rust-Proof Mounting Structures",
      desc: "Strong aluminum or galvanized steel structures built to withstand high winds without damaging your roof.",
      image:
        "https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Complete Electrical Safety Gear",
      desc: "Dedicated safety switches, surge protection, earthing, and lightning arrestors to protect home appliances.",
      image:
        "https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      <PageHero
        title="Residential solar for homes & societies."
        description="Rooftop solar for independent villas and apartment communities. Sized accurately to your actual electricity bills with full net metering support."
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
              title="Rooftop solar tailored for your property."
              description="Whether you own an independent home or manage an apartment community, we design systems that match your daily power needs."
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
                        <span className="text-sm font-semibold text-[#15532E] uppercase tracking-wider">
                          {sol.type}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#202720] leading-snug">
                        {sol.headline}
                      </h3>

                      <p className="text-base text-[#374151] leading-relaxed">
                        {sol.description}
                      </p>

                      <ul className="space-y-2.5 pt-2">
                        {sol.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-2.5 text-sm sm:text-base text-[#374151]">
                            <CheckCircle2 className="w-4 h-4 text-[#15532E] shrink-0 mt-1" />
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
              title="Built with quality components."
              description="A solar system should run reliably for over 25 years. We only install tested, certified hardware."
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
                  <h3 className="text-lg font-semibold text-[#202720]">{comp.title}</h3>
                  <p className="text-sm text-[#374151] leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <CTASection
        heading="Ready to switch your home or society to solar?"
        description="Share your monthly electricity bill for a free roof assessment and savings estimate."
        primaryCtaText="Book a Free Roof Survey"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
