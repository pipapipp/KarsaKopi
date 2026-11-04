"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  tag?: string;
}

const CATEGORIES = [
  { id: "kopi", name: "Kopi" },
  { id: "non-kopi", name: "Non-Kopi" },
  { id: "kue", name: "Kue & Penutup" },
  { id: "makanan", name: "Makanan Ringan" },
];

const MENU_DATA: Record<string, MenuItem[]> = {
  kopi: [
    {
      id: "k-1",
      name: "Espresso Karsa",
      price: "Rp 28.000",
      description: "Double shot espresso pekat diekstraksi dari biji kopi lokal arabika kualitas terbaik.",
      image: "/images/menu/espresso.png",
      tag: "Terlaris",
    },
    {
      id: "k-2",
      name: "Kopi Susu Latte",
      price: "Rp 38.000",
      description: "Kombinasi espresso lembut dengan susu segar hangat bertekstur beludru (velvety microfoam).",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "k-3",
      name: "Cappuccino Klasik",
      price: "Rp 35.000",
      description: "Keseimbangan presisi antara espresso kuat, susu hangat, dan lapisan busa susu tebal di atasnya.",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "k-4",
      name: "Seduh Manual V60",
      price: "Rp 36.000",
      description: "Kopi saring murni dengan metode V60 untuk mengekstraksi aroma buah dan bunga yang jernih.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    },
  ],
  "non-kopi": [
    {
      id: "nk-1",
      name: "Matcha Latte Kyoto",
      price: "Rp 40.000",
      description: "Bubuk teh hijau matcha premium impor Kyoto Jepang disajikan hangat dengan kelembutan susu.",
      image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop",
      tag: "Favorit",
    },
    {
      id: "nk-2",
      name: "Cokelat Klasik Nusantara",
      price: "Rp 38.000",
      description: "Minuman cokelat hitam murni pilihan lokal dengan rasa manis pahit yang seimbang dan gurih.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "nk-3",
      name: "Artisan Chamomile Tea",
      price: "Rp 32.000",
      description: "Seduhan kuncup bunga kamomil organik kering beraroma manis buah apel yang menenangkan.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop",
    },
  ],
  kue: [
    {
      id: "p-1",
      name: "Croissant Mentega Perancis",
      price: "Rp 30.000",
      description: "Pastri mentega berlapis renyah (flaky) di luar dan lembut berongga di bagian dalam.",
      image: "/images/menu/croissant.png",
      tag: "Segar dari Oven",
    },
    {
      id: "p-2",
      name: "Tiramisu Espresso",
      price: "Rp 45.000",
      description: "Kue klasik Italia berlapis biskuit ladyfinger yang direndam espresso Karsa dan mascarpone.",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "p-3",
      name: "Basque Burnt Cheesecake",
      price: "Rp 42.000",
      description: "Kue keju panggang ala Spanyol dengan permukaan gosong karamel yang gurih dan tengahnya lembut meleleh.",
      image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?q=80&w=600&auto=format&fit=crop",
    },
  ],
  makanan: [
    {
      id: "mr-1",
      name: "Kroket Kentang Truffle",
      price: "Rp 35.000",
      description: "Kroket kentang tumbuk halus isi jamur truffle hitam wangi dengan kulit luar krispi.",
      image: "https://images.unsplash.com/photo-1560684352-8497838a2229?q=80&w=600&auto=format&fit=crop",
      tag: "Populer",
    },
    {
      id: "mr-2",
      name: "Kentang Goreng Rosemary",
      price: "Rp 32.000",
      description: "Potongan kentang gurih bertabur garam laut alami dan aroma herba rosemary segar.",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "mr-3",
      name: "Roti Brioche Panggang Karamel",
      price: "Rp 38.000",
      description: "Roti brioche tebal dipanggang mentega disajikan dengan saus karamel hangat buatan rumah.",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=600&auto=format&fit=crop",
    },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("kopi");

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-sm font-semibold tracking-widest text-[#9E7A5F] uppercase mb-3 inline-block"
          >
            Menu Pilihan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#2C1B14]"
          >
            Simfoni Cita Rasa Kami
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-16 h-1 bg-[#9E7A5F] mx-auto mt-6 rounded-full origin-left"
          />
        </div>

        {/* Tab Controls — isolated so z-index never conflicts */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-[#F4ECE1] p-1.5 rounded-full overflow-x-auto no-scrollbar gap-1">
            {CATEGORIES.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{ position: "relative" }}
                  className={`px-5 py-2.5 rounded-full font-sans text-sm font-semibold tracking-wide whitespace-nowrap transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#9E7A5F] ${
                    isActive ? "text-white" : "text-[#2C1B14]/60 hover:text-[#2C1B14]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tabPill"
                      className="absolute inset-0 bg-[#9E7A5F] rounded-full shadow-md"
                      style={{ zIndex: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {MENU_DATA[activeTab].map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(44,27,20,0.12)" }}
                  className="group bg-[#F4ECE1]/30 border border-[#2C1B14]/[0.05] rounded-3xl overflow-hidden shadow-sm flex flex-col h-full cursor-pointer"
                >
                  {/* Image with zoom */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#F4ECE1]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Vignette on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1B14]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    {item.tag && (
                      <div className="absolute top-3 left-3 bg-[#8F9779] text-white text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                        {item.tag}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-3 mb-2">
                        <h3 className="font-serif text-lg font-bold text-[#2C1B14] group-hover:text-[#9E7A5F] transition-colors duration-200">
                          {item.name}
                        </h3>
                        <span className="font-sans text-xs font-bold text-[#9E7A5F] bg-[#F4ECE1] px-3 py-1 rounded-lg whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-[#2C1B14]/65 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-[#2C1B14]/[0.05] flex items-center justify-between">
                      <span className="font-sans text-xs font-semibold text-[#2C1B14]/40 uppercase tracking-wider">
                        Tersedia setiap hari
                      </span>
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="font-sans text-xs font-bold text-[#9E7A5F] flex items-center gap-1"
                      >
                        Pesan &rarr;
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
