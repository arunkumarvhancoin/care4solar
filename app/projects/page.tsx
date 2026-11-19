"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import TiltCard from "@/components/ui/TiltCard";
import { projectsData } from "@/data/projects";
import { CheckCircle2, Zap, Gauge, Compass, Cpu, MapPin } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      <PageHero
        title="Solar projects engineered in the real world."
        description="Detailed project case studies illustrating rooftop structural designs, electrical switchgear integrations, and verified generation performance."
        image="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Aerial rooftop solar installation array"
        primaryCtaText="Discuss Your Project"
        primaryCtaHref="/contact"
        secondaryCtaText="Asset Maintenance"
        secondaryCtaHref="/operations-maintenance"
      />

      {/* Projects Showcase — Full Width Case Studies (1 Per Row) */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="mb-10 max-w-2xl">
            <SectionHeading
              title="Featured solar installations."
              description="Detailed engineering reviews of rooftop structural designs, electrical switchgear integrations, and verified generation performance."
            />
          </div>

          {/* Single Project Per Row Layout */}
          <div className="space-y-12 lg:space-y-16">
            {projectsData.map((project, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={project.id}
                  className="border border-[#E5E8E3] bg-[#F7F7F3] overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    {/* Project Image Column (7 cols) */}
                    <div
                      className={`lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] bg-white overflow-hidden ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <TiltCard maxTilt={2} glare={false} className="w-full h-full">
                        <div className="relative w-full h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 border border-[#E5E8E3] flex items-center space-x-2 text-sm text-[#202720]">
                            <MapPin className="w-3.5 h-3.5 text-[#15532E] shrink-0" />
                            <span className="font-medium">{project.location}</span>
                          </div>
                        </div>
                      </TiltCard>
                    </div>

                    {/* Project Narrative & Technical Specs Column (5 cols) */}
                    <div
                      className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-white ${
                        isEven
                          ? "lg:order-1 border-r border-[#E5E8E3]"
                          : "lg:order-2 border-l border-[#E5E8E3]"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5E8E3]">
                          <span className="text-sm font-semibold text-[#15532E]">
                            {project.category}
                          </span>
                          <span className="text-sm font-mono font-bold text-[#15532E]">
                            {project.capacity}
                          </span>
                        </div>

                          <h2 className="text-2xl sm:text-3xl font-semibold text-[#202720] leading-tight">
                            {project.title}
                          </h2>

                          <p className="text-base text-[#374151] leading-relaxed">
                            {project.description}
                          </p>

                          {/* 4-Stat Technical Specifications Grid */}
                          <div className="pt-2 grid grid-cols-2 gap-3.5">
                            <div className="p-3.5 bg-[#F7F7F3] border border-[#E5E8E3] space-y-1">
                              <div className="flex items-center space-x-1.5 text-xs text-[#374151]">
                                <Zap className="w-4 h-4 text-[#E5A100]" />
                                <span className="font-mono uppercase text-xs">Capacity</span>
                              </div>
                              <span className="text-base font-bold text-[#15532E] block">
                                {project.capacity}
                              </span>
                            </div>

                            <div className="p-3.5 bg-[#F7F7F3] border border-[#E5E8E3] space-y-1">
                              <div className="flex items-center space-x-1.5 text-xs text-[#374151]">
                                <Gauge className="w-4 h-4 text-[#15532E]" />
                                <span className="font-mono uppercase text-xs">Est. Yield</span>
                              </div>
                              <span className="text-sm sm:text-base font-semibold text-[#202720] block">
                                {project.annualGeneration}
                              </span>
                            </div>

                            <div className="p-3.5 bg-[#F7F7F3] border border-[#E5E8E3] space-y-1">
                              <div className="flex items-center space-x-1.5 text-xs text-[#374151]">
                                <Compass className="w-4 h-4 text-[#2D9F5A]" />
                                <span className="font-mono uppercase text-xs">Structure</span>
                              </div>
                              <span className="text-sm text-[#202720] font-medium block leading-snug">
                                {project.mountingType}
                              </span>
                            </div>

                            <div className="p-3.5 bg-[#F7F7F3] border border-[#E5E8E3] space-y-1">
                              <div className="flex items-center space-x-1.5 text-xs text-[#374151]">
                                <Cpu className="w-4 h-4 text-[#15532E]" />
                                <span className="font-mono uppercase text-xs">Inverters</span>
                              </div>
                              <span className="text-sm text-[#202720] font-medium block leading-snug">
                                {project.inverterSetup}
                              </span>
                            </div>
                          </div>

                          {/* Engineering Highlights */}
                          <div className="pt-3 border-t border-[#E5E8E3] space-y-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-[#374151] block">
                              Engineering Deliverables:
                            </span>
                            <div className="space-y-1.5">
                              {project.highlights.map((highlight) => (
                                <div key={highlight} className="flex items-start space-x-2 text-sm text-[#202720]">
                                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA in card */}
                        <div className="pt-4 border-t border-[#E5E8E3] flex items-center justify-between">
                          <span className="text-sm text-[#374151]">
                            Custom engineered for site conditions
                          </span>
                          <Button href="/contact" variant="primary" size="sm" icon="arrow" magnetic={true}>
                            Consult for Similar Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Have a project in mind?"
        description="Connect with our technical team for an initial engineering review and site consultation."
        primaryCtaText="Contact Our Engineers"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
