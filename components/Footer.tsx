"use client";

import { motion } from "framer-motion";
import { Coffee, Heart } from "lucide-react";

// ── Real brand SVG icons ──────────────────────────────────────────────────────

const InstagramIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TikTokIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const XIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <InstagramIcon />,
    hoverColor: "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:via-[#dc2743] hover:via-[#cc2366] hover:to-[#bc1888]",
    border: "hover:border-transparent",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: <TikTokIcon />,
    hoverColor: "hover:bg-[#010101]",
    border: "hover:border-[#010101]",
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com",
    icon: <XIcon />,
    hoverColor: "hover:bg-[#14171A]",
    border: "hover:border-[#14171A]",
  },
];

const LEGAL_LINKS = [
  { name: "Kebijakan Privasi", href: "#" },
  { name: "Syarat & Ketentuan", href: "#" },
  { name: "Kebijakan Kuki", href: "#" },
];

const QUICK_LINKS = [
  { name: "Beranda", href: "#beranda" },
  { name: "Cerita Kami", href: "#cerita-kami" },
  { name: "Menu", href: "#menu" },
  { name: "Galeri", href: "#galeri" },
  { name: "Kontak", href: "#kontak" },
];

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2C1B14] text-[#FDFBF7]/70 border-t border-[#FDFBF7]/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#FDFBF7]/[0.06]">

          {/* ── Brand Column ── */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#9E7A5F] flex items-center justify-center text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                KARSA<span className="text-[#9E7A5F]">KOPI</span>
              </span>
            </div>
            <p className="font-sans text-sm text-[#FDFBF7]/45 leading-relaxed max-w-xs">
              Menyajikan kopi lokal arabika terbaik yang dipanggang sempurna dengan cinta.
              Menghadirkan sudut kehangatan di tengah keseharian Anda.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className={`w-10 h-10 rounded-full border border-[#FDFBF7]/15 text-[#FDFBF7]/70 hover:text-white flex items-center justify-center transition-all duration-300 ${s.hoverColor} ${s.border}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#9E7A5F] mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="font-sans text-sm text-[#FDFBF7]/55 hover:text-[#9E7A5F] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div className="md:col-span-4 md:col-start-9">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#9E7A5F] mb-5">
              Kunjungi Kami
            </h4>
            <div className="space-y-3 font-sans text-sm text-[#FDFBF7]/55 leading-relaxed">
              <p>Jl. Senopati No. 45, Kebayoran Baru,<br />Jakarta Selatan 12190</p>
              <p>Senin – Jumat: <span className="text-[#FDFBF7]/80">07.00 – 22.00</span></p>
              <p>Sabtu – Minggu: <span className="text-[#FDFBF7]/80">08.00 – 23.00</span></p>
              <p>hello@karsakopi.com</p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] text-[#FDFBF7]/30">
            Hak Cipta © 2026 Karsa Kopi. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[11px] text-[#FDFBF7]/30 hover:text-[#9E7A5F] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          <p className="font-sans text-[11px] text-[#FDFBF7]/30 flex items-center gap-1.5">
            Dibuat dengan <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-pulse" /> untuk pecinta kopi Nusantara.
          </p>
        </div>
      </div>
    </footer>
  );
}
