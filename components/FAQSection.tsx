"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you charge buyers for your services?",
    answer:
      "No — our services are completely free to buyers. As your buyer's agent, we are compensated by the seller at closing. You receive expert guidance, exclusive access to listings, skilled negotiation, and full transaction support at zero cost to you.",
  },
  {
    question: "Can you help with investment properties and rental condos?",
    answer:
      "Absolutely. Investment property is one of our specialties. We analyze properties for rental yield, HOA rental policies, short-term vs. long-term rental potential, and long-term appreciation. We help investors build portfolios with strong fundamentals.",
  },
  {
    question: "What areas of Florida do you serve?",
    answer:
      "We serve all of Florida's premier coastal markets including Miami Beach, Fort Lauderdale, Boca Raton, Palm Beach, Naples, Sarasota, Tampa Bay, and the Florida Keys. If you have a specific area in mind, we either cover it directly or have trusted partners who do.",
  },
  {
    question: "How long does the condo-buying process typically take?",
    answer:
      "The timeline varies based on market conditions, financing type, and how quickly you find your ideal property. With our curated approach, buyers typically go under contract within 4–8 weeks of their first consultation. Closing usually takes 30–45 days from contract execution.",
  },
  {
    question: "Can you assist buyers relocating from another state?",
    answer:
      "Yes — remote and relocation buyers are a significant part of our clientele. We offer virtual tours, digital documentation, video walkthroughs, and dedicated remote buyer support. Many of our clients have successfully purchased their Florida condo without stepping foot in the state until they picked up their keys.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-ocean/30 bg-white shadow-card"
          : "border-sand-dark bg-white/50 hover:border-ocean/20 hover:bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-montserrat font-semibold text-navy text-base pr-4">
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? "bg-ocean text-white" : "bg-sand-dark text-navy/50"
          }`}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-sand-dark mb-4" />
              <p className="font-opensans text-navy/65 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="py-24 bg-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ocean/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label justify-center"
          >
            <span className="w-8 h-px bg-teal inline-block" />
            FAQ
            <span className="w-8 h-px bg-teal inline-block" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="section-heading mb-4"
          >
            Common Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean to-teal">
              Answered
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-opensans text-navy/60 text-lg"
          >
            Everything you need to know before starting your Florida condo search.
          </motion.p>
        </div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Bottom prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-6 border border-sand-dark shadow-card">
            <p className="font-montserrat font-semibold text-navy mb-1">
              Still have questions?
            </p>
            <p className="font-opensans text-navy/55 text-sm mb-4">
              Our specialists are happy to answer any questions about the
              Florida condo buying process.
            </p>
            <a
              href="tel:+13055550100"
              className="inline-flex items-center gap-2 text-ocean font-montserrat font-semibold hover:text-teal transition-colors"
            >
              Call us: (305) 555-0100
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
