import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import { faqsData } from "@/data/faqs";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Operations & Maintenance (O&M)",
  description:
    "Structured operations and maintenance for rooftop and industrial solar installations. Precision de-ionized panel cleaning, thermal infrared inspection, string telemetry monitoring, and Annual Maintenance Contracts (AMC).",
};

const maintenanceServices = [
  {
    title: "De-Mineralized Panel Cleaning",
    desc: "Low-TDS reverse-osmosis washing with soft, non-abrasive brushes to remove stubborn dust and soot without thermal shock or mineral scaling.",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=800&auto=format&fit=crop",
    points: [
      "pH-neutral spot-free water wash",
      "Protects anti-reflective glass coating",
      "Recovers 15% to 30% lost generation",
    ],
  },
  {
    title: "Thermal IR Diagnostics",
    desc: "Calibrated drone and handheld thermography scans to pinpoint cell-level micro-cracks, diode failures, and resistive hotspots before damage spreads.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
    points: [
      "High-resolution infrared detection",
      "Identifies invisible micro-faults early",
      "Mitigates hotspot and electrical risks",
    ],
  },
  {
    title: "Inverter Health & Telemetry",
    desc: "String-level current logging, terminal torque calibration, and firmware diagnostics to ensure continuous peak MPPT tracking.",
    image:
      "https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=800&auto=format&fit=crop",
    points: [
      "Real-time string current observation",
      "AC/DC terminal torque inspection",
      "Automated underperformance alerts",
    ],
  },
  {
    title: "Annual Maintenance Contracts",
    desc: "Scheduled preventive maintenance agreements for residential, society, and industrial plants with priority technical response.",
    image:
      "https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=800&auto=format&fit=crop",
    points: [
      "Scheduled quarterly health checks",
      "Complete electrical safety audits",
      "Priority on-site emergency dispatch",
    ],
  },
];

export default function OperationsMaintenancePage() {
  const maintenanceFaqs = faqsData.filter((f) => f.category === "Maintenance");

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      <PageHero
        title="Solar cleaning & asset maintenance."
        description="Structured operations and preventive care for rooftop and industrial solar plants. Precision demineralized panel washing, calibrated IR drone thermography, and cloud telemetry."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Solar panel cleaning and maintenance technician"
        primaryCtaText="Request Maintenance Audit"
        primaryCtaHref="/contact"
        secondaryCtaText="View Projects"
        secondaryCtaHref="/projects"
      />

      {/* SECTION 02 — WHY SOLAR MAINTENANCE MATTERS */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-[#E5E8E3] bg-[#F7F7F3]">
              <Image
                src="https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1200&auto=format&fit=crop"
                alt="Solar technician washing solar panels with purified water"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <SectionHeading
                title="Why solar maintenance matters."
                description="Dust, urban soot, and temperature fluctuations quietly cut solar generation by 15% to 30% if left unattended."
              />

              <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                Solar panels endure harsh outdoor weather year-round. Over time, surface dust blocks sunlight, cooling fans accumulate grime, and electrical terminals experience natural thermal loosening.
              </p>

              <div className="pt-2 space-y-3">
                <div className="p-4 sm:p-5 bg-[#F7F7F3] border border-[#E5E8E3] rounded-xs space-y-1.5">
                  <h4 className="text-base font-semibold text-[#202720]">Spot-Free Demineralized Washing</h4>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    Tap water contains dissolved minerals that leave white scaling on panel glass. We use reverse-osmosis demineralized water and soft non-abrasive brushes to safely recover lost yield.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F7F7F3] border border-[#E5E8E3] rounded-xs space-y-1.5">
                  <h4 className="text-base font-semibold text-[#202720]">Thermal Hotspot &amp; Inverter Health</h4>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    Persistent bird droppings cause shaded cells to heat up and degrade. Calibrated infrared thermography scans identify micro-faults before they cause inverter trips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 03 — STRUCTURED MAINTENANCE SERVICES */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="Comprehensive maintenance services."
              description="Our structured engineering services protect electrical safety, maximize yield, and preserve asset longevity across the installation's lifecycle."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-[#E5E8E3] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#15532E]/40 transition-all shadow-xs group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F3] border-b border-[#E5E8E3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-semibold text-[#202720]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#374151] leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="pt-2 border-t border-[#E5E8E3] space-y-1.5">
                      {service.points.map((pt) => (
                        <div key={pt} className="flex items-start space-x-2 text-sm text-[#374151]">
                          <CheckCircle2 className="w-4 h-4 text-[#15532E] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Button href="/contact" variant="outline" size="sm" className="w-full">
                    Enquire Service
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 04 — MAINTENANCE FAQS */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeading
              title="Solar maintenance questions answered."
              description="Direct answers on cleaning schedules, soiling power loss, infrared thermal scans, and AMC coverage."
              align="center"
            />
            <Accordion items={maintenanceFaqs} />
            <div className="text-center pt-2">
              <Button href="/contact" variant="ghost" size="sm" icon="arrow">
                Book a maintenance audit or panel cleaning
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 05 — CTA */}
      <CTASection
        heading="Give your solar installation the attention it deserves."
        description="Whether you require one-time precision panel cleaning, a comprehensive infrared thermal audit, or an Annual Maintenance Contract (AMC), our engineering team is here."
        primaryCtaText="Request Maintenance Enquiry"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
