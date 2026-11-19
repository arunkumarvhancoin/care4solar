import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Care4Solar designs, installs, and maintains high-performance rooftop solar for homes, apartment communities, and businesses.",
};

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

      {/* Core Engineering Philosophy — Clean & Balanced */}
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

      {/* 4-Step Process */}
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
