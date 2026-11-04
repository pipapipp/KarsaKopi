"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [textIndex, setTextIndex] = useState(0);
  const loadingTexts = [
    "Menyeimbangkan cita rasa...",
    "Memanggang biji kopi pilihan...",
    "Menyeduh pengalaman Anda...",
  ];

  useEffect(() => {
    // Transition text during load
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 600);

    // Auto complete after 2 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearInterval(textInterval);
      clearTimeout(timer);
    };
  }, [onComplete, loadingTexts.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDFBF7] dark:bg-[#120A06] text-[#2C1B14] dark:text-[#F4ECE1]"
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Coffee Cup SVG */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-24 h-24 flex items-center justify-center"
        >
          {/* Steam lines */}
          <div className="absolute -top-4 flex gap-1.5 justify-center">
            {[1, 2, 3].map((i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 1, 0.2],
                  scaleY: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-6 bg-[#9E7A5F] rounded-full origin-bottom"
              />
            ))}
          </div>

          {/* Cup */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 text-[#2C1B14] dark:text-[#F4ECE1]"
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" x2="14" y1="2" y2="2" />
          </svg>
        </motion.div>

        {/* Text loading animation */}
        <div className="h-6 overflow-hidden relative w-64 text-center">
          <motion.p
            key={textIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-sans text-sm tracking-widest font-medium uppercase text-[#9E7A5F]"
          >
            {loadingTexts[textIndex]}
          </motion.p>
        </div>

        {/* Micro-loading progress bar */}
        <div className="w-48 h-0.5 bg-[#2C1B14]/10 dark:bg-[#F4ECE1]/10 rounded-full overflow-hidden mt-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full bg-[#9E7A5F]"
          />
        </div>
      </div>
    </motion.div>
  );
}
