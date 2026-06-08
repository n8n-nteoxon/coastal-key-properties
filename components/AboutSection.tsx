"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Users, TrendingUp, ArrowRight } from "lucide-react";

const highlights = [
  "Client-first philosophy — your goals drive every decision",
  "Extensive network of Florida developers and sellers",
  "Expert negotiators who consistently deliver results",
  "Full-service support from consultation through closing",
];

const pillars = [
  { icon: Award, label: "Award-Winning", sub: "Service Excellence" },
  { icon: Users, label: "200+", sub: "Happy Clients" },
  { icon: TrendingUp, label: "Top 1%", sub: "Florida Agents" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D4F8B 0%, #1A2333 50%, #093C6B 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gold/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
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
            fill="#0D4F8B"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=85"
                alt="Florida coastline luxury condos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4">
                  <p className="font-montserrat font-bold text-white text-sm mb-1">
                    Coastal Key Properties
                  </p>
                  <p className="font-opensans text-white/70 text-xs">
                    Serving all of Florida&apos;s premier coastal markets
                  </p>
                  <div className="flex gap-2 mt-3">
                    {["Miami", "Naples", "Ft. Lauderdale", "Sarasota"].map((city) => (
                      <span
                        key={city}
                        className="bg-white/15 text-white text-xs px-2 py-0.5 rounded-full font-montserrat"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating pillars */}
            <div className="absolute -right-6 top-8 flex flex-col gap-3">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                    className="bg-white rounded-xl p-3 shadow-luxury flex items-center gap-3 w-44 float-card"
                    style={{ animationDelay: `${i * 0.8}s` }}
                  >
                    <div className="w-8 h-8 bg-ocean/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-ocean" />
                    </div>
                    <div>
                      <p className="font-montserrat font-black text-navy text-sm leading-none">
                        {pillar.label}
                      </p>
                      <p className="font-opensans text-navy/50 text-xs mt-0.5">
                        {pillar.sub}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label text-gold/80">
              <span className="w-6 h-px bg-gold/50 inline-block" />
              About Us
            </p>

            <h2 className="section-heading-white mb-6">
              Your Trusted Florida{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
                Condo Specialists
              </span>
            </h2>

            <div className="space-y-4 font-opensans text-white/65 text-base leading-relaxed mb-8">
              <p>
                Our mission is simple:{" "}
                <span className="text-white font-medium">
                  help buyers find exceptional Florida condominiums
                </span>{" "}
                while making the process transparent, straightforward, and
                stress-free.
              </p>
              <p>
                With extensive market knowledge and a genuine client-first
                philosophy, Coastal Key Properties provides expert guidance from
                your very first consultation straight through closing day — and
                beyond.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-opensans text-white/75 text-sm">{item}</span>
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
                className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-montserrat font-bold px-8 py-4 rounded-xl shadow-gold-glow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Meet Our Team
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
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
