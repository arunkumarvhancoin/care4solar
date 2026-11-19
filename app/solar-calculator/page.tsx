"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { calculatorConfig } from "@/data/calculator";
import { CheckCircle2, RotateCcw, Info } from "lucide-react";

interface FormData {
  location: string;
  monthlyBill: string;
  tariffRate: string;
  billOffset: number;
  rooftopSpace: string;
  sanctionedLoad: string;
  requiredCapacity: string;
  roofType: string;
  systemType: string;
  name: string;
  phone: string;
  email: string;
}

const initialFormData: FormData = {
  location: "",
  monthlyBill: "",
  tariffRate: "",
  billOffset: 100,
  rooftopSpace: "",
  sanctionedLoad: "",
  requiredCapacity: "",
  roofType: calculatorConfig.roofTypes[0],
  systemType: calculatorConfig.systemTypes[0],
  name: "",
  phone: "",
  email: "",
};

export default function SolarCalculatorPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.location.trim()) {
      newErrors.location = "City / Location is required.";
    }

    if (!formData.monthlyBill.trim()) {
      newErrors.monthlyBill = "Monthly electricity bill is required.";
    } else if (isNaN(Number(formData.monthlyBill)) || Number(formData.monthlyBill) <= 0) {
      newErrors.monthlyBill = "Please enter a valid bill amount in INR.";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number (starting with 6-9).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#E5E8E3] bg-[#F7F7F3]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#15532E] border-l-2 border-[#15532E] pl-3">
              <span>SOLAR REQUIREMENT ESTIMATION</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#15532E] leading-tight">
              Explore your solar potential.
            </h1>
            <p className="text-lg sm:text-xl text-[#747C75] leading-relaxed">
              Enter your energy requirements to understand what information is needed for a suitable
              solar system proposal.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Calculator Body */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E8E3]">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Engineering Transparency Notice */}
            <div className="mb-10 p-5 bg-[#F7F7F3] border-l-4 border-[#15532E] flex items-start space-x-3.5">
              <Info className="w-5 h-5 text-[#15532E] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#747C75] space-y-1">
                <span className="font-semibold text-[#202720] block">
                  Care4Solar Engineering Commitment:
                </span>
                <p>
                  To ensure technical integrity, Care4Solar does not present automated, fabricated
                  generation numbers, pricing guarantees, or payback estimates. This tool collects
                  your technical inputs to compile an itemized requirement summary for engineering
                  review.
                </p>
              </div>
            </div>

            {isSubmitted ? (
              /* Frontend Confirmation State */
              <div className="p-8 sm:p-12 bg-[#F7F7F3] border border-[#15532E] space-y-8 animate-in fade-in duration-300">
                <div className="flex items-center space-x-3 text-[#15532E]">
                  <CheckCircle2 className="w-8 h-8 text-[#2D9F5A]" />
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#202720]">
                    Requirement Profile Prepared
                  </h2>
                </div>

                <div className="p-6 bg-white border border-[#E5E8E3] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E8E3]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#747C75]">
                      Preliminary Enquiry Summary
                    </span>
                    <span className="text-xs font-mono text-[#15532E] font-semibold">
                      Status: Ready for Engineering Review
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-xs text-[#747C75] block">Location:</span>
                      <span className="font-medium text-[#202720]">{formData.location}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#747C75] block">Monthly Bill:</span>
                      <span className="font-medium text-[#202720]">₹ {formData.monthlyBill}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#747C75] block">Roof Architecture:</span>
                      <span className="font-medium text-[#202720]">{formData.roofType}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#747C75] block">Desired Configuration:</span>
                      <span className="font-medium text-[#202720]">{formData.systemType}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#747C75] block">Target Offset:</span>
                      <span className="font-medium text-[#202720]">{formData.billOffset}% of Bill</span>
                    </div>
                    {formData.rooftopSpace && (
                      <div>
                        <span className="text-xs text-[#747C75] block">Available Terrace Space:</span>
                        <span className="font-medium text-[#202720]">{formData.rooftopSpace} sq.ft.</span>
                      </div>
                    )}
                    {formData.sanctionedLoad && (
                      <div>
                        <span className="text-xs text-[#747C75] block">Sanctioned Load:</span>
                        <span className="font-medium text-[#202720]">{formData.sanctionedLoad} kW</span>
                      </div>
                    )}
                    <div>
                      <span className="text-xs text-[#747C75] block">Contact Person:</span>
                      <span className="font-medium text-[#202720]">
                        {formData.name} ({formData.phone})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Exact required frontend message */}
                <div className="p-4 bg-[#E5A100]/15 border-l-4 border-[#E5A100] text-sm text-[#202720]">
                  <p className="font-medium">
                    Your requirements have been prepared. Please contact the Care4Solar team to
                    discuss a detailed assessment.
                  </p>
                  <p className="text-xs text-[#747C75] mt-1">
                    [Frontend-only summary state. No external data has been transmitted or saved.]
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button href="/contact" variant="primary" size="md" icon="arrow">
                    Connect With Care4Solar
                  </Button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center space-x-2 text-sm font-medium text-[#747C75] hover:text-[#202720] px-4 py-2 border border-[#E5E8E3] bg-white transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset Calculator</span>
                  </button>
                </div>
              </div>
            ) : (
              /* The Polished Multi-Section Form */
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* SECTION 1: Energy & Site Information */}
                <div className="p-6 sm:p-8 bg-[#F7F7F3] border border-[#E5E8E3] space-y-6">
                  <div className="border-b border-[#E5E8E3] pb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold block">
                      Energy Profile
                    </span>
                    <h3 className="text-lg font-semibold text-[#202720]">
                      Energy Consumption & Location
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* 1. Location */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Location / City <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Bangalore, Karnataka"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.location && (
                        <p className="mt-1 text-xs text-red-600">{errors.location}</p>
                      )}
                    </div>

                    {/* 2. Monthly Electricity Bill */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Average Monthly Bill (₹) <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        name="monthlyBill"
                        value={formData.monthlyBill}
                        onChange={handleChange}
                        placeholder="e.g. 6500"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.monthlyBill && (
                        <p className="mt-1 text-xs text-red-600">{errors.monthlyBill}</p>
                      )}
                    </div>

                    {/* 3. Electricity tariff, optional */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Electricity Tariff Rate (₹/kWh) <span className="text-[#747C75] text-[10px] lowercase font-normal">(optional)</span>
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        name="tariffRate"
                        value={formData.tariffRate}
                        onChange={handleChange}
                        placeholder="e.g. 7.50"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      <span className="text-[11px] text-[#747C75] mt-1 block">Leave blank if unknown</span>
                    </div>

                    {/* 4. Desired bill offset percentage */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Desired Bill Offset Target (%)
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {calculatorConfig.billOffsetOptions.map((pct) => (
                          <button
                            key={pct}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, billOffset: pct }))}
                            className={`py-2 text-xs font-mono font-medium border transition-colors ${
                              formData.billOffset === pct
                                ? "bg-[#15532E] text-white border-[#15532E]"
                                : "bg-white text-[#202720] border-[#E5E8E3] hover:border-[#15532E]"
                            }`}
                          >
                            {pct}%
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Rooftop & System Specs */}
                <div className="p-6 sm:p-8 bg-[#F7F7F3] border border-[#E5E8E3] space-y-6">
                  <div className="border-b border-[#E5E8E3] pb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold block">
                      Rooftop Specifications
                    </span>
                    <h3 className="text-lg font-semibold text-[#202720]">
                      Rooftop & System Parameters
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* 5. Available rooftop space, optional */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Available Rooftop Area (Sq. Ft.) <span className="text-[#747C75] text-[10px] lowercase font-normal">(optional)</span>
                      </label>
                      <input
                        type="number"
                        name="rooftopSpace"
                        value={formData.rooftopSpace}
                        onChange={handleChange}
                        placeholder="e.g. 800"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                    </div>

                    {/* 6. Sanctioned electrical load, optional */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Sanctioned Load (kW) <span className="text-[#747C75] text-[10px] lowercase font-normal">(optional)</span>
                      </label>
                      <input
                        type="number"
                        name="sanctionedLoad"
                        value={formData.sanctionedLoad}
                        onChange={handleChange}
                        placeholder="e.g. 5"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                    </div>

                    {/* 7. Required system capacity, optional */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Desired System Capacity (kWp) <span className="text-[#747C75] text-[10px] lowercase font-normal">(optional)</span>
                      </label>
                      <input
                        type="number"
                        name="requiredCapacity"
                        value={formData.requiredCapacity}
                        onChange={handleChange}
                        placeholder="e.g. 5"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                    </div>

                    {/* 8. Roof type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Rooftop Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="roofType"
                        value={formData.roofType}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      >
                        {calculatorConfig.roofTypes.map((rt) => (
                          <option key={rt} value={rt}>
                            {rt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 9. System type */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Preferred System Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="systemType"
                        value={formData.systemType}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      >
                        {calculatorConfig.systemTypes.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: Contact Particulars */}
                <div className="p-6 sm:p-8 bg-[#F7F7F3] border border-[#E5E8E3] space-y-6">
                  <div className="border-b border-[#E5E8E3] pb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#15532E] font-semibold block">
                      Contact Information
                    </span>
                    <h3 className="text-lg font-semibold text-[#202720]">Contact Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* 10. Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>

                    {/* 11. Phone number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                    </div>

                    {/* 12. Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#202720] mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className="w-full bg-white border border-[#E5E8E3] px-3.5 py-3 text-base sm:text-sm min-h-[44px] text-[#202720] focus:outline-none focus:border-[#15532E]"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center space-x-2 text-sm font-medium text-[#747C75] hover:text-[#202720] transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset All Fields</span>
                  </button>

                  <Button type="submit" variant="primary" size="lg" icon="arrow" magnetic={true}>
                    Generate Requirement Summary
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
