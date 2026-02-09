import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Globe } from "lucide-react";

const projects = [
  {
    title: "High-Perf Engine",
    description: "C++ based rendering engine with custom memory management.",
    size: "col-span-2 row-span-2",
    icon: <Cpu className="w-6 h-6" />,
    tags: ["C++", "OpenGL"],
    color: "bg-blue-50"
  },
  {
    title: "E-Commerce OS",
    description: "Full MERN stack with real-time inventory.",
    size: "col-span-1 row-span-1",
    icon: <Globe className="w-6 h-6" />,
    tags: ["React", "Node.js"],
    color: "bg-orange-50"
  },
  {
    title: "System Monitor",
    description: "Low-level JS hardware monitoring tool.",
    size: "col-span-1 row-span-1",
    icon: <Github className="w-6 h-6" />,
    tags: ["JS", "C++"],
    color: "bg-green-50"
  },
];

export default function BentoGrid() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 tracking-tight"
      >
        Selected Works.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`${project.size} group relative overflow-hidden rounded-[2.5rem] bg-white border border-white shadow-sm hover:shadow-2xl transition-all duration-500 p-8 flex flex-col justify-between`}
          >
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-2xl ${project.color}`}>
                {project.icon}
              </div>
              <ExternalLink className="opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>

            <div>
              <div className="flex gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-gray-100 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-500 mt-2 text-sm max-w-[200px]">{project.description}</p>
            </div>
            
            {/* Subtle Glass overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}