import React from "react";
import { motion } from "motion/react";
import { Figma, Zap, Code2 } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: <Figma size={32} className="text-zinc-900" />,
      title: "Design w Figmie",
      description: "Precyzyjne prototypy.",
      delay: 0
    },
    {
      icon: <Zap size={32} className="text-[#00F0FF]" />,
      title: "Nowoczesny Development",
      description: "Szybkość działania i innowacje.",
      delay: 0.2
    },
    {
      icon: <Code2 size={32} className="text-zinc-600" />,
      title: "Czysty Kod",
      description: "Gotowa strona w React/HTML w kilka dni.",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900"
          >
            Jak <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-900">pracuję</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 -z-10"></div>
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: step.delay, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-zinc-100 mb-6 relative">
                <div className="absolute inset-0 border border-zinc-200 rounded-full animate-[spin_10s_linear_infinite] border-dashed"></div>
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
              <p className="text-zinc-600 leading-relaxed max-w-[250px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
