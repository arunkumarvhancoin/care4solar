"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionEntry {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionEntry[];
  className?: string;
  defaultOpenIndex?: number;
}

export default function Accordion({
  items,
  className,
  defaultOpenIndex = 0,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={cn("divide-y divide-[#E5E8E3] border-y border-[#E5E8E3]", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.id || index} className="transition-colors">
            <button
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[#15532E] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#15532E]"
            >
              <span className="text-base sm:text-lg font-semibold text-[#202720] pr-6">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-[#15532E]"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pt-1 text-base sm:text-lg leading-relaxed text-[#374151]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
