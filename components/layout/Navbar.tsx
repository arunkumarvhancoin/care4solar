"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import Care4SolarLogo from "@/components/ui/Care4SolarLogo";
import Button from "@/components/ui/Button";
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
              <Care4SolarLogo width={150} height={75} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium tracking-tight transition-colors hover:text-[#15532E]",
                  pathname === "/" ? "text-[#15532E] font-semibold" : "text-[#202720]"
                )}
              >
                Home
              </Link>

              {/* Solar Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setSolarOpen(true)}
              >
                <button
                  type="button"
                  onClick={() => setSolarOpen(!solarOpen)}
                  aria-expanded={solarOpen}
                  className={cn(
                    "flex items-center space-x-1.5 px-3.5 py-2 text-sm font-medium tracking-tight transition-colors hover:text-[#15532E] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#15532E]",
                    isSolarActive ? "text-[#15532E] font-semibold" : "text-[#202720]"
                  )}
                >
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

              <Link
                href="/projects"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium tracking-tight transition-colors hover:text-[#15532E]",
                  pathname === "/projects" ? "text-[#15532E] font-semibold" : "text-[#202720]"
                )}
              >
                Projects
              </Link>

              <Link
                href="/about"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium tracking-tight transition-colors hover:text-[#15532E]",
                  pathname === "/about" ? "text-[#15532E] font-semibold" : "text-[#202720]"
                )}
              >
                About
              </Link>

              <Link
                href="/insights"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium tracking-tight transition-colors hover:text-[#15532E]",
                  pathname === "/insights" ? "text-[#15532E] font-semibold" : "text-[#202720]"
                )}
              >
                Insights
              </Link>

              <Link
                href="/faqs"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium tracking-tight transition-colors hover:text-[#15532E]",
                  pathname === "/faqs" ? "text-[#15532E] font-semibold" : "text-[#202720]"
                )}
              >
                FAQs
              </Link>
            </nav>

            {/* Right: Contact CTA & Mobile Menu Toggle */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block">
                <Button href="/contact" variant="primary" size="md" icon="arrow">
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
