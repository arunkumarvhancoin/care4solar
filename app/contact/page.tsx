"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/data/company";
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2, RotateCcw } from "lucide-react";

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
  "Subsidy enquiry",
  "Other",
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
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#15532E] border-l-2 border-[#15532E] pl-3">
              <span>GET IN TOUCH WITH OUR TEAM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#15532E] leading-tight">
              Let&apos;s discuss your solar requirements.
            </h1>
            <p className="text-lg sm:text-xl text-[#747C75] leading-relaxed">
              Tell us a little about your project or maintenance requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Two-Column Layout */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold block mb-2">
                  Head Office & Advisory
                </span>
                <h2 className="text-2xl font-semibold text-[#202720]">
                  Care4Solar Engineering Office
                </h2>
                <p className="mt-2 text-sm text-[#747C75] leading-relaxed">
                  Our engineers are available for technical assessments, rooftop shadow studies,
                  and Annual Maintenance Contract evaluations.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                {/* Address */}
                <div className="flex items-start space-x-3.5 p-4 bg-[#F7F7F3] border border-[#E5E8E3]">
                  <MapPin className="w-5 h-5 text-[#15532E] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-[#202720] block">Office Address</span>
                    <span className="text-[#747C75] text-xs leading-relaxed mt-0.5 block">
                      {companyInfo.address}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5 p-4 bg-[#F7F7F3] border border-[#E5E8E3]">
                  <Phone className="w-5 h-5 text-[#15532E] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-[#202720] block">Phone Enquiries</span>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-[#15532E] font-medium text-xs hover:underline mt-0.5 block"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5 p-4 bg-[#F7F7F3] border border-[#E5E8E3]">
                  <Mail className="w-5 h-5 text-[#15532E] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-[#202720] block">Email Support</span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-[#15532E] font-medium text-xs hover:underline mt-0.5 block"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3.5 p-4 bg-[#F7F7F3] border border-[#E5E8E3]">
                  <MessageSquare className="w-5 h-5 text-[#15532E] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-[#202720] block">WhatsApp Business</span>
                    <span className="text-[#747C75] text-xs mt-0.5 block">
                      {companyInfo.phone}
                    </span>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start space-x-3.5 p-4 bg-[#F7F7F3] border border-[#E5E8E3]">
                  <Clock className="w-5 h-5 text-[#15532E] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-[#202720] block">Working Hours</span>
                    <span className="text-[#747C75] text-xs mt-0.5 block">
                      {companyInfo.workingHours}
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
                    <p className="text-xs font-mono uppercase tracking-wider text-[#747C75]">
                      Mock Submission Record
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[#747C75] block">Name:</span>
                        <span className="font-medium text-[#202720]">{formData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-[#747C75] block">Phone:</span>
                        <span className="font-medium text-[#202720]">{formData.phone}</span>
                      </div>
                      <div>
                        <span className="text-[#747C75] block">Service:</span>
                        <span className="font-medium text-[#202720]">{formData.requiredService}</span>
                      </div>
                      <div>
                        <span className="text-[#747C75] block">Category:</span>
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
                    <h3 className="text-xl font-semibold text-[#202720]">Project Enquiry Form</h3>
                    <p className="text-xs text-[#747C75] mt-1">
                      Fields marked with <span className="text-red-600">*</span> are mandatory.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Site Location / City <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Whitefield, Bangalore"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.location && (
                        <p className="mt-1 text-xs text-red-600">{errors.location}</p>
                      )}
                    </div>

                    {/* Customer Category */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Customer Category <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="customerCategory"
                        value={formData.customerCategory}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
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
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Required Service <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="requiredService"
                        value={formData.requiredService}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
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
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Approximate System Capacity (kWp){" "}
                        <span className="text-[#747C75] text-[10px] lowercase font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="systemCapacity"
                        value={formData.systemCapacity}
                        onChange={handleChange}
                        placeholder="e.g. 10 kWp or Unsure"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-1.5">
                        Project Message / Roof Details <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide any relevant details about your property, average bill, or maintenance issues..."
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-2.5 text-sm text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600">{errors.message}</p>
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
    </div>
  );
}
