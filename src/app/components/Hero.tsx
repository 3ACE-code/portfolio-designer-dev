import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const universesSection = document.getElementById("universes");
    universesSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white text-zinc-900">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00F0FF] opacity-10 blur-3xl rounded-full mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full mix-blend-multiply animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8 max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-100 rounded-full w-fit">
            <Sparkles size={16} className="text-[#00F0FF]" />
            <span className="text-sm font-medium">Cyfrowy rzemieślnik</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Projektuję.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-[#00F0FF]">Koduję.</span><br />
            Tworzę Światy.
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 max-w-lg">
            Nowoczesne doświadczenia cyfrowe skrojone pod Twój biznes. Szybkość AI połączona z precyzją rzemieślnika.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#universes"
              onClick={handleExploreClick}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-[#00F0FF] hover:text-black transition-all duration-300 shadow-lg hover:shadow-[#00F0FF]/50"
            >
              <span>Eksploruj moje uniwersa</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
        >
          {/* Decorative rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-zinc-200 rounded-full border-dashed"
            style={{ width: "90%", height: "90%", margin: "auto" }}
          ></motion.div>
          
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-zinc-200/50 rounded-full"
            style={{ width: "70%", height: "70%", margin: "auto" }}
          ></motion.div>

          <motion.img
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1689948065965-363ffd18ea86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBYnN0cmFjdCUyMDNEJTIwZmxvYXRpbmclMjBjaHJvbWUlMjBzcGhlcmV8ZW58MXx8fHwxNzc0MTE5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Abstract 3D Chrome Sphere"
            className="w-3/4 max-w-md object-cover rounded-full mix-blend-darken filter drop-shadow-[0_20px_50px_rgba(0,240,255,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
