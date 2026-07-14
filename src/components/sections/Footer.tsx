"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");

  // Hide footer completely on all admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }
  const [subscribed, setSubsubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubsubscribed(true);
      setEmail("");
      setTimeout(() => setSubsubscribed(false), 5000);
    }
  };

  const servicesLinks = [
    { name: "Modular Kitchen", href: "#individual-modular-kitchen" },
    { name: "Home Interior", href: "#individual-home-interior" },
    { name: "Wardrobes & Storage", href: "#individual-wardrobes" },
    { name: "Living Room Designs", href: "#individual-living-room" },
    { name: "Bedroom Designs", href: "#individual-bedroom-designs" },
    { name: "Kids Bedroom", href: "#individual-kids-bedroom" },
    { name: "Office Interiors", href: "#individual-office-interior" },
    { name: "Dining Room Designs", href: "#individual-dining-room" },
  ];

  const quickLinks = [
    { name: "Our Services Overview", href: "#services" },
    { name: "Design Process", href: "#process" },
    { name: "Portfolio Gallery", href: "#portfolio" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Client Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <footer className="bg-white border-t border-gold/20 text-charcoal-black/80 pt-20 pb-10 relative overflow-hidden">
      {/* Subtle gold vector gradient overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 relative z-10">
        
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-2 space-y-6">
          <Logo className="w-44 h-44 !items-start" />
          
          <p className="text-sm text-charcoal-black/60 leading-relaxed max-w-sm">
            Indus Modulars is a Hyderabad-based modular interiors company delivering premium, factory-made solutions for homes and commercial spaces. Specializing in modular kitchens, wardrobes, storage units, and TV panels, we partner with designers and contractors for seamless execution. With 15+ years of manufacturing expertise and advanced precision machinery, we ensure global-standard finishes, faster delivery, and durable, space-efficient designs beyond traditional carpentry.
          </p>
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/indus_modulars_and_interiors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center text-charcoal-black/80 hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Follow Indus Modulars on Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div className="space-y-6">
          <h4 className="font-serif text-lg font-semibold tracking-wider text-gold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[1px] after:bg-gold">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            {servicesLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-gold text-xs">➔</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="space-y-6">
          <h4 className="font-serif text-lg font-semibold tracking-wider text-gold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[1px] after:bg-gold">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-gold text-xs">➔</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Working Hours */}
        <div className="space-y-6">
          <h4 className="font-serif text-lg font-semibold tracking-wider text-gold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[1px] after:bg-gold">
            Working Hours
          </h4>
          <div className="pt-2 space-y-3 text-xs text-charcoal-black/60">
            <div className="flex items-start space-x-2">
              <Clock size={16} className="text-gold mt-0.5 shrink-0" />
              <div className="space-y-1.5 text-[11px] leading-relaxed">
                <p><span className="font-semibold text-charcoal-black">Monday</span> 9 am–6 pm</p>
                <p><span className="font-semibold text-charcoal-black">Tuesday</span> 9 am–6 pm</p>
                <p><span className="font-semibold text-charcoal-black">Wednesday</span> 9 am–12 am</p>
                <p><span className="font-semibold text-charcoal-black">Thursday</span> 12–6 am, 9 am–6 pm</p>
                <p><span className="font-semibold text-charcoal-black">Friday</span> 9 am–6 pm</p>
                <p><span className="font-semibold text-charcoal-black">Saturday</span> 9 am–6 pm</p>
                <p><span className="font-semibold text-charcoal-black">Sunday</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mid Info Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-b border-gold/10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-xs text-charcoal-black/60">
        <div className="flex items-center space-x-3">
          <MapPin size={18} className="text-gold shrink-0" />
          <p>B-12-15/7A, IDA PHASE - 1, Patancheruvu, Hyderabad, Telangana 502319</p>
        </div>
        <div className="flex items-center space-x-3">
          <Phone size={18} className="text-gold shrink-0" />
          <p>+91 96660 22285</p>
        </div>
        <div className="flex items-center space-x-3">
          <Mail size={18} className="text-gold shrink-0" />
          <p>indusmodulars@gmail.com</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-xs text-charcoal-black/50">
        <p>&copy; {new Date().getFullYear()} Indus Modulars. All Rights Reserved. Crafted for elite modular living.</p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
          <div className="flex items-center space-x-1.5 text-gold/60 font-mono">
            <ShieldCheck size={12} />
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
