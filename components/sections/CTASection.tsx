import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  heading?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CTASection({
  heading = "Ready to switch to solar?",
  description = "Talk to our engineering team about rooftop feasibility, pricing, and how net metering works for your property.",
  primaryCtaText = "Get in Touch",
  primaryCtaHref = "/contact",
  secondaryCtaText = "Calculate Savings",
  secondaryCtaHref = "/solar-calculator",
}: CTASectionProps) {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-[#E5E8E3]">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#202720] leading-tight">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-[#747C75] leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={primaryCtaHref}
              variant="primary"
              size="lg"
              magnetic={true}
            >
              {primaryCtaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button
                href={secondaryCtaHref}
                variant="outline"
                size="lg"
                magnetic={true}
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
