"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Layers, Gem, LayoutTemplate, Lightbulb } from "lucide-react";

interface MaterialItem {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  description: string;
  brands: string[];
  features: string[];
}

export default function Materials() {
  const materials: MaterialItem[] = [
    {
      id: 1,
      title: "Wood & Plywood",
      subtitle: "Structural Foundation",
      icon: Shield,
      description: "Boiling Water Resistant (BWR) marine grade plywood and High-Density Moisture-Resistant (HDMR) fiberboards engineered for heavy-duty structural durability.",
      brands: ["CenturyPly", "Greenply", "Action TESA"],
      features: ["Borer & Termite Proof", "Zero Core Gaps", "High Load Capacity"],
    },
    {
      id: 2,
      title: "Laminates & Acrylics",
      subtitle: "Aesthetic Finishes",
      icon: Layers,
      description: "Premium European anti-scratch matte laminates, luxurious high-gloss acrylic panels, and natural wood veneers for stunning surface finishes.",
      brands: ["Merino Laminates", "Stylam", "DecoWood"],
      features: ["Anti-Fingerprint", "Scratch Resistant", "UV Color Protection"],
    },
    {
      id: 3,
      title: "Quartz & Marble",
      subtitle: "Countertops & Accents",
      icon: Gem,
      description: "Engineered quartz countertops, luxury Italian marble cladding, and solid surfaces crafted for premium kitchen islands and living room focal points.",
      brands: ["KalingaStone", "Caesarstone", "Silestone"],
      features: ["Non-Porous & Hygienic", "Stain & Heat Proof", "Seamless Joinery"],
    },
    {
      id: 4,
      title: "Glass & Profile Shutters",
      subtitle: "Modern Transparency",
      icon: LayoutTemplate,
      description: "Tinted toughened glass, fluted glass screens, and slim anodized aluminum profile frames that add a contemporary, open feel to closets and kitchens.",
      brands: ["Saint-Gobain", "ModiGuard"],
      features: ["Tempered Safety Glass", "Corrosion-Free Profiles", "Soft-Close Cushions"],
    },
    {
      id: 5,
      title: "Hardware & Fittings",
      subtitle: "Seamless Motion",
      icon: Sparkles,
      description: "State-of-the-art soft-close hinges, lift-up systems, heavy-duty drawer slides, and intelligent space-saving corner modular carousel organizers.",
      brands: ["Hettich", "Hafele", "Blum"],
      features: ["100K Cycle Tested", "Smooth Whisper-Motion", "Lifetime Warranty Support"],
    },
    {
      id: 6,
      title: "Lighting & Smart Automation",
      subtitle: "Sensory Atmosphere",
      icon: Lightbulb,
      description: "Custom ambient warm LED cove lights, motion-sensor wardrobe strip lights, profile lighting, and integrated smart home automation controls.",
      brands: ["Philips", "Wipro Smart", "Osram"],
      features: ["Dimmable Profiles", "Automatic Motion Sensors", "Energy Efficient LEDs"],
    },
  ];

  return (
    <section id="materials" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-gold/5 hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-gold/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-gold font-mono">
            Uncompromising Excellence
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-charcoal-black">
            Premium Materials & Brands
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto my-6" />
          <p className="text-sm text-charcoal-black/75 leading-relaxed font-light">
            We partner with the world's leading brands to ensure that every modular unit built for your home possesses a flawless finish, smooth functionality, and decades of durability.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((mat, idx) => {
            const Icon = mat.icon;
            return (
              <motion.div
                key={mat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="bg-white border border-gold/15 rounded-3xl p-8 hover:shadow-xl hover:border-gold/45 transition-all duration-500 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Icon & Subtitle */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-gold font-mono">
                      {mat.subtitle}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-lg font-bold text-charcoal-black tracking-wide">
                      {mat.title}
                    </h3>
                    <p className="text-xs text-charcoal-black/70 leading-relaxed font-light">
                      {mat.description}
                    </p>
                  </div>

                  {/* Core Features */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {mat.features.map((feat, fidx) => (
                      <span
                        key={fidx}
                        className="text-[9px] font-semibold text-charcoal-black/60 bg-warm-ivory/60 px-2 py-1 rounded-md border border-gold/5"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Brands/Partners */}
                <div className="mt-8 pt-4 border-t border-gold/10 flex flex-col space-y-2">
                  <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-charcoal-black/40 font-mono">
                    Official Partners
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {mat.brands.map((brand, bidx) => (
                      <span
                        key={bidx}
                        className="text-[10px] font-bold text-gold font-sans tracking-wide"
                      >
                        {brand}
                        {bidx < mat.brands.length - 1 && <span className="text-charcoal-black/20 ml-2">•</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
