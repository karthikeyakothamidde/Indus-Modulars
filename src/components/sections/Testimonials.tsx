"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  project: string;
  rating: number;
  image: string;
  feedback: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "ajay kumar",
      location: "Hyderabad",
      project: "Home Interiors",
      rating: 5,
      image: "",
      feedback: "Great experience with Indus Modulars for our home interiors. Everything was factory-made and installed neatly at site. No mess, clean work and premium finish.",
    },
    {
      id: 2,
      name: "Dalavai Serena Susan",
      location: "Hyderabad",
      project: "Sliding Wardrobes & Storage Units",
      rating: 5,
      image: "",
      feedback: "Indus Modulars designed and installed our sliding wardrobes and storage units. The space-saving design and smooth finishing show their factory precision. If you are searching for modular wardrobes in Hyderabad with premium quality, this is the right company.",
    },
    {
      id: 3,
      name: "chanakya yadav meegada",
      location: "Hyderabad",
      project: "Complete Home Modular Interiors",
      rating: 5,
      image: "",
      feedback: "We chose Indus Modulars for complete home modular interiors in Hyderabad, including kitchen, wardrobes, and TV unit. The factory-finished furniture and global-standard quality really impressed us. Delivery was on time and installation was hassle-free. One of the most professional modular interior companies in Hyderabad.",
    },
    {
      id: 4,
      name: "damu sunny",
      location: "Hyderabad",
      project: "Modular Furniture Handover",
      rating: 5,
      image: "",
      feedback: "Very happy with the work by Indus Modulars. Factory-made furniture and smooth installation without any on-site mess. Quality and precision are excellent.",
    },
    {
      id: 5,
      name: "Sunitha Jale",
      location: "Hyderabad",
      project: "Modular Kitchen Design",
      rating: 5,
      image: "",
      feedback: "Got our modular kitchen done by Indus Modulars and the experience was amazing. The layout planning, storage solutions, and finishing are perfect. Unlike traditional carpenters, their factory-made modular kitchen setup is neat and highly durable. Definitely a top modular kitchen manufacturer in Hyderabad.",
    },
    {
      id: 6,
      name: "Gd lakshmi Narayana",
      location: "Hyderabad",
      project: "Modular Interiors",
      rating: 5,
      image: "",
      feedback: "We got our modular interiors done by Indus Modulars. All units were made in factory and just installed at home. Quick, clean, and very professional work.",
    },
    {
      id: 7,
      name: "Vishal Kumar",
      location: "Hyderabad",
      project: "Modular Interior Handover",
      rating: 5,
      image: "",
      feedback: "Excellent work by the team! The modular interiors are modern, high-quality, and perfectly finished. Very professional service and on-time delivery. Highly recommended!",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-charcoal-black text-warm-ivory relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-deep-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 items-end mb-16">
          <div className="space-y-4">
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-gold font-mono flex items-center gap-1.5">
              Verified Client Handovers
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
              What Our Clients Say
            </h2>
            <div className="w-16 h-[2px] bg-gold my-2" />
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            navigation={{ nextEl: ".swiper-button-next-custom", prevEl: ".swiper-button-prev-custom" }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="w-full pb-16"
          >
            {testimonials.map((test) => (
              <SwiperSlide key={test.id}>
                <div className="glass-card-gold p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden group hover:border-gold/50 transition-colors duration-500">
                  {/* Subtle quote icon watermarked in corner */}
                  <Quote size={80} className="absolute top-4 right-4 text-white/[0.02] pointer-events-none" />

                  <div className="space-y-6">
                    {/* Star Rating & Quote */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-gold text-gold" />
                        ))}
                      </div>
                      <Quote size={20} className="text-gold opacity-45" />
                    </div>

                    {/* Feedback Text */}
                    <p className="text-sm text-warm-ivory/80 leading-relaxed font-light italic">
                      "{test.feedback}"
                    </p>
                  </div>

                  {/* Client Info (Bottom aligned with Initials Avatar) */}
                  <div className="flex items-center space-x-4 pt-8 mt-6 border-t border-gold/10">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-bold text-sm tracking-wide shrink-0 select-none">
                      {test.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white tracking-wide capitalize">
                        {test.name}
                      </h4>
                      <p className="text-[10px] text-warm-ivory/50">
                        {test.project} • {test.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Control buttons & Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="custom-swiper-pagination flex space-x-1.5" />
            <div className="flex space-x-3">
              <button className="swiper-button-prev-custom w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal-black transition-colors duration-300 cursor-pointer">
                <ArrowLeft size={16} />
              </button>
              <button className="swiper-button-next-custom w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal-black transition-colors duration-300 cursor-pointer">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Inject custom pagination bullet styles */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: rgba(200, 164, 93, 0.2);
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #C8A45D;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
