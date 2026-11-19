"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface HeroSlideData {
  id: string;
  number: string;
  eyebrow: string;
  tabLabel: string;
  titleLight: string;
  titleBold: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  image: string;
  imageAlt: string;
  photoCaption: string;
  specs: { label: string; value: string }[];
}

const heroSlides: HeroSlideData[] = [
  {
    id: "residential",
    number: "01",
    eyebrow: "01 / RESIDENTIAL SOLAR SOLUTIONS",
    tabLabel: "RESIDENTIAL",
    titleLight: "Powering homes with precision.",
    titleBold: "Protecting 25-year performance.",
    description:
      "Custom-engineered rooftop photovoltaic systems designed around your household's actual electrical consumption, seasonal tariff curves, and roof orientation. Fully synchronized with state DISCOM net-metering.",
    primaryCtaText: "Explore Residential Solar",
    primaryCtaHref: "/solar-for-homes",
    secondaryCtaText: "Estimate Solar Sizing",
    secondaryCtaHref: "/solar-calculator",
    image:
      "https://images.unsplash.com/photo-1780445392792-556e5609c5ab?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Solar panels installed on a residential tiled roof",
    photoCaption: "High-efficiency residential rooftop array with calibrated tilt and net-metering sync.",
    specs: [
      { label: "Typical Capacity", value: "3 kW – 15 kW" },
      { label: "Hardware Tier", value: "Tier-1 Mono PERC" },
      { label: "Grid Sync", value: "Bi-directional Net Meter" },
    ],
  },
  {
    id: "commercial",
    number: "02",
    eyebrow: "02 / COMMERCIAL & INDUSTRIAL INFRASTRUCTURE",
    tabLabel: "COMMERCIAL & INDUSTRIAL",
    titleLight: "Industrial rooftop solar.",
    titleBold: "Lowering peak daytime tariffs.",
    description:
      "High-capacity multi-kilowatt and megawatt rooftop deployments for manufacturing plants, warehouses, and corporate facilities. Engineered for high-voltage HT/LT transformer integration under CAPEX and RESCO models.",
    primaryCtaText: "Explore C&I Solutions",
    primaryCtaHref: "/commercial-industrial-solar",
    secondaryCtaText: "Consult Our Engineers",
    secondaryCtaHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1745187794292-ba0014281746?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Solar panels covering a factory industrial rooftop",
    photoCaption: "Standing-seam industrial metal roof array with centralized string inverters.",
    specs: [
      { label: "Scale Range", value: "50 kW – 2+ MW" },
      { label: "Transformer Sync", value: "HT / LT Integration" },
      { label: "Investment Models", value: "CAPEX & RESCO" },
    ],
  },
  {
    id: "apartments",
    number: "03",
    eyebrow: "03 / MULTI-STORY HOUSING & RWAs",
    tabLabel: "APARTMENTS",
    titleLight: "Solar for apartments.",
    titleBold: "Powering common utilities reliably.",
    description:
      "Structured shared rooftop solar solutions for housing societies and RWAs. Offsetting high-tariff electricity for common lifts, basement ventilation, water treatment pumps, and community EV charging hubs.",
    primaryCtaText: "Solar for Apartments",
    primaryCtaHref: "/solar-for-apartments",
    secondaryCtaText: "Request Society Audit",
    secondaryCtaHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1793119985840-10f7beb15e1a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modern building with extensive rooftop solar array",
    photoCaption: "Elevated superstructure terrace array preserving common recreation space.",
    specs: [
      { label: "Utility Target", value: "Lifts, Pumps & EV Hubs" },
      { label: "Structural Mount", value: "Wind-Rated Gazebo" },
      { label: "Accounting", value: "Association Energy Audit" },
    ],
  },
  {
    id: "om",
    number: "04",
    eyebrow: "04 / LIFECYCLE SOLAR ASSET CARE",
    tabLabel: "OPERATIONS & MAINTENANCE",
    titleLight: "Care beyond installation.",
    titleBold: "Protecting maximum energy yield.",
    description:
      "Engineering-grade solar operations, diagnostic inspections, and scheduled preventative maintenance. Certified infrared thermography to identify microcracks, de-ionized water washing, and active string telemetry.",
    primaryCtaText: "Explore O&M Services",
    primaryCtaHref: "/operations-maintenance",
    secondaryCtaText: "Book System Health Check",
    secondaryCtaHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Technician washing photovoltaic solar panels with specialized water brush",
    photoCaption: "Demineralized de-ionized water panel washing preserving anti-reflective coating.",
    specs: [
      { label: "Diagnostics", value: "Calibrated Thermal IR" },
      { label: "Washing Standard", value: "Zero Mineral Calcification" },
      { label: "Service Mode", value: "Scheduled Preventative AMC" },
    ],
  },
];

