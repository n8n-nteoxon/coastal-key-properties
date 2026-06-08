"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  CalendarCheck,
  Search,
  Eye,
  KeyRound,
  Palmtree,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book Your Consultation",
    description:
      "Schedule a complimentary discovery call with a Coastal Key specialist. We learn about your goals, budget, timeline, and dream condo criteria.",
    color: "bg-ocean",
    textColor: "text-ocean",
    ringColor: "ring-ocean/20",
    lineColor: "from-ocean to-teal",
  },
  {
    number: "02",
    icon: Search,
    title: "Explore Curated Listings",
    description:
      "Receive a hand-curated selection of condos — including off-market gems — that match your exact specifications and lifestyle.",
    color: "bg-teal",
    textColor: "text-teal",
    ringColor: "ring-teal/20",
    lineColor: "from-teal to-gold-dark",
  },
  {
    number: "03",
    icon: Eye,
    title: "Tour & Evaluate",
    description:
      "Tour your top properties with expert guidance. We help you assess each community, HOA structure, and long-term value potential.",
    color: "bg-gold-dark",
    textColor: "text-gold-dark",
    ringColor: "ring-gold/20",
    lineColor: "from-gold-dark to-ocean",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Secure Your Property",
    description:
      "We negotiate skillfully on your behalf, guide you through inspections and financing, and ensure a smooth, surprise-free closing.",
    color: "bg-ocean",
    textColor: "text-ocean",
    ringColor: "ring-ocean/20",
    lineColor: "from-ocean to-teal",
  },
  {
    number: "05",
    icon: Palmtree,
    title: "Enjoy Florida Living",
    description:
      "Welcome home to paradise. Settle into your new Florida condo and begin living the coastal lifestyle you deserve.",
    color: "bg-teal",
    textColor: "text-teal",
    ringColor: "ring-teal/20",
    lineColor: "from-teal to-teal",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label justify-center"
          >
            <span className="w-8 h-px bg-teal inline-block" />
            The Process
            <span className="w-8 h-px bg-teal inline-block" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="section-heading mb-4"
          >
            Your Path to Florida{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean to-teal">
              Condo Ownership
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-opensans text-navy/60 text-lg max-w-xl mx-auto"
          >
            Our proven five-step process takes you from first consultation to
            picking up your keys — without the stress.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-ocean via-teal to-gold opacity-20 -translate-x-1/2" />

          <div className="space-y-10 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.2 + i * 0.15,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                    isEven ? "" : "lg:direction-rtl"
                  } mb-8 lg:mb-16`}
                >
                  {/* Content card */}
                  <div
                    className={`${
                      isEven ? "lg:text-right lg:pr-12" : "lg:order-2 lg:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-7 shadow-card border border-sand-dark/60 hover:shadow-luxury hover:-translate-y-1 transition-all duration-400 group`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`${step.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span
                          className={`font-montserrat font-black text-4xl ${step.textColor} opacity-20 leading-none`}
                        >
                          {step.number}
                        </span>
                      </div>
                      <h3 className="font-montserrat font-bold text-navy text-xl mb-3">
                        {step.title}
                      </h3>
                      <p className="font-opensans text-navy/60 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center node (desktop) */}
                  <div
                    className={`hidden lg:flex items-center justify-center ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } relative`}
                  >
                    <div
                      className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center shadow-lg ring-8 ${step.ringColor} z-10`}
                    >
                      <span className="font-montserrat font-black text-white text-sm">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="font-opensans text-navy/60 text-lg mb-6">
            Ready to start your journey? Your Florida condo awaits.
          </p>
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 bg-ocean hover:bg-ocean-light text-white font-montserrat font-semibold px-10 py-5 rounded-2xl shadow-ocean-glow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-base"
          >
            Begin with a Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
