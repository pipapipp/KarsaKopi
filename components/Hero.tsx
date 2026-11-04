"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background image layer ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero-coffee.png')` }}
        />
        {/* Strong dark overlay so ALL text is legible */}
        <div className="absolute inset-0 bg-[#1C120C]/80" />
        {/* Subtle warm vignette at very bottom to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1C120C] to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-32 pt-40">
        <div className="lg:col-span-9 flex flex-col items-start text-left">

          {/* Welcome badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#9E7A5F]/50 bg-[#9E7A5F]/15 backdrop-blur-md mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-[#9E7A5F] animate-pulse shrink-0" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#D4B89A]">
              Selamat Datang di Karsa Kopi
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Bangkitkan Indramu,
            <br />
            <span className="text-[#C4977A] italic font-light">Seteguk demi Seteguk.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-sans text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed mb-10"
          >
            Ditanam lokal, dipanggang sempurna oleh artisan kami, dan disajikan
            dengan sepenuh hati untuk menyempurnakan hari Anda.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => scrollTo("#menu")}
              whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(196,151,122,0.45)" }}
              whileTap={{ scale: 0.96 }}
              className="px-9 py-4 rounded-full bg-[#9E7A5F] hover:bg-[#B08B70] text-white font-sans font-bold tracking-wide shadow-xl transition-colors duration-300"
            >
              Jelajahi Menu Kami
            </motion.button>
            <motion.button
              onClick={() => scrollTo("#cerita-kami")}
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.96 }}
              className="px-9 py-4 rounded-full border border-white/30 text-white font-sans font-bold tracking-wide backdrop-blur-sm transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Tentang Kami
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex gap-10 mt-14 pt-8 border-t border-white/10"
          >
            {[
              { value: "100%", label: "Arabika Lokal" },
              { value: "5+", label: "Tahun Berpengalaman" },
              { value: "4.9★", label: "Rating Pelanggan" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-white">{stat.value}</p>
                <p className="font-sans text-xs text-white/50 uppercase tracking-widest mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.button
          onClick={() => scrollTo("#cerita-kami")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="p-3 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/60 transition-colors"
          aria-label="Gulir ke bawah"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
