"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import { faqsData, FAQItem } from "@/data/faqs";

const categories = [
  "All",
  "General",
  "Residential",
  "Apartments",
  "Commercial",
  "Maintenance",
  "Pricing & Subsidy",
] as const;

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFaqs: FAQItem[] =
    activeCategory === "All"
      ? faqsData
      : faqsData.filter((f) => f.category === activeCategory);

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#15532E] border-l-2 border-[#15532E] pl-3">
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#15532E] leading-tight">
              Questions about solar?
              <br />
              <span className="text-[#202720]">Start here.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#747C75] leading-relaxed">
              Find clear, technically grounded answers regarding rooftop engineering, grid-tied
              regulations, operations and maintenance, and government schemes.
            </p>
          </div>
        </Container>
      </section>

      {/* Main FAQ Accordion Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors border ${
                    activeCategory === cat
                      ? "bg-[#15532E] text-white border-[#15532E]"
                      : "bg-[#F7F7F3] text-[#202720] border-[#E5E8E3] hover:border-[#15532E]"
                  }`}
                >
                  {cat === "All" ? "All Questions" : cat}
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-[#747C75] text-center">
              Showing {filteredFaqs.length} verified technical questions
            </div>

            {/* Accessible Accordion Component */}
            <div className="bg-[#F7F7F3] border border-[#E5E8E3] p-6 sm:p-10">
              <Accordion items={filteredFaqs} defaultOpenIndex={0} />
            </div>

            {/* Additional Question Callout */}
            <div className="p-6 bg-white border border-[#E5E8E3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold text-[#202720]">
                  Have a specific question not addressed above?
                </h4>
                <p className="text-xs text-[#747C75] mt-1">
                  Our engineering team can evaluate your specific building layout or electrical single-line diagram.
                </p>
              </div>
              <a
                href="/contact"
                className="shrink-0 inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#15532E] border border-[#15532E] hover:bg-[#15532E] hover:text-white transition-colors"
              >
                Ask an Engineer
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Let's make your solar investment work harder."
        description="Speak with the Care4Solar team about your solar requirements, engineering feasibility, or maintenance operations."
        primaryCtaText="Get in Touch"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
