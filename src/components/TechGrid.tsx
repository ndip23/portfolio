"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "Expert", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", level: "Senior", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Next.js", level: "Frontend", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "C++", level: "Engine", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "JavaScript", level: "Expert", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", level: "Expert", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind", level: "Design", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "HTML5", level: "Expert", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", level: "Expert", icon: "https://cdn.simpleicons.org/css3/1572B6" }, // Fixed Link
  { name: "MongoDB", level: "Database", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "PostgreSQL", level: "SQL DB", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "GitHub", level: "Version", icon: "https://cdn.simpleicons.org/github/181717" },
  { name: "Figma", level: "Design", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
];

export default function TechGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="relative group bg-white border border-white/80 rounded-[2.5rem] p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-2xl transition-all duration-500"
        >
          {/* Subtle Glass background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/40 rounded-[2.5rem] pointer-events-none" />
          
          <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 mb-4">
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="w-full h-full object-contain filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="relative z-10 text-center">
            <h3 className="font-bold text-[#1D1D1F] text-sm md:text-base leading-none">{skill.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mt-2">
              {skill.level}
            </p>
          </div>
        </motion.div>
      ))}

    </div>
  );
}