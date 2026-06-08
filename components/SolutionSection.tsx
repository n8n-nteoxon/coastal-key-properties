"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const benefits = [
  "Access exclusive condo opportunities before they reach the market",
  "Compare communities, amenities, and lifestyle offerings side-by-side",
  "Understand HOA fees, restrictions, and governance with clarity",
  "Evaluate long-term investment potential and appreciation",
  "Negotiate favorable terms and pricing with skilled advocates",
  "Navigate inspections, financing, and closing with expert support",
];

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="solution" className="py-24 bg-sand relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D4F8B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with 3D depth layers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-luxury aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85"
                alt="Luxury Florida Condo Living Room"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean/40 via-transparent to-transparent" />
            </div>

            {/* Floating accent card bottom-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-luxury p-5 max-w-[200px] float-card"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-teal" />
                </div>
                <span className="font-montserrat font-bold text-navy text-sm">Expert Match</span>
              </div>
              <p className="font-opensans text-navy/60 text-xs leading-relaxed">
                Personalized condo recommendations within 48 hours.
              </p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gold rounded-full opacity-80" />
                ))}
              </div>
            </motion.div>

            {/* Floating accent card top-left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -top-6 -left-6 bg-ocean rounded-2xl shadow-ocean-glow p-4 float-card-2"
            >
              <p className="font-montserrat font-black text-white text-2xl leading-none">
                98%
              </p>
              <p className="font-opensans text-white/70 text-xs mt-1">
                Client Satisfaction
              </p>
            </motion.div>

            {/* Decorative line */}
            <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-teal/20 to-ocean/10 rounded-3xl blur-2xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label">
              <span className="w-6 h-px bg-teal inline-block" />
              Our Solution
            </p>

            <h2 className="section-heading mb-6">
              We Help You Find the Right Condo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean to-teal">
                With Confidence
              </span>
            </h2>

            <p className="font-opensans text-navy/65 text-lg leading-relaxed mb-8">
              At Coastal Key Properties, we guide you through every step of the
              condo-buying journey, helping you make informed decisions while
              avoiding costly mistakes.
            </p>

            {/* Benefits checklist */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.4 + i * 0.08,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="font-opensans text-navy/80 text-base">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 bg-ocean hover:bg-ocean-light text-white font-montserrat font-semibold px-8 py-4 rounded-xl shadow-ocean-glow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Start Your Journey Today
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
