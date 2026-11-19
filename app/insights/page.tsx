import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import TiltCard from "@/components/ui/TiltCard";
import { sampleArticles } from "@/data/articles";
import { Clock, BookOpen, UserCheck, ArrowRight } from "lucide-react";

export default function InsightsPage() {
  const featuredArticle = sampleArticles.find((a) => a.featured) || sampleArticles[0];
  const regularArticles = sampleArticles.filter((a) => !a.featured);

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      <PageHero
        title="Knowledge for better solar decisions."
        description="Practical guides, maintenance advice, and solar industry insights to help you make informed decisions."
        image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Solar technology and rooftop solar installation"
        primaryCtaText="Consult Our Team"
        primaryCtaHref="/contact"
      />

      {/* SECTION 02 — FEATURED ARTICLE (Editorial Layout) */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="mb-6">
            <span className="text-sm font-mono uppercase tracking-wider text-[#15532E] font-semibold">
              Featured Guide
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
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center space-x-4 text-sm text-[#374151]">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-[#15532E]" />
                  <span>{featuredArticle.readTime}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <UserCheck className="w-4 h-4 text-[#15532E]" />
                  <span>{featuredArticle.author}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#202720] leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center space-x-2 text-sm font-mono text-[#15532E] font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>Care4Solar Advisory Guide</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 03 & 04 — ARTICLE GRID */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="mb-10 max-w-2xl">
            <SectionHeading
              title="Helpful solar guides & articles."
              description="Clear answers on system lifespan, panel washing, net metering, and business solar options."
            />
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
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
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center space-x-1.5 text-sm text-[#374151]">
                        <Clock className="w-4 h-4 text-[#15532E]" />
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#E5E8E3]/60 mt-4 text-xs sm:text-sm font-mono text-[#374151] flex items-center justify-between">
                    <span>{article.author}</span>
                    <span className="text-[#15532E] font-medium flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
        heading="Have questions about rooftop solar?"
        description="Our team is happy to review your rooftop layout and past electricity bills."
        primaryCtaText="Speak with an Advisor"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
