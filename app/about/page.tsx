import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Scale,
  Award,
  Wrench,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Care4Solar designs, installs, and maintains high-performance rooftop solar for homes, apartment communities, and businesses.",
};

const coreCommitments = [
  {
    icon: Scale,
    title: "Honest Sizing",
    desc: "We size systems strictly based on your actual 12-month power bills and usable roof space—never overselling panels you don't need.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Leak Roof Mounting",
    desc: "We use weighted non-penetrating bases on flat roofs and seam clamps on metal sheds to protect your roof waterproofing completely.",
  },
  {
    icon: Award,
    title: "Tier-1 Certified Hardware",
    desc: "We only install tested, certified solar panels and inverters that carry full 25-year performance warranties and proven durability.",
  },
  {
    icon: Wrench,
    title: "Lifelong Asset Care",
    desc: "We don't disappear after installation. Our dedicated maintenance team provides regular purified washing and fast repairs.",
  },
];

const comparisonData = [
  {
    aspect: "System Sizing",
    others: "Pushes oversized standard packages to meet sales quotas.",
    care4solar: "Sizes conservatively based on your past 12-month electricity bills and sun hours.",
  },
  {
    aspect: "Terrace Usability",
    others: "Clutters the terrace floor with ground frames, blocking walking space.",
    care4solar: "Uses elevated pergolas or perimeter layouts so your terrace remains fully usable.",
  },
  {
    aspect: "Roof Waterproofing",
    others: "Drills anchors directly into the concrete slab, creating leak risks.",
    care4solar: "Non-penetrative weighted ballasts or industrial sealants that preserve roof waterproofing.",
  },
  {
    aspect: "Power Company Paperwork",
    others: "Leaves DISCOM net metering applications and inspections to the customer.",
    care4solar: "End-to-end liaisoning, documentation, and coordination with your electricity board.",
  },
  {
    aspect: "Ongoing Maintenance",
    others: "No after-sales service; owners are left on their own when dust settles.",
    care4solar: "Scheduled purified water cleaning, phone app tracking, and AMC support.",
  },
];

const serviceAreas = [
  {
    region: "Residential Communities",
    locations: "Whitefield, Sarjapur Road, HSR Layout, Indiranagar, Koramangala, Yelahanka, JP Nagar, Electronic City",
    highlight: "Home & Apartment Society Rooftops",
  },
  {
    region: "Industrial & Commercial Hubs",
    locations: "Peenya Industrial Area, Bommasandra, Hosur Road Corridor, Bidadi, Nelamangala, Whitefield EPIP",
    highlight: "Factories, Warehouses & Campuses",
  },
];

