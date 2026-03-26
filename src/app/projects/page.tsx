"use client";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Eye, Github } from "lucide-react";

const projects = [
  {
    title: "PressFlow (PressMark)",
    desc: "Multi-tenant SaaS platform with subscriptions & admin system.",
    tag: "SaaS",
    img: "/images/pressflow.png",
    live: "https://pressmark.site",
    github: "#",
  },
   {
    title: "Language Learning Platform",
    desc: "Multi-region platform with payments & auth system.",
    tag: "Platform",
    img: "/images/language.png",
    live: "https://learnlanguage.site",
    github: "#",
  },
  {
    title: "WhatsApp Team Manager",
    desc: "Team & communication management system.",
    tag: "Collab",
    img: "/images/team.png",
    live: "#",
    github: "#",
  },
  {
    title: "BIFRC Software",
    desc: "Organizational data & workflow management system.",
    tag: "Management",
    img: "/images/bifrc.png",
    live: "https://bifrc.org",
    github: "#",
  },
  {
    title: "BeautyHeaven",
    desc: "Beauty service platform with booking features.",
    tag: "Startup",
    img: "/images/beauty.png",
    live: "https://mybeautyheaven.site",
    github: "#",
  },

  {
    title: "Fitness Dashboard",
    desc: "Workout, meals, QR check-ins & progress tracking system.",
    tag: "Fullstack",
    img: "/images/fitness.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Car E-Commerce",
    desc: "Futuristic car & parts shop with Apple-style UI.",
    tag: "UI/UX",
    img: "/images/carshop.png",
    live: "https://cpromark.site",
    github: "#",
  },
  {
    title: "Car Inspection System",
    desc: "Vehicle inspection & compliance tracking platform.",
    tag: "Enterprise",
    img: "/images/inspection.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Blood Bank System",
    desc: "Distributed hospital blood availability platform.",
    tag: "System",
    img: "/images/bloodbank.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Local Ads Platform",
    desc: "Location-based advertising system (MERN + C++).",
    tag: "Hybrid",
    img: "/images/ads.jpg",
    live: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <main className="pt-32 pb-20 px-6 sm:px-12 lg:px-20 max-w-[1400px] mx-auto">
        
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F]">
            Projects
          </h1>
          <p className="text-gray-400 mt-2 text-lg font-medium">
            Works (2023–2026)
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-100 border shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-[4px]">
                  <div className="flex gap-3">

                    {/* Live Link */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 transition"
                      >
                        <Eye size={20} />
                      </a>
                    )}

                    {/* GitHub Link */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 transition"
                      >
                        <Github size={20} />
                      </a>
                    )}

                  </div>
                </div>

                {/* Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-[#1D1D1F]">
                  {project.tag}
                </div>
              </div>

              {/* Text */}
              <div className="mt-5">
                <h3 className="text-xl font-bold text-[#1D1D1F] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}