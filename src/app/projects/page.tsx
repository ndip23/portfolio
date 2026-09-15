"use client";
import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Github, Sparkles } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tag: string;
  category: "Mobile" | "Full-Stack" | "AI & SaaS" | "Systems";
  tech: string[];
  img: string;
  live: string;
  github: string;
}

const categories = ["All", "Mobile", "Full-Stack", "AI & SaaS", "Systems"] as const;

const projects: Project[] = [
  {
    title: "G-WASH NG",
    desc: "Doorstep car wash, cleaning & laundry marketplace with live matching, real-time GPS tracking & Paystack escrow pre-payment.",
    tag: "Marketplace",
    category: "Mobile",
    tech: ["Flutter", "Dart", "Firebase", "Paystack", "Google Maps"],
    img: "/images/gwash.png",
    live: "https://g-wash-ngl.vercel.app/",
    github: "https://github.com/Otuu02/g_wash_ngl",
  },
  {
    title: "Bidora (AI Bid Copilot)",
    desc: "AI-powered tender procurement & subcontracting intelligence SaaS engine for winning enterprise and public bids.",
    tag: "AI / SaaS",
    category: "AI & SaaS",
    tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "OpenAI"],
    img: "/images/aibid.png",
    live: "https://ai-bid-frontend.vercel.app/",
    github: "https://github.com/ndip23/AI-Bid",
  },
  {
    title: "SentinelGov AI",
    desc: "Workforce risk monitoring & payroll integrity anomaly detection platform scanning ghost workers for ministries.",
    tag: "GovTech / AI",
    category: "AI & SaaS",
    tech: ["Python", "FastAPI", "Next.js", "Anomaly Detection", "Tailwind"],
    img: "/images/sentinelgov.png",
    live: "https://sentinelgove-ai.vercel.app/",
    github: "https://github.com/ndip23/payroll-ai",
  },
  {
    title: "Chatakk Delivery",
    desc: "Enterprise logistics platform with 4 interconnected React dashboards (User, Driver, Admin, Enterprise), dynamic pricing and dispatch.",
    tag: "Logistics",
    category: "Full-Stack",
    tech: ["React.js", "Node.js", "Google Maps SDK", "Express", "REST APIs"],
    img: "/images/ads.jpg",
    live: "#",
    github: "https://github.com/ndip23",
  },
  {
    title: "Mascode Lab",
    desc: "High-performance software agency & tech academy platform showcasing digital products, engineering services and courses.",
    tag: "Agency",
    category: "Full-Stack",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    img: "/images/mascode.png",
    live: "https://www.mascodelab.com/",
    github: "https://github.com/ndip23/mascode",
  },
  {
    title: "PressFlow (PressMark)",
    desc: "Multi-tenant SaaS platform with automated subscription billing, tenant isolation & super-admin metrics dashboard.",
    tag: "SaaS",
    category: "AI & SaaS",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    img: "/images/pressflow.png",
    live: "https://pressmark.site",
    github: "#",
  },
  {
    title: "Abiba Pressing",
    desc: "Modern bilingual dry cleaning & laundry service platform with digital catalog, order scheduling and automated pickup booking.",
    tag: "Commercial",
    category: "Full-Stack",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    img: "/images/abiba.svg",
    live: "#",
    github: "https://github.com/ndip23/abibia-pressing",
  },
  {
    title: "Fitness Dashboard",
    desc: "Comprehensive health & workout tracker with daily calorie burn metrics, routine scheduling and digital QR check-in badges.",
    tag: "Health & Mobile",
    category: "Mobile",
    tech: ["React Native", "Flutter", "Tailwind CSS", "QR System"],
    img: "/images/fitness.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Language Learning Platform",
    desc: "Multi-region interactive language learning web platform with course access control, payment gateways and student auth.",
    tag: "EdTech",
    category: "Full-Stack",
    tech: ["React", "Node.js", "Express", "Stripe API"],
    img: "/images/language.png",
    live: "https://learnlanguage.site",
    github: "#",
  },
  {
    title: "WhatsApp Team Manager",
    desc: "Organizational team and messaging management system streamlining customer support and multi-agent dispatch.",
    tag: "Collab",
    category: "Systems",
    tech: ["Node.js", "Socket.io", "WhatsApp Web API", "Express"],
    img: "/images/team.png",
    live: "#",
    github: "#",
  },
  {
    title: "BIFRC Software",
    desc: "Institutional data management and workflow platform coordinating research initiatives, documents, and department records.",
    tag: "Management",
    category: "Full-Stack",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    img: "/images/bifrc.png",
    live: "https://bifrc.org",
    github: "#",
  },
  {
    title: "BeautyHeaven",
    desc: "Beauty salon & aesthetic service marketplace with live specialist availability and online reservation management.",
    tag: "Startup",
    category: "Full-Stack",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    img: "/images/beauty.png",
    live: "https://mybeautyheaven.site",
    github: "#",
  },
  {
    title: "Car E-Commerce",
    desc: "Futuristic vehicle & auto parts showroom platform with Apple-style micro-interactions and parts inventory.",
    tag: "UI/UX & E-Com",
    category: "Full-Stack",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    img: "/images/carshop.png",
    live: "https://cpromark.site",
    github: "#",
  },
  {
    title: "Blood Bank System",
    desc: "Distributed healthcare network platform for real-time blood inventory tracking, cross-hospital transfers and donor emergency calls.",
    tag: "Healthcare",
    category: "Systems",
    tech: ["Node.js", "MySQL", "Distributed Architecture", "REST APIs"],
    img: "/images/bloodbank.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Local Ads Platform",
    desc: "High-throughput location-based advertising exchange pairing low-level C++ query routing with a modern MERN dashboard.",
    tag: "Hybrid MERN + C++",
    category: "Systems",
    tech: ["C++", "MERN Stack", "GeoLocation", "High-Perf IPC"],
    img: "/images/ads.jpg",
    live: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <PageWrapper>
      <main className="pt-32 pb-24 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200/60 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
              Portfolio Catalog
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F]">
            Selected Works
          </h1>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl">
            Production apps, mobile marketplaces, enterprise SaaS, and low-level systems built between 2023 and 2026.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2 pt-2 border-t border-gray-200/60">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? "text-white bg-[#1D1D1F] shadow-md shadow-black/10 scale-100"
                      : "text-gray-600 bg-white hover:bg-gray-100 border border-gray-200/70"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </header>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group flex flex-col justify-between bg-white rounded-[2.25rem] p-4 sm:p-5 border border-white/80 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-gray-100 border border-black/5 shadow-inner">
                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[3px]">
                      <div className="flex gap-3">
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live website for ${project.title}`}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 hover:bg-blue-600 hover:text-white transition-all"
                          >
                            <Eye size={20} />
                          </a>
                        )}

                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View GitHub repository for ${project.title}`}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 hover:bg-[#1D1D1F] hover:text-white transition-all"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Tag Badge */}
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1D1D1F] shadow-sm border border-white/60">
                      {project.tag}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="mt-5 px-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-[#1D1D1F] tracking-tight group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="mt-5 pt-4 px-1 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-[#F5F5F7] text-gray-600 rounded-lg border border-gray-200/50 hover:bg-gray-200/70 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </PageWrapper>
  );
}