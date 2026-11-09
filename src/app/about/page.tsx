"use client";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, User, Globe2 } from "lucide-react";

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
            Full-stack and mobile software engineer with nearly 4 years of experience shipping production web and mobile products end to end—from payments and live GPS tracking to multi-tenant SaaS and AI features. Currently{" "}
            <span className="text-[#1D1D1F] font-semibold">Lead System Developer & System Architect at Mascode</span>, leading system design and a 7-person development team. Built and maintained 8+ production applications serving real users, including a delivery marketplace with 2,500+ deliveries. Strongest in{" "}
            <span className="text-[#1D1D1F] font-semibold">React, Next.js, TypeScript, Node.js, and Flutter</span>.
          </p>
        </header>

        {/* Section 2: Experience */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-white">
              <Briefcase className="text-[#1D1D1F] w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">
              Professional Experience
            </h2>
          </div>

          <div className="relative border-l-2 border-gray-100 ml-3 space-y-12">

            {/* Mascode */}
            <TimelineItem 
              title="Mascode — Lead System Developer & System Architect"
              date="September 2026 — Present"
              description="Leading system design and architecture for a 7-person engineering team across service boundaries, data models, API contracts, and deployment strategy. Guiding code reviews, task breakdown, and delivery planning. Contributed to the architecture of SandClip (sandclip.com), an asynchronous video-processing platform with background workers, job queues, and a 6-stage pipeline with execution timeouts and job-status tracking. Also delivered the web platform for Abibia Pressing."
            />

            {/* Spektralsoft */}
            <TimelineItem 
              title="Spektralsoft — Software Developer"
              date="June 2026 — November 2026"
              description="Built Bidora AI (ai-bid-frontend.vercel.app), an AI-powered tender discovery and procurement intelligence SaaS helping contractors and SMEs across Africa discover opportunities, check eligibility, assess win probability, and draft proposals (React, TypeScript, REST APIs, AI integration). Integrated a multi-source tender discovery workflow across international development institutions and contributed to a validation pipeline processing 108 unique tenders through 24 data connectors (216% of the 50-tender daily target)."
            />

            {/* Freelancer */}
            <TimelineItem 
              title="Freelance — Full-Stack & Mobile Developer"
              date="January 2023 — Present | Douala, Cameroon"
              description="Design, build, deploy, and maintain production web, mobile, SaaS, and marketplace applications end to end:
              • G-WASH NG (Flutter, Firebase, Paystack): Live marketplace with 2,500+ deliveries, live GPS tracking, Google Maps & OpenStreetMap routing, OTP-verified handovers, Paystack escrow workflows, Clean Architecture & BLoC (cutting redundancy by ~40%), and PowerShell Android release automation.
              • PressFlow / PressMark (MERN): Multi-tenant laundry & pressing SaaS with tenant-aware data isolation, RBAC, orders, pricing, subscriptions, and notifications.
              • SentinelGovAI (FastAPI, Next.js): Payroll and workforce anomaly detection processing and analyst dashboards.
              • School & Report Card Management System & BIFRC (React, Node.js): School platform serving 200+ students and 25+ teachers; BIFRC financial/business platform supporting 50+ users and $50K+ in transactions."
            />

            {/* Internship */}
            <TimelineItem 
              title="Kanyuy Marketing — Software Engineering Intern"
              date="April 2025 — December 2025"
              description="Developed and maintained production Next.js and Node.js applications. Diagnosed and resolved production bugs to improve system reliability and mobile responsiveness. Collaborated in an Agile team using Git, CI/CD pipelines, and Postman-based API testing to ship integrated full-stack features."
            />

            {/* Chatakk */}
            <TimelineItem 
              title="Chatakk Delivery — Frontend Developer"
              date="January 2023 — March 2025"
              description="Built four interconnected React dashboards (User, Driver, Admin, Enterprise) supporting 150+ users. Integrated Google Distance Matrix for automated dispatch calculations and zone-based pricing, and optimized frontend performance for reliable operation on 3G/4G mobile connections."
            />

          </div>
        </section>

        {/* Section 3: Education */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-white">
              <GraduationCap className="text-[#1D1D1F] w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">
              Education
            </h2>
          </div>

          <div className="relative border-l-2 border-gray-100 ml-3 space-y-12">
            
            <TimelineItem 
              title="University of Buea — B.Eng. in Software Engineering"
              date="2023 — 2027 (Expected) | Cameroon"
              description="Faculty of Engineering and Technology. Key Coursework: Software Architecture, Distributed Systems, Web & Mobile Development, Database Systems."
            />

            <TimelineItem 
              title="Nelson Mandela Bilingual Comprehensive College"
              date="Ordinary Level (2015 — 2019) | Advanced Level (2020 — 2022)"
              description="Completed both Ordinary and Advanced Level education with a strong academic foundation in science and technology-related subjects, developing analytical and problem-solving skills that support my software engineering career."
            />

          </div>
        </section>

        {/* Section 4: Remote Work Readiness */}
        <section>
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-[2rem] border border-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Globe2 className="text-blue-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#1D1D1F]">
                Remote Work & Global Collaboration
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Available for full-time remote engineering roles. Based in{" "}
              <span className="font-semibold text-[#1D1D1F]">GMT+1 (Douala, Cameroon)</span> with strong working-hour overlap for both EU and US teams, backed by reliable Starlink internet and backup power. Experienced working independently and leading engineering delivery across distributed teams.
            </p>
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
        <h3 className="text-xl font-bold text-[#1D1D1F] leading-snug">
          {title}
        </h3>
        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-2 mb-4">
          {date}
        </p>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base whitespace-pre-line">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
