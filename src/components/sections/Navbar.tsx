"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hide header completely on all admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Materials", href: "#materials" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-gold/20 shadow-lg ${
          scrolled ? "py-1" : "py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="group flex items-center">
            <Logo
              className={`${
                scrolled ? "h-[52px]" : "h-[68px]"
              } w-auto transition-all duration-500`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 py-2 text-charcoal-black/80 hover:text-gold group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center">
            <a
              target="_blank"
              href="https://wa.me/+919666022285?text=Hi%20Indus%20Modulars,%20I'm%20interested%20in%20booking%20a%20free%20design%20consultation%20for%20my%20home."
              className="relative inline-flex items-center justify-center px-6 py-2.5 font-sans text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-300 overflow-hidden border border-gold text-gold hover:text-white hover:bg-gold shadow-md hover:shadow-gold/20"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full border border-gold/30 hover:border-gold transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="text-charcoal-black" size={22} />
            ) : (
              <Menu className="text-charcoal-black" size={22} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-charcoal-black/98 flex flex-col justify-between pt-24 pb-12 px-8"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-2xl font-semibold tracking-wider text-warm-ivory hover:text-gold transition-colors duration-300 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={18} className="text-gold" />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <a
                target="_blank"
                href="https://wa.me/+919666022285?text=Hi%20Indus%20Modulars,%20I'm%20interested%20in%20booking%20a%20free%20design%20consultation%20for%20my%20home."
                className="w-full text-center py-4 bg-gold hover:bg-gold/90 text-charcoal-black font-semibold uppercase tracking-widest text-sm rounded-full transition-all duration-300 shadow-lg shadow-gold/20"
              >
                Book Free Consultation
              </a>
              <div className="flex items-center justify-center space-x-2 text-[10px] text-warm-ivory/40 uppercase tracking-widest font-mono">
                <ShieldCheck size={12} className="text-gold" />
                <span>10 Year Warranty Guaranteed</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
