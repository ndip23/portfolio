"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/projects" },
    { name: "About", href: "/about" },
    
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] sm:w-fit">
      <div className="flex items-center justify-center gap-1 p-1 bg-white/70 backdrop-blur-2xl border border-white/50 rounded-full shadow-lg">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href} className="relative px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all">
              {isActive && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                />
              )}
              <span className={isActive ? "text-[#1D1D1F]" : "text-gray-500"}>
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}