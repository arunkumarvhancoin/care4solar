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
    "Professional solar panel cleaning, thermal safety inspections, and annual maintenance contracts (AMC) for homes, societies, and businesses.",
};

const maintenanceServices = [
  {
    title: "Purified Panel Cleaning",
    desc: "Washing with purified water and soft brushes removes baked-on dust and grime without scratching panels or leaving mineral stains.",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=800&auto=format&fit=crop",
    points: [
      "Leaves zero mineral stains",
      "Protects anti-reflective glass",
      "Restores up to 25% lost power",
    ],
  },
  {
    title: "Thermal Safety Scans",
    desc: "Infrared camera checks spot hidden micro-cracks, overheating cells, and loose wiring before they cause damage or safety hazards.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
    points: [
      "Spots invisible defects early",
      "Protects panels from hotspot damage",
      "Full electrical safety check",
    ],
  },
  {
    title: "Inverter & App Monitoring",
    desc: "We check inverter health, wiring connections, and tracking apps to make sure you get automated alerts if power drops.",
    image:
      "https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=800&auto=format&fit=crop",
    points: [
      "Live generation tracking",
      "Safety wiring inspection",
      "Instant alerts on unexpected trips",
    ],
  },
  {
    title: "Annual Maintenance (AMC)",
    desc: "Scheduled maintenance plans for homes, apartments, and businesses, including regular cleanings and priority technician visits.",
    image:
      "https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=800&auto=format&fit=crop",
    points: [
      "Scheduled periodic visits",
      "Complete safety inspections",
      "Priority response for repairs",
    ],
  },
];

export default function OperationsMaintenancePage() {
  const maintenanceFaqs = faqsData.filter((f) => f.category === "Maintenance");

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      <PageHero
        title="Solar cleaning & regular maintenance."
        description="Keep your rooftop panels generating peak power. Purified water cleaning, infrared safety scans, and hassle-free annual maintenance contracts."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Solar panel cleaning and maintenance technician"
        primaryCtaText="Book a Maintenance Visit"
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
                title="Why regular maintenance matters."
                description="Dust, bird droppings, and loose connections can cut power generation by 15% to 25% if left unattended."
              />

              <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                Solar panels endure outdoor weather all year round. Over time, dust blocks sunlight, and electrical connections can loosen under seasonal temperature changes.
              </p>

              <div className="pt-2 space-y-3">
                <div className="p-4 sm:p-5 bg-[#F7F7F3] border border-[#E5E8E3] rounded-xs space-y-1.5">
                  <h4 className="text-base font-semibold text-[#202720]">Spot-Free Purified Washing</h4>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    Ordinary tap water contains minerals that dry into white stains on panel glass. We use purified water and soft brushes to safely clean panels and restore peak output.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F7F7F3] border border-[#E5E8E3] rounded-xs space-y-1.5">
                  <h4 className="text-base font-semibold text-[#202720]">Catching Issues Early</h4>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    Persistent bird droppings or hidden cell cracks cause hot spots that damage panels. Our infrared thermal scans catch and fix small issues before they become expensive problems.
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
              title="Our maintenance services."
              description="Everything you need to keep your solar plant running safely and efficiently year after year."
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
                    Enquire Now
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
              title="Solar maintenance FAQs."
              description="Answers to common questions about panel cleaning, inspection schedules, and AMC plans."
              align="center"
            />
            <Accordion items={maintenanceFaqs} />
            <div className="text-center pt-2">
              <Button href="/contact" variant="ghost" size="sm" icon="arrow">
                Book a cleaning or system health check
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 05 — CTA */}
      <CTASection
        heading="Keep your solar generating at its best."
        description="Whether you need a one-time panel cleaning, an electrical safety check, or an ongoing AMC plan, our team is ready to help."
        primaryCtaText="Book Maintenance Visit"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
