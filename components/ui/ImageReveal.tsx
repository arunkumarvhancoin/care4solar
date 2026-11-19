"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
}

export default function ImageReveal({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  imageClassName,
  aspectRatio = "aspect-[16/10]",
}: ImageRevealProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#E5E8E3]/60 group",
        !fill && aspectRatio,
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className={cn(
              "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
              imageClassName
            )}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 500}
            priority={priority}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
              imageClassName
            )}
          />
        )}
      </motion.div>
    </div>
  );
}
