"use client";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { Download, FileText, Printer, ArrowLeft, ExternalLink, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <PageWrapper>
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-sm print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#1D1D1F] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#1D1D1F] text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition"
            >
              <Printer size={15} /> Print / Save
            </button>

            <a
              href="/resume.docx"
              download="Ndip_Samuel_Agbor_Ojong_CV.docx"
              className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition"
            >
              <FileText size={15} /> Word (.docx)
            </a>

            <a
              href="/resume.pdf"
              download="Ndip_Samuel_Agbor_Ojong_CV.pdf"
              className="px-5 py-2 bg-[#1D1D1F] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
            >
              <Download size={15} /> PDF
            </a>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-8 sm:p-12 border border-gray-200/80 shadow-xl print:shadow-none print:border-none print:p-0 print:m-0"
        >
          {/* Header Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 rounded-full mb-8" />

          {/* Header */}
          <header className="border-b border-gray-100 pb-8">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              NDIP SAMUEL AGBOR OJONG
            </h1>
            <p className="text-[#0F172A] font-bold text-base sm:text-lg mt-1.5">
              Full-Stack &amp; Mobile Software Engineer
            </p>
            <p className="text-blue-600 font-semibold text-xs sm:text-sm mt-1">
              React · Next.js · Node.js · TypeScript · Flutter · AI Integrations
            </p>

            {/* Quick Contact Line */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-red-500" /> Douala, Cameroon (GMT+1)
              </span>
              <a href="tel:+237679267153" className="flex items-center gap-1.5 hover:text-blue-600">
                <Phone size={14} className="text-emerald-500" /> +237 679 267 153
              </a>
              <a href="mailto:nojong23@gmail.com" className="flex items-center gap-1.5 hover:text-blue-600">
                <Mail size={14} className="text-blue-500" /> nojong23@gmail.com
              </a>
            </div>

            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-blue-600">
              <a href="https://portfolio-ndip.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                <Globe size={14} /> Portfolio
              </a>
              <a href="https://github.com/ndip23" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                <Github size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ndip-samuel-1b0175294" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </header>

          {/* Section: Professional Summary */}
          <section className="py-6 border-b border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Full-stack and mobile software engineer with nearly 4 years of experience shipping production web and mobile products end to end, from payments and live GPS tracking to multi-tenant SaaS and AI features. Currently{" "}
              <span className="font-semibold text-[#0F172A]">Lead System Developer &amp; System Architect at Mascode</span>, leading system design and a 7-person development team. Built and maintained 8+ production applications serving real users, including a delivery marketplace with 2,500+ deliveries. Strongest in React, Next.js, TypeScript, Node.js and Flutter; seeking a full-time remote engineering role.
            </p>
          </section>

          {/* Section: Technical Skills */}
          <section className="py-6 border-b border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0F172A] block mb-1">Frontend</span>
                <span className="text-gray-600">React.js, Next.js, TypeScript, JavaScript, Tailwind CSS</span>
              </div>
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0F172A] block mb-1">Backend</span>
                <span className="text-gray-600">Node.js, Express.js, FastAPI, Python, REST API design</span>
              </div>
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0F172A] block mb-1">Mobile</span>
                <span className="text-gray-600">Flutter, Dart, BLoC, Clean Architecture</span>
              </div>
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0F172A] block mb-1">Databases</span>
                <span className="text-gray-600">MongoDB, PostgreSQL, Prisma, Firebase</span>
              </div>
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0F172A] block mb-1">Integrations</span>
                <span className="text-gray-600">Paystack, OpenAI, Google Maps, OpenStreetMap, Socket.io, OTP verification</span>
              </div>
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0F172A] block mb-1">Engineering</span>
                <span className="text-gray-600">System architecture, authentication, RBAC, payment workflows, real-time systems, multi-tenant design, production debugging</span>
              </div>
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100 md:col-span-2">
                <span className="font-bold text-[#0F172A] block mb-1">Tools, Delivery &amp; Cloud</span>
                <span className="text-gray-600">Git, GitHub, Postman, CI/CD, Vercel, Android release automation (PowerShell) · Familiar with: AWS, Docker</span>
              </div>
            </div>
          </section>

          {/* Section: Professional Experience */}
          <section className="py-6 border-b border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
              Professional Experience
            </h2>

            <div className="space-y-7">
              {/* Role 1: Mascode */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-bold text-[#0F172A] text-base">
                    Lead System Developer &amp; System Architect — Mascode
                  </h3>
                  <span className="text-xs font-bold text-blue-600">Sep 2026 — Present</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-600 mt-2">
                  <li>Lead system design and architecture for a 7-person team: service boundaries, data models, API contracts and deployment approach.</li>
                  <li>Guide the team through code reviews, task breakdown and delivery planning.</li>
                  <li>Contributed to the design of <strong>SandClip</strong> (sandclip.com), a video generation product built on an asynchronous video-processing system with background workers and job queues.</li>
                  <li>Designed a six-stage video-processing pipeline with defined inputs, outputs and execution timeouts, and structured the worker and queue architecture that coordinates background tasks.</li>
                  <li>Defined job-status tracking and completion handling, and documented pipeline transitions and processing logic to support reliability, maintainability and troubleshooting.</li>
                  <li>Delivered the website for Abibia Pressing, a pressing business.</li>
                </ul>
              </div>

              {/* Role 2: Spektralsoft */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-bold text-[#0F172A] text-base">
                    Software Developer — Spektralsoft
                  </h3>
                  <span className="text-xs font-bold text-blue-600">Jun 2026 — Nov 2026</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-600 mt-2">
                  <li>Built <strong>Bidora AI</strong>, an AI-powered tender discovery and intelligence SaaS that helps contractors and SMEs across Africa find procurement opportunities, check eligibility, assess bid competitiveness and prepare proposals (React, TypeScript, REST APIs, AI integration). Live at <a href="https://ai-bid-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ai-bid-frontend.vercel.app</a>.</li>
                  <li>Built user-facing interfaces for tender discovery, analysis and opportunity tracking.</li>
                  <li>Implemented workflows for AI-assisted tender explanations, eligibility assessments, win-probability insights, compliance checklists and proposal drafting.</li>
                  <li>Integrated a multi-source tender discovery workflow covering international development institutions and public procurement sources.</li>
                  <li>Contributed to a validation pipeline that processed 108 new unique tenders through 24 data connectors, reaching 216% of the initial 50-tender daily target.</li>
                </ul>
              </div>

              {/* Role 3: Freelance */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-bold text-[#0F172A] text-base">
                    Full-Stack &amp; Mobile Developer — Freelance
                  </h3>
                  <span className="text-xs font-bold text-blue-600">Douala, Cameroon | Jan 2023 — Present</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 mb-3">
                  Design, build, deploy and maintain production web, mobile, SaaS and marketplace applications for real clients, handling requirements, architecture, development, release and ongoing support end to end.
                </p>

                <div className="space-y-3 pl-3 border-l-2 border-blue-100">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                      G-WASH NG, delivery marketplace <span className="text-blue-600 font-semibold">(Flutter, Firebase, Paystack)</span>
                    </h4>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-600 mt-1">
                      <li>Built and run a live marketplace that has completed 2,500+ deliveries, covering dispatch workflows, live GPS tracking, route tracing and OTP-verified handovers.</li>
                      <li>Implemented Paystack escrow payment workflows, authentication, RBAC, admin dashboards and REST APIs.</li>
                      <li>Integrated Google Maps and OpenStreetMap for tracking, routing and distance logic.</li>
                      <li>Structured the app with Clean Architecture and BLoC, cutting code redundancy by about 40% through reusable components.</li>
                      <li>Automated Android release workflows, including signing and .aab generation, with PowerShell.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                      PressFlow / PressMark, multi-tenant SaaS <span className="text-blue-600 font-semibold">(MongoDB, Express, React, Node.js)</span>
                    </h4>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-600 mt-1">
                      <li>Designed tenant-aware data isolation for a laundry and pressing management platform.</li>
                      <li>Built customer, order, pricing, payment, subscription and notification modules with role-based access control.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                      SentinelGovAI, payroll and workforce anomaly detection <span className="text-blue-600 font-semibold">(FastAPI, Next.js)</span>
                    </h4>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-600 mt-1">
                      <li>Built FastAPI data processing and Next.js analyst dashboards for reviewing workforce and payroll anomalies.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                      School &amp; Report Card Management System and BIFRC <span className="text-blue-600 font-semibold">(React, Node.js)</span>
                    </h4>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-gray-600 mt-1">
                      <li>Delivered a production school system used by 200+ students and 25+ teachers, with remote marks entry, automated results, report cards and controlled printing.</li>
                      <li>Built and maintain BIFRC, a financial/business platform supporting 50+ users and $50K+ in transactions, with transaction workflows and responsive interfaces.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Role 4: Kanyuy Marketing */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-bold text-[#0F172A] text-base">
                    Software Engineering Intern — Kanyuy Marketing
                  </h3>
                  <span className="text-xs font-bold text-blue-600">Apr 2025 — Dec 2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-600 mt-2">
                  <li>Developed and maintained Next.js and Node.js applications used in production.</li>
                  <li>Diagnosed and fixed production bugs, improving reliability and mobile responsiveness.</li>
                  <li>Worked in an Agile team using Git, CI/CD pipelines and Postman-based API testing.</li>
                  <li>Integrated frontend and backend features and shipped them through the team&apos;s release process.</li>
                </ul>
              </div>

              {/* Role 5: Chatakk Delivery */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-bold text-[#0F172A] text-base">
                    Frontend Developer — Chatakk Delivery
                  </h3>
                  <span className="text-xs font-bold text-blue-600">Jan 2023 — Mar 2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-600 mt-2">
                  <li>Built four React dashboards (User, Driver, Admin, Enterprise) supporting 150+ users.</li>
                  <li>Integrated Google Distance Matrix for automated dispatch calculations and zone-based pricing.</li>
                  <li>Optimized performance for 3G/4G networks so the dashboards stay usable on slower connections.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Featured Projects */}
          <section className="py-6 border-b border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
              Featured Projects
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50/60 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    G-WASH NG — Production Delivery Marketplace
                  </h4>
                  <a href="https://g-wash-ngl.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                    Live Demo <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-1.5">
                  Flutter · Firebase · Paystack · Google Maps · OpenStreetMap
                </p>
                <p className="text-xs text-gray-600">
                  Marketplace with 2,500+ deliveries, live GPS tracking, route tracing, dispatch, OTP verification and escrow payments. Built with Clean Architecture and an automated Android release pipeline.
                </p>
              </div>

              <div className="p-4 bg-gray-50/60 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    Bidora AI — AI-Powered Tender Discovery &amp; Intelligence SaaS
                  </h4>
                  <a href="https://ai-bid-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                    Live <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-1.5">
                  React · TypeScript · REST APIs · AI Integration
                </p>
                <p className="text-xs text-gray-600">
                  Helps contractors and SMEs across Africa find tenders, check eligibility, assess win probability and draft proposals. Its validation pipeline processed 108 unique tenders through 24 data connectors in a day, 216% of the 50-tender target.
                </p>
              </div>

              <div className="p-4 bg-gray-50/60 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    SandClip — Asynchronous Video Processing System
                  </h4>
                  <a href="https://sandclip.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                    sandclip.com <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-1.5">
                  Background Workers · Job Queues · Pipeline Orchestration
                </p>
                <p className="text-xs text-gray-600">
                  Six-stage video-processing pipeline with execution timeouts, job-status tracking and documented workflow transitions.
                </p>
              </div>

              <div className="p-4 bg-gray-50/60 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    PressFlow / PressMark — Multi-Tenant SaaS
                  </h4>
                  <a href="https://pressmark.site" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                    pressmark.site <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-1.5">
                  MongoDB · Express · React · Node.js
                </p>
                <p className="text-xs text-gray-600">
                  Laundry and pressing management SaaS covering customers, orders, pricing, payments, subscriptions, RBAC, notifications and tenant-aware data.
                </p>
              </div>

              <div className="p-4 bg-gray-50/60 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    School &amp; Report Card Management System
                  </h4>
                </div>
                <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-1.5">
                  React · Node.js · RBAC
                </p>
                <p className="text-xs text-gray-600">
                  Production system used by 200+ students and 25+ teachers, with remote marks entry, automated results, report cards and controlled printing.
                </p>
              </div>

              <div className="p-4 bg-gray-50/60 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    SentinelGovAI — Payroll &amp; Workforce Anomaly Detection
                  </h4>
                  <a href="https://sentinelgove-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                    Live Demo <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-1.5">
                  FastAPI · Next.js
                </p>
                <p className="text-xs text-gray-600">
                  Data-analysis platform with FastAPI processing and Next.js dashboards for reviewing workforce and payroll anomalies.
                </p>
              </div>

              <div className="p-4 bg-gray-50/60 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    BIFRC — Financial/Business Platform
                  </h4>
                  <a href="https://bifrc.org" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                    bifrc.org <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-1.5">
                  React · Node.js · Web Application
                </p>
                <p className="text-xs text-gray-600">
                  Production platform supporting 50+ users and $50K+ in transactions, with transaction workflows, responsive interfaces and ongoing maintenance.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Education */}
          <section className="py-6 border-b border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              Education
            </h2>
            <div className="flex flex-wrap items-baseline justify-between gap-1">
              <h3 className="font-bold text-[#0F172A] text-base">
                B.Eng. Software Engineering — University of Buea, Cameroon
              </h3>
              <span className="text-xs font-bold text-blue-600">2023 — 2027 (Expected)</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Coursework: Software Architecture, Distributed Systems, Web &amp; Mobile Development, Database Systems.
            </p>
          </section>

          {/* Section: Remote Work */}
          <section className="pt-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">
              Remote Work
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Available for full-time remote engineering roles. Based in GMT+1 with working-hour overlap for EU and US teams, reliable Starlink internet and backup power, and comfortable working independently and leading work across distributed teams.
            </p>
          </section>
        </motion.div>
      </main>
    </PageWrapper>
  );
}
