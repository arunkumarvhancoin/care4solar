"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export interface HeroSlide {
  id: string;
  number: string;
  sector: string;
  title: string;
  caption: string;
  spec: string;
  href: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: "residential",
    number: "01",
    sector: "RESIDENTIAL SOLAR",
    title: "High-Efficiency Rooftop Arrays",
    caption: "Engineered for maximum annual solar harvest with state DISCOM net-metering synchronization.",
    spec: "Tier-1 Mono PERC / TOPCon • 25-Yr Performance Guarantee",
    href: "/solar-for-homes",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1200&auto=format&fit=crop",
    alt: "Engineered residential rooftop solar installation array",
  },
  {
    id: "commercial",
    number: "02",
    sector: "COMMERCIAL & INDUSTRIAL",
    title: "Manufacturing & Enterprise Solar",
    caption: "Substantially lowering day-shift operational peak tariff with high-voltage HT/LT integration.",
    spec: "CAPEX & RESCO Options • Accelerated Depreciation Ready",
    href: "/commercial-industrial-solar",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
    alt: "Large industrial manufacturing plant rooftop solar array",
  },
  {
    id: "apartments",
    number: "03",
    sector: "APARTMENTS & SOCIETIES",
    title: "Gated Community Infrastructure",
    caption: "Powering common amenities, basement ventilation, lifts, and shared EV charging stations.",
    spec: "RWA Consensus Roadmaps • Centralised Energy Accounting",
    href: "/solar-for-apartments",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    alt: "Apartment complex rooftop solar installation",
  },
  {
    id: "om",
    number: "04",
    sector: "OPERATIONS & MAINTENANCE",
    title: "Preventative Asset Care",
    caption: "Specialized thermography, string diagnostics, and precision panel washing to combat degradation.",
    spec: "Calibrated Thermal IR • String-Level Yield Telemetry",
    href: "/operations-maintenance",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
    alt: "Solar technician performing diagnostic maintenance inspection",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative flex flex-col bg-white border border-[#E5E8E3] shadow-xs select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Solar Engineering Solutions Carousel"
    >
      {/* Top Header Bar / Category Tabs */}
      <div className="grid grid-cols-4 border-b border-[#E5E8E3] bg-[#F7F7F3] text-[11px] font-mono">
        {slides.map((s, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={s.id}
              onClick={() => setCurrentIndex(index)}
              className={`py-2.5 px-1.5 sm:px-3 text-center transition-colors border-r border-[#E5E8E3] last:border-r-0 flex flex-col items-center justify-center min-h-[44px] ${
                isActive
                  ? "bg-white text-[#15532E] font-semibold border-b-2 border-b-[#15532E] -mb-[1px]"
                  : "text-[#747C75] hover:text-[#202720] hover:bg-[#E5E8E3]/50"
              }`}
              aria-label={`Go to slide ${index + 1}: ${s.sector}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span className="text-[10px] sm:text-xs">{s.number}</span>
              <span className="hidden sm:inline text-[10px] tracking-tight truncate max-w-full">
                {s.id.toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Slide Stage */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-[#202720]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.alt}
              fill
              priority={currentIndex === 0}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            {/* Dark gradient for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#202720]/95 via-[#202720]/40 to-transparent" />

            {/* Slide Metadata & Content Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em] text-[#E5A100] font-semibold">
                  {currentSlide.sector}
                </span>
                <span className="text-[10px] font-mono text-white/70">
                  {currentSlide.number} / 04
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug">
                {currentSlide.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed line-clamp-2">
                {currentSlide.caption}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-white/15">
                <span className="text-[11px] font-mono text-[#E5A100] truncate max-w-[70%]">
                  {currentSlide.spec}
                </span>
                <Link
                  href={currentSlide.href}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-white hover:text-[#E5A100] transition-colors py-1 group"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Prev / Next Arrow Controls */}
        <div className="absolute top-3 right-3 flex items-center space-x-1 z-10">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white/90 hover:bg-white text-[#202720] flex items-center justify-center transition-colors border border-white/30 backdrop-blur-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white/90 hover:bg-white text-[#202720] flex items-center justify-center transition-colors border border-white/30 backdrop-blur-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Architectural Progress Track */}
      <div className="h-1 bg-[#E5E8E3] overflow-hidden">
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
    </div>
  );
}
