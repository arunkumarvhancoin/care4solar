"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import { faqsData, FAQItem } from "@/data/faqs";
import { Search, X } from "lucide-react";

const categories = [
  "All",
  "General",
  "Residential",
  "Apartments",
  "Commercial",
  "Maintenance",
  "Technical & Grid",
] as const;

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFaqs: FAQItem[] = faqsData.filter((f) => {
    const matchesCategory = activeCategory === "All" || f.category === activeCategory;
    const matchesQuery =
      !searchQuery.trim() ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative pt-10 pb-12 sm:py-14 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-[#15532E] leading-tight">
                Questions about solar?
                <br />
                <span className="text-[#202720]">Start here.</span>
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-[#374151] leading-relaxed">
                Find clear, technically grounded answers regarding rooftop engineering, grid-tied
                regulations, operations and maintenance, and government schemes.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E5E8E3] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1660330589243-4c640d878052?q=80&w=1200&auto=format&fit=crop"
                  alt="Care4Solar engineer answering technical solar questions"
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

      {/* Main FAQ Accordion Section */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Live Search Input */}
            <div className="relative max-w-xl mx-auto">
              <Search className="w-4 h-4 text-[#374151] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. net metering, cleaning, inverters)..."
                className="w-full bg-[#F7F7F3] border border-[#E5E8E3] pl-10 pr-10 py-3 text-sm text-[#202720] focus:outline-none focus:border-[#15532E] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#374151] hover:text-[#202720]"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

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

            <div className="text-xs font-mono text-[#374151] text-center">
              Showing {filteredFaqs.length} verified technical {filteredFaqs.length === 1 ? "answer" : "answers"}
            </div>

            {/* Accessible Accordion Component */}
            {filteredFaqs.length > 0 ? (
              <div className="bg-[#F7F7F3] border border-[#E5E8E3] p-6 sm:p-10">
                <Accordion items={filteredFaqs} defaultOpenIndex={0} />
              </div>
            ) : (
              <div className="bg-[#F7F7F3] border border-[#E5E8E3] p-10 text-center space-y-3">
                <p className="text-sm text-[#374151]">
                  No questions matched your search query &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="text-xs font-semibold uppercase tracking-wider text-[#15532E] hover:underline"
                >
                  Reset Search Filters
                </button>
              </div>
            )}

            {/* Additional Question Callout with Magnetic CTA */}
            <div className="p-6 bg-white border border-[#E5E8E3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold text-[#202720]">
                  Have a specific question not addressed above?
                </h4>
                <p className="text-xs text-[#374151] mt-1">
                  Our engineering team can evaluate your specific building layout or electrical single-line diagram.
                </p>
              </div>
              <Button href="/contact" variant="outline" size="sm" icon="arrow" magnetic={true} className="shrink-0">
                Ask an Engineer
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Ready to explore solar for your facility?"
        description="Share your details with our engineering team for a customized site feasibility review."
        primaryCtaText="Consult Our Team"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
