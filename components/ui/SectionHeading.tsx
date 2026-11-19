import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col space-y-3",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold tracking-[0.14em] uppercase",
            isDark ? "text-[#E5A100]" : "text-[#15532E]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12]",
          isDark ? "text-white" : "text-[#202720]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-[#F7F7F3]/90" : "text-[#374151]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
