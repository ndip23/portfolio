"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Laptop, Globe2, MapPin } from "lucide-react";

export default function ProfileCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/90 backdrop-blur-3xl border border-white rounded-[3rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between"
    >
      <div>
        {/* Identity */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-black tracking-tighter text-[#1D1D1F] leading-tight">
            Ndip <br /> Samuel
          </h1>

          <p className="text-blue-600 font-bold text-[10px] tracking-[0.25em] uppercase mt-4">
            Full Stack Developer
          </p>

          <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-xs">
            Building scalable systems, SaaS platforms, and high-performance applications 
            with MERN stack and C++.
          </p>
        </div>

        {/* Info Section */}
        <div className="space-y-4">

          <InfoItem 
            icon={<Laptop className="w-4 h-4 text-[#1D1D1F]" />}
            text="MERN Stack & C++ Systems"
          />

          <InfoItem 
            icon={<Globe2 className="w-4 h-4 text-blue-600" />}
            text="Available for Remote & Onsite"
          />

          <InfoItem 
            icon={<MapPin className="w-4 h-4 text-red-500" />}
            text="Douala, Cameroon"
          />

        </div>
      </div>

      {/* Social Dock */}
      <div className="mt-12">
        <div className="flex items-center justify-between bg-[#F5F5F7] p-2 rounded-full border border-white shadow-inner">
          
          <div className="flex items-center gap-1">

            <SocialButton 
              icon={<Github size={18} />} 
              link="https://github.com/ndip23"
            />

            <SocialButton 
              icon={<Linkedin size={18} />} 
              link="https://www.linkedin.com/in/ndip-samuel-1b0175294"
            />

            <SocialButton 
              icon={<Twitter size={18} />} 
              link="#"
            />

          </div>
          
          {/* Email Button */}
          <motion.a 
            href="mailto:nojong23@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1D1D1F] text-white p-3.5 rounded-full shadow-lg hover:bg-black transition-colors"
          >
            <Mail size={18} />
          </motion.a>

        </div>
      </div>
    </motion.div>
  );
}

/* Reusable Info Item */
function InfoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="group flex items-center gap-4 p-4 bg-[#F5F5F7] rounded-2xl border border-transparent hover:border-white hover:bg-white hover:shadow-sm transition-all duration-300">
      <div className="p-2 bg-white rounded-xl shadow-sm">
        {icon}
      </div>
      <span className="text-sm font-semibold text-[#1D1D1F]">{text}</span>
    </div>
  );
}

/* Social Button */
function SocialButton({ icon, link }: { icon: React.ReactNode; link: string }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, backgroundColor: "#FFFFFF" }}
      className="p-3.5 text-gray-500 hover:text-[#1D1D1F] rounded-full transition-all"
    >
      {icon}
    </motion.a>
  );
}