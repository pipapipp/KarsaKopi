"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
  } as const;

  return (
    <section
      id="cerita-kami"
      className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-[#9E7A5F]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-[#8F9779]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* ── Visual Column ── */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">

            {/* Primary large image */}
            <motion.div
              variants={itemVariants}
              className="col-span-8 overflow-hidden rounded-3xl shadow-xl aspect-[3/4] relative group"
            >
              <Image
                src="/images/story-roasting.png"
                alt="Biji Kopi Memanggang"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 60vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1B14]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>

            {/* Small top-right image */}
            <motion.div
              variants={itemVariants}
              className="col-span-4 self-start mt-10 overflow-hidden rounded-2xl shadow-lg aspect-square relative group"
            >
              <Image
                src="/images/gallery/interior.png"
                alt="Interior Kedai Kopi Karsa"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 30vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1B14]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>

            {/* Overlapping bottom image */}
            <motion.div
              variants={itemVariants}
              className="col-span-5 -mt-16 col-start-7 overflow-hidden rounded-2xl shadow-lg aspect-square relative group z-10"
            >
              <Image
                src="/images/menu/espresso.png"
                alt="Secangkir Espresso Hangat"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 40vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1B14]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>

            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-6 -left-6 bg-[#2C1B14] p-6 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-center w-36 h-36 z-20"
            >
              <span className="font-serif text-3xl font-bold text-[#C4977A]">100%</span>
              <span className="font-sans text-[11px] tracking-wider uppercase font-semibold mt-1 text-[#FDFBF7]/80">
                Lokal Arabika
              </span>
            </motion.div>
          </div>

          {/* ── Text Column ── */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.span
              variants={itemVariants}
              className="font-sans text-sm font-bold tracking-widest text-[#9E7A5F] uppercase mb-3 inline-block"
            >
              Mengenal Karsa
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#2C1B14] mb-6"
            >
              Warisan Kami
            </motion.h2>

            {/* Decorative divider */}
            <motion.div
              variants={itemVariants}
              className="w-12 h-1 bg-[#9E7A5F] rounded-full mb-8"
            />

            {/* Body paragraphs — strong, unambiguous dark text */}
            <motion.div variants={itemVariants} className="space-y-5">
              <p className="font-sans text-[15px] text-[#2C1B14]/75 leading-relaxed">
                Di Karsa Kopi, perjalanan kami dimulai dari sebuah impian sederhana: menghadirkan
                secangkir kenyamanan di tengah hiruk-pikuk kehidupan. Kami bermitra langsung dengan
                petani kopi lokal di pegunungan Nusantara untuk memastikan setiap biji kopi
                <strong className="text-[#2C1B14] font-semibold"> 100% Arabika</strong> dipanen
                dengan metode yang berkelanjutan dan adil.
              </p>
              <p className="font-sans text-[15px] text-[#2C1B14]/75 leading-relaxed">
                Setiap kumpulan biji kopi dipanggang secara manual oleh roaster berpengalaman kami.
                Proses yang lambat dan presisi ini membuka spektrum rasa tersembunyi — menghasilkan
                rasa cokelat yang kaya, aroma bunga yang lembut, dan keasaman yang seimbang.
              </p>
              <p className="font-sans text-[15px] text-[#2C1B14]/75 leading-relaxed">
                Lebih dari sekadar menyajikan minuman kafein, kami mendedikasikan ruang ini sebagai
                tempat perlindungan yang tenang di lingkungan Anda — untuk menemukan inspirasi,
                berbagi tawa, atau sekadar menikmati keheningan pagi yang menenangkan.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-5 pt-6 border-t border-[#2C1B14]/10"
            >
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-[#9E7A5F]/15 flex items-center justify-center shrink-0">
                <span className="font-serif text-lg font-bold text-[#9E7A5F]">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-[#2C1B14]">
                  Hendra Wijaya
                </span>
                <span className="font-sans text-xs text-[#9E7A5F] tracking-wider uppercase font-semibold">
                  Founder & Head Barista
                </span>
              </div>
              <div className="ml-auto font-serif text-2xl text-[#9E7A5F]/25 italic select-none hidden sm:block">
                Hendra W.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
