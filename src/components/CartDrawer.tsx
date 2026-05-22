"use client";

import React, { useState } from "react";
import { useCart, CartItem } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, FileText, User, Phone, MapPin } from "lucide-react";

export default function CartDrawer() {
  const {
    cart,
    cartCount,
    cartSubtotal,
    cartDrawerOpen,
    setCartDrawerOpen,
    removeFromCart,
    addToCart,
    updateQuantity,
    clearCart,
    t,
    language,
    addToast
  } = useCart();

  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  const isRtl = language === "ar";

  // Compile and format the WhatsApp Invoice redirect
  const handleCheckout = () => {
    if (cart.length === 0) return;

    if (!clientName.trim()) {
      addToast(
        language === "ar" ? "يرجى إدخال اسمك الكريم لتسجيل الطلب" : "Please enter your name to register the order",
        "warning"
      );
      return;
    }

    if (!clientAddress.trim()) {
      addToast(
        language === "ar" ? "يرجى تحديد عنوان التوصيل لإكمال الطلب" : "Please specify a delivery address",
        "warning"
      );
      return;
    }

    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const invoiceNo = `PP-${Math.floor(1000 + Math.random() * 9000)}`;

    // Build invoice template
    let text = `${t.cart.invoiceTitle}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `📍 ${language === "ar" ? "متجر بيت بوينت - عمان، خلدا" : "Pet Point Boutique - Amman, Khalda"}\n`;
    text += `🛣️ ${language === "ar" ? "شارع عامر بن مالك" : "Amer bin Malek Street"}\n`;
    text += `📞 ${language === "ar" ? "هاتف المتجر: +962 78 903 0091" : "Store Phone: +962 78 903 0091"}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `📅 ${language === "ar" ? "التاريخ" : "Date"}: ${formattedDate}\n`;
    text += `🔢 ${language === "ar" ? "رقم الفاتورة" : "Invoice No"}: ${invoiceNo}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    // Customer Details
    text += `👤 ${language === "ar" ? "تفاصيل العميل" : "CUSTOMER DETAILS"}:\n`;
    text += `▪️ ${t.cart.customerName}: ${clientName.trim()}\n`;
    if (clientPhone.trim()) {
      text += `▪️ ${t.cart.phoneLabel}: ${clientPhone.trim()}\n`;
    }
    text += `▪️ ${t.cart.addressLabel}: ${clientAddress.trim()}\n\n`;
    text += `🛒 ${language === "ar" ? "المنتجات المطلوبة" : "ORDER ITEMS"}:\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;

    cart.forEach((item, index) => {
      const itemSubtotal = item.price * item.quantity;
      text += `${index + 1}. 📦 *${item.name}*\n`;
      text += `   ${language === "ar" ? "الكمية" : "Qty"}: ${item.quantity} × ${item.price.toFixed(2)} ${t.cart.currency}\n`;
      text += `   ${language === "ar" ? "المجموع" : "Subtotal"}: *${itemSubtotal.toFixed(2)} ${t.cart.currency}*\n`;
      text += `-------------------------------------\n`;
    });

    text += `\n💵 ${language === "ar" ? "ملخص الحساب" : "FINANCIAL SUMMARY"}:\n`;
    text += `▪️ *${t.cart.subtotal}: ${cartSubtotal.toFixed(2)} ${t.cart.currency}*\n`;
    text += `▪️ *${t.cart.deliveryLabel}*: ${language === "ar" ? "توصيل سريع (خلال ساعة)" : "Express Delivery (Within 1 hour)"}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

    if (orderNotes.trim()) {
      text += `📝 *${t.cart.notesLabel}*:\n`;
      text += `> ${orderNotes.trim()}\n\n`;
    }

    text += `✨ ${language === "ar" ? "شكراً لاختياركم متجر بيت بوينت! نسعد دائماً بخدمتكم." : "Thank you for choosing Pet Point! We appreciate your business."}\n`;
    text += `🛍️ ${language === "ar" ? "سيقوم فريق العمل بتأكيد طلبكم وتوصيله فوراً." : "Our team will verify and dispatch your order immediately."}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/962789030091?text=${encoded}`, "_blank");
    
    addToast(
      language === "ar" ? "تم تحويلك إلى الواتساب لإكمال الطلب!" : "Redirecting to WhatsApp to complete your order!",
      "success"
    );

    // Optionally clear cart after successful redirect
    // clearCart();
    // setCartDrawerOpen(false);
  };

  return (
    <AnimatePresence>
      {cartDrawerOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartDrawerOpen(false)}
            className="fixed inset-0 bg-brand-charcoal/60 z-[9990] backdrop-blur-sm"
          />

          {/* Sliding Drawer Container */}
          <motion.div
            initial={{ x: isRtl ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? "-100%" : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 bottom-0 ${
              isRtl ? "left-0" : "right-0"
            } w-full sm:w-[480px] max-w-full bg-[#FAF9F5] z-[9995] shadow-2xl flex flex-col border-y-0 border-l border-r border-black/5 overflow-hidden`}
            style={{ direction: isRtl ? "rtl" : "ltr" }}
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-black/5 bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-green/10 rounded-xl text-brand-green">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-black text-brand-charcoal">
                    {t.cart.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/40">
                    {cartCount} {cartCount === 1 ? t.cart.itemSingular : language === "ar" ? "منتجات" : "items"}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setCartDrawerOpen(false)}
                className="p-2 rounded-xl bg-brand-beige hover:bg-black/5 text-brand-charcoal/60 hover:text-brand-charcoal transition-all duration-300 clickable border border-black/5"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Cart Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
              {cart.length === 0 ? (
                /* Empty Cart State */
                <div className="h-[60%] flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 bg-brand-beige border border-black/5 rounded-full flex items-center justify-center text-brand-charcoal/30 mb-6 shadow-inner">
                    <ShoppingBag size={36} />
                  </div>
                  <p className="text-sm font-semibold text-brand-charcoal/60 max-w-xs leading-relaxed">
                    {t.cart.emptyMsg}
                  </p>
                </div>
              ) : (
                /* Active Cart State */
                <>
                  {/* Cart Item Cards list */}
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-4 bg-white rounded-2xl border border-black/5 shadow-sm flex gap-4 items-center group relative hover:border-brand-green/20 transition-all duration-300"
                      >
                        <div
                          className="w-16 h-16 bg-cover bg-center rounded-xl bg-brand-beige border border-black/5 overflow-hidden flex-shrink-0"
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <div className="flex-1 min-w-0 text-left rtl:text-right">
                          <h4 className="font-heading text-sm font-bold text-brand-charcoal truncate mb-1">
                            {item.name}
                          </h4>
                          <span className="text-xs font-black text-brand-green leading-none block mb-2">
                            {item.price.toFixed(2)} {t.cart.currency}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-1.5 bg-brand-beige border border-black/5 rounded-lg w-fit px-1 py-0.5">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 rounded text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-black/5 transition-colors clickable"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-black text-brand-charcoal px-2 min-w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-black/5 transition-colors clickable"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>

                        {/* Direct delete button */}
                        <button
                          onClick={() => updateQuantity(item.id, 0)}
                          className="p-2 rounded-xl text-brand-charcoal/30 hover:text-brand-orange hover:bg-brand-orange/5 border border-transparent hover:border-brand-orange/10 transition-all duration-300 clickable absolute top-4 right-4 rtl:left-4 rtl:right-auto"
                          aria-label="Delete product"
                        >
                          <Trash2 size={14} />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Customer Information Form */}
                  <div className="pt-4 border-t border-black/5 space-y-4">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-brand-green block mb-2">
                      {language === "ar" ? "معلومات مستلم الطلب" : "Delivery Details"}
                    </span>

                    {/* Customer Name Input */}
                    <div className="space-y-1 text-left rtl:text-right">
                      <label className="text-[10px] font-extrabold text-brand-charcoal/65 uppercase tracking-wide flex items-center gap-1.5">
                        <User size={11} className="text-brand-green" />
                        {t.cart.customerName} <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder={t.cart.customerNamePlaceholder}
                        className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl text-sm font-semibold text-brand-charcoal focus:outline-none focus:border-brand-green/55 focus:ring-1 focus:ring-brand-green/20 transition-all duration-300"
                        required
                      />
                    </div>

                    {/* Customer Phone Input */}
                    <div className="space-y-1 text-left rtl:text-right">
                      <label className="text-[10px] font-extrabold text-brand-charcoal/65 uppercase tracking-wide flex items-center gap-1.5">
                        <Phone size={11} className="text-brand-green" />
                        {t.cart.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder={t.cart.phonePlaceholder}
                        className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl text-sm font-semibold text-brand-charcoal focus:outline-none focus:border-brand-green/55 focus:ring-1 focus:ring-brand-green/20 transition-all duration-300 text-left rtl:text-right"
                      />
                    </div>

                    {/* Customer Address Input */}
                    <div className="space-y-1 text-left rtl:text-right">
                      <label className="text-[10px] font-extrabold text-brand-charcoal/65 uppercase tracking-wide flex items-center gap-1.5">
                        <MapPin size={11} className="text-brand-green" />
                        {t.cart.addressLabel} <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        value={clientAddress}
                        onChange={(e) => setClientAddress(e.target.value)}
                        placeholder={t.cart.addressPlaceholder}
                        className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl text-sm font-semibold text-brand-charcoal focus:outline-none focus:border-brand-green/55 focus:ring-1 focus:ring-brand-green/20 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Customer Notes */}
                  <div className="pt-4 border-t border-black/5 text-left rtl:text-right">
                    <label className="text-[10px] font-extrabold text-brand-charcoal/65 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                      <FileText size={11} className="text-brand-green" />
                      {t.cart.notesLabel}
                    </label>
                    <textarea
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder={t.cart.notesPlaceholder}
                      rows={3}
                      className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl text-xs font-semibold text-brand-charcoal focus:outline-none focus:border-brand-green/55 focus:ring-1 focus:ring-brand-green/20 transition-all duration-300 resize-none leading-relaxed"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer Receipts */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-black/5 space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-sm font-bold text-brand-charcoal/60">
                    <span>{t.cart.subtotal}</span>
                    <span className="font-black text-brand-charcoal">
                      {cartSubtotal.toFixed(2)} {t.cart.currency}
                    </span>
                  </div>
                  <div className="flex items-start justify-between text-xs text-brand-charcoal/50 leading-normal border-b border-black/5 pb-3">
                    <span>{t.cart.deliveryLabel}</span>
                    <span className="text-right rtl:text-left font-medium max-w-[240px]">
                      {t.cart.deliveryValue}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-base font-black text-brand-charcoal pt-1">
                    <span>{language === "ar" ? "المجموع النهائي" : "Total"}</span>
                    <span className="text-lg text-brand-green">
                      {cartSubtotal.toFixed(2)} {t.cart.currency}
                    </span>
                  </div>
                </div>

                <div className="text-[10px] text-brand-charcoal/45 font-medium leading-relaxed bg-brand-beige border border-black/5 p-3 rounded-xl flex items-start gap-2">
                  <MessageCircle size={14} className="text-brand-green flex-shrink-0 mt-0.5" />
                  <span>{t.cart.checkoutConfirm}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-brand-green/25 hover:shadow-brand-green/45 group clickable"
                >
                  <MessageCircle size={18} />
                  <span>{t.cart.btnCheckout}</span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
