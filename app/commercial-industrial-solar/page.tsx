import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial & Industrial Solar",
  description:
    "Rooftop solar solutions for factories, warehouses, office parks, and commercial institutions. Cut daytime operating costs and lower power bills.",
};

export default function CommercialIndustrialSolarPage() {
  const customerSegments = [
    {
      title: "Manufacturing Plants",
      desc: "Power production lines, machinery, and daily factory operations directly from daytime solar.",
      image:
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Warehouses & Logistics",
      desc: "Put large shed roofs to work with leak-proof, non-penetrating clamps that protect the metal sheets.",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Offices & Tech Parks",
      desc: "Offset heavy daytime cooling and lighting bills while meeting corporate sustainability goals.",
      image:
        "https://images.unsplash.com/photo-1745187794292-ba0014281746?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Hospitals & Schools",
      desc: "Reliable daytime power that works seamlessly alongside existing backup diesel generators.",
      image:
        "https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      <PageHero
        title="Commercial & industrial rooftop solar."
        description="Clean rooftop solar for factories, warehouses, and commercial properties. Cut daytime power bills and take advantage of commercial tax savings."
        image="https://images.unsplash.com/photo-1745187794292-ba0014281746?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Industrial rooftop solar installation"
        primaryCtaText="Request Site Survey"
        primaryCtaHref="/contact"
        secondaryCtaText="View Projects"
        secondaryCtaHref="/projects"
      />

      {/* SECTION 02 — THE BUSINESS CASE */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="The business case for commercial solar."
              description="Commercial power rates are high. Rooftop solar cuts daytime operational costs from month one with clear, fast payback."
            />
          </div>

          <div className="divide-y divide-[#E5E8E3] border-y border-[#E5E8E3]">
            {[
              {
                num: "1",
                title: "Cut Daytime Power Costs",
                desc: "Solar generates power right when your machinery, cooling, and office systems run most—cutting your reliance on expensive peak grid tariffs.",
              },
              {
                num: "2",
                title: "Tax Depreciation Savings",
                desc: "Businesses can claim tax depreciation on solar assets in the initial years, significantly lowering taxable corporate income.",
              },
              {
                num: "3",
                title: "Lower Diesel Generator Costs",
                desc: "During grid cuts, solar synchronizes with your backup generators to save expensive diesel without any back-feed risks.",
              },
              {
                num: "4",
                title: "Payback in 3 to 4 Years",
                desc: "Between substantial power bill savings and tax write-offs, most commercial systems recover their entire cost within 3 to 4 years.",
              },
            ].map((driver) => (
              <div
                key={driver.num}
                className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start group hover:bg-[#F7F7F3] transition-colors px-2 sm:px-4"
              >
                <div className="md:col-span-1 text-base font-mono font-bold text-[#E5A100]">
                  {driver.num}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors">
                    {driver.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    {driver.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 03 — CUSTOMER SEGMENTS */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="Who we work with."
              description="Custom solar installations designed for different building types and daytime operational needs."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerSegments.map((seg) => (
              <div key={seg.title} className="bg-white border border-[#E5E8E3] overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={seg.image}
                    alt={seg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-[#202720]">{seg.title}</h3>
                  <p className="text-sm text-[#374151] leading-relaxed">{seg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 04 — PROJECT MODELS (CAPEX vs RESCO) */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="Financing options."
              description="Choose the right model for your business—own the system outright or buy solar power with zero upfront cost."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CAPEX Model */}
            <div className="p-8 bg-[#F7F7F3] border border-[#E5E8E3] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E8E3]">
                <h3 className="text-2xl font-semibold text-[#202720]">CAPEX Model</h3>
                <span className="text-sm font-mono uppercase text-[#15532E] font-semibold">
                  Self-Financed
                </span>
              </div>
              <p className="text-base text-[#374151] leading-relaxed">
                Your business purchases and owns the solar plant directly. You claim all tax
                depreciation benefits and keep 100% of the electricity savings.
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#202720]">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Highest total savings over the 25-year lifespan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Full tax depreciation benefits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Complete asset ownership and control</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-[#E5E8E3] text-sm font-mono text-[#374151]">
                Best for companies with available capital seeking the highest return.
              </div>
            </div>

            {/* RESCO Model */}
            <div className="p-8 bg-[#F7F7F3] border border-[#E5E8E3] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E8E3]">
                <h3 className="text-2xl font-semibold text-[#202720]">RESCO / OPEX Model</h3>
                <span className="text-sm font-mono uppercase text-[#E5A100] font-semibold">
                  Zero Upfront Cost
                </span>
              </div>
              <p className="text-base text-[#374151] leading-relaxed">
                An energy investor finances, installs, and maintains the solar system on your roof.
                You simply buy the clean power at a fixed rate lower than the grid.
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#202720]">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Zero upfront capital needed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Maintenance and upkeep handled for you</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D9F5A] shrink-0" />
                  <span>Guaranteed lower electricity tariff</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-[#E5E8E3] text-sm font-mono text-[#374151]">
                Ideal for businesses wanting immediate monthly savings without capital outlay.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 07 — CTA */}
      <CTASection
        heading="Ready to cut your commercial power bills?"
        description="Contact us to schedule a site visit and get a customized savings and payback estimate for your facility."
        primaryCtaText="Request a Site Survey"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
