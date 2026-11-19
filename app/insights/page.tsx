"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import TiltCard from "@/components/ui/TiltCard";
import { sampleArticles, articleCategories, ArticleItem } from "@/data/articles";
import { Clock, BookOpen, UserCheck, ArrowRight } from "lucide-react";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const featuredArticle = sampleArticles.find((a) => a.featured) || sampleArticles[0];
  const regularArticles = sampleArticles.filter((a) => !a.featured);

  const filteredArticles: ArticleItem[] =
    activeCategory === "All"
      ? regularArticles
      : regularArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative pt-10 pb-12 sm:py-14 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="max-w-3xl space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-[#15532E] leading-tight">
              Knowledge for better solar decisions.
            </h1>
            <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
              Explore technical insights, photovoltaic physics, engineering standards, and maintenance
              best practices authored by the Care4Solar technical advisory desk.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 02 — FEATURED ARTICLE (Editorial Layout) */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold">
              Featured Analysis
            </span>
            <span className="text-xs font-mono text-[#374151]">
              {featuredArticle.date}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F7F7F3] border border-[#E5E8E3] p-6 sm:p-10">
            <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-white border border-[#E5E8E3]">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#15532E] text-white text-[10px] uppercase font-mono px-2 py-0.5 tracking-wider font-semibold">
                {featuredArticle.category}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center space-x-4 text-xs text-[#374151]">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-[#15532E]" />
                  <span>{featuredArticle.readTime}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <UserCheck className="w-3.5 h-3.5 text-[#15532E]" />
                  <span>{featuredArticle.author}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold text-[#202720] leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-[#15532E] font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>Care4Solar Technical Paper</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 03 & 04 — ARTICLE CATEGORIES & GRID */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              title="Browse technical topics."
              description="Articles exploring photovoltaic physics, maintenance chemistry, industrial modeling, and regulatory compliance."
            />

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {articleCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors border ${
                    activeCategory === cat
                      ? "bg-[#15532E] text-white border-[#15532E]"
                      : "bg-white text-[#202720] border-[#E5E8E3] hover:border-[#15532E]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <TiltCard key={article.id} maxTilt={2.5} className="h-full">
                <div className="bg-white border border-[#E5E8E3] flex flex-col justify-between h-full overflow-hidden transition-all hover:border-[#15532E] shadow-xs group">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-white">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#15532E] text-white text-[10px] uppercase font-mono px-2 py-0.5 tracking-wider font-semibold">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#374151]">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-[#15532E]" />
                          <span>{article.readTime}</span>
                        </span>
                        <span>{article.date}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#E5E8E3]/60 mt-4 text-[11px] font-mono text-[#374151] flex items-center justify-between">
                    <span>{article.author}</span>
                    <span className="text-[#15532E] font-medium flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Read Paper</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Have a technical solar question?"
        description="Our engineering team can evaluate your site's specific load profiles and generation feasibility."
        primaryCtaText="Consult Our Team"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
