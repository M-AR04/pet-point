"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function About() {
  const { t, language } = useCart();
  const isRtl = language === "ar";

  const points = isRtl ? [
    { title: "تغذية ممتازة للحيوانات الأليفة", desc: "ماركات وتركيبات عضوية مختارة بعناية لتناسب كل مرحلة عمرية." },
    { title: "إكسسوارات حصرية ومبتكرة", desc: "أحزمة وصدرية جلدية فاخرة، أسرة مريحة، وألعاب تفاعلية مسلية." },
    { title: "روائع مائية وتصاميم مخصصة", desc: "تصميم احترافي، تركيب دقيق، وتوريد أرقى أحواض السمك المبتكرة." },
    { title: "عناية فائقة ورفاهية متكاملة", desc: "طاقم عمل شغوف ومؤهل يركز بالكامل على صحة أليفك وحيويته." }
  ] : [
    { title: "Premium Pet Nutrition", desc: "Curated organic dry formulas tailored to every breed and life stage." },
    { title: "Bespoke Accessories", desc: "Luxury leather harnesses, orthopedic pet beds, and active toys." },
    { title: "Aquatic Masterpieces", desc: "Expert design, custom installation, and supply of low-iron crystal aquariums." },
    { title: "Dedicated Wellbeing", desc: "Passionate support staff focused entirely on pet health, vitality and comfort." }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF9F5] overflow-hidden" style={{ direction: isRtl ? "rtl" : "ltr" }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Overlapping Collage Layout (Fully mirrored absolute placements) */}
        <div className="lg:col-span-6 relative h-[450px] md:h-[550px] flex items-center justify-center">
          {/* Main Large Image */}
          <motion.div
            className={`absolute top-0 w-3/4 h-[75%] rounded-3xl overflow-hidden shadow-xl border border-black/5 ${
              isRtl ? "right-0" : "left-0"
            }`}
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=800&auto=format&fit=crop)` }}
            />
          </motion.div>

          {/* Overlapping Cat Image */}
          <motion.div
            className={`absolute bottom-6 w-1/2 h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF9F5] z-10 ${
              isRtl ? "left-0" : "right-0"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop)` }}
            />
          </motion.div>

          {/* Micro Detail Overlay Card */}
          <motion.div
            className={`absolute bottom-16 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-black/5 flex items-center gap-3 z-15 ${
              isRtl ? "right-6" : "left-6"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
              <Heart size={20} className="fill-brand-green/20" />
            </div>
            <div className="text-left rtl:text-right">
              <p className="text-[10px] text-brand-charcoal/50 font-extrabold uppercase tracking-wider">
                {isRtl ? "شغفنا ورؤيتنا" : "Our Passion"}
              </p>
              <p className="text-xs text-brand-charcoal font-black">
                {isRtl ? "رعاية أليفك في المقام الأول" : "Pet-First Care Philosophy"}
              </p>
            </div>
          </motion.div>

          {/* Decorative Backing Shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-brand-green/10 rounded-full -z-10 pointer-events-none" />
        </div>

        {/* Right Side: Description Story & Stats */}
        <div className="lg:col-span-6 flex flex-col text-left rtl:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-green mb-3 block">
              {t.about.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal leading-tight tracking-tight mb-6">
              {t.about.title}
            </h2>
            <p className="text-brand-green text-sm font-extrabold mb-4">
              {t.about.subtitle}
            </p>
            <p className="text-brand-charcoal/70 text-sm md:text-base leading-relaxed mb-4">
              {t.about.text1}
            </p>
            <p className="text-brand-charcoal/70 text-sm md:text-base leading-relaxed mb-8">
              {t.about.text2}
            </p>
          </motion.div>

          {/* Point Bullet List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {points.map((pt, idx) => (
              <motion.div
                key={pt.title}
                className="flex gap-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <CheckCircle2 size={18} className="text-brand-green shrink-0 mt-0.5" />
                <div className="text-left rtl:text-right">
                  <h4 className="text-sm font-bold text-brand-charcoal mb-1">{pt.title}</h4>
                  <p className="text-xs text-brand-charcoal/60 leading-normal">{pt.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics Section with beautiful dynamic data indicators */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-black/5">
            <div>
              <span className="font-heading text-2xl md:text-3xl font-black text-brand-charcoal leading-none block mb-1.5">
                {t.about.statCustomers}
              </span>
              <span className="text-[9px] md:text-xs text-brand-charcoal/50 font-bold uppercase tracking-wider block leading-normal">
                {t.about.statCustomersSub}
              </span>
            </div>
            <div>
              <span className="font-heading text-2xl md:text-3xl font-black text-brand-charcoal leading-none block mb-1.5">
                {t.about.statBrands}
              </span>
              <span className="text-[9px] md:text-xs text-brand-charcoal/50 font-bold uppercase tracking-wider block leading-normal">
                {t.about.statBrandsSub}
              </span>
            </div>
            <div>
              <span className="font-heading text-2xl md:text-3xl font-black text-brand-charcoal leading-none block mb-1.5">
                {t.about.statRating}
              </span>
              <span className="text-[9px] md:text-xs text-brand-charcoal/50 font-bold uppercase tracking-wider block leading-normal">
                {t.about.statRatingSub}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
