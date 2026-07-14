"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, Users, Heart } from "lucide-react";

interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<any>;
}

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gold">
      {count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const stats: StatItem[] = [
    {
      id: 1,
      value: 1500,
      suffix: "+",
      label: "Completed Projects",
      icon: Briefcase,
    },
    {
      id: 2,
      value: 12,
      suffix: "+",
      label: "Years Experience",
      icon: Award,
    },
    {
      id: 3,
      value: 1000,
      suffix: "+",
      label: "Happy Clients",
      icon: Users,
    },
    {
      id: 4,
      value: 50,
      suffix: "+",
      label: "Expert Designers",
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 bg-charcoal-black relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="glass-panel-dark border border-gold/25 p-12 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Inner border element */}
          <div className="absolute inset-2 border border-gold/10 rounded-2xl pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 text-center">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center space-y-4"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shadow-md">
                    <IconComponent size={20} />
                  </div>
                  
                  {/* Counter value */}
                  <div className="flex flex-col space-y-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-warm-ivory/60 font-semibold pt-1">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
