"use client";

import React from "react";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <CartProvider>
      {/* Premium UX Utilities */}
      <ScrollProgress />
      <CustomCursor />
      
      {/* Stacked Visual Toasts alerts */}
      <Toast />
      
      {/* Shopping Cart Drawer */}
      <CartDrawer />
      
      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Structured Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <Contact />
      </main>

      {/* Styled Dark Footer */}
      <Footer />
    </CartProvider>
  );
}

