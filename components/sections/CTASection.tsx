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
  description = "Talk to our team about rooftop feasibility, pricing, and how net metering works for your property.",
  primaryCtaText = "Get in Touch",
  primaryCtaHref = "/contact",
  secondaryCtaText = "Calculate Savings",
  secondaryCtaHref = "/solar-calculator",
}: CTASectionProps) {
  return (
    <section className="bg-[#15532E] py-16 sm:py-20 text-white">
      <Container>
        <div className="max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-[#F7F7F3]/85 leading-relaxed">
            {description}
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-3">
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
                variant="dark"
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
