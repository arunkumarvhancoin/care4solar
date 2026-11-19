import Image from "next/image";
import Button from "@/components/ui/Button";

interface PageHeroProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function PageHero({
  title,
  description,
  image,
  imageAlt = "Solar energy engineering",
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[calc(100dvh-4rem)] sm:h-[calc(100vh-5rem)] min-h-[500px] overflow-hidden bg-[#202720] flex items-center justify-center">
      {/* Background Image Layer with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Scrim: Dark overlay for crisp readability matching home hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/45" />
      </div>

      {/* Center Content: Centered Headline, Description & Action Buttons */}
      <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14]">
          {title}
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#F7F7F3]/90 leading-relaxed">
          {description}
        </p>

        {(primaryCtaText || secondaryCtaText) && (
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            {primaryCtaText && primaryCtaHref && (
              <Button href={primaryCtaHref} variant="primary" size="lg" magnetic={true}>
                {primaryCtaText}
              </Button>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="dark" size="lg" magnetic={true}>
                {secondaryCtaText}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}