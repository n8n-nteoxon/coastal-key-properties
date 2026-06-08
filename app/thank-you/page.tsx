"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Mail,
  Calendar,
  ClipboardList,
  MapPin,
  Home,
  Phone,
  Star,
} from "lucide-react";

const nextSteps = [
  {
    icon: Mail,
    title: "Check Your Inbox",
    description:
      "A confirmation email with all your appointment details is on its way. Check your spam folder if you don't see it.",
    color: "bg-ocean/10",
    iconColor: "text-ocean",
  },
  {
    icon: Calendar,
    title: "Add to Your Calendar",
    description:
      "Block off time for your consultation so nothing gets in the way of your condo discovery journey.",
    color: "bg-teal/10",
    iconColor: "text-teal",
  },
  {
    icon: ClipboardList,
    title: "Prepare Your Questions",
    description:
      "Write down any questions about the buying process, financing, HOA rules, or specific communities you want to explore.",
    color: "bg-gold/10",
    iconColor: "text-gold-dark",
  },
  {
    icon: MapPin,
    title: "Gather Preferred Locations",
    description:
      "Think about which Florida areas excite you most. Our specialist will help you evaluate each one during your call.",
    color: "bg-ocean/10",
    iconColor: "text-ocean",
  },
];

function SuccessParticle({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      animate={{
        opacity: 0,
        y: -80 - Math.random() * 80,
        x: (Math.random() - 0.5) * 100,
        scale: 0,
      }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className="absolute w-2 h-2 rounded-full"
      style={{
        background: ["#F4B400", "#16A6A3", "#0D4F8B"][
          Math.floor(Math.random() * 3)
        ],
        left: `${30 + Math.random() * 40}%`,
        top: "50%",
      }}
    />
  );
}

export default function ThankYouPage() {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-sand flex flex-col">
      {/* Header bar */}
      <div
        className="relative pt-8 pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D4F8B 0%, #16A6A3 100%)",
        }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "35px 35px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3 mb-10 group">
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

          {/* Success icon with particles */}
          <div className="relative inline-flex items-center justify-center mb-8">
            {particles.map((i) => (
              <SuccessParticle key={i} delay={i * 0.06} />
            ))}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl"
            >
              <CheckCircle2 className="w-14 h-14 text-teal" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-montserrat font-black text-white mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-opensans text-white/80 text-xl mb-2"
          >
            Your Consultation Has Been Confirmed
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-opensans text-white/60 text-base"
          >
            We&apos;re excited to help you find the perfect Florida condominium.
            A specialist will reach out to you shortly.
          </motion.p>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 50V30C360 10 720 0 1080 15C1260 22 1380 35 1440 42V50H0Z" fill="#FAF8F3" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        {/* Confirmation box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="bg-white rounded-3xl shadow-luxury border border-sand-dark/60 p-8 mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-teal" />
            <p className="font-montserrat font-semibold text-navy">
              Confirmation Email Sent
            </p>
          </div>
          <p className="font-opensans text-navy/60 text-sm max-w-md mx-auto">
            Check your inbox for your appointment confirmation details. If you
            don&apos;t see it within a few minutes, please check your spam folder.
          </p>
          <div className="mt-6 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-opensans text-navy/40 text-xs mt-1">
            Join 200+ happy Florida condo buyers
          </p>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <h2 className="font-montserrat font-bold text-navy text-2xl text-center mb-8">
            Here&apos;s What to Expect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean to-teal">
              Next
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {nextSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-card border border-sand-dark/60 hover:shadow-luxury hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`${step.color} w-11 h-11 rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-5 h-5 ${step.iconColor}`} />
                  </div>
                  <h3 className="font-montserrat font-bold text-navy text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="font-opensans text-navy/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="bg-ocean rounded-3xl p-8 text-center shadow-ocean-glow mb-10"
        >
          <h3 className="font-montserrat font-bold text-white text-xl mb-2">
            Can&apos;t Wait? Let&apos;s Talk Now.
          </h3>
          <p className="font-opensans text-white/70 text-base mb-6">
            Our specialists are available to answer any questions before your
            scheduled consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13055550100"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-montserrat font-bold px-7 py-3 rounded-xl shadow-gold-glow/50 hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" /> (305) 555-0100
            </a>
            <a
              href="mailto:hello@coastalkey.com"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-montserrat font-semibold px-7 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
        </motion.div>

        {/* Return home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-ocean font-montserrat font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="bg-navy py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-opensans text-white/30 text-xs">
            © {new Date().getFullYear()} Coastal Key Properties. All rights reserved.
            Licensed Florida Real Estate Brokerage.
          </p>
        </div>
      </div>
    </div>
  );
}
