"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { href: "#benefits", label: "Why Coastal Key" },
  { href: "#how-it-works", label: "Our Process" },
  { href: "#testimonials", label: "Client Reviews" },
  { href: "#about", label: "About Us" },
  { href: "#faq", label: "FAQ" },
  { href: "/book", label: "Book Consultation" },
];

const services = [
  "First-Time Condo Buyers",
  "Vacation Home Purchases",
  "Retirement Relocation",
  "Real Estate Investment",
  "Luxury Properties",
  "Waterfront Condos",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-ocean/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-teal/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-5 group">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/logo.png"
                    alt="Coastal Key Properties"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-montserrat font-bold text-white text-sm leading-tight">
                    COASTAL KEY
                  </p>
                  <p className="font-montserrat text-teal text-xs tracking-widest uppercase">
                    Properties
                  </p>
                </div>
              </Link>

              <p className="font-opensans text-white/50 text-sm leading-relaxed mb-6">
                Florida&apos;s premier condominium specialists. Helping buyers find
                their place in paradise since 2012.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 bg-white/8 hover:bg-ocean border border-white/10 hover:border-ocean rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-opensans text-white/50 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-5">
                We Serve
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-teal rounded-full flex-shrink-0" />
                    <span className="font-opensans text-white/50 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-5">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+13055550100"
                    className="flex items-start gap-3 text-white/50 hover:text-white transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium text-sm text-white/70 group-hover:text-white transition-colors">
                        (305) 555-0100
                      </p>
                      <p className="font-opensans text-xs text-white/40">
                        Mon–Sat 9am–7pm EST
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@coastalkeyproperties.com"
                    className="flex items-start gap-3 text-white/50 hover:text-white transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium text-sm text-white/70 group-hover:text-white transition-colors break-all">
                        hello@coastalkey.com
                      </p>
                      <p className="font-opensans text-xs text-white/40">
                        Reply within 2 hours
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-montserrat font-medium text-sm text-white/70">
                        Miami, Florida
                      </p>
                      <p className="font-opensans text-xs text-white/40">
                        Serving all of Florida
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Book CTA */}
              <Link
                href="/book"
                className="mt-6 block w-full text-center bg-gold hover:bg-gold-light text-navy font-montserrat font-bold text-sm px-5 py-3 rounded-xl shadow-gold-glow/50 hover:shadow-gold-glow transition-all duration-300"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/8 mb-6" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-opensans text-white/35 text-xs">
              © {new Date().getFullYear()} Coastal Key Properties. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="font-opensans text-white/35 hover:text-white/70 text-xs transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <p className="font-opensans text-white/25 text-xs">
              Licensed Florida Real Estate Brokerage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
