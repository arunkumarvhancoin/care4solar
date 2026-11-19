"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCanHover } from "@/lib/useCanHover";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt degrees (defaults to subtle 3.5 degrees)
  glare?: boolean;
}

export default function TiltCard({
  children,
  className,
  maxTilt = 3.5,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const canHover = useCanHover();
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springConfig = { damping: 18, stiffness: 160 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2; // -1 to 1
    const yPct = (mouseY / height - 0.5) * 2; // -1 to 1

    rotateX.set(-yPct * maxTilt);
    rotateY.set(xPct * maxTilt);

    glareX.set((mouseX / width) * 100);
    glareY.set((mouseY / height) * 100);
  };

  const handleMouseEnter = () => {
    if (canHover) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
      }}
      className={cn("relative transition-shadow duration-300", className)}
    >
      {children}

      {/* Dynamic solar specular light reflection */}
      {glare && isHovered && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none rounded-[inherit]"
          style={{
            background: `radial-gradient(circle 280px at ${glareX.get()}% ${glareY.get()}%, rgba(255, 255, 255, 0.9), transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}
