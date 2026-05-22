"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, ShieldCheck, Gem } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function WhyChooseUs() {
  const { t, language } = useCart();
  const isRtl = language === "ar";

  // Premium icons paired to our translated features
  const icons = [
    <Gem className="text-brand-green" size={24} />,
    <Sparkles className="text-brand-green" size={24} />,
    <HeartHandshake className="text-brand-green" size={24} />,
    <ShieldCheck className="text-brand-green" size={24} />,
  ];

  const features = t.whyChooseUs.features.map((feat, idx) => ({
    id: `feat-${idx}`,
    icon: icons[idx] || icons[0],
    title: feat.title,
    description: feat.desc,
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-brand-charcoal overflow-hidden relative" style={{ direction: isRtl ? "rtl" : "ltr" }}>
      {/* Decorative dark vector elements */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-green mb-3 block">
            {t.whyChooseUs.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-[#FAF9F5]/60 text-sm md:text-base leading-relaxed">
            {isRtl
              ? "نلتزم بأعلى معايير الرعاية والجمال لحيوانك الأليف. كل خدمة وكل منتج نقدمه في بيت بوينت مصمم خصيصاً ليجمع بين الصحة، الفخامة، والراحة التامة للعميل."
              : "We hold ourselves to a higher standard of pet care. Every service and product we offer at Pet Point is designed to promote wellness, aesthetic harmony, and complete customer convenience."}
          </p>
        </div>

        {/* Tracing Glow Grid (2x2 Balanced Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.id}
              onMouseMove={handleMouseMove}
              className="glow-card group bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-brand-green/20 p-8 flex flex-col items-start text-left rtl:text-right transition-all duration-500 rounded-3xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Icon Container */}
              <div className="p-4 bg-white/5 group-hover:bg-brand-green/10 rounded-2xl mb-6 transition-all duration-300 shadow-inner group-hover:shadow-none border border-white/5 group-hover:border-brand-green/20">
                {feat.icon}
              </div>

              {/* Text Info */}
              <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors duration-300">
                {feat.title}
              </h3>
              
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                {feat.description}
              </p>

              {/* Glowing accent dot */}
              <div className={`absolute bottom-6 ${isRtl ? "left-6" : "right-6"} w-1.5 h-1.5 bg-brand-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
