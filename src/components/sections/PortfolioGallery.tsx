"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Eye } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string; // "Kitchen" | "Bedroom" | "Living Room" | "Office" | "Wardrobes" | "Dining"
  image: string;
  size: "small" | "medium" | "large"; // height classes
}

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ["All", "Kitchen", "Bedroom", "Living Room", "Office", "Wardrobes", "Dining"];
  const publicPathPrefix = (process.env.PUBLIC_URL || process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
  const withPublicPath = (path: string) => path.startsWith("http") ? path : `${publicPathPrefix}${path}`;

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Gilded Glossy Modular Kitchen",
      category: "Kitchen",
      image:  withPublicPath("/project-kitchen-1.png"),
      size: "medium",
    },
    {
      id: 2,
      title: "Royal Velvet Master Bedroom",
      category: "Bedroom",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      size: "large",
    },
    {
      id: 3,
      title: "Bespoke Walnut TV Console & Lounge",
      category: "Living Room",
      image:  withPublicPath("/project-living-1.jpg"),
      size: "small",
    },
    {
      id: 4,
      title: "Executive Penthouse Office",
      category: "Office",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      size: "medium",
    },
    {
      id: 5,
      title: "Elegant Tall Modular Wardrobe",
      category: "Wardrobes",
      image:  withPublicPath("/project-wardrobe-1.png"),
      size: "large",
    },
    {
      id: 6,
      title: "Modern Gold Dining Space",
      category: "Dining",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80",
      size: "medium",
    },
    {
      id: 8,
      title: "Curved Pattern Sliding Wardrobe",
      category: "Wardrobes",
      image:  withPublicPath("/project-wardrobe-2.png"),
      size: "medium",
    },
    {
      id: 9,
      title: "Luxury Gilded Social Hall",
      category: "Living Room",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      size: "large",
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-deep-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-gold font-mono">
            Bespoke Portfolios
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-charcoal-black">
            Premium Portfolio Gallery
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto my-6" />
          <p className="text-sm md:text-base text-charcoal-black/75 leading-relaxed font-light">
            Browse our curated collection of luxury modular handovers across elite residences in Hyderabad and beyond.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border cursor-pointer ${
                activeFilter === category
                  ? "bg-charcoal-black border-charcoal-black text-gold shadow-md"
                  : "bg-white/40 border-gold/20 text-charcoal-black hover:border-gold hover:text-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stable Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedImage(project.image)}
                className="relative h-[320px] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl hover:shadow-gold/15 bg-charcoal-black cursor-pointer border border-gold/10"
              >
                {/* Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-500" />

                {/* Luxury Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                  {/* Top-Right visual action icon */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(project.image);
                    }}
                    className="self-end w-10 h-10 rounded-full bg-gold/90 border border-gold flex items-center justify-center text-charcoal-black shadow-lg shadow-gold/25 translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-500 cursor-pointer hover:bg-gold hover:scale-105"
                  >
                    <Eye size={18} />
                  </button>

                  {/* Bottom details with glass back */}
                  <div className="w-full p-5 rounded-2xl glass-panel-dark border border-gold/20 translate-y-[10px] group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-gold font-mono">
                      {project.category}
                    </span>
                    <h4 className="font-serif text-base font-bold text-white tracking-wide">
                      {project.title}
                    </h4>
                    <span className="inline-flex items-center space-x-1 text-[9px] uppercase tracking-widest font-bold text-gold/80 hover:text-white transition-colors duration-300">
                      <span>View Project</span>
                      <Plus size={10} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox / Zoom Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-55 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors duration-300 cursor-pointer"
            >
              <Plus size={24} className="rotate-45" />
            </button>

            {/* Expanded Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()} // prevent closing on image click
              className="relative max-w-5xl w-full h-[60vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-gold/20 cursor-default"
            >
              <img
                src={selectedImage}
                alt="Selected portfolio item"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
