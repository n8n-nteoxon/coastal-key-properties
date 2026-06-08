"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  Shield,
  Clock,
  Star,
  Lock,
} from "lucide-react";

const consultationBenefits = [
  "Discuss your condo-buying goals and wishlist",
  "Review preferred Florida locations and communities",
  "Explore budget ranges and financing options",
  "Receive curated community recommendations",
  "Create a personalized action plan together",
];

const trustItems = [
  { icon: Shield, text: "No obligation, ever" },
  { icon: Lock, text: "Your info stays private" },
  { icon: Clock, text: "Response within 2 hours" },
  { icon: Star, text: "5-star rated service" },
];

const budgetOptions = [
  "Under $300,000",
  "$300,000 – $500,000",
  "$500,000 – $750,000",
  "$750,000 – $1,000,000",
  "$1,000,000 – $2,000,000",
  "$2,000,000+",
];

const locationOptions = [
  "Miami Beach",
  "Fort Lauderdale",
  "Boca Raton / Delray Beach",
  "Palm Beach / Jupiter",
  "Naples / Marco Island",
  "Sarasota / Siesta Key",
  "Tampa Bay / St. Pete",
  "Florida Keys",
  "Open to Suggestions",
];

const timelineOptions = [
  "ASAP – ready to move now",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "Just exploring for now",
];

export default function BookPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    timeline: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    router.push("/thank-you");
  };

  const isValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone;

  return (
    <div className="min-h-screen bg-sand">
      {/* Hero bar */}
      <div
        className="pt-24 pb-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0D4F8B 0%, #16A6A3 100%)",
        }}
      >
        {/* Background dots */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="Coastal Key Properties"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <p className="font-montserrat font-bold text-white text-sm leading-tight">
                COASTAL KEY
              </p>
              <p className="font-montserrat text-white/60 text-xs tracking-widest uppercase">
                Properties
              </p>
            </div>
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-montserrat font-black text-white mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Book Your Free Consultation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-opensans text-white/75 text-lg max-w-xl mx-auto mb-8"
          >
            Let&apos;s Find Your Perfect Florida Condo
          </motion.p>

          {/* Star rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-opensans text-white/60 text-sm">
              Rated 5 stars by 200+ Florida condo buyers
            </span>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 50V30C360 10 720 0 1080 15C1260 22 1380 35 1440 42V50H0Z" fill="#FAF8F3" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Benefits */}
            <div className="bg-white rounded-3xl p-7 shadow-card border border-sand-dark/60">
              <h2 className="font-montserrat font-bold text-navy text-xl mb-5">
                What You&apos;ll Get
              </h2>
              <ul className="space-y-4">
                {consultationBenefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="font-opensans text-navy/75 text-sm">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Trust indicators */}
            <div className="bg-ocean rounded-3xl p-7 shadow-ocean-glow">
              <h3 className="font-montserrat font-bold text-white text-lg mb-5">
                Our Promise to You
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {trustItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-start gap-2">
                      <Icon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-opensans text-white/70 text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-3xl p-6 border border-sand-dark shadow-card">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-opensans text-navy/70 text-sm leading-relaxed italic mb-4">
                &ldquo;Booking my consultation was the best decision I made in my condo
                search. Within 30 minutes, I had a clear plan and found my perfect property 3 weeks later.&rdquo;
              </blockquote>
              <p className="font-montserrat font-semibold text-navy text-sm">
                — Amanda K., Sarasota
              </p>
            </div>

            {/* Contact alternatives */}
            <div className="space-y-3">
              <p className="font-montserrat font-semibold text-navy/60 text-sm uppercase tracking-wider">
                Prefer to reach us directly?
              </p>
              <a
                href="tel:+13055550100"
                className="flex items-center gap-3 text-navy/70 hover:text-ocean transition-colors font-opensans text-sm"
              >
                <Phone className="w-4 h-4 text-teal" /> (305) 555-0100
              </a>
              <a
                href="mailto:hello@coastalkey.com"
                className="flex items-center gap-3 text-navy/70 hover:text-ocean transition-colors font-opensans text-sm"
              >
                <Mail className="w-4 h-4 text-teal" /> hello@coastalkey.com
              </a>
            </div>
          </motion.div>

          {/* Right: Booking form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-luxury border border-sand-dark/60 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-ocean to-teal p-6">
                <h2 className="font-montserrat font-bold text-white text-xl">
                  Schedule a Complimentary Consultation
                </h2>
                <p className="font-opensans text-white/70 text-sm mt-1">
                  Takes only 2 minutes to complete
                </p>
              </div>

              <div className="p-8 space-y-6">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Sarah"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Johnson"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Contact row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="(305) 555-0100"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Location */}
                <SelectField
                  label="Preferred Florida Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  options={locationOptions}
                  placeholder="Select a location..."
                />

                {/* Budget */}
                <SelectField
                  label="Budget Range"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  options={budgetOptions}
                  placeholder="Select your budget..."
                />

                {/* Timeline */}
                <SelectField
                  label="Timeline to Purchase"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  options={timelineOptions}
                  placeholder="When are you looking to buy?"
                />

                {/* Notes */}
                <div>
                  <label className="block font-montserrat font-semibold text-navy text-sm mb-2">
                    Additional Notes{" "}
                    <span className="text-navy/40 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your ideal condo — views, amenities, building style, or anything else that matters to you..."
                    className="w-full px-4 py-3 rounded-xl border border-sand-dark bg-sand/50 font-opensans text-navy text-sm focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all resize-none placeholder:text-navy/30"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 font-montserrat font-bold text-base px-8 py-5 rounded-xl transition-all duration-300 ${
                    isValid && !isSubmitting
                      ? "bg-gold hover:bg-gold-light text-navy shadow-gold-glow hover:shadow-lg hover:-translate-y-0.5"
                      : "bg-sand-dark text-navy/40 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Confirming your appointment...
                    </>
                  ) : (
                    <>
                      Confirm My Appointment
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Fine print */}
                <p className="text-center font-opensans text-navy/40 text-xs">
                  By submitting, you agree to be contacted by a Coastal Key
                  specialist. No obligation. No spam. Ever.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-montserrat font-semibold text-navy text-sm mb-2">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-sand-dark bg-sand/50 font-opensans text-navy text-sm focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all placeholder:text-navy/30"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div>
      <label className="block font-montserrat font-semibold text-navy text-sm mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 pr-10 rounded-xl border border-sand-dark bg-sand/50 font-opensans text-navy text-sm focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all appearance-none cursor-pointer"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/40 pointer-events-none" />
      </div>
    </div>
  );
}
