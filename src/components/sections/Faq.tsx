"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What is the guaranteed delivery timeline for Indus Modulars?",
      answer: "We guarantee completion and handover of modular items within 45 working days from design sign-off. If we delay, we pay you a penalty per day as outlined in our agreement. Complete home interiors (including civil, electrical, false ceilings) take between 60 to 75 working days.",
    },
    {
      question: "What core materials do you use for modular cabinets?",
      answer: "We use only BWP (Boiling Water Proof) Marine Grade Plywood (IS 710 certified) for wet zones like the kitchen, and HDMR (High Density Moisture Resistant) boards or BWR Plywood for wardrobes and dry storage. We never use cheap MDF or Particle Boards.",
    },
    {
      question: "How is Indus Modulars different from Asian Paints, Livspace, or HomeLane?",
      answer: "Platforms like Livspace and HomeLane rely heavily on sub-contractors and template factories, leading to variable quality. Indus Modulars owns its manufacturing facility using German CNC machinery. We offer true millwork customization, premium BWP plywood as standard, and a dedicated engineering PM for every single residence, keeping execution premium and high-end.",
    },
    {
      question: "Do you charge for the initial consultation and 3D designs?",
      answer: "Our initial consultation and floor plan sketches are 100% free. Once you book with a token amount, our 3D design team creates photorealistic virtual walkthroughs of your entire home with material renders, allowing you to revise layouts until you are completely satisfied.",
    },
    {
      question: "What is the warranty coverage on your modular furniture?",
      answer: "We offer a 10-year comprehensive structural warranty against manufacturing defects, termite infestation, and delamination. Additionally, all premium hardware accessories (like Blum, Hettich, Hafele hinges) come with lifetime manufacturer warranties.",
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative vertical divider line */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-gold/5 hidden md:block" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-gold font-mono flex items-center justify-center gap-1.5">
            <HelpCircle size={14} />
            Common Queries Answered
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-charcoal-black">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto my-6" />
          <p className="text-sm text-charcoal-black/75 leading-relaxed font-light">
            Find answers to design processes, materials, payment stages, and execution timelines below.
          </p>
        </div>

        {/* 15 Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gold/15 hover:border-gold/35 rounded-2xl overflow-hidden bg-warm-ivory/20 transition-all duration-300 shadow-sm"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="font-serif text-sm md:text-base font-bold text-charcoal-black tracking-wide">
                    {idx + 1}. {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-gold text-charcoal-black" : ""
                  }`}>
                    <ChevronDown size={16} />
                  </span>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-gold/10 text-xs md:text-sm text-charcoal-black/75 leading-relaxed font-light bg-white/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
