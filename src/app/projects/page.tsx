"use client";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Eye, Github } from "lucide-react";

const projects = [
  { title: "Chatakk", desc: "Same Day Intracity Delivery.", tag: "Live", img: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=500&auto=format" },
  { title: "JMailer", desc: "2 Click Job Automation.", tag: "Hot", img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=500&auto=format" },
  { title: "NestGPT", desc: "Clutter Free AI Interface.", tag: "New", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=500&auto=format" },
  { title: "Features4me", desc: "Customer Feedback Hub.", tag: "Beta", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format" },
  { title: "Bill-It", desc: "Digital Billing & Scanning.", tag: "Coming Soon", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=500&auto=format" },
  { title: "Physics Engine", desc: "C++ High-Speed Simulator.", tag: "Low-Level", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=500&auto=format" }
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <main className="pt-32 pb-20 px-6 sm:px-12 lg:px-20 max-w-[1400px] mx-auto">
        
        {/* Clean Apple Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F]">
            The Archive
          </h1>
          <p className="text-gray-400 mt-2 text-lg font-medium">Selected Works (2023-2024)</p>
        </header>

        {/* The Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white border border-white shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Frosted Lens Hover Effect */}
                <div className="absolute inset-0 bg-black/5  cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[4px]">
                   <div className="flex gap-3">
                     <button className="w-12 h-12 cursor-pointer bg-white rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 transition-transform">
                       <Eye size={20} />
                     </button>
                     <button className="w-12 h-12 cursor-pointer bg-white rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 transition-transform">
                       <Github size={20} />
                     </button>
                   </div>
                </div>

                {/* Apple-style Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-[#1D1D1F]">
                  {project.tag}
                </div>
              </div>

              {/* Text: Compact and clean */}
              <div className="mt-5">
                <h3 className="text-xl font-bold text-[#1D1D1F] tracking-tight">{project.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}