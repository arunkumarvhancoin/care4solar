import Link from "next/link";
import Container from "@/components/ui/Container";
import Care4SolarLogo from "@/components/ui/Care4SolarLogo";
import { solarServices, footerCompanyNav } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import { Phone, Mail, Clock, ArrowUpRight, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#124526] text-[#F7F7F3] border-t border-[#1b5e35]">
      {/* Upper Engineering Quick-Connect Strip */}
      <div className="border-b border-white/10 bg-[#0f381f]">
        <Container className="py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-[#E5A100] text-sm font-semibold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Turnkey Solar EPC &amp; Asset Care</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Planning a rooftop or commercial solar transition?
              </h3>
              <p className="text-sm sm:text-base text-[#F7F7F3]/80">
                Speak directly with our senior electrical and structural engineers for a complimentary technical survey.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold px-4 py-2.5 rounded-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E5A100]" />
                <span>{companyInfo.phone}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-[#E5A100] hover:bg-[#d49400] text-[#124526] text-sm font-bold px-4 py-2.5 rounded-sm transition-colors shadow-xs"
              >
                <span>Book Site Survey</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Columns */}
      <Container className="py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 01: Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <Care4SolarLogo variant="light-surface" width={160} height={80} />
            </div>
            <p className="text-sm leading-relaxed text-[#F7F7F3]/80 max-w-sm">
              Care4Solar designs, permits, and installs high-yield rooftop solar infrastructure and guarantees long-term generation through structured maintenance and cloud telemetry.
            </p>
            <div className="pt-1">
              <span className="text-sm font-mono uppercase tracking-wider text-[#E5A100] block">
                {companyInfo.tagline}
              </span>
            </div>
          </div>

          {/* Column 02: Solutions */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#E5A100]">
              Solar Solutions
            </h3>
            <ul className="space-y-3 text-sm">
              {solarServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[#F7F7F3]/80 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#E5A100]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 03: Company & Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#E5A100]">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {footerCompanyNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#F7F7F3]/80 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#E5A100]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 04: Direct Inquiries & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#E5A100]">
              Direct Inquiries
            </h3>
            <div className="space-y-3 text-sm text-[#F7F7F3]/80">
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#E5A100] shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-white transition-colors text-sm"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#E5A100] shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors text-sm"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-[#F7F7F3]/75 pt-1">
                <Clock className="w-4 h-4 text-[#E5A100] shrink-0" />
                <span>{companyInfo.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: Legal & Social */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-[#F7F7F3]/60 gap-4">
          <div>
            &copy; 2026 Care4Solar. All rights reserved. Clean Energy Infrastructure &amp; Asset Care.
          </div>

          <div className="flex items-center space-x-6">
            {companyInfo.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5A100] transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}