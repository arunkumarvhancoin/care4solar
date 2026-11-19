"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Care4SolarLogo from "@/components/ui/Care4SolarLogo";
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
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
              {mainNav.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === "/solutions" && pathname.startsWith("/solutions")) ||
                  (item.href === "/operations-maintenance" && pathname === "/maintenance");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3 xl:px-3.5 py-2 text-[15px] xl:text-[16px] tracking-tight transition-colors z-10 flex items-center",
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
                        className="absolute -bottom-1 inset-x-2.5 h-[2px] bg-[#15532E]"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="w-11 h-11 flex items-center justify-center text-[#202720] hover:text-[#15532E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15532E] rounded-xs"
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
