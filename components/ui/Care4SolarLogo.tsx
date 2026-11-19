import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light-surface";
  width?: number;
  height?: number;
}

export default function Care4SolarLogo({
  className,
  variant = "default",
  width = 170,
  height = 85,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Care4Solar Home"
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15532E] rounded-sm",
        variant === "light-surface" && "bg-white px-2.5 py-1 rounded-sm shadow-xs border border-white/20",
        className
      )}
    >
      <Image
        src="/logo.jpeg"
        alt="Care4Solar — Solar Energy Solutions"
        width={width}
        height={height}
        priority
        className="h-auto w-auto max-h-[36px] sm:max-h-[44px] object-contain"
      />
    </Link>
  );
}
