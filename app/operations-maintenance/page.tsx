import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { omServices } from "@/data/services";
import {
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Activity,
  Flame,
  Gauge,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Operations & Maintenance (O&M)",
  description:
    "Structured operations and maintenance for rooftop and industrial solar installations. Precision de-ionized panel cleaning, thermal infrared inspection, string telemetry monitoring, and Annual Maintenance Contracts (AMC).",
};

export default function OperationsMaintenancePage() {
  const processSteps = [
    {
      step: "1",
      title: "Initial System Review & Baseline",
      desc: "Audit of historical generation logs, inverter fault histories, single line diagrams (SLD), and previous maintenance records to establish benchmark performance curves.",
    },
    {
      step: "2",
      title: "Comprehensive Physical Inspection",
      desc: "Detailed visual and mechanical check of module glass integrity, aluminum frame earthing, mounting hardware torque tightness, and roof waterproofing penetrations.",
    },
    {
      step: "3",
      title: "Electrical & Safety Testing",
      desc: "String open-circuit voltage (Voc), short-circuit current (Isc), insulation resistance (Riso), DC disconnect switch testing, and chemical earthing pit resistance measurements.",
    },
    {
      step: "4",
      title: "Calibrated Thermal Scan",
      desc: "High-resolution infrared thermography scanning across module strings, combiner boxes, and inverter DC terminals to detect localized heating and hot spots.",
    },
    {
      step: "5",
      title: "Precision Panel Cleaning",
      desc: "Systematic removal of airborne particulates, bird deposits, and environmental grime using low-pressure de-mineralized water and non-abrasive solar brushes.",
    },
    {
      step: "6",
      title: "Detailed Engineering Report",
      desc: "Delivery of an itemized health audit report detailing generation yield comparisons, identified risks, preventive recommendations, and component upgrade roadmaps.",
    },
  ];

  const amcChecklist = [
    {
      category: "Photovoltaic Modules & Arrays",
      items: [
        "Demineralized water wash at scheduled intervals to prevent mineral calcification",
        "Visual inspection for glass micro-cracks, delamination, and snail trails",
        "Module junction box and bypass diode thermal inspection",
        "Inter-module DC cabling, MC4 connector tightness, and UV conduit routing checks",
      ],
    },
    {
      category: "Inverters & Power Electronics",
      items: [
        "Inverter cooling fan inspection, heatsink cleaning, and air filter maintenance",
        "Internal fault log extraction, firmware verification, and parameter check",
        "DC and AC disconnect isolator switch mechanical operation testing",
        "Inspection of internal capacitors, thermal paste condition, and surge arrestors",
      ],
    },
    {
      category: "Balance of System (BOS) & Protection",
      items: [
        "AC & DC distribution box (AJB / ACDB) terminal torque checks",
        "Type-2 surge protection device (SPD) health status verification",
        "Chemical earthing pit testing (ensuring earth resistance stays within code limits)",
        "Early streamer emission (ESE) or conventional lightning arrestor physical audit",
      ],
    },
    {
      category: "Mounting Structure & Terrace Safety",
      items: [
        "Hot-dip galvanized structure anchor bolt tightness and corrosion checking",
        "Roof waterproofing membrane integrity inspection at mounting points",
        "Perimeter lifeline cable integrity and technician walkway safety checks",
        "Wind-bracing strut tension and vibration dampener verification",
      ],
    },
  ];

  const documentaryImages = [
    {
      title: "De-Mineralized Panel Cleaning",
      caption: "Low-TDS water wash preserving anti-reflective optical coatings",
      src: "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Inverter Electrical Testing",
      caption: "String inverter diagnostics and terminal torque calibration",
      src: "https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Thermal IR Diagnostics",
      caption: "Calibrated thermography identifying cell-level resistive hotspots",
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Real-Time Telemetry Tracking",
      caption: "String-level current logging and automated anomaly detection",
      src: "https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=800&auto=format&fit=crop",
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
                <span>LIFECYCLE ASSET PERFORMANCE &amp; CARE</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#15532E] leading-tight">
                Solar performance needs consistent care.
              </h1>
              <p className="max-w-xl text-base sm:text-xl text-[#747C75] leading-relaxed">
                Structured maintenance and technical attention help solar installations remain
                reliable, efficient and operational throughout their 25-year lifecycle.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <Button href="/contact" variant="primary" size="lg" icon="arrow" magnetic={true} className="w-full sm:w-auto">
                  Request Maintenance Enquiry
                </Button>
                <Button href="/solar-calculator" variant="outline" size="lg" className="w-full sm:w-auto">
                  System Requirement Check
                </Button>
              </div>

              {/* Technical Capability Badges */}
              <div className="pt-6 border-t border-[#E5E8E3] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 bg-white border border-[#E5E8E3]">
                  <span className="font-mono text-[#15532E] font-semibold block">Wash</span>
                  <span className="text-[#747C75] text-[11px] mt-0.5 block">Demineralized Water</span>
                </div>
                <div className="p-2.5 bg-white border border-[#E5E8E3]">
                  <span className="font-mono text-[#15532E] font-semibold block">Thermal</span>
                  <span className="text-[#747C75] text-[11px] mt-0.5 block">Calibrated IR Scans</span>
                </div>
                <div className="p-2.5 bg-white border border-[#E5E8E3]">
                  <span className="font-mono text-[#15532E] font-semibold block">Telemetry</span>
                  <span className="text-[#747C75] text-[11px] mt-0.5 block">String-Level IoT</span>
                </div>
                <div className="p-2.5 bg-white border border-[#E5E8E3]">
                  <span className="font-mono text-[#15532E] font-semibold block">AMC</span>
                  <span className="text-[#747C75] text-[11px] mt-0.5 block">Scheduled Health Audits</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E5E8E3] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                  alt="Solar engineer inspecting a rooftop solar installation"
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

      {/* SECTION 02 — THE SCIENCE OF SOLAR AGING & WHY MAINTENANCE IS CRITICAL */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="Performance Preservation"
                title="The continuous challenge of environmental exposure."
                description="Rooftop solar systems endure intense ultraviolet radiation, torrential monsoons, severe thermal cycling, and heavy urban dust sedimentation."
              />
              <p className="text-sm text-[#747C75] leading-relaxed">
                Solar panels operate outdoors in unforgiving conditions. Without systematic technical
                supervision, minor anomalies—such as a single cracked bypass diode or loose MC4
                crimp—can escalate into major generation losses or catastrophic electrical fire
                hazards.
              </p>
              <div className="p-4 bg-[#F7F7F3] border-l-4 border-[#15532E] text-xs text-[#202720] space-y-1">
                <span className="font-semibold block">Engineering Fact:</span>
                <p className="text-[#747C75]">
                  Soiling and airborne dust deposits can degrade energy output by 15% to 25% within
                  weeks if not cleaned with appropriate low-mineral water and non-abrasive tools.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#F7F7F3] border border-[#E5E8E3] space-y-2">
                <div className="flex items-center space-x-2 text-[#15532E]">
                  <AlertTriangle className="w-4 h-4 text-[#E5A100]" />
                  <h4 className="text-sm font-semibold text-[#202720]">Soiling &amp; Hotspots</h4>
                </div>
                <p className="text-xs text-[#747C75] leading-relaxed">
                  Persistent bird droppings or accumulated dust cause covered cells to act as electrical
                  resistors. They heat up excessively, creating permanent hot spots that can burn through
                  the backsheet.
                </p>
              </div>

              <div className="p-5 bg-[#F7F7F3] border border-[#E5E8E3] space-y-2">
                <div className="flex items-center space-x-2 text-[#15532E]">
                  <Flame className="w-4 h-4 text-[#F07F09]" />
                  <h4 className="text-sm font-semibold text-[#202720]">DC Terminal Loosening</h4>
                </div>
                <p className="text-xs text-[#747C75] leading-relaxed">
                  Daily thermal expansion and contraction can loosen electrical connections in combiner
                  boxes and DC isolators, creating micro-arcing and substantial fire vulnerability.
                </p>
              </div>

              <div className="p-5 bg-[#F7F7F3] border border-[#E5E8E3] space-y-2">
                <div className="flex items-center space-x-2 text-[#15532E]">
                  <Gauge className="w-4 h-4 text-[#15532E]" />
                  <h4 className="text-sm font-semibold text-[#202720]">Inverter Thermal Stress</h4>
                </div>
                <p className="text-xs text-[#747C75] leading-relaxed">
                  Cooling fans clogged with dust force power inverters to derate their generation capacity
                  on hot afternoons to prevent internal component damage, sacrificing peak yield.
                </p>
              </div>

              <div className="p-5 bg-[#F7F7F3] border border-[#E5E8E3] space-y-2">
                <div className="flex items-center space-x-2 text-[#15532E]">
                  <Activity className="w-4 h-4 text-[#2D9F5A]" />
                  <h4 className="text-sm font-semibold text-[#202720]">Earthing Pit Degradation</h4>
                </div>
                <p className="text-xs text-[#747C75] leading-relaxed">
                  Chemical earth pits dry out or corrode over time, elevating ground resistance above safe
                  thresholds and rendering surge arrestors and lightning protection ineffective.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 03 — FIVE APPROVED MAINTENANCE SERVICES */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Maintenance Solutions"
            title="Comprehensive maintenance services."
            description="Our structured engineering services protect electrical safety, maximize yield, and preserve asset longevity across the installation's lifecycle."
            className="mb-14"
          />

          <div className="space-y-10">
            {omServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#E5E8E3] grid grid-cols-1 lg:grid-cols-12 overflow-hidden transition-all hover:border-[#15532E]"
              >
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[260px] bg-[#F7F7F3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#202720]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#747C75] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-3 border-t border-[#E5E8E3]">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#747C75] block mb-2">
                        Key Service Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#202720]">
                        {service.keyPoints.map((point) => (
                          <div key={point} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2D9F5A] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E8E3] flex items-center justify-between">
                    <span className="text-xs text-[#747C75]">
                      Available for Residential, Apartment &amp; Commercial installations
                    </span>
                    <Button href="/contact" variant="outline" size="sm" icon="arrow" magnetic={true}>
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 04 — MAINTENANCE PROCESS */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Maintenance Protocol"
            title="Our structured maintenance protocol."
            description="Every maintenance engagement follows an established sequence of diagnostics, physical servicing, and verifiable performance benchmarking."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="p-6 bg-[#F7F7F3] border border-[#E5E8E3] space-y-3">
                <span className="text-xl font-mono font-bold text-[#E5A100]">{step.step}</span>
                <h3 className="text-base font-semibold text-[#202720]">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#747C75] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 05 — ANNUAL MAINTENANCE CONTRACT (AMC) TECHNICAL CHECKLIST */}
      <section className="py-16 lg:py-24 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Annual Maintenance Contracts"
            title="Annual Maintenance Contract scope breakdown."
            description="Our AMC agreements provide structured preventive coverage to ensure safety compliance and long-term warranty preservation."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amcChecklist.map((group) => (
              <div key={group.category} className="bg-white border border-[#E5E8E3] p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="flex items-center space-x-2 text-[#15532E] pb-2 border-b border-[#E5E8E3]">
                  <ShieldCheck className="w-5 h-5 text-[#15532E]" />
                  <h3 className="text-base font-semibold text-[#202720]">{group.category}</h3>
                </div>
                <div className="space-y-2.5">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#202720]">
                      <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 06 — DOCUMENTARY PHOTOGRAPHY GALLERY */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <SectionHeading
            eyebrow="Field Inspections"
            title="Documentary engineering photography."
            description="Our field technicians follow rigorous safety standards during cleaning, electrical testing, and drone-assisted thermal audits."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentaryImages.map((img) => (
              <div key={img.title} className="border border-[#E5E8E3] bg-[#F7F7F3] overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-sm font-semibold text-[#202720]">{img.title}</h4>
                  <p className="text-xs text-[#747C75] leading-snug">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 07 — CTA */}
      <CTASection
        heading="Give your solar installation the attention it deserves."
        description="Whether you require one-time precision panel cleaning, a comprehensive infrared thermal audit, or an Annual Maintenance Contract (AMC), our engineering team is here."
        primaryCtaText="Request Maintenance Enquiry"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
