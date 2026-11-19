"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { companyInfo } from "@/data/company";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  RotateCcw,
  ExternalLink,
  CalendarCheck,
  FileSearch,
  FileSpreadsheet,
} from "lucide-react";

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  customerCategory: string;
  requiredService: string;
  systemCapacity: string;
  message: string;
}

const customerCategories = [
  "Residential",
  "Apartment",
  "Commercial",
  "Industrial",
  "Other",
];

const requiredServices = [
  "Solar installation enquiry",
  "Solar maintenance",
  "Cleaning",
  "Monitoring",
  "Inspection",
  "Solar quotation",
  "Other",
];

const nextSteps = [
  {
    num: "1",
    title: "Quick Call & Bill Review",
    desc: "Within 24 hours, our team calls to review your electricity bills, discuss your goals, and answer initial questions.",
    icon: FileSearch,
  },
  {
    num: "2",
    title: "Free On-Site Roof Visit",
    desc: "An engineer visits your property to inspect roof layout, measure shadow-free space, and check the electrical connection.",
    icon: CalendarCheck,
  },
  {
    num: "3",
    title: "Itemized Solar Proposal",
    desc: "You get a custom proposal showing recommended system size, equipment specifications, total cost, and estimated payback.",
    icon: FileSpreadsheet,
  },
];

const contactFaqs = [
  {
    id: "cf-1",
    question: "Is the initial rooftop survey really free?",
    answer:
      "Yes. Our site survey and electricity bill review are completely free with zero obligation. An engineer visits your roof, evaluates sunlight and space, and answers all your questions.",
  },
  {
    id: "cf-2",
    question: "What information should I have ready for the call?",
    answer:
      "Having your latest electricity bill (or average monthly bill amount) is helpful. It tells us your connected load, tariff rate, and seasonal power usage so we can accurately size your system.",
  },
  {
    id: "cf-3",
    question: "How quickly can you survey my property?",
    answer:
      "For Bengaluru and nearby areas, we typically schedule rooftop visits within 24 to 48 hours of your request, including weekends for residential homeowners.",
  },
  {
    id: "cf-4",
    question: "Do you also assist with power company approvals?",
    answer:
      "Yes. We handle the entire application process, paperwork, and technical coordination with your local power company (such as BESCOM) for net metering.",
  },
];

