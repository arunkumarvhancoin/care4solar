"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { projectsData, ProjectItem } from "@/data/projects";

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
                <span>REPRESENTATIVE INSTALLATIONS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#15532E] leading-tight">
                Solar solutions.
                <br />
                <span className="text-[#202720]">Real-world applications.</span>
              </h1>
              <p className="max-w-xl text-lg sm:text-xl text-[#747C75] leading-relaxed">
                Representative project data illustrating structural and electrical configurations
                across residential, apartment, commercial, and industrial sectors.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="lg" icon="arrow">
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

      {/* Projects Showcase & Client-side Filters */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="01 / PROJECT PORTFOLIO"
              title="Featured solar installations."
              description="Explore representative works by sector. Filter to inspect specific rooftop engineering configurations."
            />

            {/* Functional Filter Buttons */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-colors border ${
                    activeFilter === cat
                      ? "bg-[#15532E] text-white border-[#15532E]"
                      : "bg-[#F7F7F3] text-[#202720] border-[#E5E8E3] hover:border-[#15532E]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col border border-[#E5E8E3] bg-[#F7F7F3] transition-all hover:border-[#15532E] shadow-xs"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#15532E] text-white text-[10px] uppercase font-mono px-2 py-0.5 tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#747C75] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E8E3] space-y-1.5 text-xs text-[#747C75]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono uppercase text-[10px] text-[#747C75]">Location:</span>
                      <span className="font-medium text-[#202720]">{project.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono uppercase text-[10px] text-[#747C75]">Capacity:</span>
                      <span className="font-semibold text-[#15532E]">{project.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
