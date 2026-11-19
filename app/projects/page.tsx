"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import TiltCard from "@/components/ui/TiltCard";
import { projectsData, ProjectItem } from "@/data/projects";
import { CheckCircle2, Zap, Gauge, Compass, Cpu, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Residential", "Apartments", "Commercial", "Industrial"] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects: ProjectItem[] =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#15532E] border-l-2 border-[#15532E] pl-3">
                <span>VERIFIED CASE STUDIES &amp; INSTALLATIONS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#15532E] leading-tight">
                Solar solutions.
                <br />
                <span className="text-[#202720]">Engineered in the real world.</span>
              </h1>
              <p className="max-w-xl text-lg sm:text-xl text-[#747C75] leading-relaxed">
                Detailed project case studies illustrating rooftop structural designs, electrical
                switchgear integrations, and verified generation performance across residential,
                apartment, commercial, and industrial facilities.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="lg" icon="arrow" magnetic={true}>
                  Discuss Your Project
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E5E8E3] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop"
                  alt="Aerial rooftop solar installation array"
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

      {/* Projects Showcase — Full Width Case Studies (1 Per Row) */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeading
              eyebrow="Portfolio Case Studies"
              title="Featured solar installations."
              description="Detailed engineering reviews for each facility. Filter by sector to inspect specific structural mounting and electrical configurations."
            />

            {/* Sector Filter Tabs */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors border ${activeFilter === cat
                      ? "bg-[#15532E] text-white border-[#15532E]"
                      : "bg-[#F7F7F3] text-[#202720] border-[#E5E8E3] hover:border-[#15532E]"
                    }`}
                >
                  {cat} {cat === "All" ? `(${projectsData.length})` : `(${projectsData.filter((p) => p.category === cat).length})`}
                </button>
              ))}
            </div>
          </div>

          {/* Single Project Per Row Layout */}
          <div className="space-y-12 lg:space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const isEven = idx % 2 === 1;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="border border-[#E5E8E3] bg-[#F7F7F3] overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                      {/* Project Image Column (7 cols) */}
                      <div
                        className={`lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] bg-white overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"
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
                            <div className="absolute top-4 left-4 flex items-center space-x-2">
                              <span className="bg-[#15532E] text-white text-xs uppercase font-mono px-3 py-1 tracking-wider font-semibold">
                                {project.category}
                              </span>
                            </div>
                            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 border border-[#E5E8E3] flex items-center space-x-2 text-xs text-[#202720]">
                              <MapPin className="w-3.5 h-3.5 text-[#15532E] shrink-0" />
                              <span className="font-medium">{project.location}</span>
                            </div>
                          </div>
                        </TiltCard>
                      </div>

                      {/* Project Narrative & Technical Specs Column (5 cols) */}
                      <div
                        className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-white ${isEven ? "lg:order-1 border-r border-[#E5E8E3]" : "lg:order-2 border-l border-[#E5E8E3]"
                          }`}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-2 border-b border-[#E5E8E3]">
                            <span className="text-xs font-mono uppercase tracking-wider text-[#747C75]">
                              Case Study Ref: {project.id.toUpperCase()}
                            </span>
                            <span className="text-xs font-mono font-bold text-[#15532E]">
                              {project.capacity}
                            </span>
                          </div>

                          <h2 className="text-2xl sm:text-3xl font-semibold text-[#202720] leading-tight">
                            {project.title}
                          </h2>

                          <p className="text-sm sm:text-base text-[#747C75] leading-relaxed">
                            {project.description}
                          </p>

                          {/* 4-Stat Technical Specifications Grid */}
                          <div className="pt-2 grid grid-cols-2 gap-3">
                            <div className="p-3 bg-[#F7F7F3] border border-[#E5E8E3] space-y-1">
                              <div className="flex items-center space-x-1.5 text-xs text-[#747C75]">
                                <Zap className="w-3.5 h-3.5 text-[#E5A100]" />
                                <span className="font-mono uppercase text-[10px]">Capacity</span>
                              </div>
                              <span className="text-sm font-bold text-[#15532E] block">
                                {project.capacity}
                              </span>
                            </div>

                            <div className="p-3 bg-[#F7F7F3] border border-[#E5E8E3] space-y-1">
                              <div className="flex items-center space-x-1.5 text-xs text-[#747C75]">
                                <Gauge className="w-3.5 h-3.5 text-[#15532E]" />
                                <span className="font-mono uppercase text-[10px]">Est. Yield</span>
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-[#202720] block">
                                {project.annualGeneration}
                              </span>
                            </div>

                            <div className="p-3 bg-[#F7F7F3] border border-[#E5E8E3] space-y-1">
                              <div className="flex items-center space-x-1.5 text-xs text-[#747C75]">
                                <Compass className="w-3.5 h-3.5 text-[#2D9F5A]" />
                                <span className="font-mono uppercase text-[10px]">Structure</span>
                              </div>
                              <span className="text-xs text-[#202720] font-medium block leading-snug">
                                {project.mountingType}
                              </span>
                            </div>

                            <div className="p-3 bg-[#F7F7F3] border border-[#E5E8E3] space-y-1">
                              <div className="flex items-center space-x-1.5 text-xs text-[#747C75]">
                                <Cpu className="w-3.5 h-3.5 text-[#15532E]" />
                                <span className="font-mono uppercase text-[10px]">Inverters</span>
                              </div>
                              <span className="text-xs text-[#202720] font-medium block leading-snug">
                                {project.inverterSetup}
                              </span>
                            </div>
                          </div>

                          {/* Engineering Highlights */}
                          <div className="pt-3 border-t border-[#E5E8E3] space-y-2">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#747C75] block">
                              Engineering Deliverables:
                            </span>
                            <div className="space-y-1.5">
                              {project.highlights.map((highlight) => (
                                <div key={highlight} className="flex items-start space-x-2 text-xs text-[#202720]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D9F5A] shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA in card */}
                        <div className="pt-4 border-t border-[#E5E8E3] flex items-center justify-between">
                          <span className="text-xs text-[#747C75]">
                            Custom engineered for site conditions
                          </span>
                          <Button href="/contact" variant="primary" size="sm" icon="arrow" magnetic={true}>
                            Consult for Similar Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
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
