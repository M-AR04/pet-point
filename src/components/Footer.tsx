"use client";

import React from "react";
import Logo from "./Logo";
import { MapPin, Phone, Clock, FileText, ArrowUp } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Footer() {
  const { t, language } = useCart();
  const isRtl = language === "ar";
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal text-white/70 py-16 border-t border-white/5 relative">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        {/* Col 1: Brand Info */}
        <div className="md:col-span-5 flex flex-col items-start text-left rtl:items-end rtl:text-right">
          <Logo showText={true} textColor="text-white" iconSize={42} className="mb-6" />
          <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-sm mb-6">
            {t.footer.tagline}
          </p>
          
          {/* Social Badges */}
          <div className="flex gap-3">
            <a
              href="https://web.facebook.com/petpointjo/?locale=ar_AR&_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-[#1877F2] text-white/70 hover:text-white rounded-full transition-all duration-300 border border-white/10 hover:border-transparent flex items-center justify-center clickable"
              aria-label="Connect on Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3h-4V6.5C13 5.3 13.8 5 14.5 5H16V2h-3C10.5 2 9 3.5 9 6v2z" />
              </svg>
            </a>
            <a
              href="https://ordonna.com/elistings/pet-point/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/5 hover:bg-[#8CB73D] text-white/70 hover:text-white rounded-full transition-all duration-300 border border-white/10 hover:border-transparent flex items-center gap-2 text-xs font-bold uppercase tracking-wider clickable"
              aria-label="View Business Listing on Ordonna"
            >
              <FileText size={12} />
              <span>{isRtl ? "قائمة أردنا" : "Ordonna List"}</span>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="md:col-span-3 flex flex-col items-start text-left rtl:items-end rtl:text-right">
          <h4 className="font-heading text-white font-black text-sm uppercase tracking-widest mb-6">
            {t.footer.quickLinks}
          </h4>
          <div className="flex flex-col gap-3 text-xs md:text-sm">
            <a href="#home" className="hover:text-brand-green transition-colors duration-300">{t.nav.home}</a>
            <a href="#about" className="hover:text-brand-green transition-colors duration-300">{t.nav.about}</a>
            <a href="#products" className="hover:text-brand-green transition-colors duration-300">{t.nav.products}</a>
            <a href="#why-choose-us" className="hover:text-brand-green transition-colors duration-300">{t.nav.whyChooseUs}</a>
            <a href="#reviews" className="hover:text-brand-green transition-colors duration-300">{t.nav.reviews}</a>
            <a href="#gallery" className="hover:text-brand-green transition-colors duration-300">{t.nav.gallery}</a>
          </div>
        </div>

        {/* Col 3: Direct Store Info */}
        <div className="md:col-span-4 flex flex-col items-start text-left rtl:items-end rtl:text-right">
          <h4 className="font-heading text-white font-black text-sm uppercase tracking-widest mb-6">
            {isRtl ? "بيانات البوتيك" : "Store Details"}
          </h4>
          <div className="flex flex-col gap-4 text-xs md:text-sm text-white/55">
            <div className="flex items-start gap-3 rtl:flex-row-reverse">
              <MapPin size={16} className="text-brand-green shrink-0 mt-0.5" />
              <span>{t.contact.addressValue}</span>
            </div>
            
            <div className="flex items-start gap-3 rtl:flex-row-reverse">
              <Phone size={16} className="text-brand-green shrink-0 mt-0.5" />
              <a href="tel:+962789030091" className="hover:text-white transition-colors">
                {t.contact.phoneValue}
              </a>
            </div>

            <div className="flex items-start gap-3 rtl:flex-row-reverse">
              <Clock size={16} className="text-brand-green shrink-0 mt-0.5" />
              <div className="text-left rtl:text-right">
                <p>{isRtl ? "يومياً: ١١:٠٠ ص – ١١:٠٠ م" : "Daily: 11:00 AM – 11:00 PM"}</p>
                <p>{isRtl ? "الجمعة: ٢:٠٠ ظ – ١١:٠٠ م" : "Friday: 2:00 PM – 11:00 PM"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-[10px] md:text-xs text-white/40 font-semibold tracking-wide text-center sm:text-left rtl:sm:text-right">
          {t.footer.rights} {t.footer.agencySignature}
        </p>

        {/* Scroll To Top button */}
        <button
          onClick={handleScrollToTop}
          className="p-3 bg-white/5 hover:bg-brand-green text-white/60 hover:text-white rounded-full transition-all duration-300 border border-white/10 hover:border-transparent flex items-center justify-center clickable"
          aria-label="Scroll to Top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
