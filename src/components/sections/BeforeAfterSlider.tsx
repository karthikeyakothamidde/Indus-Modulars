"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronsLeftRight, Sparkles } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage: 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  // Add global mouse up listener to cancel dragging
  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-charcoal-black text-warm-ivory relative overflow-hidden">
      {/* Decorative luxury mesh background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-gold font-mono flex items-center justify-center gap-1.5">
            <Sparkles size={12} />
            The Magic of Transformation
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
            Bespoke Realizations
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto my-6" />
          <p className="text-sm md:text-base text-warm-ivory/70 leading-relaxed font-light">
            Slide to witness how we transform bare, empty structural masonry into opulent, fully customized modular masterpieces.
          </p>
        </div>

        {/* Draggable Slider Container */}
        <div 
          ref={containerRef}
          onClick={handleContainerClick}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full max-w-5xl h-[350px] md:h-[550px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gold/20 cursor-ew-resize select-none"
        >
          {/* BOTTOM IMAGE: After State (Indus finished luxury design) */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80')",
            }}
          />

          {/* TOP IMAGE: Before State (Raw room) */}
          <div 
            className="absolute inset-y-0 left-0 right-0 bg-cover bg-center overflow-hidden"
            style={{
              width: `${sliderPosition}%`,
            }}
          >
            {/* Force original dimensions to prevent distortion as width shrinks */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80')",
                width: containerRef.current?.getBoundingClientRect().width || "100%",
                maxWidth: "100vw",
              }}
            />
          </div>

          {/* Fixed labels outside sliding containers to prevent cropping */}
          {/* Label Before */}
          <div className="absolute bottom-6 left-6 z-25 bg-black/60 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-widest font-semibold text-white/50">Before</p>
            <p className="text-xs md:text-sm font-serif font-bold text-white">Raw Masonry Shell</p>
          </div>

          {/* Label After */}
          <div className="absolute bottom-6 right-6 z-25 bg-gold/90 border border-gold px-4 py-2 rounded-lg backdrop-blur-md shadow-lg shadow-gold/20 whitespace-nowrap">
            <p className="text-[10px] uppercase tracking-widest font-semibold text-charcoal-black/70">After Handover</p>
            <p className="text-xs md:text-sm font-serif font-bold text-charcoal-black">Seamless Indus Luxury</p>
          </div>

          {/* DRAG HANDLE LINE */}
          <div 
            className="absolute inset-y-0 z-30 w-[2px] bg-gold"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Circle drag handle */}
            <div 
              onMouseDown={(e) => {
                e.stopPropagation();
                setIsDragging(true);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                setIsDragging(true);
              }}
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-charcoal-black border-2 border-gold flex items-center justify-center text-gold shadow-2xl transition-transform duration-300 cursor-grab ${
                isDragging ? "scale-110 cursor-grabbing bg-gold text-charcoal-black" : "hover:scale-105"
              }`}
            >
              <ChevronsLeftRight size={18} />
            </div>
          </div>
        </div>

        {/* Subtitle helper */}
        <div className="text-center mt-6">
          <p className="text-xs text-warm-ivory/40 uppercase tracking-widest font-mono">
            ← Hold and drag the gold handle to compare →
          </p>
        </div>

      </div>
    </section>
  );
}
