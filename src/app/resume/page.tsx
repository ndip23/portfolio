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
              download="Ndip_Samuel_Resume.docx"
              className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition"
            >
              <FileText size={15} /> Word (.docx)
            </a>

            <a
              href="/resume.pdf"
              download="Ndip_Samuel_Resume.pdf"
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
            <p className="text-blue-600 font-bold text-sm sm:text-base mt-2">
              Senior Full-Stack &amp; Mobile Software Engineer (Flutter • React • Node.js)
            </p>

            {/* Quick Contact Line */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-red-500" /> Douala, Cameroon
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
                <Globe size={14} /> portfolio-ndip.vercel.app
              </a>
              <a href="https://github.com/ndip23" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                <Github size={14} /> github.com/ndip23
              </a>
              <a href="https://www.linkedin.com/in/ndip-samuel-1b0175294" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                <Linkedin size={14} /> linkedin.com/in/ndip-samuel
              </a>
            </div>
          </header>

          {/* Section: Professional Summary */}
          <section className="py-6 border-b border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Performance-driven Mobile &amp; Full-Stack Software Engineer with deep expertise in Flutter &amp; Dart, 
              cross-platform mobile architectures, and scalable cloud backends. Proven track record of architecting 
              production Flutter applications utilizing Clean Architecture, reactive state management (BLoC/Provider), 
              background GPS tracking, and Paystack fintech payment gateways. Experienced in taking products from zero 
              to production deployment across Android, Web, and Cloud systems with over 2,500+ commercial transactions handled.
            </p>
          </section>

          {/* Section: Technical Arsenal */}
          <section className="py-6 border-b border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0F172A] block mb-1">📱 Mobile Development</span>
                <span className="text-gray-600">Flutter (Advanced), Dart, Clean Architecture, BLoC, Provider, React Native, Method Channels, Push (FCM).</span>
              </div>
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0F172A] block mb-1">🗺️ Maps &amp; Geolocation</span>
                <span className="text-gray-600">Google Maps SDK, OpenStreetMap (OSM), Geocoding, Real-time Driver Tracking, Distance Matrix APIs.</span>
              </div>
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0F172A] block mb-1">💳 Fintech &amp; Payments</span>
                <span className="text-gray-600">Paystack Mobile SDK, Payment Webhooks, Escrow Pre-payment Holding, OTP Security Verification.</span>
              </div>
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0F172A] block mb-1">💻 Frontend &amp; Backend</span>
                <span className="text-gray-600">React.js, Next.js (App Router), TypeScript, Node.js, Express, Python (FastAPI), C++ Systems, REST APIs.</span>
              </div>
              <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100 md:col-span-2">
                <span className="font-bold text-[#0F172A] block mb-1">☁️ Databases, Cloud &amp; DevOps</span>
                <span className="text-gray-600">Firebase (Firestore, Auth, Cloud Functions), PostgreSQL, MongoDB, Prisma ORM, Docker, Android Keystore &amp; Release Automation (build_release.ps1).</span>
              </div>
            </div>
          </section>

          {/* Section: Work Experience */}
          <section className="py-6 border-b border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
              Work Experience
            </h2>

            <div className="space-y-6">
              {/* Role 1 */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-bold text-[#0F172A] text-base">
                    Full-Stack &amp; Mobile Developer (Freelance)
                  </h3>
                  <span className="text-xs font-bold text-blue-600">January 2023 — Present</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">Douala, Cameroon • Remote &amp; Onsite</p>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-600">
                  <li>Engineered G-WASH NG Mobile App in Flutter implementing Clean Architecture separation (Data, Domain, Presentation) and state management, reducing code redundancy by 40%.</li>
                  <li>Embedded dual map engines (Google Maps SDK &amp; OpenStreetMap) for live provider dispatch, dynamic distance calculations, and real-time route tracing.</li>
                  <li>Implemented Paystack financial escrow system holding customer pre-payments until secure OTP verification upon service completion.</li>
                  <li>Configured Android Keystore signing and automated PowerShell release compilation pipelines (build_release.ps1) for Google Play App Bundles (.aab).</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-bold text-[#0F172A] text-base">
                    Software Engineering Intern — Kanyuy Marketing
                  </h3>
                  <span className="text-xs font-bold text-blue-600">April 2025 — December 2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-600 mt-2">
                  <li>Developed responsive client web interfaces with Next.js and optimized backend REST APIs in Node.js, slashing request latency across high-traffic hours.</li>
                  <li>Diagnosed and resolved critical production UI bugs across multi-device mobile viewports, achieving 100% responsive cross-platform compatibility.</li>
                  <li>Participated in sprint planning, CI/CD automated deployments, and API integration testing with Postman.</li>
                </ul>
              </div>

              {/* Role 3 */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-bold text-[#0F172A] text-base">
                    Frontend Developer — Chatakk Delivery
                  </h3>
                  <span className="text-xs font-bold text-blue-600">January 2023 — March 2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-gray-600 mt-2">
                  <li>Architected 4 interconnected React dashboards (Customer, Driver Dispatch, Admin, Enterprise) supporting 150+ daily active users and 2,500+ completed deliveries.</li>
                  <li>Integrated Google Maps Distance Matrix &amp; Directions APIs for automated courier matching and dynamic pricing.</li>
                  <li>Reduced state re-rendering overhead and optimized dashboard performance over low-bandwidth mobile networks.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Featured Projects */}
          <section className="py-6 border-b border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
              Featured Production Projects
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50/60 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    1. G-WASH NG — Doorstep Mobile Marketplace
                  </h4>
                  <a href="https://g-wash-ngl.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                    Live Demo <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-1.5">
                  Flutter, Dart, Firebase, Paystack SDK, Google Maps &amp; OSM, Clean Architecture
                </p>
                <p className="text-xs text-gray-600">
                  Cross-platform mobile app with live GPS tracking, provider matching, in-app sound popups, and automated escrow releasing payment upon OTP confirmation.
                </p>
              </div>

              <div className="p-4 bg-gray-50/60 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    2. Bidora (AI Bid Copilot) — Procurement SaaS Platform
                  </h4>
                  <a href="https://ai-bid-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                    Live Demo <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-1.5">
                  Next.js (App Router), Node.js, Prisma ORM, PostgreSQL, OpenAI API
                </p>
                <p className="text-xs text-gray-600">
                  Enterprise AI copilot automating tender document ingestion, capability match scoring, and subcontracting opportunities for winning enterprise bids.
                </p>
              </div>

              <div className="p-4 bg-gray-50/60 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    3. SentinelGov AI — Government Payroll Anomaly Engine
                  </h4>
                  <a href="https://sentinelgove-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
                    Live Demo <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-1.5">
                  Python, FastAPI, Next.js, Anomaly Detection Algorithms, Tailwind CSS
                </p>
                <p className="text-xs text-gray-600">
                  Institutional workforce risk monitoring system scanning ministries for ghost workers, duplicate disbursements, and salary variances.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Education */}
          <section className="pt-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              Education
            </h2>
            <div className="flex flex-wrap items-baseline justify-between gap-1">
              <h3 className="font-bold text-[#0F172A] text-base">
                Bachelor of Engineering (B.Eng.) in Software Engineering
              </h3>
              <span className="text-xs font-bold text-blue-600">2023 — 2027</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Faculty of Engineering and Technology — University of Buea
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Key Coursework: Mobile Communications &amp; Computing, Distributed Systems, Software Architecture, Cryptography &amp; Network Security, Object-Oriented System Design (C++ / Java).
            </p>
          </section>
        </motion.div>
      </main>
    </PageWrapper>
  );
}
