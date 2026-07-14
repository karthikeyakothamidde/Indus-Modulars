"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";

export default function ConsultationBanner() {
  return (
    <section className="py-24 bg-charcoal-black text-warm-ivory relative overflow-hidden">
      {/* Background Image with Parallax & Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Golden vignette radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black via-charcoal-black/75 to-charcoal-black z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-20 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-gold font-mono">
            Elevate Your Resident Standard
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Let's Design Your <br />
            <span className="text-gold italic font-normal">Dream Home</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto my-6" />
          <p className="text-sm md:text-base text-warm-ivory/80 max-w-xl mx-auto leading-relaxed font-light">
            Take the first step toward modular perfection. Book a free consultation with our award-winning designers today and receive a preliminary 2D floor plan sketch.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            target="_blank"
            href="https://wa.me/+919666022285?text=Hi%20Indus%20Modulars,%20I'm%20interested%20in%20booking%20a%20free%20design%20consultation%20for%20my%20home."
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 bg-gold hover:bg-gold/90 text-charcoal-black font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-gold/25 hover:shadow-gold/45 transform hover:-translate-y-0.5"
          >
            <CalendarCheck size={14} />
            <span>Book Consultation</span>
          </a>
          <a
            target="_blank"
            href="tel:+919666022285"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 border border-white/20 hover:border-gold text-white hover:text-gold font-semibold text-xs uppercase tracking-widest rounded-full backdrop-blur-sm hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Phone size={14} />
            <span>Call Now</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
