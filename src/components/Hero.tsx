// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-apple-gray flex items-center justify-center overflow-hidden">
      
      {/* 1. Floating Navigation (The Pill) */}
      <nav className="fixed top-6 z-50 px-6 py-3 bg-apple-card backdrop-blur-md border border-white/40 rounded-full shadow-sm flex gap-8 text-sm font-medium text-apple-text">
        <a href="#work" className="hover:opacity-50 transition">Work</a>
        <a href="#skills" className="hover:opacity-50 transition">Tech</a>
        <a href="#contact" className="hover:opacity-50 transition">Contact</a>
      </nav>

      {/* 2. Large Background Typography (Apple Style) */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[15vw] font-bold text-white leading-none tracking-tighter"
        >
          FULLSTACK
        </motion.h1>
      </div>

      {/* 3. The Portrait (You) */}
      <div className="relative z-10 w-full max-w-4xl h-[80vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-full aspect-[4/5]"
        >
          {/* Replace with your image */}
          <img 
            src="/me.png" 
            alt="Developer Portrait" 
            className="h-full w-full object-contain drop-shadow-2xl"
          />

          {/* 4. Floating 'Tech Spec' Cards */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-1/4 -left-12 p-4 bg-apple-card backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl"
          >
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Expertise</p>
            <p className="text-apple-text font-semibold">MERN Stack</p>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-1/3 -right-12 p-4 bg-apple-card backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl"
          >
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Low Level</p>
            <p className="text-apple-text font-semibold flex items-center gap-2">
               C / C++ <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Optimized</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 5. Bottom Title Area */}
      <div className="absolute bottom-12 left-12 z-20">
        <h2 className="text-4xl font-semibold text-apple-text tracking-tight">Your Name.</h2>
        <p className="text-lg text-gray-500 max-w-xs">
          Engineering high-performance web systems and native logic.
        </p>
      </div>
    </section>
  );
}