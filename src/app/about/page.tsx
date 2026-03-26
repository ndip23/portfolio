"use client";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, User } from "lucide-react";

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        
        {/* Section 1: Introduction */}
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-white">
              <User className="text-blue-600 w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
              About Me
            </h2>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-[#1D1D1F] leading-tight">
            Engineering with <br />
            <span className="text-blue-600">precision & purpose.</span>
          </h1>

          <p className="mt-8 text-xl text-gray-500 leading-relaxed">
            I am a full-stack developer specializing in the MERN stack and C++ systems. 
            I build scalable backend architectures and high-performance applications, 
            bridging the gap between intuitive user interfaces and efficient system design.
          </p>
        </header>

        {/* Section 2: Experience */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-white">
              <Briefcase className="text-[#1D1D1F] w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">
              Experience
            </h2>
          </div>

          <div className="relative border-l-2 border-gray-100 ml-3 space-y-12">

            {/* Internship */}
            <TimelineItem 
              title="Kanyuy Marketing — Software Engineering Intern"
              date="April 2025 — December 2025"
              description="Worked on full-stack web applications, contributing to frontend interfaces and backend APIs. 
              Assisted in building and maintaining client-facing platforms, improving UI responsiveness and system performance. 
              Gained hands-on experience in production-level development, debugging, and deployment workflows."
            />

            {/* Freelancer */}
            <TimelineItem 
              title="Freelancer — Full-Stack Developer"
              date="January 2023 — Present"
              description="Designed and developed custom web applications including e-commerce platforms, management systems, 
              and SaaS solutions. Built scalable REST APIs, handled database architecture, and implemented authentication systems. 
              Also developed a mobile stock management and billing application using React Native and Firebase."
            />

            {/* Chatakk */}
            <TimelineItem 
              title="Chatakk Delivery — Frontend Developer"
              date="January 2023 — March 2025"
              description="Led frontend development for a logistics platform, building four interconnected React.js dashboards 
              (user, driver, admin, enterprise). Integrated location-based services using Google Maps API for distance calculation 
              and dynamic pricing. Supported over 150 active users and facilitated 2500+ completed deliveries."
            />

          </div>
        </section>

        {/* Section 3: Education */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-white">
              <GraduationCap className="text-[#1D1D1F] w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">
              Education
            </h2>
          </div>

          <div className="relative border-l-2 border-gray-100 ml-3">
            <TimelineItem 
              title="Faculty of Engineering and Technology — University of Buea"
              date="Bachelor of Engineering in Software Engineering (2023 — 2027)"
              description="Final-year student focusing on full-stack development, system architecture, networking, and software engineering principles. 
              Strong interest in building scalable systems and real-world applications."
            />
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}

function TimelineItem({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative pl-8"
    >
      {/* Dot */}
      <div className="absolute left-[-9px] top-1.5 w-4 h-4 bg-white border-4 border-blue-600 rounded-full shadow-sm" />

      <div className="bg-white/50 backdrop-blur-sm p-6 rounded-[2rem] border border-white shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-[#1D1D1F] leading-none">
          {title}
        </h3>
        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-3 mb-4">
          {date}
        </p>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}