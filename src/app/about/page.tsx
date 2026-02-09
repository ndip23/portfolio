"use client";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, User, Code2 } from "lucide-react";

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
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">About Me</h2>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-[#1D1D1F] leading-tight">
            Engineering with <br /> 
            <span className="text-blue-600">precision & purpose.</span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-relaxed">
            I am a full-stack developper specializing in the MERN stack and  C++ systems. 
            I bridge the gap between high-end user interfaces and machine-level performance.
          </p>
        </header>

        {/* Section 2: Experience Timeline */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-white">
              <Briefcase className="text-[#1D1D1F] w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">Experience</h2>
          </div>

          <div className="relative border-l-2 border-gray-100 ml-3 space-y-12">
            {/* Job 1 */}
            <TimelineItem 
              title="Freelancer — Developer"
              date="January 2023 — Present"
              description="Maintaining and optimizing a custom e-commerce website, handling product updates and order fulfillment. Developing a cross-platform stock management and billing app using React Native (Expo) and Firebase, with barcode scanning and digital billing."
            />
            {/* Job 2 */}
            <TimelineItem 
              title="Chatakk Delivery — CTO, Frontend Developer"
              date="Jan 2023 — Mar 2025"
              description="Built 4 connected React.js portals for users, drivers, admin, and enterprise clients, serving 150+ active users and managing 2500+ completed deliveries. Integrated Google Maps API to calculate distance and auto-generate dynamic pricing."
            />
          </div>
        </section>

        {/* Section 3: Education */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-white">
              <GraduationCap className="text-[#1D1D1F] w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">Education</h2>
          </div>

          <div className="relative border-l-2 border-gray-100 ml-3">
            <TimelineItem 
              title="Faculty Of Engineering and Technology, University of Buea"
              date="Bachelor of Engineering(2023-2027)"
              description="Focusing on Computer Science and Engineering with a deep interest in systems architecture and full-stack development."
            />
          </div>
        </section>

      </main>
    </PageWrapper>
  );
}

function TimelineItem({ title, date, description }: { title: string, date: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative pl-8"
    >
      {/* The Dot */}
      <div className="absolute left-[-9px] top-1.5 w-4 h-4 bg-white border-4 border-blue-600 rounded-full shadow-sm" />
      
      <div className="bg-white/50 backdrop-blur-sm p-6 rounded-[2rem] border border-white shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-[#1D1D1F] leading-none">{title}</h3>
        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-3 mb-4">{date}</p>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}