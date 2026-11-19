"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Care4SolarLogo from "@/components/ui/Care4SolarLogo";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import MobileMenu from "@/components/layout/MobileMenu";
import Container from "@/components/ui/Container";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
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

            {/* Desktop Navigation — Direct links, elegant underline highlight */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3.5 py-2 text-[15px] xl:text-base tracking-tight transition-colors z-10 flex items-center",
                      isActive
                        ? "text-[#15532E] font-semibold"
                        : "text-[#374151] hover:text-[#15532E] font-medium"
                    )}
                  >
                    <span>{item.title}</span>

                    {/* Active Accent Underline */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-line"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute -bottom-1 inset-x-2.5 h-[2.5px] bg-[#15532E] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Contact CTA & Mobile Menu Toggle */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  icon="arrow"
                  magnetic={true}
                  className={cn(
                    pathname === "/contact" &&
                      "ring-2 ring-[#15532E] ring-offset-2 ring-offset-[#F7F7F3]"
                  )}
                >
                  Contact Us
                </Button>
              </div>

              {/* Mobile menu trigger */}
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
