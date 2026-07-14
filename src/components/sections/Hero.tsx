"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({ name: "", phone: "", city: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.city) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", phone: "", city: "" });
      }, 5000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-charcoal-black">
      {/* Background Image with elegant overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Dark luxury radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-black via-charcoal-black/75 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Hero content container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left Side: Headline & Description */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 border border-gold/40 bg-gold/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Elite Living Spaces
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Luxury Interior <br />
              <span className="text-gold font-normal italic">Design Services</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base md:text-lg text-warm-ivory/80 max-w-xl leading-relaxed font-light"
          >
            We transform ordinary spaces into timeless interiors crafted around your lifestyle. Welcome to Indus Modulars—where smart modularity meets seamless luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              target="_blank"
              href="https://wa.me/+919666022285?text=Hi%20Indus%20Modulars,%20I'm%20interested%20in%20booking%20a%20free%20design%20consultation%20for%20my%20home."
              className="px-8 py-4 bg-gold hover:bg-gold/90 text-charcoal-black font-semibold text-xs uppercase tracking-widest rounded-full text-center shadow-lg shadow-gold/25 hover:shadow-gold/45 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Free Consultation
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border border-white/30 hover:border-gold text-white hover:text-gold font-semibold text-xs uppercase tracking-widest rounded-full text-center backdrop-blur-sm hover:bg-white/5 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>

        {/* Right Side: Floating Glassmorphism Appointment Card */}
        {/*<motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
        >
          <div className="glass-card-gold p-8 rounded-3xl relative overflow-hidden">
            {/* Ambient glows inside card }
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-deep-red/10 rounded-full blur-2xl" />

            <div className="text-center mb-6">
              <Calendar className="mx-auto text-gold mb-2" size={28} />
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                Free Consultation
              </h3>
              <p className="text-xs text-warm-ivory/60 mt-1 uppercase tracking-wider">
                Schedule your session today
              </p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mx-auto text-gold bg-gold/10">
                  ✓
                </div>
                <h4 className="font-serif text-lg font-semibold text-white">Thank You!</h4>
                <p className="text-xs text-warm-ivory/70 leading-relaxed">
                  Your luxury design request is received. One of our lead creative designers will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name }
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold">
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-warm-ivory/40 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
                    required
                  />
                </div>

                {/* Phone }
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold">
                    <Phone size={16} />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-warm-ivory/40 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
                    required
                  />
                </div>

                {/* City }
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold">
                    <MapPin size={16} />
                  </span>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="w-full bg-white/5 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-warm-ivory/40 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
                    required
                  />
                </div>

                {/* Submit button }
                <button
                  type="submit"
                  className="w-full py-4 bg-gold hover:bg-gold/90 text-charcoal-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-md hover:shadow-gold/20"
                >
                  <span>Get Quote</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}

            <div className="mt-5 text-center">
              <span className="text-[10px] text-warm-ivory/40 uppercase tracking-widest font-mono">
                100% Secure & Private • No Obligation
              </span>
            </div>
          </div>
        </motion.div>*/}
      </div>

      {/* Decorative luxury line design on scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-[9px] uppercase tracking-[0.25em] text-warm-ivory/40 font-mono mb-2">
          Scroll to explore
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
