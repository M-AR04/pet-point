"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Filter, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const { products, addToCart, t, language } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: t.products.all },
    { id: "nutrition", name: t.products.nutrition },
    { id: "accessories", name: t.products.accessories },
    { id: "aquariums", name: t.products.aquariums },
    { id: "wellness", name: t.products.wellness },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const isRtl = language === "ar";

  return (
    <section id="products" className="py-24 md:py-32 bg-[#FAF9F5] border-t border-black/5" style={{ direction: isRtl ? "rtl" : "ltr" }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left rtl:text-right">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-green mb-3 block">
              {t.products.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal leading-none tracking-tight">
              {t.products.title}
            </h2>
          </div>
          
          {/* Category Filter Desktop Bar */}
          <div className="flex flex-wrap gap-2 items-center">
            <Filter size={14} className="text-brand-charcoal/40 mr-2 ml-2 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 relative select-none clickable cursor-pointer ${
                  selectedCategory === cat.id
                    ? "text-white font-extrabold"
                    : "text-brand-charcoal/70 bg-white/50 hover:bg-white border border-black/5"
                }`}
              >
                <span className="relative z-10">{cat.name}</span>
                {selectedCategory === cat.id && (
                  <motion.div
                    className="absolute inset-0 bg-brand-green rounded-full -z-0"
                    layoutId="activeCategoryIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Visual Image container */}
                <div className="relative h-[230px] w-full overflow-hidden bg-brand-beige">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                    style={{ backgroundImage: `url(${prod.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Accent Badge */}
                  <span className={`absolute top-4 ${isRtl ? "right-4" : "left-4"} px-3 py-1 bg-white/90 backdrop-blur-md text-[9px] font-extrabold uppercase tracking-wider rounded-full shadow-sm border border-white/40 text-brand-charcoal z-10`}>
                    {prod.categoryLabel}
                  </span>

                  {/* Specialty Badge */}
                  {prod.badge && (
                    <span className={`absolute top-4 ${isRtl ? "left-4" : "right-4"} px-3 py-1 bg-brand-orange text-white text-[9px] font-extrabold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1 shadow-brand-orange/20 z-10`}>
                      <Sparkles size={8} />
                      {prod.badge}
                    </span>
                  )}
                </div>

                {/* Content Descriptions */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left rtl:text-right">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-heading text-lg font-bold text-brand-charcoal leading-tight line-clamp-1 group-hover:text-brand-green transition-colors duration-300 w-full">
                        {prod.name}
                      </h3>
                    </div>
                    <p className="text-brand-charcoal/60 text-xs leading-relaxed mb-6 line-clamp-2">
                      {prod.description}
                    </p>
                  </div>

                  {/* Actions and Pricing */}
                  <div className="flex items-center justify-between pt-4 border-t border-black/5 gap-2">
                    <div>
                      <p className="text-[9px] font-bold text-brand-charcoal/45 uppercase tracking-wider mb-0.5 leading-none">
                        {t.products.priceLabel}
                      </p>
                      <span className="text-base font-black text-brand-charcoal whitespace-nowrap">
                        {prod.priceLabel}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(prod)}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-extrabold rounded-full transition-all duration-300 clickable shadow-md hover:shadow-lg shadow-brand-green/10"
                      aria-label={`${t.products.btnAddToCart} ${prod.name}`}
                    >
                      <ShoppingBag size={12} />
                      <span>{t.products.btnAddToCart}</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={`https://wa.me/962789030091?text=${encodeURIComponent(t.products.catalogWhatsAppText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold rounded-full transition-all duration-300 shadow-lg text-sm border border-white/5 group clickable"
          >
            <span>{t.products.viewFullCatalog}</span>
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-brand-green rtl:rotate-90 rtl:group-hover:-translate-x-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
