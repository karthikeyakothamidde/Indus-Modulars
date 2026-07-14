"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      
      if (scrollHeight > 0) {
        setScrollProgress((scrolled / scrollHeight) * 100);
      }
      
      if (scrolled > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappNumber = "+919666022285";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Indus%20Modulars,%20I'm%20interested%20in%20booking%20a%20free%20design%20consultation%20for%20my%20home.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4 items-end">
      {/* WhatsApp Floating Button with Luxury Styling */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-lg shadow-black/35 transition-all duration-300"
      >
        <span className="absolute right-full mr-3 bg-charcoal-black/90 border border-gold/30 text-warm-ivory text-xs px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none tracking-wider uppercase font-semibold font-sans">
          WhatsApp Designer
        </span>
        <MessageCircle size={22} className="fill-white" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366]/30 -z-10 animate-ping" />
      </motion.a>

      {/* Circular Progress Scroll to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-charcoal-black hover:bg-charcoal-light border border-gold/30 text-gold shadow-lg cursor-pointer transition-colors duration-300"
            aria-label="Back to top"
          >
            {/* SVG circular progress indicator */}
            <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white/10"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-gold"
                strokeWidth="1.5"
                strokeDasharray={`${scrollProgress}, 100`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
