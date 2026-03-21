import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const universesSection = document.getElementById("universes");
    universesSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-14 overflow-hidden bg-white text-zinc-900 sm:pt-32 sm:pb-16">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00F0FF] opacity-10 blur-3xl rounded-full mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full mix-blend-multiply animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-5 md:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -50 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 sm:space-y-8 max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-100 rounded-full w-fit">
            <Sparkles size={16} className="text-[#00F0FF]" />
            <span className="text-sm font-medium">Cyfrowy rzemieślnik</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] sm:leading-[1.08]">
            Projektuję.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-[#00F0FF]">Koduję.</span><br />
            Tworzę Światy.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-xl leading-relaxed">
            Nowoczesne doświadczenia cyfrowe skrojone pod Twój biznes. Szybkość AI połączona z precyzją rzemieślnika.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 pt-2 sm:pt-4">
            <a
              href="#universes"
              onClick={handleExploreClick}
              className="group inline-flex w-full sm:w-auto items-center justify-center space-x-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-[#00F0FF] hover:text-black transition-all duration-300 shadow-lg hover:shadow-[#00F0FF]/50"
            >
              <span>Eksploruj moje uniwersa</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? undefined : { duration: 1, delay: 0.2 }}
          className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] w-full flex items-center justify-center"
        >
          {/* Decorative rings */}
          <motion.div 
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={shouldReduceMotion ? undefined : { duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-zinc-200 rounded-full border-dashed"
            style={{ width: "90%", height: "90%", margin: "auto" }}
          ></motion.div>
          
          <motion.div 
            animate={shouldReduceMotion ? undefined : { rotate: -360 }}
            transition={shouldReduceMotion ? undefined : { duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-zinc-200/50 rounded-full"
            style={{ width: "70%", height: "70%", margin: "auto" }}
          ></motion.div>

          <motion.img
            animate={shouldReduceMotion ? undefined : { y: [0, -20, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1689948065965-363ffd18ea86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBYnN0cmFjdCUyMDNEJTIwZmxvYXRpbmclMjBjaHJvbWUlMjBzcGhlcmV8ZW58MXx8fHwxNzc0MTE5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Abstract 3D Chrome Sphere"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 1024px) 75vw, 40vw"
            className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-full mix-blend-darken filter drop-shadow-[0_20px_50px_rgba(0,240,255,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
