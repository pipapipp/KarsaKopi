"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MapPin, Clock, Phone, Star, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" });
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nama.trim()) errs.nama = "Nama wajib diisi";
    if (!formData.email.trim()) errs.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Format email tidak valid";
    if (!formData.pesan.trim()) errs.pesan = "Pesan wajib diisi";
    if (rating === 0) errs.rating = "Silakan pilih penilaian bintang Anda";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ nama: "", email: "", pesan: "" });
    setRating(0);
    setTimeout(() => setIsSuccess(false), 4000);
  };

  const inputBase =
    "w-full px-5 py-4 rounded-2xl bg-white border text-[#2C1B14] placeholder-[#2C1B14]/30 focus:outline-none focus:ring-2 focus:ring-[#9E7A5F]/40 focus:border-[#9E7A5F] transition-all duration-200";

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="kontak" className="py-24 md:py-32 bg-[#F4ECE1]/30 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-sm font-semibold tracking-widest text-[#9E7A5F] uppercase mb-3 inline-block"
          >
            Hubungi Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#2C1B14]"
          >
            Kunjungi Kedai Kami
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-16 h-1 bg-[#9E7A5F] mx-auto mt-6 rounded-full origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT: Info + Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address */}
            {[
              {
                icon: <MapPin className="w-5 h-5" />,
                title: "Alamat Kami",
                content: (
                  <p className="font-sans text-sm text-[#2C1B14]/70 leading-relaxed">
                    Jl. Senopati No. 45, Kebayoran Baru,<br />Jakarta Selatan, DKI Jakarta 12190
                  </p>
                ),
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: "Jam Operasional",
                content: (
                  <div className="font-sans text-sm text-[#2C1B14]/70 space-y-0.5">
                    <p>Senin – Jumat: <strong>07:00 – 22:00</strong></p>
                    <p>Sabtu – Minggu: <strong>08:00 – 23:00</strong></p>
                  </div>
                ),
              },
              {
                icon: <Phone className="w-5 h-5" />,
                title: "Kontak Cepat",
                content: (
                  <div className="font-sans text-sm text-[#2C1B14]/70">
                    <p>+62 21 5550 998</p>
                    <p>hello@karsakopi.com</p>
                  </div>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#9E7A5F]/10 flex items-center justify-center text-[#9E7A5F]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#2C1B14] mb-1">{item.title}</h3>
                  {item.content}
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-[#2C1B14]/10"
            >
              <iframe
                title="Peta Karsa Kopi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273641775836!2d106.80436447585093!3d-6.227618993760634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14ff4e6a00f%3A0x6b0ffc6052efcff!2sSenopati!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale brightness-95"
              />
            </motion.div>
          </div>

          {/* RIGHT: Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-[#2C1B14]/[0.06] p-8 md:p-10 rounded-[32px] shadow-sm"
          >
            <h3 className="font-serif text-2xl font-bold text-[#2C1B14] mb-2">
              Bagikan Pengalamanmu
            </h3>
            <p className="font-sans text-sm text-[#2C1B14]/60 mb-8">
              Kritik dan saran Anda sangat berharga bagi kami untuk terus menjaga kualitas.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Nama */}
              <div>
                <label htmlFor="nama" className="block font-sans text-xs font-bold uppercase tracking-wider text-[#2C1B14]/50 mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  autoComplete="off"
                  className={`${inputBase} ${errors.nama ? "border-red-400" : "border-[#2C1B14]/15"}`}
                />
                {errors.nama && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.nama}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-sans text-xs font-bold uppercase tracking-wider text-[#2C1B14]/50 mb-1.5">
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  autoComplete="off"
                  className={`${inputBase} ${errors.email ? "border-red-400" : "border-[#2C1B14]/15"}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Star Rating */}
              <div>
                <span className="block font-sans text-xs font-bold uppercase tracking-wider text-[#2C1B14]/50 mb-2">
                  Penilaian Anda
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const lit = (hoverRating || rating) >= star;
                    return (
                      <motion.button
                        key={star}
                        type="button"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          setRating(star);
                          setErrors((prev) => ({ ...prev, rating: "" }));
                        }}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-0.5"
                      >
                        <Star
                          className={`w-7 h-7 transition-colors duration-150 ${
                            lit ? "fill-[#9E7A5F] text-[#9E7A5F]" : "text-[#2C1B14]/20"
                          }`}
                        />
                      </motion.button>
                    );
                  })}
                  {rating > 0 && (
                    <span className="ml-3 font-sans text-sm font-semibold text-[#9E7A5F]">
                      {rating}/5
                    </span>
                  )}
                </div>
                {errors.rating && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.rating}
                  </p>
                )}
              </div>

              {/* Pesan */}
              <div>
                <label htmlFor="pesan" className="block font-sans text-xs font-bold uppercase tracking-wider text-[#2C1B14]/50 mb-1.5">
                  Kritik & Saran
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={4}
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Tuliskan masukan Anda di sini..."
                  className={`${inputBase} resize-none ${errors.pesan ? "border-red-400" : "border-[#2C1B14]/15"}`}
                />
                {errors.pesan && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.pesan}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 8px 30px rgba(158,122,95,0.4)" } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="w-full py-4 rounded-2xl bg-[#9E7A5F] hover:bg-[#8a6b52] disabled:bg-[#9E7A5F]/50 text-white font-sans font-bold tracking-wide transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Mengirimkan...
                  </>
                ) : (
                  "Kirim Kritik & Saran"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#8F9779] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <div>
              <h4 className="font-sans font-bold text-sm">Terima kasih!</h4>
              <p className="font-sans text-xs opacity-90">Masukan Anda telah berhasil terkirim.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