const AUTOPLAY_INTERVAL = 7000;

export default function FullHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const current = heroSlides[currentIndex];

  return (
    <section
      className="relative bg-[#F7F7F3] border-b border-[#E5E8E3] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Care4Solar Solutions Carousel"
    >
      {/* Top Slide Selector Navigation Tabs */}
      <div className="bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {heroSlides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`py-3.5 px-3 sm:px-4 text-left transition-all border-r border-[#E5E8E3] last:border-r-0 relative min-h-[48px] flex flex-col justify-center ${
                    isActive
                      ? "bg-[#F7F7F3] text-[#15532E]"
                      : "text-[#747C75] hover:text-[#202720] hover:bg-[#F7F7F3]/60"
                  }`}
                  aria-label={`Jump to slide ${idx + 1}: ${slide.tabLabel}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-bold text-[#E5A100]">
                      {slide.number}
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase truncate">
                      {slide.tabLabel}
                    </span>
                  </div>

                  {/* Active Indicator Top/Bottom Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSlideIndicator"
                      className="absolute bottom-0 inset-x-0 h-[2px] bg-[#15532E]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Main Slide Body */}
      <div className="py-8 sm:py-12 lg:py-16">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Architectural Typography & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-[0.16em] uppercase text-[#15532E] border-l-2 border-[#15532E] pl-3">
                  <span>{current.eyebrow}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight text-[#15532E] leading-[1.08]">
                  {current.titleLight}
                  <br />
                  <span className="text-[#202720]">{current.titleBold}</span>
                </h1>

                <p className="max-w-xl text-base sm:text-lg text-[#747C75] leading-relaxed">
                  {current.description}
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <Button
                    href={current.primaryCtaHref}
                    variant="primary"
                    size="lg"
                    icon="arrow"
                    className="w-full sm:w-auto"
                  >
                    {current.primaryCtaText}
                  </Button>
                  <Button
                    href={current.secondaryCtaHref}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {current.secondaryCtaText}
                  </Button>
                </div>

                {/* Technical Specifications Bar */}
                <div className="pt-6 sm:pt-8 border-t border-[#E5E8E3] grid grid-cols-3 gap-3 sm:gap-6">
                  {current.specs.map((sp) => (
                    <div key={sp.label}>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-[#747C75]">
                        {sp.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#202720] mt-1 block">
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High-Res Real Solar Photo Composition */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden bg-white border border-[#E5E8E3] shadow-xs group">
                  <Image
                    src={current.image}
                    alt={current.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                  />

                  {/* High-legibility technical metadata overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#15532E]/95 via-[#15532E]/50 to-transparent p-5 sm:p-6 text-white space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#E5A100] uppercase tracking-wider">
                      <span>Care4Solar Field Verified</span>
                      <span>{current.number} / 04</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/95 font-medium leading-snug">
                      {current.photoCaption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* Bottom Architectural Progress Track & Navigation Arrows */}
      <div className="border-t border-[#E5E8E3] bg-white py-2.5">
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Slide Index Counter & Hint */}
            <div className="flex items-center space-x-3 text-xs font-mono text-[#747C75]">
              <span className="font-bold text-[#15532E]">{current.number}</span>
              <span>/</span>
              <span>04</span>
              <span className="hidden sm:inline text-[#747C75]/60">•</span>
              <span className="hidden sm:inline text-[11px] text-[#747C75]">
                {isPaused ? "Paused (hovered)" : "Auto-advancing"}
              </span>
            </div>

            {/* Linear Progress Bar */}
            <div className="flex-1 max-w-xs sm:max-w-md h-1 bg-[#E5E8E3] overflow-hidden">
              <motion.div
                key={currentIndex + (isPaused ? "-paused" : "-active")}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? undefined : "100%" }}
                transition={{
                  duration: isPaused ? 0 : AUTOPLAY_INTERVAL / 1000,
                  ease: "linear",
                }}
                className="h-full bg-[#15532E]"
              />
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center space-x-1 shrink-0">
              <button
                onClick={prevSlide}
                aria-label="Previous Hero Slide"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F7F7F3] hover:bg-[#15532E] hover:text-white text-[#202720] flex items-center justify-center transition-colors border border-[#E5E8E3]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Hero Slide"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F7F7F3] hover:bg-[#15532E] hover:text-white text-[#202720] flex items-center justify-center transition-colors border border-[#E5E8E3]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
