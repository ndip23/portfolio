"use client";
import ProfileCard from "@/components/ProfileCard";
import TechGrid from "@/components/TechGrid";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#F5F5F7] pt-24 pb-12 px-4 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left Side: Stacks on top on mobile */}
          <div className="lg:col-span-4 xl:col-span-3 w-full">
            <ProfileCard />
          </div>

          {/* Right Side: Grid adjusts from 2 to 4 columns */}
          <div className="lg:col-span-8 xl:col-span-9 w-full">
            <TechGrid />
          </div>

        </div>
      </main>
    </PageWrapper>
  );
}