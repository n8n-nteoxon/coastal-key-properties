"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin, Bed, Bath, Star } from "lucide-react";

const floatingCards = [
  {
    id: 1,
    name: "Ocean Breeze Residences",
    location: "Miami Beach, FL",
    price: "$1.2M",
    beds: 3,
    baths: 2,
    badge: "Just Listed",
    badgeColor: "bg-teal text-white",
    delay: 0.6,
    animClass: "float-card",
  },
  {
    id: 2,
    name: "Bayview Towers",
    location: "Fort Lauderdale, FL",
    price: "$875K",
    beds: 2,
    baths: 2,
    badge: "Hot Deal",
    badgeColor: "bg-gold text-navy",
    delay: 1.0,
    animClass: "float-card-2",
  },
  {
    id: 3,
    name: "Palm Shore Estates",
    location: "Naples, FL",
    price: "$2.4M",
    beds: 4,
    baths: 3,
    badge: "Luxury",
    badgeColor: "bg-ocean text-white",
    delay: 1.4,
    animClass: "float-card-3",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const lineVariants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden hero-grain"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-[1.15] will-change-transform"
      >
        <Image
          src="/images/hero-collage.jpg"
          alt="Luxury Florida Condominiums"
          fill
          className="object-cover object-center"
          priority
          quality={95}
          sizes="100vw"
        />
      </motion.div>

      {/* Multi-layer gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ocean/90 via-ocean/60 to-ocean/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-transparent h-32" />

      {/* Mesh gradient accent */}
      <div className="absolute top-20 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gold rounded-full blur-[100px] opacity-20" />
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 flex flex-col xl:flex-row items-center gap-16"
      >
        {/* Left: Text Content */}
        <div className="flex-1 max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-7"
          >
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-montserrat font-medium">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Florida&apos;s Premier Condo Specialists
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Headline with per-line reveal */}
          <div className="mb-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-1"
            >
              {[
                { text: "Find Your", className: "text-white" },
                { text: "Place in", className: "text-white" },
                {
                  text: "Paradise.",
                  className: "text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300",
                },
              ].map((line, i) => (
                <div key={i} className="overflow-hidden leading-none">
                  <motion.h1
                    variants={lineVariants}
                    className={`font-montserrat font-black leading-[0.92] tracking-tight ${line.className}`}
                    style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)" }}
                  >
                    {line.text}
                  </motion.h1>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="text-white/75 font-opensans text-lg lg:text-xl leading-relaxed mb-4 max-w-lg"
          >
            Discover premium Florida condominiums with expert guidance that makes
            buying{" "}
            <span className="text-white font-medium">
              simple, stress-free, and rewarding
            </span>
            .
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="text-white/55 font-opensans text-base leading-relaxed mb-10 max-w-lg"
          >
            Whether you&apos;re searching for a vacation property, investment opportunity,
            waterfront retreat, or your forever home — our specialists find the
            perfect condo at the right price.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/book"
              className="group relative inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-montserrat font-bold text-base px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-gold/40 hover:shadow-xl hover:shadow-gold/50 hover:-translate-y-1 active:translate-y-0"
            >
              <span className="absolute -inset-[3px] rounded-[inherit] border-2 border-gold/60 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300" />
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <button className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-montserrat font-semibold text-base px-8 py-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
              View Available Properties
            </button>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.7 }}
            className="flex items-center gap-6 mt-10 pt-8 border-t border-white/15"
          >
            {[
              { value: "500+", label: "Properties Sold" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "$2B+", label: "In Sales" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-montserrat font-black text-xl text-white leading-none">
                  {stat.value}
                </p>
                <p className="font-opensans text-white/50 text-xs mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Floating 3D Cards */}
        <div className="hidden xl:flex flex-col gap-5 flex-shrink-0 w-72">
          {floatingCards.map((card) => (
            <FloatingPropertyCard key={card.id} card={card} />
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/40 text-xs font-montserrat uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
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

function FloatingPropertyCard({
  card,
}: {
  card: (typeof floatingCards)[0];
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: card.delay,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`${card.animClass} glass rounded-2xl p-4 cursor-default shadow-2xl`}
    >
      {/* Card header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-montserrat font-bold text-white text-sm leading-tight">
            {card.name}
          </p>
          <p className="font-opensans text-white/55 text-xs mt-0.5 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {card.location}
          </p>
        </div>
        <span
          className={`${card.badgeColor} text-xs font-montserrat font-semibold px-2 py-0.5 rounded-full flex-shrink-0`}
        >
          {card.badge}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-white/15 my-3" />

      {/* Price + Details */}
      <div className="flex items-center justify-between">
        <span className="font-montserrat font-black text-gold text-lg">
          {card.price}
        </span>
        <div className="flex items-center gap-3 text-white/55 text-xs font-opensans">
          <span className="flex items-center gap-1">
            <Bed className="w-3.5 h-3.5" /> {card.beds} bd
          </span>
          <span className="flex items-center gap-1">
            <Bath className="w-3.5 h-3.5" /> {card.baths} ba
          </span>
        </div>
      </div>

      {/* 3D depth shadow layer */}
      <div
        style={{ transform: "translateZ(-20px)" }}
        className="absolute inset-0 rounded-2xl bg-ocean/30 blur-xl -z-10"
      />
    </motion.div>
  );
}