const initialContactForm: ContactFormData = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  customerCategory: customerCategories[0],
  requiredService: requiredServices[0],
  systemCapacity: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialContactForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number (starting with 6-9).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "City / Site location is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please include a brief message or project description.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Frontend-only mock submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 700);
  };

  const handleReset = () => {
    setFormData(initialContactForm);
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      <PageHero
        title="Let's discuss your solar requirements."
        description="Tell us about your rooftop, project details, or maintenance needs. Our engineering team will respond within 24 business hours."
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Care4Solar engineering office consultation"
      />

      {/* Main Two-Column Layout */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-sm font-mono uppercase tracking-wider text-[#15532E] font-semibold block mb-2">
                  Head Office & Advisory
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#202720]">
                  Care4Solar Office
                </h2>
                <p className="mt-2 text-base text-[#374151] leading-relaxed">
                  Our team is available for rooftop assessments, electricity bill evaluations, and
                  maintenance planning.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="bg-[#F7F7F3] border border-[#E5E8E3] divide-y divide-[#E5E8E3]">
                  {/* Address */}
                  <div className="flex items-start space-x-3.5 p-4 sm:p-5">
                    <MapPin className="w-5 h-5 text-[#15532E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-base text-[#202720] block">Office Address</span>
                      <span className="text-[#374151] text-sm leading-relaxed mt-0.5 block">
                        {companyInfo.address}
                      </span>
                    </div>
                  </div>

                  {/* Phone & WhatsApp */}
                  <div className="flex items-start space-x-3.5 p-4 sm:p-5">
                    <Phone className="w-5 h-5 text-[#15532E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-base text-[#202720] block">Phone & WhatsApp</span>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-[#15532E] font-medium text-sm hover:underline mt-0.5 block"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3.5 p-4 sm:p-5">
                    <Mail className="w-5 h-5 text-[#15532E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-base text-[#202720] block">Email Support</span>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-[#15532E] font-medium text-sm hover:underline mt-0.5 block"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Working hours */}
                  <div className="flex items-start space-x-3.5 p-4 sm:p-5">
                    <Clock className="w-5 h-5 text-[#15532E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-base text-[#202720] block">Working Hours</span>
                      <span className="text-[#374151] text-sm mt-0.5 block">
                        {companyInfo.workingHours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Site Survey Visual Box */}
                <div className="relative aspect-[16/10] overflow-hidden border border-[#E5E8E3] bg-[#F7F7F3]">
                  <Image
                    src="https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=800&auto=format&fit=crop"
                    alt="Care4Solar engineer during on-site rooftop survey"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 text-white">
                    <span className="text-sm font-semibold block text-[#E5A100]">
                      Free On-Site Roof Survey
                    </span>
                    <span className="text-xs sm:text-sm text-white/90 block mt-0.5">
                      We evaluate sunlight patterns and roof space directly at your property.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7 bg-[#F7F7F3] border border-[#E5E8E3] p-6 sm:p-10">
              {isSuccess ? (
                /* Frontend Mock Submission Success State */
                <div className="space-y-6 py-6 animate-in fade-in duration-300">
                  <div className="flex items-center space-x-3 text-[#15532E]">
                    <CheckCircle2 className="w-8 h-8 text-[#2D9F5A]" />
                    <h3 className="text-2xl font-semibold text-[#202720]">
                      Enquiry Summary Prepared
                    </h3>
                  </div>

                  <div className="p-5 bg-white border border-[#E5E8E3] space-y-3 text-sm">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#374151]">
                      Mock Submission Record
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[#374151] block">Name:</span>
                        <span className="font-medium text-[#202720]">{formData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-[#374151] block">Phone:</span>
                        <span className="font-medium text-[#202720]">{formData.phone}</span>
                      </div>
                      <div>
                        <span className="text-[#374151] block">Service:</span>
                        <span className="font-medium text-[#202720]">{formData.requiredService}</span>
                      </div>
                      <div>
                        <span className="text-[#374151] block">Category:</span>
                        <span className="font-medium text-[#202720]">{formData.customerCategory}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#E5A100]/15 border-l-4 border-[#E5A100] text-sm text-[#202720]">
                    <p className="font-medium">
                      Thank you for your interest. Your details have been received and an engineer will
                      contact you within 24 hours to arrange an on-site feasibility review.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center space-x-2 text-sm font-medium text-[#15532E] hover:underline"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Send Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#202720]">Project Enquiry Form</h3>
                    <p className="text-sm text-[#374151] mt-1">
                      Fields marked with <span className="text-red-600">*</span> are mandatory.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-white border border-[#E5E8E3] px-4 py-3 text-base min-h-[46px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full bg-white border border-[#E5E8E3] px-4 py-3 text-base min-h-[46px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-white border border-[#E5E8E3] px-4 py-3 text-base min-h-[46px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Site Location / City <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Whitefield, Bangalore"
                        className="w-full bg-white border border-[#E5E8E3] px-4 py-3 text-base min-h-[46px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.location && (
                        <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                      )}
                    </div>

                    {/* Customer Category */}
                    <div>
                      <label className="block text-sm font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Customer Category <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="customerCategory"
                        value={formData.customerCategory}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E5E8E3] px-4 py-3 text-base min-h-[46px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      >
                        {customerCategories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Required Service */}
                    <div>
                      <label className="block text-sm font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Required Service <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="requiredService"
                        value={formData.requiredService}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E5E8E3] px-4 py-3 text-base min-h-[46px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      >
                        {requiredServices.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* System Capacity (optional) */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Approximate System Capacity (kWp){" "}
                        <span className="text-[#374151] text-xs lowercase font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="systemCapacity"
                        value={formData.systemCapacity}
                        onChange={handleChange}
                        placeholder="e.g. 10 kWp or Unsure"
                        className="w-full bg-white border border-[#E5E8E3] px-4 py-3 text-base min-h-[46px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Project Message / Roof Details <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide any relevant details about your property, average bill, or maintenance issues..."
                        className="w-full bg-white border border-[#E5E8E3] px-4 py-3 text-base text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon="arrow"
                      disabled={isSubmitting}
                      magnetic={true}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? "Preparing Enquiry..." : "Submit Enquiry"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION — WHAT HAPPENS NEXT */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-2xl mb-8">
            <SectionHeading
              title="What happens after you reach out."
              description="A clear, hassle-free path from your first enquiry to a detailed solar feasibility plan."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white border border-[#E5E8E3] p-6 sm:p-7 space-y-3.5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-[#15532E]/10 text-[#15532E] font-mono font-bold text-sm flex items-center justify-center">
                        {step.num}
                      </span>
                      <StepIcon className="w-5 h-5 text-[#15532E]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#202720]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#374151] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E5E8E3] text-xs font-mono uppercase tracking-wider text-[#15532E] font-medium">
                    Zero Obligation
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION — OFFICE LOCATION & INTERACTIVE MAP */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="max-w-2xl">
              <SectionHeading
                title="Visit our office."
                description="We're located on Outer Ring Road, Bengaluru. Drop by for an in-person discussion or site planning session."
              />
            </div>
            <a
              href="https://maps.google.com/?q=Sector+4+Outer+Ring+Road+Bangalore+Karnataka+560103"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#15532E] hover:bg-[#2D9F5A] text-white px-5 py-3 font-semibold text-sm transition-colors shrink-0"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Map Frame */}
            <div className="lg:col-span-8 relative min-h-[340px] sm:min-h-[420px] border border-[#E5E8E3] bg-[#F7F7F3] overflow-hidden">
              <iframe
                title="Care4Solar Office Location Map"
                src="https://maps.google.com/maps?q=Sector+4+Outer+Ring+Road+HSR+Layout+Bangalore+Karnataka+560103&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[340px] sm:min-h-[420px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Quick Visit Details Card */}
            <div className="lg:col-span-4 bg-[#F7F7F3] border border-[#E5E8E3] p-6 sm:p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold block">
                  Location Highlights
                </span>
                <h3 className="text-xl font-semibold text-[#202720]">
                  Care4Solar Bengaluru
                </h3>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Easily accessible via Outer Ring Road connecting Silk Board, HSR Layout, Bellandur, and Sarjapur Road.
                </p>

                <div className="space-y-3 pt-2 text-sm text-[#202720]">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15532E] shrink-0 mt-0.5" />
                    <span>Dedicated visitor parking available on premises</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15532E] shrink-0 mt-0.5" />
                    <span>Working display of solar modules, inverters &amp; mounting clamps</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15532E] shrink-0 mt-0.5" />
                    <span>In-person 3D shadow modeling consultation</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E8E3]">
                <div className="text-xs font-mono text-[#374151] mb-2">
                  Operating Hours: Mon–Sat, 9:00 AM – 6:30 PM
                </div>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-sm font-semibold text-[#15532E] hover:underline inline-flex items-center space-x-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call before you visit: {companyInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION — CONTACT & CONSULTATION FAQS */}
      <section className="py-10 sm:py-14 bg-[#F7F7F3] border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeading
              title="Frequently asked questions."
              description="Quick answers about our site visits, quotation process, and timeline."
              align="center"
            />
            <Accordion items={contactFaqs} />
          </div>
        </Container>
      </section>
    </div>
  );
}
