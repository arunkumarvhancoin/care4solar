"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SimpleSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
  image: string;
  imageAlt: string;
}

const slides: SimpleSlide[] = [
  {
    id: "residential",
    title: "Powering solar homes.",
    subtitle: "Protecting performance.",
    description:
      "Engineered residential rooftop solar with Tier-1 modules, accurate sizing, and long-term operations care.",
    primaryText: "Explore Solar for Homes",
    primaryHref: "/solar-for-homes",
    secondaryText: "Solar Calculator",
    secondaryHref: "/solar-calculator",
    image:
      "https://images.unsplash.com/photo-1780445392792-556e5609c5ab?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Solar panels installed on residential rooftop",
  },
  {
    id: "commercial",
    title: "Commercial & industrial solar.",
    subtitle: "Lowering daytime tariffs.",
    description:
      "High-output rooftop installations engineered for factories, logistics parks, and enterprise facilities.",
    primaryText: "Commercial Solar",
    primaryHref: "/commercial-industrial-solar",
    secondaryText: "Get in Touch",
    secondaryHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1745187794292-ba0014281746?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Solar panels installed on industrial factory roof",
  },
  {
    id: "apartments",
    title: "Solar for apartments.",
    subtitle: "Common utilities powered cleanly.",
    description:
      "Reliable rooftop solar for housing societies and RWAs to offset elevator, pump, and community loads.",
    primaryText: "Solar for Apartments",
    primaryHref: "/solar-for-apartments",
    secondaryText: "Request Consultation",
    secondaryHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1793119985840-10f7beb15e1a?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Rooftop solar installation on residential apartment building",
  },
  {
    id: "om",
    title: "Operations & maintenance.",
    subtitle: "Care beyond installation.",
    description:
      "Specialized de-ionized water washing, thermal imaging diagnostics, and preventative AMC support.",
    primaryText: "Explore O&M Services",
    primaryHref: "/operations-maintenance",
    secondaryText: "Book Inspection",
    secondaryHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Technician cleaning solar panels with water brush",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function FullHeroCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const current = slides[index];

  return (
    <section className="relative h-[calc(100svh-4rem)] sm:h-[calc(100svh-5rem)] min-h-[520px] max-h-[820px] bg-[#F7F7F3] border-b border-[#E5E8E3] overflow-hidden flex flex-col justify-between">
      {/* Slide Content Area */}
      <div className="flex-1 flex items-center py-6 sm:py-10">
        <Container className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Text Side */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15532E] leading-[1.1]">
                  {current.title}
                  <br />
                  <span className="text-[#202720]">{current.subtitle}</span>
                </h1>

                <p className="max-w-xl text-base sm:text-lg text-[#747C75] leading-relaxed">
                  {current.description}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    href={current.primaryHref}
                    variant="primary"
                    size="lg"
                    icon="arrow"
                    magnetic={true}
                    className="w-full sm:w-auto"
                  >
                    {current.primaryText}
                  </Button>
                  <Button
                    href={current.secondaryHref}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {current.secondaryText}
                  </Button>
                </div>
              </div>

              {/* Real Solar Photo Side */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[420px] overflow-hidden bg-white border border-[#E5E8E3]">
                  <Image
                    src={current.image}
                    alt={current.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* Simple Bottom Bar with Clean Dots & Magnetic Arrows */}
      <div className="h-14 sm:h-16 border-t border-[#E5E8E3] bg-white flex items-center shrink-0">
        <Container className="w-full">
          <div className="flex items-center justify-between">
            {/* Simple Dots */}
            <div className="flex items-center space-x-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setIndex(i)}
                  className="h-2 transition-all min-h-[44px] min-w-[32px] flex items-center justify-center"
                  aria-label={`Slide ${i + 1}`}
                >
                  <span
                    className={`block h-1.5 transition-all ${
                      i === index ? "w-8 bg-[#15532E]" : "w-3 bg-[#E5E8E3] hover:bg-[#747C75]"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Magnetic Arrows */}
            <div className="flex items-center space-x-2">
              <Magnetic strength={0.3}>
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="w-10 h-10 border border-[#E5E8E3] hover:border-[#15532E] hover:text-[#15532E] text-[#202720] flex items-center justify-center transition-colors bg-[#F7F7F3]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="w-10 h-10 border border-[#E5E8E3] hover:border-[#15532E] hover:text-[#15532E] text-[#202720] flex items-center justify-center transition-colors bg-[#F7F7F3]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Magnetic>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
