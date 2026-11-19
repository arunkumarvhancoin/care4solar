import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

interface CTASectionProps {
  heading?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CTASection({
  heading = "Let's make your solar investment work harder.",
  description = "Speak with the Care4Solar team about your solar requirements, engineering feasibility, or maintenance operations.",
  primaryCtaText = "Get in Touch",
  primaryCtaHref = "/contact",
  secondaryCtaText = "Explore Solar Calculator",
  secondaryCtaHref = "/solar-calculator",
}: CTASectionProps) {
  return (
    <section className="bg-[#15532E] py-20 lg:py-24 text-white relative overflow-hidden">
      {/* Subtle geometric line pattern inspired by Swiss architectural layout */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full border-t border-b border-white grid grid-cols-6 divide-x divide-white" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E5A100] block mb-3">
              CARE4SOLAR / CONSULTATION & TECHNICAL ADVISORY
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              {heading}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-[#F7F7F3]/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Button href={primaryCtaHref} variant="primary" size="lg" icon="arrow" className="w-full sm:w-auto">
                {primaryCtaText}
              </Button>
              {secondaryCtaText && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="dark" size="lg" className="w-full sm:w-auto">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
