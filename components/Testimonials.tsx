"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  handle: string;
  rating: number;
  quote: string;
  role?: string;
}

export default function Testimonials() {
  const row1: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Henny",
      handle: "@sarahenny",
      rating: 5,
      quote: "Kopi Susu Latte mereka luar biasa lembut. Keseimbangan rasa manis dan espressonya pas. Area indoor sangat tenang untuk fokus bekerja.",
      role: "Penulis Kuliner",
    },
    {
      id: 2,
      name: "Doni Permana",
      handle: "@doni.permana",
      rating: 5,
      quote: "Sebagai penikmat seduh manual, saya kagum dengan ketelitian barista Karsa menyeduh arabika lokal. Aroma bunga melatinya sangat keluar.",
    },
    {
      id: 3,
      name: "Citra Amalia",
      handle: "@citra_amalia",
      rating: 4,
      quote: "Croissant menteganya sangat renyah di luar dan lembut berongga di dalam. Wajib dipesan bersama Cappuccino hangat di pagi hari.",
    },
    {
      id: 4,
      name: "Reza Arsyad",
      handle: "@reza_arsyad",
      rating: 5,
      quote: "Burnt cheesecake terbaik yang pernah saya coba! Suasana sore hari di area taman outdoor terasa begitu magis dan menenangkan.",
    },
  ];

  const row2: Testimonial[] = [
    {
      id: 5,
      name: "Amanda Putri",
      handle: "@amanda_putri",
      rating: 5,
      quote: "Desain interiornya sangat memanjakan mata. Sudut-sudutnya minimalis estetis. Internetnya kencang, sangat ramah untuk pekerja WFC.",
      role: "Desainer Grafis",
    },
    {
      id: 6,
      name: "Budi Santoso",
      handle: "@budi_santoso",
      rating: 5,
      quote: "Mengagumi visi Karsa dalam mendukung petani kopi lokal. Setiap cangkir kopi terasa seperti menghargai bumi dan dedikasi petani Nusantara.",
    },
    {
      id: 7,
      name: "Gilang Aditya",
      handle: "@gilang_aditya",
      rating: 4,
      quote: "Kroket kentang truffle-nya gurih wangi sekali! Sangat cocok dijadikan teman mengobrol sore bersama teman-teman.",
    },
    {
      id: 8,
      name: "Mey Lestari",
      handle: "@mey_lestari",
      rating: 5,
      quote: "Baristanya ramah sekali dan dengan senang hati menjelaskan perbedaan karakter rasa biji kopi Flores dan Gayo yang mereka sediakan.",
    },
  ];

  // Helper component to render stars
  const StarRating = ({ count }: { count: number }) => {
    return (
      <div className="flex gap-1 text-latte mb-3">
        {[...Array(5)].map((_, idx) => (
          <Star
            key={idx}
            className={`w-4.5 h-4.5 ${
              idx < count ? "fill-latte text-latte" : "text-espresso/10 dark:text-ivory/10"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimoni" className="py-24 md:py-32 bg-[#FDFBF7] dark:bg-[#120A06] transition-colors duration-300 overflow-hidden relative">
      {/* Background decoration elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-latte/5 filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-sm font-semibold tracking-widest text-latte uppercase mb-3 inline-block"
        >
          Kata Pengunjung
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-espresso dark:text-ivory"
        >
          Cerita dari Cangkir Mereka
        </motion.h2>
        <div className="w-16 h-1 bg-latte mx-auto mt-6 rounded-full" />
      </div>

      {/* Marquee Row 1 (Moves Left) */}
      <div className="flex overflow-hidden w-full relative select-none mb-6">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex gap-6 whitespace-nowrap min-w-max px-3"
        >
          {/* Render twice for continuous loop */}
          {[...row1, ...row1].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="inline-block w-[350px] md:w-[420px] whitespace-normal bg-[#F4ECE1]/20 dark:bg-[#1F120B]/40 border border-espresso/[0.04] dark:border-ivory/[0.04] p-8 rounded-3xl"
            >
              <StarRating count={item.rating} />
              
              <p className="font-sans text-sm md:text-base text-espresso/80 dark:text-ivory/80 leading-relaxed italic mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-latte/15 flex items-center justify-center font-serif text-base font-bold text-latte uppercase">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso dark:text-ivory">
                    {item.name}
                  </h4>
                  <span className="font-sans text-xs text-espresso/50 dark:text-ivory/50">
                    {item.handle} {item.role ? `• ${item.role}` : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Moves Right) */}
      <div className="flex overflow-hidden w-full relative select-none">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex gap-6 whitespace-nowrap min-w-max px-3"
        >
          {/* Render twice for continuous loop */}
          {[...row2, ...row2].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="inline-block w-[350px] md:w-[420px] whitespace-normal bg-[#F4ECE1]/20 dark:bg-[#1F120B]/40 border border-espresso/[0.04] dark:border-ivory/[0.04] p-8 rounded-3xl"
            >
              <StarRating count={item.rating} />
              
              <p className="font-sans text-sm md:text-base text-espresso/80 dark:text-ivory/80 leading-relaxed italic mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center font-serif text-base font-bold text-sage uppercase">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso dark:text-ivory">
                    {item.name}
                  </h4>
                  <span className="font-sans text-xs text-espresso/50 dark:text-ivory/50">
                    {item.handle} {item.role ? `• ${item.role}` : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