export default function AboutPage() {
  const steps = [
    {
      num: "1",
      title: "Survey & Bill Review",
      desc: "We visit your roof, check sunlight patterns, and review your past electricity bills to size your system accurately.",
    },
    {
      num: "2",
      title: "Custom System Design",
      desc: "We plan the layout for maximum sunlight and share a clear, transparent list of quality components.",
    },
    {
      num: "3",
      title: "Installation & Approvals",
      desc: "Safe rooftop mounting, complete electrical protection, and full coordination with your power company for net metering.",
    },
    {
      num: "4",
      title: "Ongoing Maintenance",
      desc: "Regular panel washing, mobile app tracking, and prompt on-site support whenever you need it.",
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      <PageHero
        title="Solar care that goes beyond installation."
        description="We design, install, and look after rooftop solar systems so they deliver real savings for their full 25-year lifespan."
        image="https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Care4Solar rooftop solar engineering team"
        primaryCtaText="Speak with Our Team"
        primaryCtaHref="/contact"
        secondaryCtaText="View Projects"
        secondaryCtaHref="/projects"
      />

      {/* SECTION 01 — CORE PHILOSOPHY */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-[#E5E8E3] bg-[#F7F7F3]">
              <Image
                src="https://images.unsplash.com/photo-1660330589243-4c640d878052?q=80&w=1200&auto=format&fit=crop"
                alt="Care4Solar rooftop engineers inspecting solar array"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <SectionHeading
                title="Rooftop solar built properly, and cared for properly."
                description="Solar should be reliable, worry-free, and built to last 25 years."
              />

              <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                Many solar companies disappear once the panels are bolted to your roof. When generation drops or dust settles, property owners are often left without support.
              </p>

              <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                Care4Solar stays with you. We size your system honestly based on real electricity bills, install it without damaging your roof waterproofing, and provide regular maintenance so you get peak savings year after year.
              </p>

              <div className="pt-2 space-y-2.5">
                {[
                  "Honest system sizing based on your actual power bills—no overselling",
                  "Complete paperwork and approvals handled with your local power company",
                  "Regular panel cleaning and phone app tracking to ensure peak performance",
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-2.5 text-sm sm:text-base text-[#374151]">
                    <CheckCircle2 className="w-4 h-4 text-[#15532E] shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 02 — THE 4 PILLARS OF OUR COMMITMENT */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="What makes our approach different."
              description="Four clear commitments that protect your investment from day one to year 25."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCommitments.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white border border-[#E5E8E3] p-6 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-sm bg-[#15532E]/10 text-[#15532E] flex items-center justify-center">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#202720]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#374151] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 03 — COMPARISON TABLE: CARE4SOLAR VS TYPICAL INSTALLERS */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="How Care4Solar compares."
              description="A clear look at how our engineering approach protects your rooftop and investment."
            />
          </div>

          <div className="border border-[#E5E8E3] bg-[#F7F7F3] overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-white border-b border-[#E5E8E3] font-semibold text-sm">
              <div className="md:col-span-3 p-4 text-[#374151] uppercase font-mono tracking-wider">
                Area
              </div>
              <div className="md:col-span-4 p-4 text-[#8C1D1D] bg-red-50/40 border-l border-[#E5E8E3]">
                Typical Solar Installers
              </div>
              <div className="md:col-span-5 p-4 text-[#15532E] bg-[#15532E]/5 border-l border-[#E5E8E3] font-bold">
                Care4Solar Engineering
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-[#E5E8E3]">
              {comparisonData.map((row) => (
                <div
                  key={row.aspect}
                  className="grid grid-cols-1 md:grid-cols-12 text-sm items-stretch bg-white hover:bg-[#F7F7F3] transition-colors"
                >
                  <div className="md:col-span-3 p-4 font-semibold text-[#202720] flex items-center">
                    {row.aspect}
                  </div>
                  <div className="md:col-span-4 p-4 text-[#4B5563] border-l border-[#E5E8E3] flex items-start space-x-2 bg-red-50/20">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{row.others}</span>
                  </div>
                  <div className="md:col-span-5 p-4 text-[#202720] border-l border-[#E5E8E3] flex items-start space-x-2 bg-[#15532E]/5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0 mt-0.5" />
                    <span>{row.care4solar}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 04 — 4-STEP PROCESS */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="How we work with you."
              description="A simple, transparent process from initial roof survey to decades of clean energy."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.num} className="p-5 sm:p-6 bg-white border border-[#E5E8E3] space-y-2.5">
                <span className="text-xl font-mono font-bold text-[#E5A100]">{s.num}</span>
                <h3 className="text-lg font-semibold text-[#202720]">{s.title}</h3>
                <p className="text-sm sm:text-base text-[#374151] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 05 — SERVICE COVERAGE */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="Where we operate."
              description="Active across Bengaluru and key Karnataka industrial corridors with dedicated installation and maintenance teams."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {serviceAreas.map((area) => (
              <div
                key={area.region}
                className="bg-[#F7F7F3] border border-[#E5E8E3] p-6 sm:p-7 space-y-3"
              >
                <div className="flex items-center space-x-2 text-[#15532E]">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span className="font-semibold text-lg text-[#202720]">{area.region}</span>
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-medium">
                  {area.highlight}
                </div>
                <p className="text-sm text-[#374151] leading-relaxed pt-1">
                  {area.locations}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E5E8E3] pt-6">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-[#15532E] shrink-0" />
              <div>
                <span className="font-bold text-base text-[#202720] block">24–48 Hour Visits</span>
                <span className="text-xs text-[#374151]">Fast rooftop surveys across Bengaluru</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-[#E5A100] shrink-0" />
              <div>
                <span className="font-bold text-base text-[#202720] block">Turnkey Approvals</span>
                <span className="text-xs text-[#374151]">Complete BESCOM/DISCOM coordination</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#2D9F5A] shrink-0" />
              <div>
                <span className="font-bold text-base text-[#202720] block">25-Year Support</span>
                <span className="text-xs text-[#374151]">Regular cleaning and ongoing AMC care</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Minimal CTA */}
      <CTASection
        heading="Ready to discuss your solar project?"
        description="Talk to our team for a free roof assessment and an honest bill evaluation."
        primaryCtaText="Get Started"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
