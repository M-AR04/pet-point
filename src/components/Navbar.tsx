"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ShoppingBag, Globe } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { language, setLanguage, t, cartCount, setCartDrawerOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isRtl = language === "ar";

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.products, href: "#products" },
    { name: t.nav.whyChooseUs, href: "#why-choose-us" },
    { name: t.nav.reviews, href: "#reviews" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleLanguageToggle = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#FAF9F5]/85 backdrop-blur-md border-b border-black/5 shadow-sm"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ direction: isRtl ? "rtl" : "ltr" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Logo showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-brand-charcoal/80 hover:text-brand-green transition-colors duration-300 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA & Cart & Lang Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle Button */}
            <button
              onClick={handleLanguageToggle}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-brand-charcoal/85 hover:text-brand-green border border-brand-charcoal/10 hover:border-brand-green/30 bg-white/50 hover:bg-white rounded-full transition-all duration-300 clickable cursor-pointer shadow-sm select-none"
              aria-label="Toggle language"
            >
              <Globe size={13} className="text-brand-green animate-spin-slow" />
              <span>{t.nav.langToggle}</span>
            </button>

            {/* Shopping Cart Trigger */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 bg-white hover:bg-brand-beige border border-black/5 rounded-full text-brand-charcoal hover:text-brand-green transition-all duration-300 shadow-sm clickable select-none"
              title={t.nav.cartTooltip}
            >
              <ShoppingBag size={18} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF9F5] shadow-md shadow-brand-orange/20"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a
              href="tel:+962789030091"
              className="flex items-center gap-2 px-4 py-2 border border-brand-charcoal/10 hover:border-brand-green/30 text-brand-charcoal text-sm font-semibold rounded-full transition-all duration-300 hover:bg-white"
            >
              <Phone size={14} className="text-brand-green" />
              <span>+962 78 903 0091</span>
            </a>
            
            <a
              href={`https://wa.me/962789030091?text=${encodeURIComponent(
                isRtl
                  ? "مرحباً بيت بوينت! أرغب في الاستفسار عن منتجات الحيوانات الأليفة الفاخرة التي توفرونها في فرع شارع عامر بن مالك."
                  : "Hi Pet Point! I would like to inquire about the premium pet supplies available at your Amer bin Malek Street branch."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-green hover:bg-brand-green-hover text-white text-sm font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg shadow-brand-green/20"
            >
              <MessageCircle size={15} />
              <span>{isRtl ? "تواصل معنا" : "WhatsApp Us"}</span>
            </a>
          </div>

          {/* Mobile Menu Trigger & Cart */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Language Switch for Mobile */}
            <button
              onClick={handleLanguageToggle}
              className="flex items-center justify-center p-2.5 bg-white/70 hover:bg-white border border-black/5 rounded-full text-xs font-bold text-brand-charcoal transition-all clickable shadow-sm"
              aria-label="Toggle language"
            >
              <Globe size={15} className="text-brand-green" />
            </button>

            {/* Mobile Shopping Cart Trigger */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2.5 bg-white hover:bg-brand-beige border border-black/5 rounded-full text-brand-charcoal transition-all duration-300 shadow-sm clickable select-none"
            >
              <ShoppingBag size={18} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF9F5] shadow-md shadow-brand-orange/20"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-brand-charcoal bg-white/60 hover:bg-white rounded-full border border-black/5 clickable"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer (Mirrored sliding: right for LTR, left for RTL) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-brand-charcoal/30 backdrop-blur-lg lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className={`absolute top-0 bottom-0 w-[290px] bg-[#FAF9F5] shadow-2xl p-8 flex flex-col justify-between ${
                isRtl ? "left-0" : "right-0"
              }`}
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{ direction: isRtl ? "rtl" : "ltr" }}
            >
              <div className="flex flex-col gap-8 mt-12">
                <div className="border-b border-black/5 pb-4">
                  <Logo showText={true} iconSize={40} />
                </div>
                
                <div className="flex flex-col gap-6 text-left rtl:text-right">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-bold text-brand-charcoal/90 hover:text-brand-green transition-colors py-1 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-black/5 pt-6 text-left rtl:text-right">
                <a
                  href="tel:+962789030091"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-brand-charcoal/10 rounded-full text-brand-charcoal font-semibold text-sm hover:bg-black/5 transition-colors"
                >
                  <Phone size={14} className="text-brand-green" />
                  <span>{isRtl ? "اتصال بالمتجر" : "Call Store"}</span>
                </a>
                <a
                  href={`https://wa.me/962789030091?text=${encodeURIComponent(
                    isRtl
                      ? "مرحباً بيت بوينت! أرغب في الاستفسار عن منتجاتكم وخدماتكم."
                      : "Hi Pet Point! I would like to inquire about your premium products."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white font-semibold rounded-full text-sm hover:bg-brand-green-hover transition-colors shadow-lg shadow-brand-green/20"
                >
                  <MessageCircle size={15} />
                  <span>{isRtl ? "واتساب المتجر" : "WhatsApp Us"}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

