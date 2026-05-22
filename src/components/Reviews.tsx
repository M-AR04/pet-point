"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

export default function Reviews() {
  const { t, language } = useCart();
  const isRtl = language === "ar";
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const reviewsData = t.reviews.reviewsList;
  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  ];
  const dates = isRtl
    ? ["منذ أسبوعين", "منذ شهر", "منذ ٣ أسابيع"]
    : ["2 weeks ago", "1 month ago", "3 weeks ago"];
  const locations = isRtl
    ? ["خلدا، عمان", "دابوق، عمان", "عبدون، عمان"]
    : ["Khalda, Amman", "Dabouq, Amman", "Abdoun, Amman"];

  const testimonials: Testimonial[] = reviewsData.map((item, idx) => ({
    id: `rev-${idx}`,
    name: item.name,
    role: item.role,
    location: locations[idx] || (isRtl ? "عمان، الأردن" : "Amman, Jordan"),
    rating: item.rating,
    text: item.comment,
    avatar: avatars[idx % avatars.length],
    date: dates[idx] || (isRtl ? "حديث" : "Recent"),
  }));

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 8000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(isRtl ? 1 : -1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(isRtl ? -1 : 1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#FAF9F5] border-t border-black/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        
        {/* Title Header */}
        <div className="mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-green mb-3 block">
            {t.reviews.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal leading-none tracking-tight">
            {t.reviews.title}
          </h2>
        </div>

        {/* Carousel Visual Frame */}
        <div className="relative min-h-[360px] md:min-h-[290px] flex items-center justify-center">
          <div className="absolute top-0 text-brand-green/10 flex justify-center -z-10 select-none">
            <Quote size={140} className="fill-brand-green/5" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="glass-card bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-black/5 max-w-3xl mx-auto flex flex-col items-center">
                
                {/* Star Ratings */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex]?.rating || 5)].map((_, i) => (
                    <Star key={i} size={18} className="text-brand-orange fill-brand-orange" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-brand-charcoal/80 text-base md:text-lg font-medium italic leading-relaxed mb-8 max-w-2xl text-center">
                  "{testimonials[activeIndex]?.text}"
                </p>

                {/* Customer Details */}
                <div className="flex items-center gap-4 text-left rtl:text-right">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-green/30 shrink-0">
                    <img
                      src={testimonials[activeIndex]?.avatar}
                      alt={testimonials[activeIndex]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-brand-charcoal text-sm leading-none mb-1">
                      {testimonials[activeIndex]?.name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider">
                        {testimonials[activeIndex]?.role}
                      </span>
                      <span className="w-1 h-1 bg-black/20 rounded-full" />
                      <span className="text-[10px] text-brand-charcoal/50 font-bold uppercase tracking-wider">
                        {testimonials[activeIndex]?.location}
                      </span>
                      <span className="w-1 h-1 bg-black/20 rounded-full" />
                      <span className="text-[10px] text-brand-charcoal/40 font-semibold">
                        {testimonials[activeIndex]?.date}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Chevrons Control */}
        <div className="flex justify-center items-center gap-4 mt-10" dir="ltr">
          <button
            onClick={handlePrev}
            className="p-3 bg-white hover:bg-brand-green text-brand-charcoal hover:text-white rounded-full transition-all duration-300 border border-black/5 shadow-md hover:shadow-lg flex items-center justify-center clickable"
            aria-label="Previous Review"
          >
            {isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
          
          {/* Pagination Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? (isRtl ? -1 : 1) : (isRtl ? 1 : -1));
                  setActiveIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 select-none ${
                  idx === activeIndex ? "w-6 bg-brand-green" : "w-2 bg-black/10 hover:bg-black/25"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-white hover:bg-brand-green text-brand-charcoal hover:text-white rounded-full transition-all duration-300 border border-black/5 shadow-md hover:shadow-lg flex items-center justify-center clickable"
            aria-label="Next Review"
          >
            {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>

      </div>
    </section>
  );
}
