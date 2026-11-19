"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import Care4SolarLogo from "@/components/ui/Care4SolarLogo";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/data/company";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mobileNavLinks = [
  { title: "Home", href: "/" },
  { title: "Residential Solar", href: "/residential-solar" },
  { title: "Commercial & Industrial", href: "/commercial-industrial-solar" },
  { title: "Maintenance & Care", href: "/operations-maintenance" },
  { title: "Featured Projects", href: "/projects" },
  { title: "Insights & Articles", href: "/insights" },
  { title: "About Us", href: "/about" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

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
                {mobileNavLinks.map((item) => {
                  const isCurrent = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center min-h-[44px] text-sm font-medium px-3 py-2 border-b border-[#E5E8E3]/60 transition-colors",
                        isCurrent
                          ? "text-[#15532E] font-semibold bg-white"
                          : "text-[#202720] hover:bg-white"
                      )}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>

              {/* Direct Tap-to-Call & Tap-to-Email Quick Actions */}
              <div className="pt-2 pb-1 space-y-2 border-t border-[#E5E8E3]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#374151] block px-3">
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
