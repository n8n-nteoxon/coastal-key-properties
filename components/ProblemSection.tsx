"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SearchX,
  FileQuestion,
  DollarSign,
  Timer,
  ShieldAlert,
  TrendingDown,
} from "lucide-react";

const painPoints = [
  {
    icon: SearchX,
    title: "Limited Listing Visibility",
    description:
      "The best Florida condos sell fast. Without inside access, you miss premium opportunities before they even hit public platforms.",
  },
  {
    icon: FileQuestion,
    title: "Confusing HOA Rules",
    description:
      "HOA fees, restrictions, and regulations vary dramatically. Understanding them without expert guidance is overwhelming.",
  },
  {
    icon: DollarSign,
    title: "Financing Uncertainty",
    description:
      "Condo financing differs from single-family homes. Many buyers face unexpected hurdles that delay or derail purchases.",
  },
  {
    icon: Timer,
    title: "Missing Opportunities",
    description:
      "High-demand condos in prime locations receive multiple offers within days. Slow decisions cost buyers their dream properties.",
  },
  {
    icon: TrendingDown,
    title: "Months of Fruitless Searching",
    description:
      "Without a curated approach, buyers spend months viewing properties that don't match their real needs and lifestyle.",
  },
  {
    icon: ShieldAlert,
    title: "Costly Hidden Surprises",
    description:
      "From special assessments to undisclosed building issues, inexperienced buyers face expensive surprises post-purchase.",
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="problem"
      className="relative py-24 bg-navy overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-ocean/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
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
            fill="#1A2333"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label justify-center"
          >
            <span className="w-8 h-px bg-teal inline-block" />
            The Challenge
            <span className="w-8 h-px bg-teal inline-block" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="section-heading-white max-w-3xl mx-auto mb-6"
          >
            Buying a Florida Condo Can Feel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
              Overwhelming
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-opensans text-white/60 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            The Florida condominium market moves quickly. Buyers without expert
            guidance often face challenges that make the process frustrating and
            costly.
          </motion.p>
        </div>

        {/* Pain points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-400 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="relative z-10">
                  <div className="w-11 h-11 bg-red-500/15 border border-red-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-montserrat font-bold text-white text-base mb-2">
                    {point.title}
                  </h3>
                  <p className="font-opensans text-white/50 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-red-400/40 rounded-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-10 py-6">
            <p className="font-montserrat font-bold text-white text-xl">
              That&apos;s why having a trusted Florida condo specialist{" "}
              <span className="text-gold">matters.</span>
            </p>
            <div className="flex items-center gap-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-teal" />
              <div className="w-2 h-2 bg-teal rounded-full" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-teal" />
            </div>
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
            fill="#FAF8F3"
          />
        </svg>
      </div>
    </section>
  );
}
