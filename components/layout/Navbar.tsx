"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import Care4SolarLogo from "@/components/ui/Care4SolarLogo";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import SolarDropdown from "@/components/layout/SolarDropdown";
import MobileMenu from "@/components/layout/MobileMenu";
import Container from "@/components/ui/Container";
import { solarServices } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [solarOpen, setSolarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolarActive = solarServices.some((service) => pathname === service.href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-[#E5E8E3] shadow-xs"
            : "bg-[#F7F7F3]/90 backdrop-blur-xs border-transparent"
        )}
      >
        <Container>
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Left: Care4Solar Official Logo */}
            <div className="flex items-center">
              <Magnetic strength={0.18}>
                <Care4SolarLogo width={150} height={75} />
              </Magnetic>
            </div>

            {/* Desktop Navigation with Smooth Gliding Hover Highlight */}
            <nav
              onMouseLeave={() => setHoveredNav(null)}
              className="hidden lg:flex items-center space-x-1 xl:space-x-1.5"
            >
              {/* Home */}
              <Link
                href="/"
                onMouseEnter={() => setHoveredNav("home")}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium tracking-tight transition-colors z-10",
                  pathname === "/" ? "text-[#15532E] font-semibold" : "text-[#202720] hover:text-[#15532E]"
                )}
              >
                {hoveredNav === "home" && (
                  <motion.div
                    layoutId="navbar-hover-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-[#E5E8E3]/60 -z-10"
                  />
                )}
                <span>Home</span>
              </Link>

              {/* Solar Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setHoveredNav("solar");
                  setSolarOpen(true);
                }}
              >
                <button
                  type="button"
                  onClick={() => setSolarOpen(!solarOpen)}
                  aria-expanded={solarOpen}
                  className={cn(
                    "relative flex items-center space-x-1.5 px-3.5 py-2 text-sm font-medium tracking-tight transition-colors z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#15532E]",
                    isSolarActive ? "text-[#15532E] font-semibold" : "text-[#202720] hover:text-[#15532E]"
                  )}
                >
                  {hoveredNav === "solar" && (
                    <motion.div
                      layoutId="navbar-hover-pill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 bg-[#E5E8E3]/60 -z-10"
                    />
                  )}
                  <span>Solar</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200 text-[#747C75]",
                      solarOpen && "rotate-180 text-[#15532E]"
                    )}
                  />
                </button>

                <SolarDropdown isOpen={solarOpen} onClose={() => setSolarOpen(false)} />
              </div>

              {/* Projects */}
              <Link
                href="/projects"
                onMouseEnter={() => setHoveredNav("projects")}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium tracking-tight transition-colors z-10",
                  pathname === "/projects" ? "text-[#15532E] font-semibold" : "text-[#202720] hover:text-[#15532E]"
                )}
              >
                {hoveredNav === "projects" && (
                  <motion.div
                    layoutId="navbar-hover-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-[#E5E8E3]/60 -z-10"
                  />
                )}
                <span>Projects</span>
              </Link>

              {/* About */}
              <Link
                href="/about"
                onMouseEnter={() => setHoveredNav("about")}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium tracking-tight transition-colors z-10",
                  pathname === "/about" ? "text-[#15532E] font-semibold" : "text-[#202720] hover:text-[#15532E]"
                )}
              >
                {hoveredNav === "about" && (
                  <motion.div
                    layoutId="navbar-hover-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-[#E5E8E3]/60 -z-10"
                  />
                )}
                <span>About</span>
              </Link>

              {/* Insights */}
              <Link
                href="/insights"
                onMouseEnter={() => setHoveredNav("insights")}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium tracking-tight transition-colors z-10",
                  pathname === "/insights" ? "text-[#15532E] font-semibold" : "text-[#202720] hover:text-[#15532E]"
                )}
              >
                {hoveredNav === "insights" && (
                  <motion.div
                    layoutId="navbar-hover-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-[#E5E8E3]/60 -z-10"
                  />
                )}
                <span>Insights</span>
              </Link>

              {/* FAQs */}
              <Link
                href="/faqs"
                onMouseEnter={() => setHoveredNav("faqs")}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium tracking-tight transition-colors z-10",
                  pathname === "/faqs" ? "text-[#15532E] font-semibold" : "text-[#202720] hover:text-[#15532E]"
                )}
              >
                {hoveredNav === "faqs" && (
                  <motion.div
                    layoutId="navbar-hover-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-[#E5E8E3]/60 -z-10"
                  />
                )}
                <span>FAQs</span>
              </Link>
            </nav>

            {/* Right: Contact CTA with Magnetic Hover & Mobile Menu Toggle */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block">
                <Button href="/contact" variant="primary" size="md" icon="arrow" magnetic={true}>
                  Contact Us
                </Button>
              </div>

              {/* Mobile menu trigger with accessible 44x44px touch target */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="w-11 h-11 flex items-center justify-center text-[#202720] hover:text-[#15532E] transition-colors lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15532E] rounded-xs"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
