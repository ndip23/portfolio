
"use client"; 
import { motion } from "framer-motion";export default function Footer() {
  return (
    <footer className="py-20 flex flex-col items-center">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-[#1D1D1F] text-white px-8 py-4 rounded-full flex items-center gap-6 shadow-2xl cursor-pointer"
      >
        <span className="font-medium">Available for projects</span>
        <div className="h-4 w-[1px] bg-white/20" />
        <span className="text-gray-400 hover:text-white transition">hello@yourdomain.com</span>
      </motion.div>
      
      <p className="mt-12 text-gray-400 text-sm italic">
        "Efficiency is the soul of engineering."
      </p>
    </footer>
  );
}