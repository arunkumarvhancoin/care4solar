import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import { faqsData } from "@/data/faqs";
import { Building2, Lightbulb, Droplets, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar for Apartments & Housing Societies",
  description:
    "Shared rooftop solar solutions structured for apartment complexes, RWAs, and housing societies to power common-area elevators, pumps, and lighting.",
};

export default function SolarForApartmentsPage() {
  const apartmentFaqs = faqsData.filter((f) => f.category === "Apartments");

  const commonApplications = [
    {
      title: "Common Area & Perimeter Lighting",
      desc: "Continuous power for basement parking, driveway floodlights, stairwells, and security perimeter luminaires.",
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Elevator & Lift Operations",
      desc: "Offsetting substantial continuous power demand from passenger and service elevators operating throughout the day.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Water Filtration & Booster Pumps",
      desc: "Powering heavy electrical induction motors for STP (Sewage Treatment Plants), borewells, and overhead tank water pumps.",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Clubhouse & Amenities Infrastructure",
      desc: "Energy supply for common clubhouses, swimming pool circulation pumps, gymnasium HVAC, and community halls.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1793119985840-10f7beb15e1a?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const projectWorkflow = [
    {
      step: "1",
      title: "Society Enquiry & RWA Interaction",
      desc: "Initial discussion with the Management Committee or Resident Welfare Association to understand society objectives.",
    },
    {
      step: "2",
      title: "Common-Area Electricity Assessment",
      desc: "Detailed audit of common-meter electricity bills across pumping, lifts, and lighting to model load curves.",
    },
    {
      step: "3",
      title: "Terrace Evaluation & Structural Study",
      desc: "Assessment of parapet heights, fire escape paths, water tank shadows, and non-penetrative mounting feasibility.",
    },
    {
      step: "4",
      title: "Technical Sizing & Detailed Proposal",
      desc: "Preparation of an engineering design document, bill of materials, and financial ROI projections for RWA review.",
    },
    {
      step: "5",
      title: "Association Resolution & Approval",
      desc: "Assisting committee members in presenting the technical and financial proposal to apartment owners for formal AGM/EGM resolution.",
    },
    {
      step: "6",
      title: "Installation, DISCOM Net-Metering & Commissioning",
      desc: "Professional installation adhering to multi-story safety standards, net-meter synchronization, and statutory grid compliance.",
    },
    {
      step: "7",
      title: "Ongoing Maintenance Arrangements",
      desc: "Long-term operation and maintenance protocols including scheduled cleaning and remote monitoring to ensure continuous output.",
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative pt-10 pb-12 sm:py-14 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-[#15532E] leading-tight">
                Shared rooftops.
                <br />
                <span className="text-[#202720]">Collective energy benefits.</span>
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-[#374151] leading-relaxed">
                Transform shared apartment terrace space into a high-yielding clean energy asset
                that significantly reduces recurring monthly maintenance dues for all residents.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <Button href="/contact" variant="primary" size="lg" icon="arrow" magnetic={true} className="w-full sm:w-auto">
                  Request RWA Presentation
                </Button>
                <Button href="/projects" variant="outline" size="lg" className="w-full sm:w-auto">
                  View Society Projects
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E5E8E3] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
                  alt="High-rise apartment rooftop solar array"
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

      {/* SECTION 02 — COMMON-AREA SOLAR APPLICATIONS */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            title="Powering shared community infrastructure."
            description="Apartment societies consume massive electricity units every month simply powering common-meter infrastructure. Solar directly counters these operational expenditures."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonApplications.map((app) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={app.title}
                  className="bg-[#F7F7F3] border border-[#E5E8E3] flex flex-col overflow-hidden group hover:border-[#15532E] transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2.5">
                    <div>
                      <div className="flex items-center space-x-2 text-[#15532E] mb-1.5">
                        <IconComponent className="w-4 h-4 text-[#15532E]" />
                        <h3 className="text-base font-semibold text-[#202720]">{app.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">{app.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 03 — WHY APARTMENTS CONSIDER SOLAR */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                title="Why housing societies invest in rooftop solar."
                description="Rising utility tariffs continually strain apartment association maintenance funds. Solar delivers long-term financial predictability."
              />
              <div className="space-y-4 pt-2">
                <div className="p-5 bg-white border border-[#E5E8E3] space-y-1">
                  <h4 className="text-sm font-semibold text-[#202720]">
                    Maintenance Fund Protection
                  </h4>
                  <p className="text-xs text-[#374151]">
                    Lowering common electricity bills frees up association reserves for facility
                    upgrades, landscaping, and community amenities.
                  </p>
                </div>
                <div className="p-5 bg-white border border-[#E5E8E3] space-y-1">
                  <h4 className="text-sm font-semibold text-[#202720]">
                    Effective Terrace Asset Utilization
                  </h4>
                  <p className="text-xs text-[#374151]">
                    Elevated super-structures allow residents to retain full walking and
                    recreational rooftop utility underneath the elevated solar canopies.
                  </p>
                </div>
                <div className="p-5 bg-white border border-[#E5E8E3] space-y-1">
                  <h4 className="text-sm font-semibold text-[#202720]">
                    Green Community Sustainability
                  </h4>
                  <p className="text-xs text-[#374151]">
                    Significantly lowers the carbon footprint of multi-story living while raising
                    the market valuation and desirability of individual apartments.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] overflow-hidden border border-[#E5E8E3] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1793119985840-10f7beb15e1a?q=80&w=1200&auto=format&fit=crop"
                  alt="Apartment building complex with solar infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 04 — HOW A PROJECT WORKS */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            title="How an apartment solar project works."
            description="We guide management committees step-by-step from preliminary energy audits through association resolution to grid commissioning."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectWorkflow.map((item) => (
              <div key={item.step} className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] space-y-3">
                <span className="text-xl font-bold text-[#E5A100]">{item.step}</span>
                <h3 className="text-base font-semibold text-[#202720]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 05 — APARTMENT-SPECIFIC CONSIDERATIONS */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            title="Apartment-specific considerations."
            description="Multi-story residential buildings have unique structural, safety, and administrative requirements that demand specialized engineering attention."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Terrace Waterproofing Preservation",
                desc: "We employ non-penetrative ballasted mounting systems or chemical anchoring to guarantee roof water-proofing membranes remain 100% undamaged.",
              },
              {
                title: "High Wind-Load Engineering",
                desc: "Rooftop elevations above 30 meters experience intense wind shear. Structures are wind-tunnel rated and stress-analyzed using STAAD Pro engineering models.",
              },
              {
                title: "Fire Safety & Access Clearances",
                desc: "Full compliance with municipal fire department norms, maintaining mandatory walkways around fire escape doors, parapets, and utility risers.",
              },
              {
                title: "Electrical Riser Routing",
                desc: "Safe conduit routing down vertical electrical shafts to the ground-floor LT panel room without disturbing exterior building aesthetics.",
              },
              {
                title: "DISCOM Net-Metering Formalities",
                desc: "Handling sanction paperwork with the electricity board to connect the solar inverter to the designated common-services LT/HT meter.",
              },
              {
                title: "Long-Term O&M Clearances",
                desc: "Dedicated safety lifelines, rooftop water outlets for panel washing, and designated technician access protocols.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white border border-[#E5E8E3] space-y-2.5">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#15532E]" />
                  <h3 className="text-sm font-semibold text-[#202720]">{item.title}</h3>
                </div>
                <p className="text-xs text-[#374151] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 06 — APARTMENT FAQS */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeading
              title="Frequently asked questions by housing societies."
              description="Clear answers to help committee members and apartment owners make informed decisions."
              align="center"
            />
            <Accordion items={apartmentFaqs} />
          </div>
        </Container>
      </section>

      {/* SECTION 07 — CTA */}
      <CTASection
        heading="Planning solar for your apartment community?"
        description="Invite Care4Solar to conduct a preliminary common-area load review and present a detailed feasibility roadmap to your association committee."
        primaryCtaText="Request RWA Feasibility"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
