"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "#benefits", label: "Why Us" },
  { href: "#how-it-works", label: "Process" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-luxury border-b border-sand-dark py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Coastal Key Properties"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-montserrat font-bold text-sm leading-tight transition-colors duration-300 ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                COASTAL KEY
              </p>
              <p
                className={`font-montserrat text-xs tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? "text-teal" : "text-teal-light"
                }`}
              >
                Properties
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-montserrat font-medium text-sm transition-all duration-300 hover:text-gold relative group ${
                  scrolled ? "text-navy/80" : "text-white/85"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Phone */}
            <a
              href="tel:+13055550100"
              className={`hidden md:flex items-center gap-2 font-montserrat font-medium text-sm transition-colors duration-300 ${
                scrolled ? "text-navy/70 hover:text-ocean" : "text-white/70 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:block">(305) 555-0100</span>
            </a>

            <Link
              href="/book"
              className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-montserrat font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-gold-glow/50 hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Consultation
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "text-navy hover:bg-sand-dark"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-navy lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-8 pb-12">
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block font-montserrat font-bold text-3xl text-white/90 hover:text-gold transition-colors duration-200 py-3 border-b border-white/10"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <a
                  href="tel:+13055550100"
                  className="flex items-center gap-3 text-white/60 font-montserrat font-medium"
                >
                  <Phone className="w-5 h-5 text-teal" />
                  (305) 555-0100
                </a>
                <Link
                  href="/book"
                  onClick={() => setMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold text-navy font-montserrat font-bold text-lg px-8 py-5 rounded-2xl"
                >
                  Book Free Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky CTA for mobile scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden"
          >
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-gold text-navy font-montserrat font-bold px-8 py-4 rounded-2xl shadow-gold-glow shadow-lg text-sm"
            >
              Book Free Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
