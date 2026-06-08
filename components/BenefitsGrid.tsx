"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  SlidersHorizontal,
  Lock,
  HeartHandshake,
  BarChart3,
  Shield,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Local Florida Expertise",
    description:
      "Deep, unmatched knowledge of Florida condominium communities, micro-markets, and long-term trends that only insiders possess.",
    color: "from-ocean to-ocean-light",
    iconBg: "bg-ocean/10",
    iconColor: "text-ocean",
    accent: "#0D4F8B",
  },
  {
    icon: SlidersHorizontal,
    title: "Personalized Property Matching",
    description:
      "Curated condo recommendations built around your exact lifestyle goals, budget, preferred location, and must-have amenities.",
    color: "from-teal to-teal-light",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    accent: "#16A6A3",
  },
  {
    icon: Lock,
    title: "Exclusive Opportunities",
    description:
      "Access off-market listings, pre-launch opportunities, and premium properties before they appear on public platforms.",
    color: "from-gold-dark to-gold",
    iconBg: "bg-gold/10",
    iconColor: "text-gold-dark",
    accent: "#F4B400",
  },
  {
    icon: HeartHandshake,
    title: "Stress-Free Process",
    description:
      "White-glove guidance from your very first consultation straight through closing day — we handle the complexity.",
    color: "from-ocean to-teal",
    iconBg: "bg-ocean/10",
    iconColor: "text-ocean",
    accent: "#0D4F8B",
  },
  {
    icon: BarChart3,
    title: "Investment Insights",
    description:
      "Understand long-term appreciation potential, rental income projections, and HOA sustainability before you commit.",
    color: "from-teal to-ocean",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    accent: "#16A6A3",
  },
  {
    icon: Shield,
    title: "Trusted Support",
    description:
      "Dedicated specialists with your best interests protected at every stage — negotiations, inspections, and beyond.",
    color: "from-gold to-gold-dark",
    iconBg: "bg-gold/10",
    iconColor: "text-gold-dark",
    accent: "#F4B400",
  },
];

function Card3D({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), {
    stiffness: 200,
    damping: 25,
  });
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 25 });

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
        glowOpacity.set(0.15);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        glowOpacity.set(0);
      }}
      className="relative bg-white rounded-2xl p-7 shadow-card hover:shadow-luxury border border-sand-dark/60 overflow-hidden cursor-default transition-shadow duration-300 h-full"
    >
      {/* Hover glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${accent}30, transparent 70%)`,
          }}
        />
      </motion.div>

      {/* Depth shadow layer behind card */}
      <div
        style={{
          transform: "translateZ(-30px)",
          background: `${accent}20`,
        }}
        className="absolute inset-0 rounded-2xl blur-xl -z-10"
      />

      {children}
    </motion.div>
  );
}

export default function BenefitsGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="benefits" className="py-24 bg-ocean relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ocean-dark/60 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
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
            d="M0 0V30C180 60 360 70 540 62C720 54 900 22 1080 18C1260 14 1380 30 1440 40V0H0Z"
            fill="#0D4F8B"
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
            className="section-label justify-center text-gold/80"
          >
            <span className="w-8 h-px bg-gold/50 inline-block" />
            The Advantage
            <span className="w-8 h-px bg-gold/50 inline-block" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="section-heading-white max-w-2xl mx-auto mb-4"
          >
            Why Buyers Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
              Coastal Key
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-opensans text-white/55 text-lg max-w-xl mx-auto"
          >
            Premium service, unmatched local expertise, and a client-first
            approach that delivers results.
          </motion.p>
        </div>

        {/* 3D Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-container mb-16">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2 + i * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card3D accent={benefit.accent}>
                  {/* Icon */}
                  <div
                    className={`${benefit.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`w-6 h-6 ${benefit.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-montserrat font-bold text-navy text-lg mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-opensans text-navy/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Bottom gradient line */}
                  <div
                    className={`mt-5 h-0.5 w-12 bg-gradient-to-r ${benefit.color} rounded-full`}
                  />
                </Card3D>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-montserrat font-bold px-10 py-5 rounded-2xl shadow-gold-glow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-base"
          >
            Experience the Difference — Book Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
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
            d="M0 70V40C180 10 360 0 540 8C720 16 900 48 1080 52C1260 56 1380 40 1440 30V70H0Z"
            fill="#FAF8F3"
          />
        </svg>
      </div>
    </section>
  );
}
