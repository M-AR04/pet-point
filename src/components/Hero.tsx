"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, Heart, Award, ArrowRight, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Hero() {
  const { t, language } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);

  const isRtl = language === "ar";

  const images = [
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1600&auto=format&fit=crop",
  ];

  const slides = t.hero.slides.map((slide, idx) => ({
    image: images[idx],
    title: slide.title,
    tagline: slide.tag,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-charcoal py-24" style={{ direction: isRtl ? "rtl" : "ltr" }}>
      {/* Background Slideshow with zoom transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* Cinematic Vignette Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${isRtl ? "from-brand-charcoal/20 via-brand-charcoal/80 to-brand-charcoal" : "from-brand-charcoal via-brand-charcoal/80 to-transparent"}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-beige via-transparent to-brand-charcoal/20 z-0" />
      </div>

      {/* Floating Decorative Micro-Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-1/4 left-1/12 w-6 h-6 bg-brand-green/20 rounded-full blur-sm"
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/10 w-8 h-8 bg-brand-orange/15 rounded-full blur-md"
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-brand-green/35 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Core Content Layout */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content Text */}
        <div className="lg:col-span-7 flex flex-col text-left rtl:text-right">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-green/10 border border-brand-green/25 rounded-full text-brand-green text-xs font-bold uppercase tracking-wider mb-6 w-fit select-none"
          >
            <Award size={13} />
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Dynamic Animated Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            {t.hero.headlinePrefix} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green/70">
              {t.hero.headlineHighlight}
            </span>
          </h1>

          <motion.p
            className="text-base md:text-lg text-brand-beige/80 leading-relaxed max-w-xl mb-10 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.hero.subheadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="#products"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-brand-green/25 hover:shadow-brand-green/45 group clickable"
            >
              <span>{t.hero.btnProducts}</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </a>
            <a
              href={`https://wa.me/962789030091?text=${encodeURIComponent(
                isRtl
                  ? "مرحباً بيت بوينت! أرغب في الاستفسار عن المنتجات الحصرية المتوفرة لديكم."
                  : "Hi Pet Point! I want to inquire about your premium pet supplies and services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md clickable"
            >
              <MessageCircle size={18} className="text-brand-green" />
              <span>{t.hero.btnWhatsApp}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Glassmorphism Badges Grid */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[300px]">
          {/* Trust Badge 1: Google Reviews (Top Left in LTR, Top Right in RTL) */}
          <motion.div
            className="absolute lg:top-[-20px] lg:left-[-30px] rtl:lg:left-auto rtl:lg:right-[-30px] glass-panel-dark p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/5 w-[220px]"
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.03, y: -4 }}
          >
            <div className="p-3 bg-brand-orange/10 rounded-xl">
              <Star size={20} className="text-brand-orange fill-brand-orange" />
            </div>
            <div className="text-left rtl:text-right">
              <p className="text-white text-base font-black leading-none mb-1">{t.hero.badgeRating}</p>
              <p className="text-white/60 text-xs font-semibold">{t.hero.badgeRatingSub}</p>
            </div>
          </motion.div>

          {/* Trust Badge 2: Open Daily (Top Right in LTR, Top Left in RTL) */}
          <motion.div
            className="absolute lg:top-[60px] lg:right-[-20px] rtl:lg:right-auto rtl:lg:left-[-20px] glass-panel-dark p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/5 w-[220px]"
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.03, y: -4 }}
          >
            <div className="p-3 bg-brand-green/10 rounded-xl">
              <Clock size={20} className="text-brand-green" />
            </div>
            <div className="text-left rtl:text-right">
              <p className="text-white text-base font-black leading-none mb-1">{t.hero.badgeHours}</p>
              <p className="text-white/60 text-xs font-semibold">{t.hero.badgeHoursSub}</p>
            </div>
          </motion.div>

          {/* Trust Badge 3: Premium (Bottom Center) */}
          <motion.div
            className="absolute lg:bottom-[-20px] lg:left-[40px] rtl:lg:left-auto rtl:lg:right-[40px] glass-panel-dark p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/5 w-[230px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.03, y: -4 }}
          >
            <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
              <Heart size={20} className="text-[#D4AF37] fill-[#D4AF37]/20" />
            </div>
            <div className="text-left rtl:text-right">
              <p className="text-white text-base font-black leading-none mb-1">{t.hero.badgeQuality}</p>
              <p className="text-white/60 text-xs font-semibold">{t.hero.badgeQualitySub}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none">
        <span className="text-[10px] tracking-[0.25em] uppercase text-brand-charcoal/50 font-bold">{t.hero.scrollText}</span>
        <motion.div
          className="w-6 h-10 border-2 border-brand-charcoal/20 rounded-full flex justify-center p-1.5"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-2 bg-brand-green rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
