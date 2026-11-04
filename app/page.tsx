"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="flex flex-col min-h-screen bg-[#FDFBF7] text-[#2C1B14]">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Story />
            <Menu />
            <Gallery />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
