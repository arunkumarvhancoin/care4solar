"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { solarServices } from "@/data/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SolarDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SolarDropdown({ isOpen, onClose }: SolarDropdownProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.99 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] bg-white border border-[#E5E8E3] shadow-xl rounded-none p-6 z-50"
          onMouseLeave={onClose}
        >
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E5E8E3]">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#15532E]">
              Solar Capabilities &amp; Services
            </span>
            <span className="text-xs text-[#747C75]">Solutions Overview</span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {solarServices.map((service) => {
              const isActive = pathname === service.href;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={onClose}
                  className={cn(
                    "group flex flex-col p-2.5 transition-colors border border-transparent hover:border-[#E5E8E3] hover:bg-[#F7F7F3]",
                    isActive && "bg-[#F7F7F3] border-[#E5E8E3]"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "text-sm font-semibold text-[#202720] group-hover:text-[#15532E] transition-colors",
                        isActive && "text-[#15532E]"
                      )}
                    >
                      {service.title}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#747C75] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#15532E]" />
                  </div>
                  {service.description && (
                    <p className="mt-1 text-xs text-[#747C75] leading-snug line-clamp-2">
                      {service.description}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-3.5 border-t border-[#E5E8E3] flex items-center justify-between text-xs text-[#747C75]">
            <span>Need a custom engineering appraisal?</span>
            <Link
              href="/contact"
              onClick={onClose}
              className="font-medium text-[#15532E] hover:underline flex items-center space-x-1"
            >
              <span>Speak with an engineer</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
