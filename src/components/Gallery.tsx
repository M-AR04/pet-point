"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface GalleryItem {
  id: string;
  image: string;
  category: "showroom" | "pets" | "aquariums";
  categoryLabel: string;
  title: string;
  aspectRatio: string; // for masonry visual interest
}

export default function Gallery() {
  const { t, language } = useCart();
  const isRtl = language === "ar";
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filters = [
    { id: "all", name: t.gallery.filterAll },
    { id: "showroom", name: t.gallery.filterShowroom },
    { id: "pets", name: t.gallery.filterPets },
    { id: "aquariums", name: t.gallery.filterAquariums },
  ];

  const galleryItemsData = [
    {
      id: "gal-1",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop",
      category: "pets" as const,
      aspectRatio: "aspect-[4/5]",
      title: {
        ar: "جراء جولدن مرحة ونشيطة",
        en: "Playful Golden Puppies"
      }
    },
    {
      id: "gal-2",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
      category: "pets" as const,
      aspectRatio: "aspect-square",
      title: {
        ar: "قط شيرازي رائع ومميز",
        en: "Exquisite Persian Cat"
      }
    },
    {
      id: "gal-3",
      image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop",
      category: "aquariums" as const,
      aspectRatio: "aspect-[3/4]",
      title: {
        ar: "حوض سمك بحري نابض بالحياة",
        en: "Vibrant Marine Reef Tank"
      }
    },
    {
      id: "gal-4",
      image: "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?q=80&w=800&auto=format&fit=crop",
      category: "aquariums" as const,
      aspectRatio: "aspect-[4/3]",
      title: {
        ar: "حوض نباتي طبيعي كريستالي",
        en: "Lush Rimless Terrarium Setup"
      }
    },
    {
      id: "gal-5",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop",
      category: "showroom" as const,
      aspectRatio: "aspect-[4/5]",
      title: {
        ar: "جدار المنتجات والأطعمة الممتازة في المعرض",
        en: "Premium Brand Showcase Wall"
      }
    },
    {
      id: "gal-6",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=800&auto=format&fit=crop",
      category: "pets" as const,
      aspectRatio: "aspect-square",
      title: {
        ar: "عميل سعيد مع كلبه اللطيف",
        en: "Happy Client & Golden Friend"
      }
    },
    {
      id: "gal-7",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop",
      category: "pets" as const,
      aspectRatio: "aspect-[3/4]",
      title: {
        ar: "هرّة بريطانية قصيرة الشعر ظريفة",
        en: "British Shorthair Feline Kitten"
      }
    },
    {
      id: "gal-8",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop",
      category: "showroom" as const,
      aspectRatio: "aspect-[4/3]",
      title: {
        ar: "رفوف عرض بوتيك بيت بوينت الأنيقة",
        en: "Modern Boutique Display Shelves"
      }
    }
  ];

  const items: GalleryItem[] = galleryItemsData.map(item => ({
    id: item.id,
    image: item.image,
    category: item.category,
    aspectRatio: item.aspectRatio,
    title: isRtl ? item.title.ar : item.title.en,
    categoryLabel: t.gallery.imageTags[item.category] || ""
  }));

  const filteredItems =
    selectedFilter === "all"
      ? items
      : items.filter((item) => item.category === selectedFilter);

  // Handle keyboard events for modal navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex]);

  const handlePrevImage = () => {
    if (activeImageIndex === null) return;
    const prevIndex = activeImageIndex === 0 ? filteredItems.length - 1 : activeImageIndex - 1;
    setActiveImageIndex(prevIndex);
  };

  const handleNextImage = () => {
    if (activeImageIndex === null) return;
    const nextIndex = activeImageIndex === filteredItems.length - 1 ? 0 : activeImageIndex + 1;
    setActiveImageIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-charcoal overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left rtl:text-right">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-green mb-3 block">
              {t.gallery.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">
              {t.gallery.title}
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 items-center" dir={isRtl ? "rtl" : "ltr"}>
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 relative select-none clickable ${
                  selectedFilter === f.id
                    ? "text-brand-charcoal bg-brand-beige"
                    : "text-white/70 hover:text-white bg-white/5 border border-white/10"
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Columns Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              // Find index in filtered list for lightbox reference
              const filteredIdx = filteredItems.findIndex((x) => x.id === item.id);
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-item group relative break-inside-avoid overflow-hidden rounded-3xl border border-white/5 cursor-pointer bg-white/5"
                  onClick={() => setActiveImageIndex(filteredIdx)}
                >
                  {/* Aspect Ratio Sized Div */}
                  <div className={`relative w-full ${item.aspectRatio} overflow-hidden`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    
                    {/* Hover Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-brand-charcoal/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left rtl:text-right">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-1 rounded-full mb-2 inline-block">
                          {item.categoryLabel}
                        </span>
                        <h4 className="text-white font-heading text-lg font-bold flex items-center justify-between w-full gap-2">
                          <span>{item.title}</span>
                          <ZoomIn size={16} className="text-white/60 shrink-0 rtl:rotate-180" />
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Fullscreen Modal */}
        <AnimatePresence>
          {activeImageIndex !== null && (
            <motion.div
              className="fixed inset-0 z-5000 bg-brand-charcoal/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-10 select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageIndex(null)}
            >
              {/* Top Bar controls */}
              <div className="flex justify-between items-center w-full z-10" onClick={(e) => e.stopPropagation()}>
                <span className="text-white/65 font-bold text-xs uppercase tracking-widest rtl:text-right">
                  {filteredItems[activeImageIndex].title} ({activeImageIndex + 1} / {filteredItems.length})
                </span>
                
                <button
                  onClick={() => setActiveImageIndex(null)}
                  className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10 clickable"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Central Slideshow Container */}
              <div className="flex-1 flex items-center justify-between w-full gap-4 py-4" dir="ltr" onClick={(e) => e.stopPropagation()}>
                
                {/* Left Navigation chevron */}
                <button
                  onClick={handlePrevImage}
                  className="p-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10 hidden sm:flex items-center justify-center clickable shrink-0"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Big Visual frame */}
                <div className="relative max-h-[75vh] max-w-[85vw] md:max-w-[65vw] overflow-hidden rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl">
                  <motion.img
                    key={activeImageIndex}
                    src={filteredItems[activeImageIndex].image}
                    alt={filteredItems[activeImageIndex].title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="max-h-[75vh] object-contain rounded-2xl"
                  />
                </div>

                {/* Right Navigation chevron */}
                <button
                  onClick={handleNextImage}
                  className="p-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10 hidden sm:flex items-center justify-center clickable shrink-0"
                  aria-label="Next Image"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Mobile Swipe / Arrow Helper */}
              <div className="text-center w-full z-10 sm:hidden flex justify-center gap-6" dir="ltr" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={handlePrevImage}
                  className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 text-sm font-bold flex items-center gap-1 clickable"
                >
                  <ChevronLeft size={16} /> Prev
                </button>
                <button
                  onClick={handleNextImage}
                  className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 text-sm font-bold flex items-center gap-1 clickable"
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>

              {/* Bottom tag metadata */}
              <div className="text-center w-full z-10 hidden sm:block">
                <span className="text-[10px] text-white/40 uppercase tracking-[0.25em] font-extrabold">
                  {isRtl 
                    ? `الفئة: ${filteredItems[activeImageIndex].categoryLabel} • انقر في الخارج للإغلاق` 
                    : `Category: ${filteredItems[activeImageIndex].categoryLabel} • Click outside to exit`
                  }
                </span>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
