"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCanHover } from "@/lib/useCanHover";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number; // Distance multiplier (0.1 to 0.5 recommended)
  className?: string;
  active?: boolean;
}

export default function Magnetic({
  children,
  strength = 0.28,
  className,
  active = true,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const canHover = useCanHover();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Damped spring physics for smooth, natural movement
  const springConfig = { damping: 14, stiffness: 180, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active || !canHover || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
