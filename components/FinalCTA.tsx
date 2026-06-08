"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Phone } from "lucide-react";

const trustSignals = [
  { icon: ShieldCheck, text: "100% Free for Buyers" },
  { icon: Clock, text: "Respond Within 2 Hours" },
  { icon: Phone, text: "Available 7 Days a Week" },
];

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Ocean gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0D4F8B 0%, #16A6A3 50%, #0D4F8B 100%)",
          backgroundSize: "200% 200%",
          animation: "shimmer 8s ease infinite",
        }}
      />

      {/* Mesh overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "35px 35px",
          }}
        />
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 70V40C180 10 360 0 540 8C720 16 900 48 1080 52C1260 56 1380 40 1440 30V70H0Z"
            fill="#FAF8F3"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold px-5 py-2 rounded-full text-sm font-montserrat font-semibold mb-8"
        >
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          Limited Consultation Slots Available This Month
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-montserrat font-black text-white leading-tight mb-6"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
        >
          Ready to Find Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
            Place in Paradise?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-opensans text-white/75 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Schedule your complimentary consultation today and discover Florida
          condominium opportunities that align with your lifestyle, goals, and
          budget.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="/book"
            className="group relative inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-montserrat font-black text-lg px-10 py-5 rounded-2xl shadow-lg shadow-gold/40 hover:shadow-xl hover:shadow-gold/50 transition-all duration-300 hover:-translate-y-1 pulse-ring"
          >
            Book Your Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+13055550100"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-montserrat font-semibold text-lg px-10 py-5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
          >
            <Phone className="w-5 h-5" />
            Call (305) 555-0100
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {trustSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div key={signal.text} className="flex items-center gap-2 text-white/70">
                <Icon className="w-4 h-4 text-gold" />
                <span className="font-opensans text-sm">{signal.text}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonial mini */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <div className="glass rounded-2xl p-5">
            <div className="flex gap-1 justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-sm">★</span>
              ))}
            </div>
            <p className="font-opensans text-white/80 text-sm italic">
              &ldquo;Coastal Key made our dream of owning a Florida condo a reality. The
              entire team was exceptional from day one.&rdquo;
            </p>
            <p className="font-montserrat font-semibold text-white/60 text-xs mt-2">
              — Jennifer & Marcus W., Miami Beach
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0V30C180 60 360 70 540 62C720 54 900 22 1080 18C1260 14 1380 30 1440 40V0H0Z"
            fill="#1A2333"
          />
        </svg>
      </div>
    </section>
  );
}
