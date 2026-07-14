"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, CalendarRange } from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  whyChooseUs: string;
}

export default function IndividualServices() {
  const serviceDetails: ServiceDetail[] = [
    {
      id: "individual-home-interior",
      title: "Home Interior",
      subtitle: "Bespoke Residential Elegance",
      description: "Modern, contemporary, and luxury home interiors tailored for every family. We balance high-end aesthetic value with daily utility, converting empty structures into spaces that reflect your personality.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Premium Living Spaces",
        "Designer False Ceilings",
        "Aesthetic Ambient Lighting",
        "Floating Media Units",
        "Bespoke Storage Solutions",
        "Smart Home Integration Ready"
      ],
      whyChooseUs: "Every square inch is engineered around your lifestyle, utilizing high-density moisture-resistant (HDMR) materials and premium designer finishes that last a lifetime.",
    },
    {
      id: "individual-kids-bedroom",
      title: "Kids Bed Room",
      subtitle: "Playful Modular Adaptability",
      description: "Creative, imaginative, and safe spaces designed to inspire learning, play, and sound sleep. Our kids' bedroom solutions are designed to grow as your children do.",
      image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Multi-functional Space-saving Beds",
        "Integrated Ergonomic Study Desks",
        "Interactive Theme Wall Accent Panels",
        "Custom Safety Toy Lockers",
        "Rounded Soft Safety Corners",
        "Eco-friendly, Non-toxic Paints"
      ],
      whyChooseUs: "We use 100% child-safe materials (CARB-certified boards) combined with modular growth frameworks that allow easy layout updates as your child gets older.",
    },
    {
      id: "individual-office-interior",
      title: "Office Interior",
      subtitle: "Executive Productivity Suites",
      description: "Ergonomic, modern, and inspiring executive environments designed to maximize focus. Perfect for executives, professionals, and remote leaders who value an elite working atmosphere.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Acoustic Wall Cladding & Dampening",
        "Custom Solid-Wood Ergonomic Desks",
        "Concealed Wire & Cable management",
        "Smart Anti-glare Ambient Lighting",
        "Bespoke Library & Bookcase layouts",
        "Executive Video-Call Backdrops"
      ],
      whyChooseUs: "Designed scientifically to optimize focus, reduce physical fatigue, and project an elite executive appearance on camera during virtual boardroom meetings.",
    },
    {
      id: "individual-modular-kitchen",
      title: "Modular Kitchen",
      subtitle: "German-Engineered Culinary Art",
      description: "Precision-engineered smart kitchens with high-tech storage and premium finishes. We design layouts that respect the golden work triangle, simplifying cooking and storage.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      features: [
        "German Soft-Close Drawer Systems",
        "Tall Pantry Units & Corner Solutions",
        "Anti-Scratch Matte Acrylic Shutters",
        "Opulent Italian Quartz Countertops",
        "Built-in Kitchen Hob & Oven Slots",
        "Smart Waste Management Cabinets"
      ],
      whyChooseUs: "Backed by our 10-year warranty, using only boiling-water-resistant (BWR) marine grade plywood frames to handle heavy moisture and heat.",
    },
    {
      id: "individual-wardrobes",
      title: "Wardrobes & Storage",
      subtitle: "Bespoke Apparel Sanctuaries",
      description: "Luxury sliding closets and walk-in wardrobes constructed with premium materials. We organize your apparel and valuables with smart dividers, velvet lining, and integrated security.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Anodized Glass Sliding Door Systems",
        "Sensor-activated Wardrobe LED Strips",
        "Integrated Digital Safe Drawers",
        "Velvet-lined Jewelry & Tie Trays",
        "Seamless Floor-to-Ceiling Height",
        "Hidden Biometric Security Cabinets"
      ],
      whyChooseUs: "Equipped with heavy-duty top-running track systems tested for 100,000 open-close cycles, keeping slide motion silent and smooth.",
    },
    {
      id: "individual-bedroom-designs",
      title: "Bedroom Designs",
      subtitle: "Serene Sleep Sanctuaries",
      description: "Serene, opulent bedrooms optimized for sensory rest, high-end comfort, and absolute privacy. Escape the noise of the city in a sanctuary built for decompression.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Custom-upholstered Full-wall Headboards",
        "Cantilevered Floating Nightstands",
        "Indirect Warm Dimmable Lighting",
        "Integrated Dressers with Led Mirrors",
        "Sound-insulated Acoustic Panels",
        "Bespoke Velvet or Linen Wall Accents"
      ],
      whyChooseUs: "We focus on human-centric bedroom design, combining sound-absorbing layouts with calming, high-end materials that promote optimal rest.",
    },
    {
      id: "individual-living-room",
      title: "Living Room Designs",
      subtitle: "Elite Social lounges",
      description: "Stunning lounge spaces designed to host guests, featuring marble TV backdrops, wood panels, and custom ceiling lines. Create a spectacular focal point for your residence.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Italian Marble Wall Panel Cladding",
        "Warm Golden Cove LED Ceilings",
        "Sleek Suspended Media Consoles",
        "Curated Glass Display Showcases",
        "Premium Natural Wood Veneer Finishes",
        "Recessed Low-glare Accent Spotlights"
      ],
      whyChooseUs: "We design living rooms that make a dramatic first impression, combining high-end luxury aesthetics with smart circulation paths to host guests comfortably.",
    },
    {
      id: "individual-dining-room",
      title: "Dining Room Designs",
      subtitle: "Luxury Gastronomical Spaces",
      description: "Warm, luxury formal dining setups curated for unforgettable culinary hosting experiences. Make every meal feel like a private fine dining affair.",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Custom Solid-wood or Marble Tables",
        "Aesthetic Floating Crockery Consoles",
        "Statement Sculptural Pendant Lighting",
        "Integrated Premium Wine Bar Slots",
        "Reflective Tinted Glass Wall Accents",
        "Smart Corner Wash Station Cabinets"
      ],
      whyChooseUs: "We optimize spatial distance between kitchen and table, integrating beautiful storage and lighting that elevates formal dining settings.",
    }
  ];

  return (
    <section className="bg-transparent py-24 relative overflow-hidden">
      {/* Decorative vertical lines representing a smart modular design structure */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-gold/5 hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-gold/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 relative z-10">
        
        {/* Service Sections */}
        {serviceDetails.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-24"
            >
              {/* Image Column */}
              <div 
                className={`lg:col-span-6 relative h-[380px] md:h-[480px] rounded-3xl overflow-hidden group shadow-xl ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Image zoom effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Light golden gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/50 via-transparent to-transparent opacity-70" />
                <div className="absolute inset-0 border border-gold/10 group-hover:border-gold/30 rounded-3xl transition-colors duration-500" />
              </div>

              {/* Text/Content Column */}
              <div 
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-2">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-gold font-mono">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-charcoal-black">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-charcoal-black/75 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Features Grid (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-t border-b border-gold/10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-xs md:text-sm text-charcoal-black/95">
                      <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/25">
                        <Check size={12} className="stroke-[2.5]" />
                      </span>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service Specific Guarantee */}
                <div className="bg-warm-ivory/50 border-l-2 border-gold p-4 rounded-r-xl flex items-start space-x-3.5">
                  <ShieldCheck size={18} className="text-gold shrink-0 mt-0.5" />
                  <p className="text-xs text-charcoal-black/80 italic leading-relaxed">
                    <span className="font-semibold text-charcoal-black not-italic block mb-0.5">Indus Signature Guarantee</span>
                    {service.whyChooseUs}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2.5 px-6 py-3.5 border border-gold text-gold hover:text-charcoal-black hover:bg-gold font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm hover:shadow-gold/20"
                  >
                    <CalendarRange size={14} />
                    <span>Schedule Consultation</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
