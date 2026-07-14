"use client";

import { motion, Variants } from "framer-motion";
import { 
  DraftingCompass, 
  Crown, 
  Coins, 
  ShieldCheck, 
  CalendarCheck, 
  Key, 
  Layers, 
  UserCheck 
} from "lucide-react";

interface GuaranteeItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export default function WhyChooseUs() {
  const guarantees: GuaranteeItem[] = [
    {
      id: 1,
      title: "Customized Designs",
      description: "No two homes are alike. We build bespoke custom furniture layouts mapped exactly to your daily habits and preferences.",
      icon: DraftingCompass,
    },
    {
      id: 2,
      title: "Premium Materials",
      description: "We use only BWP Marine Plywood, European hardware, and premium acrylics/veneers with anti-scratch coating.",
      icon: Crown,
    },
    {
      id: 3,
      title: "Transparent Pricing",
      description: "Receive a detailed line-item quote with zero hidden charges. Pay only for what you choose.",
      icon: Coins,
    },
    {
      id: 4,
      title: "10 Year Warranty",
      description: "Our high-precision manufacturing gives us the confidence to offer a 10-year comprehensive structural warranty.",
      icon: ShieldCheck,
    },
    {
      id: 5,
      title: "On-Time Delivery",
      description: "We guarantee delivery within 45 working days of design sign-off, or we pay you penalties per day.",
      icon: CalendarCheck,
    },
    {
      id: 6,
      title: "End-to-End Execution",
      description: "We manage civil work, plumbing, false ceiling, painting, and modular assembly under a single point of responsibility.",
      icon: Key,
    },
    {
      id: 7,
      title: "3D Visualization",
      description: "See your kitchen and bedroom in virtual reality and photorealistic 3D rendering before manufacturing begins.",
      icon: Layers,
    },
    {
      id: 8,
      title: "Dedicated Project Manager",
      description: "A single certified interior engineer oversees your project site daily and provides weekly photo updates.",
      icon: UserCheck,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
  };

  return (
    <section id="why-choose-us" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background visual geometry */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gold/[0.02] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gold/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-gold font-mono">
            Uncompromising Excellence
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-charcoal-black">
            Why Choose Indus Modulars
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto my-6" />
          <p className="text-sm md:text-base text-charcoal-black/75 leading-relaxed font-light">
            We reject the typical compromises of modular interior execution. Every element of our delivery system is structured around speed, quality, and complete transparency.
          </p>
        </div>

        {/* Guarantees 8-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {guarantees.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative p-8 bg-warm-ivory/30 border border-gold/15 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gold/10 flex flex-col justify-between"
              >
                {/* Gold corner accent line on hover */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-gold/45 rounded-tr-3xl transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-gold/45 rounded-bl-3xl transition-colors duration-500" />

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal-black transition-all duration-500">
                    <IconComponent size={20} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-charcoal-black tracking-wide group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs md:text-sm text-charcoal-black/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
