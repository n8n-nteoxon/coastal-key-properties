"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 500,
    suffix: "+",
    label: "Properties Sold",
    description: "Across Florida",
    color: "text-ocean",
    bg: "bg-ocean/10",
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "5-star rated service",
    color: "text-teal",
    bg: "bg-teal/10",
  },
  {
    icon: Award,
    value: 12,
    suffix: "+",
    label: "Years Experience",
    description: "In Florida market",
    color: "text-gold-dark",
    bg: "bg-gold/10",
  },
  {
    icon: Clock,
    value: 2,
    suffix: "B+",
    label: "In Total Sales",
    prefix: "$",
    description: "Closed transactions",
    color: "text-ocean",
    bg: "bg-ocean/10",
  },
];

function AnimatedCount({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
  started,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 bg-sand relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-luxury transition-all duration-400 hover:-translate-y-1 border border-sand-dark/50 flex flex-col items-center text-center">
                  <div
                    className={`${stat.bg} p-3 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p
                    className={`font-montserrat font-black text-3xl lg:text-4xl ${stat.color} leading-none mb-1`}
                  >
                    <AnimatedCount
                      target={stat.value}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix}
                      started={inView}
                      duration={1800}
                    />
                  </p>
                  <p className="font-montserrat font-bold text-navy text-sm mt-1">
                    {stat.label}
                  </p>
                  <p className="font-opensans text-navy/50 text-xs mt-0.5">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
