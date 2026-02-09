import { motion } from "framer-motion";

export default function TechStack() {
  const stacks = [
    { name: "Frontend", tools: ["React", "Next.js", "Tailwind", "Framer Motion"] },
    { name: "Backend", tools: ["Node.js", "Express", "MongoDB", "Redis"] },
    { name: "Low-Level", tools: ["C", "C++", "Embedded Systems", "Assembly"] }
  ];

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold tracking-tighter mb-6">Built for performance.</h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              From high-level user interfaces to low-level memory management, 
              I build systems that are as fast as they are beautiful.
            </p>
          </div>

          <div className="space-y-12">
            {stacks.map((stack, i) => (
              <div key={i}>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">{stack.name}</h4>
                <div className="flex flex-wrap gap-3">
                  {stack.tools.map(tool => (
                    <span key={tool} className="px-5 py-2 rounded-full border border-gray-100 bg-[#F5F5F7] text-sm font-medium hover:bg-black hover:text-white transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}