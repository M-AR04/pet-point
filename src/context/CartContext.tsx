"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, productsList, ProductTranslation } from "@/lib/translations";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  image: string;
  quantity: number;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "info" | "warning";
}

interface CartContextType {
  language: "ar" | "en";
  setLanguage: (lang: "ar" | "en") => void;
  t: typeof translations.ar;
  products: ProductTranslation[];
  cart: CartItem[];
  addToCart: (product: ProductTranslation) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  cartDrawerOpen: boolean;
  setCartDrawerOpen: (open: boolean) => void;
  toasts: ToastMessage[];
  addToast: (message: string, type?: "success" | "info" | "warning") => void;
  removeToast: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<"ar" | "en">("ar");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Sync translation active block
  const t = translations[language];
  const products = productsList[language];

  // Set initial client-side state
  useEffect(() => {
    setIsMounted(true);
    // Load language preference
    const savedLang = localStorage.getItem("petpoint_lang") as "ar" | "en";
    if (savedLang === "ar" || savedLang === "en") {
      setLanguageState(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    } else {
      // Default to Arabic
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    }

    // Load cart
    const savedCart = localStorage.getItem("petpoint_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Update HTML document when language state changes
  const setLanguage = (lang: "ar" | "en") => {
    setLanguageState(lang);
    localStorage.setItem("petpoint_lang", lang);
    if (typeof window !== "undefined") {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
    // Dynamic message toast for language change
    addToast(
      lang === "ar" ? "تم تحويل اللغة إلى العربية" : "Language switched to English",
      "info"
    );
  };

  // Persist cart to localStorage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("petpoint_cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  // Toast utilities
  const addToast = (message: string, type: "success" | "info" | "warning" = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto-remove toast after 4 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const addToCart = (product: ProductTranslation) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        addToast(t.cart.toastQuantityUpdated, "success");
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      addToast(t.cart.toastAdded, "success");
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          priceLabel: product.priceLabel,
          image: product.image,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (!existingItem) return prevCart;

      if (existingItem.quantity === 1) {
        addToast(t.cart.toastRemoved, "warning");
        return prevCart.filter((item) => item.id !== id);
      }

      addToast(t.cart.toastQuantityUpdated, "success");
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      addToast(t.cart.toastRemoved, "warning");
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
    addToast(t.cart.toastQuantityUpdated, "success");
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("petpoint_cart");
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        language,
        setLanguage,
        t,
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        cartDrawerOpen,
        setCartDrawerOpen,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
