"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function FloatingDock() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="flex items-center gap-2 p-2 bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
      >
        <DockIcon icon={<Github />} label="GitHub" />
        <DockIcon icon={<Linkedin />} label="LinkedIn" />
        <DockIcon icon={<Twitter />} label="X" />
        <div className="w-[1px] h-8 bg-gray-200 mx-2" />
        <DockIcon icon={<Mail />} label="Email" primary />
      </motion.div>
    </div>
  );
}

function DockIcon({ icon, label, primary = false }: any) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.2 }}
      className={`p-4 rounded-2xl cursor-pointer transition-colors ${primary ? 'bg-apple-text text-white' : 'hover:bg-apple-bg'}`}
    >
      {icon}
    </motion.div>
  );
}