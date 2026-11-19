"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ArrowRight, Phone, Mail } from "lucide-react";
import Care4SolarLogo from "@/components/ui/Care4SolarLogo";
import Button from "@/components/ui/Button";
import { solarServices } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [solarExpanded, setSolarExpanded] = useState(true);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // Close when pathname changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#15532E]/30 backdrop-blur-xs lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[#F7F7F3] border-l border-[#E5E8E3] shadow-2xl lg:hidden"
          >
            {/* Top header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E5E8E3] bg-white">
              <Care4SolarLogo width={135} height={68} />
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="w-11 h-11 flex items-center justify-center text-[#202720] hover:text-[#15532E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15532E] rounded-xs"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav list with smooth touch scrolling */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5" style={{ WebkitOverflowScrolling: "touch" }}>
              <nav className="flex flex-col space-y-1">
                {/* Home */}
                <Link
                  href="/"
                  className={cn(
                    "flex items-center min-h-[44px] text-base font-medium px-3 py-2 border-b border-[#E5E8E3]/60 transition-colors",
                    pathname === "/" ? "text-[#15532E] font-semibold bg-white" : "text-[#202720] hover:bg-white"
                  )}
                >
                  Home
                </Link>

                {/* Solar expandable submenu */}
                <div className="border-b border-[#E5E8E3]/60 pb-2">
                  <button
                    onClick={() => setSolarExpanded(!solarExpanded)}
                    aria-expanded={solarExpanded}
                    className="flex w-full items-center justify-between min-h-[44px] px-3 py-2 text-base font-medium text-[#202720] hover:bg-white transition-colors"
                  >
                    <span className={cn(solarServices.some((s) => s.href === pathname) && "text-[#15532E] font-semibold")}>
                      Solar Solutions
                    </span>
                    <motion.span
                      animate={{ rotate: solarExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#15532E]"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {solarExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3 pr-1 mt-1 space-y-1 border-l-2 border-[#15532E]"
                      >
                        {solarServices.map((service) => {
                          const isCurrent = pathname === service.href;
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={cn(
                                "flex items-center justify-between min-h-[42px] px-2.5 py-2 text-xs sm:text-sm transition-colors",
                                isCurrent
                                  ? "text-[#15532E] font-semibold bg-white"
                                  : "text-[#747C75] hover:text-[#202720] hover:bg-white"
                              )}
                            >
                              <span>{service.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#15532E] shrink-0" />
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Projects */}
                <Link
                  href="/projects"
                  className={cn(
                    "flex items-center min-h-[44px] text-base font-medium px-3 py-2 border-b border-[#E5E8E3]/60 transition-colors",
                    pathname === "/projects" ? "text-[#15532E] font-semibold bg-white" : "text-[#202720] hover:bg-white"
                  )}
                >
                  Projects
                </Link>

                {/* About Us */}
                <Link
                  href="/about"
                  className={cn(
                    "flex items-center min-h-[44px] text-base font-medium px-3 py-2 border-b border-[#E5E8E3]/60 transition-colors",
                    pathname === "/about" ? "text-[#15532E] font-semibold bg-white" : "text-[#202720] hover:bg-white"
                  )}
                >
                  About Us
                </Link>

                {/* Knowledge Centre */}
                <Link
                  href="/insights"
                  className={cn(
                    "flex items-center min-h-[44px] text-base font-medium px-3 py-2 border-b border-[#E5E8E3]/60 transition-colors",
                    pathname === "/insights" ? "text-[#15532E] font-semibold bg-white" : "text-[#202720] hover:bg-white"
                  )}
                >
                  Knowledge Centre
                </Link>

                {/* FAQs */}
                <Link
                  href="/faqs"
                  className={cn(
                    "flex items-center min-h-[44px] text-base font-medium px-3 py-2 border-b border-[#E5E8E3]/60 transition-colors",
                    pathname === "/faqs" ? "text-[#15532E] font-semibold bg-white" : "text-[#202720] hover:bg-white"
                  )}
                >
                  Solar FAQs
                </Link>
              </nav>

              {/* Direct Tap-to-Call & Tap-to-Email Quick Actions */}
              <div className="pt-2 pb-1 space-y-2 border-t border-[#E5E8E3]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#747C75] block px-3">
                  Direct Engineering Support
                </span>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center space-x-2.5 min-h-[40px] px-3 py-1.5 text-xs text-[#202720] hover:text-[#15532E] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#15532E] shrink-0" />
                  <span className="font-medium">{companyInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center space-x-2.5 min-h-[40px] px-3 py-1.5 text-xs text-[#202720] hover:text-[#15532E] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#15532E] shrink-0" />
                  <span>{companyInfo.email}</span>
                </a>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-5 border-t border-[#E5E8E3] bg-white">
              <Button href="/contact" variant="primary" size="md" icon="arrow" className="w-full justify-center min-h-[44px]">
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
