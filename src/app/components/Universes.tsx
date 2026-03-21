import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ShoppingBag, Gamepad2, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Universes() {
  const shouldReduceMotion = useReducedMotion();

  const universeCards = [
    {
      id: "ecommerce",
      title: "Uniwersum E-commerce",
      description:
        "Butiki Premium i luksusowe sklepy. Skupienie na konwersji i estetyce.",
      icon: ShoppingBag,
      link: "/portfolio#ecommerce",
      border: "border-[#f3e7c0]/35",
      glow: "shadow-[0_0_0_1px_rgba(243,231,192,0.28),0_18px_48px_rgba(201,167,89,0.22)]",
      button: "from-[#f3e7c0] to-white text-zinc-900",
      iconGlow: "text-[#f3e7c0]",
      stripe: "from-[#f3e7c0]/20 via-white/70 to-[#f3e7c0]/20",
    },
    {
      id: "gaming",
      title: "Uniwersum Gamingowe",
      description:
        "Interfejsy dla graczy, platformy e-sportowe i HUDy. Agresywny, nowoczesny design.",
      icon: Gamepad2,
      link: "/portfolio#gaming",
      border: "border-[#8b5cf6]/35",
      glow: "shadow-[0_0_0_1px_rgba(139,92,246,0.3),0_18px_52px_rgba(34,211,238,0.24)]",
      button: "from-[#8b5cf6] to-[#22d3ee] text-white",
      iconGlow: "text-[#c4b5fd]",
      stripe: "from-[#8b5cf6]/30 via-[#22d3ee]/80 to-[#8b5cf6]/30",
    },
    {
      id: "startup",
      title: "Uniwersum Startup",
      description:
        "Dashboardy, aplikacje AI i nowoczesny software. Czysta technologia i skalowalność.",
      icon: Cpu,
      link: "/portfolio#startup",
      border: "border-[#3b82f6]/35",
      glow: "shadow-[0_0_0_1px_rgba(59,130,246,0.3),0_18px_52px_rgba(59,130,246,0.24)]",
      button: "from-[#60a5fa] to-[#2563eb] text-white",
      iconGlow: "text-[#60a5fa]",
      stripe: "from-[#60a5fa]/30 via-[#2563eb]/80 to-[#60a5fa]/30",
    },
  ];

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
    <section
      id="universes"
      className="relative overflow-hidden bg-zinc-950 py-20 sm:py-24 selection:bg-[#00F0FF] selection:text-black"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#00F0FF]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-5 md:px-10 xl:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <motion.h2 
            initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Wybierz swoje <span className="text-[#00F0FF]">uniwersum</span>
          </motion.h2>
          <motion.p 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={shouldReduceMotion ? undefined : { delay: 0.2 }}
            className="text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            Trzy ścieżki projektowe. Każda prowadzi do innego typu produktu i innego doświadczenia użytkownika.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
        >
          {universeCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div key={card.id} variants={itemVariants} className="h-full">
                <Link
                  to={card.link}
                  className={`group relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-[30px] border bg-zinc-900/45 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 ${card.border} ${card.glow}`}
                >
                  <div
                    className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r opacity-80 ${card.stripe}`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${card.stripe}`}
                  />

                  <div className="absolute -right-16 -top-14 h-44 w-44 rounded-full bg-white/5 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/25 shadow-[inset_0_0_25px_rgba(255,255,255,0.05)]">
                    <Icon className={card.iconGlow} size={28} />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold leading-tight text-white md:text-[1.75rem]">
                    {card.title}
                  </h3>

                  <p className="mb-10 text-base leading-relaxed text-zinc-300">
                    {card.description}
                  </p>

                  <div className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.22em] text-zinc-300 uppercase">
                    Kliknij, aby wejść
                  </div>

                  <span
                    className={`mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:translate-x-1 ${card.button}`}
                  >
                    Eksploruj
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
