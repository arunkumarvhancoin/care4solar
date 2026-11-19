import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light-surface" | "light-text";
  width?: number;
  height?: number;
}

export default function Care4SolarLogo({
  className,
  variant = "default",
  width = 170,
  height = 85,
}: LogoProps) {
  const isLightText = variant === "light-surface" || variant === "light-text";

  return (
    <Link
      href="/"
      aria-label="Care4Solar Home"
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15532E] rounded-sm",
        className
      )}
    >
      <Image
        src={isLightText ? "/logo-light.png" : "/logo.png"}
        alt="Care4Solar — Solar Energy Solutions"
        width={width}
        height={height}
        priority
        className="h-auto w-auto max-h-[38px] sm:max-h-[46px] object-contain"
      />
    </Link>
  );
}