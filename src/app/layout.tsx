import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ndip.vercel.app"),
  title: {
    default: "Ndip Samuel — Full-Stack & Mobile Software Engineer",
    template: "%s | Ndip Samuel",
  },
  description:
    "Software Engineer specializing in Flutter, Dart, React, Next.js, Node.js, Python, and C++ systems. Explore production SaaS, logistics marketplaces, and AI tools.",
  keywords: [
    "Ndip Samuel",
    "Software Engineer",
    "Full-Stack Developer",
    "Mobile Developer",
    "Flutter",
    "Dart",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Cameroon",
    "Douala",
  ],
  authors: [{ name: "Ndip Samuel", url: "https://portfolio-ndip.vercel.app" }],
  creator: "Ndip Samuel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-ndip.vercel.app/",
    title: "Ndip Samuel — Full-Stack & Mobile Software Engineer",
    description:
      "Building scalable SaaS systems, on-demand mobile marketplaces, and high-performance backend architectures.",
    siteName: "Ndip Samuel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ndip Samuel — Full-Stack & Mobile Software Engineer",
    description:
      "Building scalable SaaS systems, on-demand mobile marketplaces, and high-performance backend architectures.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5F7] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}