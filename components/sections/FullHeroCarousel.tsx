"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: string;
  category: string;
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
  image: string;
  imageAlt: string;
  projectTag: string;
}

const slides: HeroSlide[] = [
  {
    id: "residential",
    category: "Residential Rooftop Solar",
    title: "Rooftop solar for your home.",
    description:
      "Cut your monthly electricity bills with high-efficiency rooftop panels. We handle roof sizing, quality installation, and power company approvals.",
    primaryText: "Residential Solar",
    primaryHref: "/residential-solar",
    secondaryText: "Request Site Survey",
    secondaryHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1780445392694-c95056ed12e2?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Solar panels installed on residential rooftop",
    projectTag: "Residential Installation · 10 kWp · Bengaluru",
  },
  {
    id: "apartments",
    category: "Housing Societies & Apartments",
    title: "Solar power for apartments.",
    description:
      "Power shared amenities—lifts, water pumps, and common campus lighting—with shared terrace solar to permanently lower society maintenance fees.",
    primaryText: "Residential Solar",
    primaryHref: "/residential-solar",
    secondaryText: "Request Consultation",
    secondaryHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1793119985840-10f7beb15e1a?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Rooftop solar installation on apartment terrace",
    projectTag: "Housing Society Common Load · 25 kWp · Sarjapur",
  },
  {
    id: "commercial",
    category: "Commercial & Industrial Solar",
    title: "Commercial & industrial solar.",
    description:
      "Lower daytime electricity bills for factories, warehouses, and offices with rooftop solar backed by commercial tax benefits.",
    primaryText: "Commercial Solar",
    primaryHref: "/commercial-industrial-solar",
    secondaryText: "Get a Quote",
    secondaryHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1745187794292-ba0014281746?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Solar panels installed on industrial building roof",
    projectTag: "Industrial Rooftop · 50 kWp · Peenya Industrial Area",
  },
  {
    id: "maintenance",
    category: "Operations & Maintenance",
    title: "Solar cleaning and maintenance.",
    description:
      "Dust and bird droppings reduce solar power by up to 30%. We provide purified water panel washing, electrical safety checks, and repairs.",
    primaryText: "Maintenance Services",
    primaryHref: "/operations-maintenance",
    secondaryText: "Book Inspection",
    secondaryHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Technician cleaning solar panels with specialized equipment",
    projectTag: "Care4Solar Maintenance · Purified Panel Wash",
  },
];

const AUTOPLAY_INTERVAL = 6500;

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
    <div className="flex flex-col w-full bg-[#202720]">
      {/* Viewport Hero */}
      <section className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] min-h-[580px] overflow-hidden bg-[#202720] flex items-center justify-center">
        {/* Background Image Layer with Crossfade */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={current.image}
                alt={current.imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              {/* Cinematic Scrim: dark overlay for crystal-clear readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/45" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side Arrow: Left */}
        <div className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20">
          <Magnetic strength={0.35}>
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-11 h-11 sm:w-12 sm:h-12 bg-black/40 hover:bg-white text-white hover:text-[#202720] backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </Magnetic>
        </div>

        {/* Side Arrow: Right */}
        <div className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20">
          <Magnetic strength={0.35}>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-11 h-11 sm:w-12 sm:h-12 bg-black/40 hover:bg-white text-white hover:text-[#202720] backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </Magnetic>
        </div>

        {/* Center Content: Centered Headline, Description & Buttons */}
        <div className="relative z-10 px-4 sm:px-12 max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
                {current.title}
              </h1>

              <p className="max-w-xl mx-auto text-base sm:text-lg text-[#F7F7F3]/90 leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
                <Button
                  href={current.primaryHref}
                  variant="primary"
                  size="lg"
                  magnetic={true}
                >
                  {current.primaryText}
                </Button>
                <Button
                  href={current.secondaryHref}
                  variant="dark"
                  size="lg"
                  magnetic={true}
                >
                  {current.secondaryText}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtle Indicator Dots (Bottom-Center) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="p-1 cursor-pointer"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-7 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
