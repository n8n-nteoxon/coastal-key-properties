"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Vacation Home Buyer",
    location: "Miami Beach",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    quote:
      "We found our dream waterfront condo within three weeks. The process was smooth from start to finish. The Coastal Key team knew exactly what we were looking for and delivered beyond our expectations.",
    property: "Ocean Breeze Residences",
    highlight: "Found in 3 weeks",
  },
  {
    id: 2,
    name: "Robert & Linda T.",
    role: "Retirees Relocating to Florida",
    location: "Naples",
    avatar: "https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=200&q=80",
    rating: 5,
    quote:
      "They helped us avoid several costly mistakes and negotiated an incredible deal on a Naples property we love. The transparency throughout the entire process was refreshing — no surprises at closing.",
    property: "Palm Shore Estates",
    highlight: "Saved $45K in negotiations",
  },
  {
    id: 3,
    name: "Michael P.",
    role: "Real Estate Investor",
    location: "Fort Lauderdale",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    quote:
      "The best condo-buying experience we've ever had. Their market knowledge is exceptional and they found us an off-market opportunity that fit our investment criteria perfectly. Already generating strong rental income.",
    property: "Bayview Towers",
    highlight: "18% rental yield",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section ref={ref} id="testimonials" className="py-24 bg-sand relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-80 h-80 bg-teal/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-ocean/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label justify-center"
          >
            <span className="w-8 h-px bg-teal inline-block" />
            Client Stories
            <span className="w-8 h-px bg-teal inline-block" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="section-heading mb-4"
          >
            What Our Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean to-teal">
              Say
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-1 mb-2"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-opensans text-navy/50 text-sm"
          >
            Rated 5 stars by 200+ satisfied Florida condo buyers
          </motion.p>
        </div>

        {/* Desktop: All 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-3xl p-8 shadow-card hover:shadow-luxury border border-sand-dark/60 hover:border-teal/30 transition-all duration-400 hover:-translate-y-2 flex flex-col"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-ocean/10 rounded-xl flex items-center justify-center mb-5">
                <Quote className="w-5 h-5 text-ocean" />
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <blockquote className="font-opensans text-navy/70 text-base leading-relaxed mt-4 mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 bg-teal/10 text-teal border border-teal/20 rounded-full px-3 py-1 text-xs font-montserrat font-semibold mb-5 w-fit">
                ✦ {t.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-sand-dark">
                <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-sand-dark">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-montserrat font-bold text-navy text-sm">{t.name}</p>
                  <p className="font-opensans text-navy/50 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <p className="font-opensans text-teal text-xs font-medium">{t.property}</p>
                  <p className="font-opensans text-navy/40 text-xs">{t.location}, FL</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-7 shadow-card border border-sand-dark/60"
              >
                <div className="w-10 h-10 bg-ocean/10 rounded-xl flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-ocean" />
                </div>
                <StarRating count={testimonials[active].rating} />
                <blockquote className="font-opensans text-navy/70 text-base leading-relaxed mt-4 mb-5">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>
                <div className="inline-flex items-center gap-2 bg-teal/10 text-teal border border-teal/20 rounded-full px-3 py-1 text-xs font-montserrat font-semibold mb-5">
                  ✦ {testimonials[active].highlight}
                </div>
                <div className="flex items-center gap-3 pt-5 border-t border-sand-dark">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[active].avatar}
                      alt={testimonials[active].name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-navy text-sm">
                      {testimonials[active].name}
                    </p>
                    <p className="font-opensans text-navy/50 text-xs">
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-sand-dark bg-white flex items-center justify-center hover:bg-ocean hover:text-white hover:border-ocean transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-ocean w-6" : "bg-sand-dark"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-sand-dark bg-white flex items-center justify-center hover:bg-ocean hover:text-white hover:border-ocean transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
