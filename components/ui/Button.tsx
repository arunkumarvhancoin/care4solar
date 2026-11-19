import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  icon?: "arrow" | "up-right" | "none";
  children: React.ReactNode;
  className?: string;
  magnetic?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon = "none",
  children,
  className,
  magnetic = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    "group relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15532E] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-2 min-h-[38px] space-x-1.5",
    md: "text-sm px-5 py-2.5 min-h-[44px] space-x-2",
    lg: "text-base px-6 sm:px-7 py-3.5 min-h-[48px] space-x-2.5",
  };

  const variantClasses = {
    primary:
      "bg-[#E5A100] text-[#202720] hover:bg-[#d49400] active:bg-[#c38700] shadow-xs font-semibold",
    secondary:
      "bg-[#15532E] text-white hover:bg-[#104324] active:bg-[#0c331b] shadow-xs",
    outline:
      "border border-[#15532E] text-[#15532E] hover:bg-[#15532E] hover:text-white bg-transparent",
    ghost:
      "text-[#15532E] hover:bg-[#15532E]/10 bg-transparent",
    dark:
      "bg-white text-[#15532E] hover:bg-[#F7F7F3] border border-white/20",
  };

  const content = (
    <>
      {/* Subtle solar beam reflection sheen on hover */}
      {(variant === "primary" || variant === "secondary" || variant === "dark") && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
        />
      )}
      <span className="relative z-10">{children}</span>
      {icon === "arrow" && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 relative z-10 shrink-0" />
      )}
      {icon === "up-right" && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10 shrink-0" />
      )}
    </>
  );

  const buttonElement = href ? (
    <Link
      href={href}
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
    >
      {content}
    </Link>
  ) : (
    <button
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {content}
    </button>
  );

  if (magnetic) {
    return <Magnetic className="inline-block">{buttonElement}</Magnetic>;
  }

  return buttonElement;
}
