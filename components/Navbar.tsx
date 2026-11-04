"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, Menu as MenuIcon, X, Coffee } from "lucide-react";

const NAV_LINKS = [
  { name: "Beranda", href: "#beranda" },
  { name: "Cerita Kami", href: "#cerita-kami" },
  { name: "Menu", href: "#menu" },
  { name: "Galeri", href: "#galeri" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null as unknown as IntersectionObserver;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const navVariants: Variants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const linkVariants: Variants = {
    hidden: { y: -10, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 + i * 0.07, duration: 0.4 },
    }),
  };

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#beranda"
            onClick={(e) => scrollTo(e, "#beranda")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#9E7A5F] flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-12">
              <Coffee className="w-5 h-5" />
            </div>
            <span className="font-serif text-xl font-bold tracking-wider text-[#2C1B14]">
              KARSA<span className="text-[#9E7A5F]">KOPI</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -2 }}
                  className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-[#9E7A5F]" : "text-[#2C1B14]/70 hover:text-[#9E7A5F]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#9E7A5F] rounded-full"
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="#kontak"
              onClick={(e) => scrollTo(e, "#kontak")}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(158,122,95,0.35)" }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-2.5 rounded-full bg-[#9E7A5F] hover:bg-[#8a6b52] text-white font-sans text-sm font-semibold tracking-wide shadow-md transition-colors duration-300"
            >
              Pesan Online
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="flex md:hidden p-2 text-[#2C1B14]"
            aria-label="Buka Menu"
          >
            <MenuIcon className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2C1B14]/40 backdrop-blur-md flex justify-end"
          >
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-4/5 max-w-sm h-full bg-[#FDFBF7] shadow-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#9E7A5F] flex items-center justify-center text-white">
                      <Coffee className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-lg font-bold tracking-wider text-[#2C1B14]">
                      KARSA<span className="text-[#9E7A5F]">KOPI</span>
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-[#F4ECE1] text-[#2C1B14]"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <nav className="flex flex-col gap-5">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.07 }}
                      whileHover={{ x: 6 }}
                      className="font-serif text-2xl font-semibold text-[#2C1B14] hover:text-[#9E7A5F] transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div>
                <motion.a
                  href="#kontak"
                  onClick={(e) => scrollTo(e, "#kontak")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-4 rounded-xl bg-[#9E7A5F] text-white text-center font-sans font-bold tracking-wide shadow-md"
                >
                  Pesan Online
                </motion.a>
                <p className="text-center text-xs text-[#2C1B14]/40 mt-4">
                  © 2026 Karsa Kopi. Hak Cipta Dilindungi.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
