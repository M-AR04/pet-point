"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function Toast() {
  const { toasts, removeToast, language } = useCart();

  const isRtl = language === "ar";

  // Stacking placement depending on text direction
  const positionClasses = isRtl
    ? "left-6 bottom-6 flex-col-reverse"
    : "right-6 bottom-6 flex-col-reverse";

  return (
    <div
      className={`fixed z-[99999] flex gap-3 pointer-events-none max-w-sm w-full p-4 ${positionClasses}`}
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          let Icon = Info;
          let iconColor = "text-brand-green";
          let borderColor = "border-brand-green/20";
          let progressBg = "bg-brand-green";
          let glowColor = "shadow-brand-green/10";

          if (toast.type === "warning") {
            Icon = AlertCircle;
            iconColor = "text-brand-orange";
            borderColor = "border-brand-orange/20";
            progressBg = "bg-brand-orange";
            glowColor = "shadow-brand-orange/10";
          } else if (toast.type === "info") {
            Icon = Info;
            iconColor = "text-brand-charcoal";
            borderColor = "border-brand-charcoal/10";
            progressBg = "bg-brand-charcoal";
            glowColor = "shadow-brand-charcoal/5";
          }

          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className={`pointer-events-auto w-full glass-panel p-4 rounded-2xl shadow-xl flex items-start gap-3 border ${borderColor} ${glowColor} overflow-hidden relative group`}
            >
              {/* Progress timer bar */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 ${progressBg}`}
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4, ease: "linear" }}
              />

              <div className={`p-1.5 rounded-xl bg-white/80 shadow-inner flex items-center justify-center ${iconColor}`}>
                <Icon size={18} />
              </div>

              <div className="flex-1 text-left rtl:text-right pt-0.5">
                <p className="text-xs font-bold text-brand-charcoal leading-relaxed pr-6 rtl:pl-6 rtl:pr-0">
                  {toast.message}
                </p>
              </div>

              <button
                onClick={() => removeToast(toast.id)}
                className="absolute top-3 right-3 rtl:left-3 rtl:right-auto text-brand-charcoal/30 hover:text-brand-charcoal p-1 rounded-lg hover:bg-black/5 transition-all duration-300 clickable"
                aria-label="Close notification"
              >
                <X size={14} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
