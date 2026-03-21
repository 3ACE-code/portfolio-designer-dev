import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Component, Code2, Settings2, MousePointer2 } from "lucide-react";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const techStack = [
    {
      icon: <Component className="text-[#00F0FF]" size={22} />,
      title: "Systemy Projektowe",
      desc: "Skalowalne biblioteki komponentów i spójność wizualna (Design Systems)."
    },
    {
      icon: <Code2 className="text-[#00F0FF]" size={22} />,
      title: "Architektura Frontend",
      desc: "Czysty, nowoczesny kod w oparciu o React i Next.js."
    },
    {
      icon: <Settings2 className="text-[#00F0FF]" size={22} />,
      title: "Optymalizacja Procesów",
      desc: "Skrócony czas wdrożenia dzięki dopracowanemu workflow i precyzyjnemu planowaniu."
    },
    {
      icon: <MousePointer2 className="text-[#00F0FF]" size={22} />,
      title: "User Experience",
      desc: "Zaawansowane interakcje, które prowadzą użytkownika prosto do celu."
    }
  ];

  return (
    <section className="bg-zinc-950 min-h-screen flex items-center pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden selection:bg-[#00F0FF] selection:text-black">
      <div className="container mx-auto px-5 md:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center max-w-7xl">
        
        {/* LEFT COLUMN (The Expertise) */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: "easeOut" }}
          className="flex flex-col z-10"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-[-0.02em]"
            style={{ textShadow: "0 0 24px rgba(0, 240, 255, 0.22)" }}
          >
            Designer &amp; Developer<br />
            <span className="text-[#00F0FF]">nowej ery</span>
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-zinc-300 mb-12 leading-[1.68] max-w-2xl font-light tracking-[-0.02em] [font-family:Inter,Poppins,sans-serif]">
            <p>
              Specjalizuję się w dostarczaniu kompleksowych rozwiązań cyfrowych, gdzie granica między estetyką a technologią zaciera się. Moje podejście opiera się na dopracowanym workflow projektowo-wdrożeniowym oraz wykorzystaniu nowoczesnych narzędzi przyspieszających realizację.
            </p>
            <p>
              Dzięki ścisłemu połączeniu etapu projektowego i developmentu tworzę produkty, które są od początku gotowe do skalowania. Każdy piksel ma swoje uzasadnienie, a każda linia kodu jest pisana z myślą o wydajności i przyszłym rozwoju Twojego biznesu. Nie dostarczam tylko stron - buduję cyfrowe fundamenty.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {techStack.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-6 shadow-[0_8px_26px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_38px_rgba(0,240,255,0.12)] hover:border-[#00F0FF]/30 transition-all duration-500 group relative"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900/80 flex items-center justify-center border border-zinc-700 mb-5 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-base mb-2 tracking-[-0.02em]">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-[1.65] tracking-[-0.02em] [font-family:Inter,Poppins,sans-serif]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN (Visuals - Digital Architecture) */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          transition={shouldReduceMotion ? undefined : { duration: 1, delay: 0.2 }}
          className="relative w-full aspect-square flex items-center justify-center bg-zinc-950"
        >
          {/* Subtle Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(63,63,70,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,63,70,0.45)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

          {/* Floating Geometric Nodes & Lines */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Top Left Node */}
            <motion.div 
              animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }} transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] left-[15%] flex items-center space-x-2"
            >
              <div className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
              <div className="h-[1px] w-16 bg-gradient-to-r from-[#00F0FF]/50 to-transparent"></div>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider">SYS.01</span>
            </motion.div>

            {/* Bottom Right Node */}
            <motion.div 
              animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }} transition={shouldReduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] right-[10%] flex items-center space-x-2 flex-row-reverse space-x-reverse"
            >
              <div className="w-2 h-2 rounded-full border border-zinc-500 bg-zinc-800"></div>
              <div className="h-[1px] w-24 bg-gradient-to-l from-zinc-600 to-transparent"></div>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider">NET_LINK</span>
            </motion.div>

            {/* Top Right Floating Element */}
            <motion.div 
              animate={shouldReduceMotion ? undefined : { rotate: 360 }} transition={shouldReduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[25%] right-[20%] w-12 h-12 border border-zinc-100 rounded-full border-dashed flex items-center justify-center"
            >
              <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
            </motion.div>

            {/* Vertical Tech Line */}
            <div className="absolute top-[10%] bottom-[10%] left-[50%] w-[1px] bg-gradient-to-b from-transparent via-zinc-700 to-transparent -z-10"></div>
            <div className="absolute top-[50%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent -z-10"></div>
          </div>

          {/* Animated Fluid Sphere */}
          <motion.div
            animate={shouldReduceMotion ? undefined : {
              y: [0, -20, 0],
              rotate: [0, 5, -2, 0]
            }}
            transition={shouldReduceMotion ? undefined : {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-[75%] max-w-[320px] sm:max-w-[400px] aspect-square flex items-center justify-center z-10"
          >
            {/* The Fluid Sphere Image from Unsplash */}
            <img 
              src="https://images.unsplash.com/photo-1719955090857-1cf1a078ba2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcmlkZXNjZW50JTIwM2QlMjBmbHVpZCUyMHNwaGVyZSUyMGNocm9tZXxlbnwxfHx8fDE3NzQxMjQ1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Digital Architecture Core"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 80vw, 35vw"
              className="w-full h-full object-cover mix-blend-darken rounded-full scale-110 drop-shadow-2xl grayscale-[0.1] contrast-[1.15]"
              style={{
                filter: "drop-shadow(0px 30px 40px rgba(0, 0, 0, 0.08))"
              }}
            />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}