"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: string;
  tabLabel: string;
  category: string;
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
  image: string;
  imageAlt: string;
}

const slides: HeroSlide[] = [
  {
    id: "residential",
    tabLabel: "Homes",
    category: "Residential Rooftop Solar",
    title: "Rooftop solar for your home.",
    description:
      "Cut your monthly electricity bills with high-efficiency rooftop panels. We handle roof sizing, PM Surya Ghar subsidy filing, and turnkey installation.",
    primaryText: "Solar for Homes",
    primaryHref: "/solar-for-homes",
    secondaryText: "Calculate Savings",
    secondaryHref: "/solar-calculator",
    image:
      "https://images.unsplash.com/photo-1780445392792-556e5609c5ab?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Solar panels installed on residential rooftop",
  },
  {
    id: "apartments",
    tabLabel: "Apartments",
    category: "Housing Societies & Apartments",
    title: "Solar power for apartments.",
    description:
      "Power shared amenities—lifts, water pumps, and common campus lighting—with shared terrace solar to permanently lower society maintenance fees.",
    primaryText: "Solar for Apartments",
    primaryHref: "/solar-for-apartments",
    secondaryText: "Request Consultation",
    secondaryHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1793119985840-10f7beb15e1a?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Rooftop solar installation on apartment terrace",
  },
  {
    id: "commercial",
    tabLabel: "Commercial",
    category: "Commercial & Industrial Solar",
    title: "Commercial & industrial solar.",
    description:
      "Reduce heavy daytime power tariffs for factories, warehouses, and offices with custom-engineered arrays backed by accelerated depreciation benefits.",
    primaryText: "Commercial Solar",
    primaryHref: "/commercial-industrial-solar",
    secondaryText: "Get a Quote",
    secondaryHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1745187794292-ba0014281746?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Solar panels installed on industrial building roof",
  },
  {
    id: "maintenance",
    tabLabel: "Maintenance",
    category: "Operations & Maintenance",
    title: "Solar cleaning and maintenance.",
    description:
      "Dust and bird droppings reduce solar generation by up to 30%. We provide specialized demineralized water cleaning, electrical health checks, and repairs.",
    primaryText: "Maintenance Services",
    primaryHref: "/operations-maintenance",
    secondaryText: "Book Inspection",
    secondaryHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Technician cleaning solar panels with specialized equipment",
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
    <section className="relative w-full h-[calc(100svh-4rem)] sm:h-[calc(100svh-4.5rem)] min-h-[580px] max-h-[820px] overflow-hidden bg-[#202720] flex flex-col justify-between">
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
            {/* Cinematic Scrim: subtle dark gradient for crystal-clear readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top spacer */}
      <div className="h-6 sm:h-10 z-10" />

      {/* Center Content: Centered Headline, Description & Buttons */}
      <div className="relative z-10 my-auto py-8">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="inline-block px-3.5 py-1 bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-white uppercase tracking-wider">
                  {current.category}
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
                  {current.title}
                </h1>

                <p className="max-w-xl mx-auto text-base sm:text-lg text-[#F7F7F3]/90 leading-relaxed">
                  {current.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
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
                    className="border-white/30 text-white hover:bg-white hover:text-[#202720]"
                  >
                    {current.secondaryText}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Clean Domain Switcher and Arrows */}
      <div className="relative z-10 border-t border-white/15 bg-black/30 backdrop-blur-md py-3 sm:py-4">
        <Container>
          <div className="flex items-center justify-between">
            {/* Tabs */}
            <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setIndex(i)}
                  className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${i === index
                      ? "bg-white text-[#202720] shadow-sm"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {s.tabLabel}
                </button>
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center space-x-2 shrink-0 ml-4">
              <Magnetic strength={0.3}>
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="w-9 h-9 border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors bg-white/10 hover:bg-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="w-9 h-9 border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors bg-white/10 hover:bg-white/20 cursor-pointer"
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
