import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ShoppingBag, Gamepad2, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Universes() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="universes" className="py-20 sm:py-24 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-zinc-900"
          >
            Wybierz swoje <span className="text-[#00F0FF]">uniwersum</span>
          </motion.h2>
          <motion.p 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={shouldReduceMotion ? undefined : { delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-600 leading-relaxed"
          >
            Specjalizuję się w trzech kluczowych obszarach cyfrowej przyszłości. Wybierz jeden, aby zobaczyć prototyp.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: E-COMMERCE */}
          <motion.div variants={itemVariants} className="h-full">
            <Link to="/portfolio#ecommerce" className="group block relative bg-white rounded-3xl p-8 border border-zinc-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full backdrop-blur-sm bg-white/60">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShoppingBag size={120} />
              </div>
              
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 border border-zinc-100 shadow-sm">
                <ShoppingBag className="text-zinc-800" size={24} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-zinc-900 font-serif">
                E-COMMERCE
              </h3>
              
              <p className="text-zinc-500 leading-relaxed mb-8 flex-grow">
                Butiki i Sklepy Premium. Minimalizm, który realnie sprzedaje.
              </p>
              
              <div className="pt-4 mt-auto border-t border-zinc-100 flex items-center text-sm font-medium text-zinc-900 group-hover:text-[#00F0FF] transition-colors">
                <span>Zobacz w Portfolio</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Card 2: GAMING UI/UX */}
          <motion.div variants={itemVariants} className="h-full">
            <Link to="/portfolio#gaming" className="group block relative bg-[#09090b] text-white rounded-3xl p-8 border border-zinc-800 shadow-[0_4px_30px_rgba(0,240,255,0.05)] hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] transition-all duration-500 overflow-hidden flex flex-col h-full z-10">
              {/* Dark mode & neon vibes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none group-hover:bg-[#00F0FF]/20 transition-colors duration-700"></div>
              
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-[#00F0FF]">
                <Gamepad2 size={120} />
              </div>
              
              <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 border border-zinc-800 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <Gamepad2 className="text-[#00F0FF]" size={24} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-wide font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                GAMING UI/UX
              </h3>
              
              <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                Interfejsy dla graczy. Dynamiczne panele i gamingowy vibe.
              </p>
              
              <div className="pt-4 mt-auto border-t border-zinc-800 flex items-center text-sm font-medium text-[#00F0FF] hover:text-white transition-colors">
                <span>Zobacz w Portfolio</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Card 3: STARTUP & DIGITAL PRODUCTS */}
          <motion.div variants={itemVariants} className="h-full">
            <Link to="/portfolio#startup" className="group block relative bg-gradient-to-br from-white to-zinc-50 rounded-3xl p-8 border border-zinc-200 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full backdrop-blur-md">
              {/* Soft tech gradient */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-[#00F0FF] to-teal-300 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-blue-500">
                <Cpu size={120} />
              </div>
              
              <div className="w-14 h-14 bg-blue-50/50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100">
                <Cpu className="text-blue-500" size={24} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-zinc-900">
                STARTUP & DIGITAL PRODUCTS
              </h3>
              
              <p className="text-zinc-500 leading-relaxed mb-8 flex-grow">
                Nowoczesny Software. Płynne layouty dla produktów jutra.
              </p>
              
              <div className="pt-4 mt-auto border-t border-zinc-100 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                <span>Zobacz w Portfolio</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
