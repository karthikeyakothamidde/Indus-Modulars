"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Home, 
  Smile, 
  Briefcase, 
  ChefHat, 
  Inbox, 
  BedDouble, 
  Tv, 
  UtensilsCrossed, 
  ArrowRight 
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<any>;
  anchor: string;
}

export default function ServicesOverview() {
  const services: ServiceItem[] = [
    {
      id: "home-interior",
      title: "Home Interior",
      description: "Complete bespoke luxury home transformations designed to balance style and everyday utility.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      icon: Home,
      anchor: "#individual-home-interior",
    },
    {
      id: "kids-bedroom",
      title: "Kids Bed Room",
      description: "Creative, imaginative, and safe spaces that grow dynamically with your children.",
      image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80",
      icon: Smile,
      anchor: "#individual-kids-bedroom",
    },
    {
      id: "office-interior",
      title: "Office Interior",
      description: "Ergonomic, modern, and inspiring executive environments designed to maximize collaboration.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      icon: Briefcase,
      anchor: "#individual-office-interior",
    },
    {
      id: "modular-kitchen",
      title: "Modular Kitchen",
      description: "Precision-engineered smart kitchens with high-tech storage and premium gold-accented finishes.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      icon: ChefHat,
      anchor: "#individual-modular-kitchen",
    },
    {
      id: "wardrobes",
      title: "Wardrobes",
      description: "Bespoke sliding closets and luxury walk-in wardrobes with soft-close sensory technology.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
      icon: Inbox,
      anchor: "#individual-wardrobes",
    },
    {
      id: "bedroom-designs",
      title: "Bedroom Designs",
      description: "Serene, opulent bedrooms optimized for sensory rest and acoustic privacy.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      icon: BedDouble,
      anchor: "#individual-bedroom-designs",
    },
    {
      id: "living-room",
      title: "Living Room Designs",
      description: "Stunning lounge spaces designed to host guests, featuring accent TV backdrops and custom ceiling lines.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      icon: Tv,
      anchor: "#individual-living-room",
    },
    {
      id: "dining-room",
      title: "Dining Room Designs",
      description: "Warm, luxury formal dining setups curated for unforgettable culinary hosting experiences.",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80",
      icon: UtensilsCrossed,
      anchor: "#individual-dining-room",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-deep-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-gold font-mono">
            Elevated Living Architectures
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-charcoal-black">
            Our Interior Design Services
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto my-6" />
          <p className="text-sm md:text-base text-charcoal-black/75 leading-relaxed font-light">
            From initial sketch to material handover, we create bespoke luxury interiors that harmonize absolute elegance, bespoke comfort, and smart functionality.
          </p>
        </div>

        {/* 2 Rows x 4 Columns Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative h-[420px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-gold/15 transition-all duration-500 bg-charcoal-black"
              >
                {/* Image Zoom Container */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Dark Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:from-charcoal-black group-hover:via-charcoal-black/60 group-hover:to-black/30 transition-all duration-500" />
                
                {/* Gold Highlight Border on Hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 rounded-3xl transition-colors duration-500" />

                {/* Card Content (Bottom Aligned Glassmorphism Panel) */}
                <div className="absolute inset-x-4 bottom-4 p-5 rounded-2xl glass-panel-dark transition-all duration-500 translate-y-6 group-hover:translate-y-0 flex flex-col justify-end min-h-[160px] group-hover:min-h-[190px]">
                  
                  {/* Floating Icon */}
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-3 group-hover:bg-gold group-hover:text-charcoal-black transition-all duration-500">
                    <IconComponent size={18} />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white tracking-wide mb-1">
                    {service.title}
                  </h3>

                  <p className="text-xs text-warm-ivory/60 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500 mb-4 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden">
                    {service.description}
                  </p>

                  <a 
                    href={service.anchor}
                    className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest font-bold text-gold hover:text-white transition-colors duration-300"
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
