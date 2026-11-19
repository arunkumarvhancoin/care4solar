import Link from "next/link";
import Container from "@/components/ui/Container";
import Care4SolarLogo from "@/components/ui/Care4SolarLogo";
import { solarServices, footerCompanyNav } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#15532E] text-[#F7F7F3] border-t border-[#15532E]/80">
      <Container className="pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Column 01: Brand Introduction & Logo (placed on light surface card as required) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <Care4SolarLogo variant="light-surface" width={160} height={80} />
            </div>
            <p className="text-sm leading-relaxed text-[#F7F7F3]/80 max-w-sm">
              {companyInfo.shortDescription}
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E5A100] block">
                {companyInfo.tagline}
              </span>
            </div>
          </div>

          {/* Column 02: Approved Solar Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E5A100]">
              Solar Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {solarServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[#F7F7F3]/75 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#E5A100]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 03: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E5A100]">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerCompanyNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#F7F7F3]/75 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#E5A100]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 04: Contact Details (Placeholders clearly marked) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E5A100]">
              Engineering Office
            </h3>
            <div className="space-y-3 text-sm text-[#F7F7F3]/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#E5A100] shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#E5A100] shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#E5A100] shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-[#F7F7F3]/60 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#E5A100] shrink-0" />
                <span>{companyInfo.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright, Notice, Social Placeholders */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F7F7F3]/60 space-y-4 md:space-y-0">
          <div>
            © 2026 Care4Solar. All rights reserved. Engineering &amp; Solar Infrastructure.
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
