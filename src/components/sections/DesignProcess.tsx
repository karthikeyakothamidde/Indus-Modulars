"use client";

import React from "react";
import { 
  CalendarCheck, 
  Compass, 
  Box, 
  Palette, 
  Hammer, 
  ClipboardCheck, 
  Key 
} from "lucide-react";
import { motion } from "framer-motion";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export default function DesignProcess() {
  const steps: ProcessStep[] = [
    {
      step: 1,
      title: "Free Consultation",
      description: "Discuss layouts, requirements, styles, and budget constraints with our chief designer.",
      icon: CalendarCheck,
    },
    {
      step: 2,
      title: "Site Visit",
      description: "Our engineers visit your space for precise laser measurements and structural assessments.",
      icon: Compass,
    },
    {
      step: 3,
      title: "3D Design",
      description: "Visualize details via photorealistic 3D renders. Revise details until they are perfect.",
      icon: Box,
    },
    {
      step: 4,
      title: "Material Selection",
      description: "Touch and select materials, finishes, and smart fittings at our luxury experience centers.",
      icon: Palette,
    },
    {
      step: 5,
      title: "Execution",
      description: "Modular elements are manufactured with high-precision CNC machinery and assembled on site.",
      icon: Hammer,
    },
    {
      step: 6,
      title: "Quality Inspection",
      description: "Comprehensive 50-point quality check audits level alignment, plumbing, and mechanical fittings.",
      icon: ClipboardCheck,
    },
    {
      step: 7,
      title: "Final Handover",
      description: "We hand over your keys. Step into a seamless, luxurious home backed by a 10-year warranty.",
      icon: Key,
    },
  ];

  return (
    <section id="process" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gold/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gold/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-gold font-mono">
            How We Realize Perfection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-charcoal-black">
            Our Design Process
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto my-6" />
          <p className="text-sm md:text-base text-charcoal-black/75 leading-relaxed font-light">
            Our systematic, detail-oriented design and execution pipeline ensures a hassle-free, premium delivery experience from start to finish.
          </p>
        </div>

        {/* DESKTOP TIMELINE (Visible on LG screens and up) */}
        <div className="hidden lg:block relative py-12">
          {/* Horizontal Line connecting steps */}
          <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gold/25 via-gold to-gold/25 -translate-y-1/2" />
          
          <div className="grid grid-cols-7 gap-4 relative">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center text-center space-y-4 group"
                >
                  {/* Circle Node with Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-gold/40 flex items-center justify-center text-gold shadow-lg group-hover:bg-gold group-hover:text-charcoal-black group-hover:scale-115 transition-all duration-300">
                    <IconComponent size={24} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-charcoal-black text-white text-[10px] font-mono font-bold flex items-center justify-center border border-gold/40">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Title & Details */}
                  <div className="space-y-2 max-w-[150px]">
                    <h4 className="font-serif text-sm font-bold text-charcoal-black tracking-wide group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-charcoal-black/60 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE/TABLET TIMELINE (Visible below LG screens) */}
        <div className="block lg:hidden relative pl-8 space-y-12">
          {/* Vertical Connecting Line */}
          <div className="absolute top-2 bottom-2 left-[23px] w-[1.5px] bg-gradient-to-b from-gold via-gold to-gold/20" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative flex items-start space-x-6"
              >
                {/* Node circle */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border border-gold/40 flex items-center justify-center text-gold shrink-0 shadow-md">
                  <IconComponent size={18} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-charcoal-black text-white text-[9px] font-mono font-bold flex items-center justify-center border border-gold/40">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="font-serif text-base font-bold text-charcoal-black tracking-wide">
                    {step.title}
                  </h4>
                  <p className="text-xs text-charcoal-black/70 leading-relaxed max-w-md font-light">
                    {step.description}
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
