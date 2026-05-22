"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Mail, MessageCircle, Send, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const { t, language } = useCart();
  const isRtl = language === "ar";
  
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (): boolean => {
    const tempErrors: ValidationErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = isRtl ? "الاسم الكريم مطلوب" : "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = isRtl ? "يجب أن يكون الاسم حرفين على الأقل" : "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = isRtl ? "البريد الإلكتروني مطلوب" : "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = isRtl ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = isRtl ? "رقم الهاتف للتواصل مطلوب" : "Phone number is required";
      isValid = false;
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone)) {
      tempErrors.phone = isRtl ? "يرجى إدخال رقم هاتف صحيح (٧-١٥ رقم)" : "Please enter a valid phone number (7-15 digits)";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = isRtl ? "محتوى الرسالة مطلوب" : "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = isRtl ? "يجب أن تكون الرسالة ١٠ أحرف على الأقل" : "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.message || (isRtl ? "فشل في إرسال الرسالة" : "Failed to submit message"));
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || (isRtl ? "حدث خطأ ما. يرجى المحاولة مرة أخرى." : "Something went wrong. Please try again."));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF9F5] border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
        
        {/* Left Column: Map & Store Details */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="text-left rtl:text-right mb-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-green mb-3 block">
              {t.contact.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal leading-none tracking-tight mb-6">
              {t.contact.title}
            </h2>
            <p className="text-brand-charcoal/70 text-sm md:text-base leading-relaxed">
              {isRtl
                ? "نحن نرحب بكم دائماً في صالة عرض بيت بوينت في عمان. تفضل بزيارتنا لمشاهدة تشكيلة المنتجات الممتازة، أو استشارة مصممي الأحواض المائية الفاخرة، أو التحدث مع خبراء تغذية ورعاية الحيوانات الأليفة."
                : "We are conveniently located in Amman, Jordan. Drop in to view our comprehensive product display, consult with our fish and aquarium designers, or chat with our pet nutritionists."
              }
            </p>
          </div>

          {/* Location details card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-left rtl:text-right">
            <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-4">
                <MapPin size={20} />
              </div>
              <h4 className="font-heading font-black text-brand-charcoal text-sm mb-1">{t.contact.addressLabel}</h4>
              <p className="text-xs text-brand-charcoal/60 leading-normal">
                {t.contact.addressValue}
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
                <Clock size={20} />
              </div>
              <h4 className="font-heading font-black text-brand-charcoal text-sm mb-1">{t.contact.hoursLabel}</h4>
              <p className="text-xs text-brand-charcoal/60 leading-normal">
                <strong>{isRtl ? "الأيام الاعتيادية:" : "Daily:"}</strong> {isRtl ? "١١:٠٠ صباحاً – ١١:٠٠ مساءً" : "11:00 AM – 11:00 PM"} <br />
                <strong>{isRtl ? "الجمعة:" : "Friday:"}</strong> {isRtl ? "٢:٠٠ ظهراً – ١١:٠٠ مساءً" : "2:00 PM – 11:00 PM"}
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-4">
                <Phone size={20} />
              </div>
              <h4 className="font-heading font-black text-brand-charcoal text-sm mb-1">{t.contact.phoneLabel}</h4>
              <a href="tel:+962789030091" className="text-xs text-brand-green hover:underline font-bold block">
                {t.contact.phoneValue}
              </a>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
                <MessageCircle size={20} />
              </div>
              <h4 className="font-heading font-black text-brand-charcoal text-sm mb-1">{isRtl ? "محادثة واتساب الفورية" : "WhatsApp Chat"}</h4>
              <a
                href="https://wa.me/962789030091?text=Hi%20Pet%20Point%20Team%21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-orange hover:underline font-bold block"
              >
                {isRtl ? "ابدأ المحادثة الآن" : "Start Chatting Now"}
              </a>
            </div>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-brand-beige-dark relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.8197779774614!2d35.8384236!3d31.9866127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca13e7343e8bb%3A0xe54e6371ad59bb93!2sAmer%20Bin%20Malek%20St.%2C%20Amman!5e0!3m2!1sen!2sjo!4v1700000000000!5m2!1sen!2sjo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pet Point Location on Map"
              className="grayscale-[20%] opacity-90 contrast-[110%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6 flex items-stretch">
          <div className="w-full bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-lg flex flex-col justify-center relative overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-brand-green/5 rounded-full blur-xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                // Success Panel
                <motion.div
                  className="flex flex-col items-center justify-center text-center py-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-20 h-20 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center text-brand-green mb-8 shadow-inner">
                    <CheckCircle size={40} className="animate-bounce" />
                  </div>
                  
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange text-[10px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
                    <Sparkles size={10} />
                    {isRtl ? "تم إرسال الرسالة الفاخرة" : "Message Dispatched"}
                  </span>

                  <h3 className="font-heading text-2xl font-black text-brand-charcoal mb-4">
                    {isRtl ? "شكرًا جزيلاً لك!" : "Thank You So Much!"}
                  </h3>
                  <p className="text-brand-charcoal/60 text-sm leading-relaxed max-w-sm mb-8">
                    {t.contact.formSuccess}
                  </p>

                  <button
                    onClick={() => setStatus("idle")}
                    className="px-8 py-3 bg-brand-green hover:bg-brand-green-hover text-white text-sm font-bold rounded-full transition-colors shadow-md shadow-brand-green/20 clickable animate-pulse"
                  >
                    {isRtl ? "إرسال رسالة أخرى" : "Send Another Message"}
                  </button>
                </motion.div>
              ) : (
                // Standard validated Form layout
                <motion.div
                  className="w-full flex flex-col text-left rtl:text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-heading text-2xl font-black text-brand-charcoal mb-2">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-brand-charcoal/50 text-xs font-semibold mb-8">
                    {isRtl 
                      ? "يرجى تعبئة الحقول أدناه وسيقوم مستشارونا بالتواصل معك على وجه السرعة." 
                      : "Fill out the form below and our staff will respond to you promptly."
                    }
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs text-brand-charcoal/70 font-bold uppercase tracking-wider">
                        {t.contact.formName}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={isRtl ? "أحمد التميمي" : "John Doe"}
                        className={`w-full px-5 py-3.5 rounded-xl bg-brand-beige border text-sm font-medium transition-colors ${
                          errors.name
                            ? "border-red-500 focus:outline-red-500"
                            : "border-black/5 focus:outline-brand-green focus:border-brand-green"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                          <AlertCircle size={10} /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email & Phone grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs text-brand-charcoal/70 font-bold uppercase tracking-wider">
                          {t.contact.formEmail}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className={`w-full px-5 py-3.5 rounded-xl bg-brand-beige border text-sm font-medium transition-colors ${
                            errors.email
                              ? "border-red-500 focus:outline-red-500"
                              : "border-black/5 focus:outline-brand-green focus:border-brand-green"
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                            <AlertCircle size={10} /> {errors.email}
                          </span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs text-brand-charcoal/70 font-bold uppercase tracking-wider">
                          {isRtl ? "رقم الهاتف للتواصل" : "Phone Number"}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={isRtl ? "079XXXXXXXX" : "+962 78 903 0091"}
                          className={`w-full px-5 py-3.5 rounded-xl bg-brand-beige border text-sm font-medium transition-colors ${
                            errors.phone
                              ? "border-red-500 focus:outline-red-500"
                              : "border-black/5 focus:outline-brand-green focus:border-brand-green"
                          }`}
                        />
                        {errors.phone && (
                          <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                            <AlertCircle size={10} /> {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs text-brand-charcoal/70 font-bold uppercase tracking-wider">
                        {t.contact.formSubject}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={isRtl ? "مرحباً بيت بوينت، أنا مهتم بتصميم حوض أسماك كريستالي مخصص لمنزلي في عمان..." : "Hi Pet Point, I am interested in designing a custom marine aquarium setup for my villa in Amman..."}
                        className={`w-full px-5 py-3.5 rounded-xl bg-brand-beige border text-sm font-medium transition-colors resize-none ${
                          errors.message
                            ? "border-red-500 focus:outline-red-500"
                            : "border-black/5 focus:outline-brand-green focus:border-brand-green"
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                          <AlertCircle size={10} /> {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Error message from API */}
                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-600">
                        <AlertCircle size={16} className="shrink-0" />
                        <span className="text-xs font-semibold leading-normal">{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-xl transition-all duration-300 shadow-md shadow-brand-green/25 hover:shadow-brand-green/45 disabled:opacity-50 disabled:cursor-not-allowed clickable select-none"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t.contact.formBtnSending}</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} className="rtl:rotate-180" />
                          <span>{t.contact.formBtnSubmit}</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
