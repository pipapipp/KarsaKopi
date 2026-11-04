"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  colSpan?: string;
}

const IMAGES: GalleryImage[] = [
  {
    id: 0,
    src: "/images/gallery/interior.png",
    alt: "Desain Interior Minimalis Hangat Karsa Kopi",
    category: "Interior",
    colSpan: "md:col-span-2",
  },
  {
    id: 1,
    src: "/images/gallery/wfc.png",
    alt: "Sudut Produktif WFC di Karsa Kopi",
    category: "WFC Spot",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    alt: "Suasana Asri Outdoor Garden Karsa Kopi",
    category: "Outdoor",
  },
  {
    id: 3,
    src: "/images/story-roasting.png",
    alt: "Proses Artisan Roasting Biji Kopi Lokal",
    category: "Roastery",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    alt: "Penyajian Secangkir Kopi Hangat",
    category: "Penyajian",
    colSpan: "md:col-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    alt: "Barista Menyeduh Kopi dengan Kasih Sayang",
    category: "Barista",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    document.body.style.overflow = "";
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) setActiveIndex((activeIndex + 1) % IMAGES.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) setActiveIndex((activeIndex - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <section id="galeri" className="py-24 md:py-32 bg-[#F4ECE1]/30">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-sm font-semibold tracking-widest text-[#9E7A5F] uppercase mb-3 inline-block"
          >
            Suasana Kedai
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#2C1B14]"
          >
            Sudut Inspirasi & Kehangatan
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-16 h-1 bg-[#9E7A5F] mx-auto mt-6 rounded-full origin-left"
          />
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => openLightbox(idx)}
              className={`relative overflow-hidden rounded-3xl shadow-sm cursor-pointer group ${img.colSpan ?? ""} ${
                idx === 0 || idx === 4 ? "aspect-[16/9]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 bg-[#2C1B14]/50 flex flex-col justify-end p-6"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-sans text-xs font-bold tracking-widest text-[#9E7A5F] uppercase block mb-1">
                      {img.category}
                    </span>
                    <h3 className="font-serif text-base font-bold text-white max-w-[85%] leading-snug">
                      {img.alt}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors flex-shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-[#120A06]/95 backdrop-blur-md flex flex-col items-center justify-center p-6"
            >
              {/* Close */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Prev */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={showPrev}
                className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <div
                className="relative max-w-5xl w-full h-[70vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={IMAGES[activeIndex].src}
                      alt={IMAGES[activeIndex].alt}
                      fill
                      className="object-contain"
                      sizes="90vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Caption */}
              <div className="text-center mt-5" onClick={(e) => e.stopPropagation()}>
                <span className="font-sans text-xs font-bold tracking-widest text-[#9E7A5F] uppercase block mb-1">
                  {IMAGES[activeIndex].category}
                </span>
                <p className="font-serif text-base text-white font-medium">
                  {IMAGES[activeIndex].alt}
                </p>
              </div>

              {/* Next */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={showNext}
                className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
