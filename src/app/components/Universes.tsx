import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ShoppingBag, Gamepad2, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Universes() {
  const shouldReduceMotion = useReducedMotion();

  const universeCards = [
    {
      id: "ecommerce",
      title: "Sektor E-commerce",
      description:
        "Butiki Premium i luksusowe sklepy. Skupienie na konwersji i estetyce.",
      icon: ShoppingBag,
      link: "/portfolio#ecommerce",
      border: "border-[#f3e7c0]/35",
      glow: "shadow-[0_0_0_1px_rgba(243,231,192,0.28),0_18px_48px_rgba(201,167,89,0.22)]",
      hoverGlow:
        "hover:shadow-[0_0_0_1px_rgba(243,231,192,0.42),0_28px_72px_rgba(201,167,89,0.31)]",
      buttonText: "text-[#f3e7c0]",
      buttonFill:
        "group-hover:from-[#f3e7c0] group-hover:to-white group-hover:text-zinc-900",
      iconGlow: "text-[#f3e7c0]",
      stripe: "from-[#f3e7c0]/20 via-white/70 to-[#f3e7c0]/20",
    },
    {
      id: "gaming",
      title: "Sektor Gaming",
      description:
        "Interfejsy dla graczy, platformy e-sportowe i HUDy. Agresywny, nowoczesny design.",
      icon: Gamepad2,
      link: "/portfolio#gaming",
      border: "border-[#8b5cf6]/35",
      glow: "shadow-[0_0_0_1px_rgba(139,92,246,0.3),0_18px_52px_rgba(34,211,238,0.24)]",
      hoverGlow:
        "hover:shadow-[0_0_0_1px_rgba(139,92,246,0.42),0_30px_76px_rgba(34,211,238,0.34)]",
      buttonText: "text-[#c4b5fd]",
      buttonFill:
        "group-hover:from-[#8b5cf6] group-hover:to-[#22d3ee] group-hover:text-white",
      iconGlow: "text-[#c4b5fd]",
      stripe: "from-[#8b5cf6]/30 via-[#22d3ee]/80 to-[#8b5cf6]/30",
    },
    {
      id: "startup",
      title: "Sektor Startup",
      description:
        "Dashboardy, aplikacje AI i nowoczesny software. Czysta technologia i skalowalność.",
      icon: Cpu,
      link: "/portfolio#startup",
      border: "border-[#3b82f6]/35",
      glow: "shadow-[0_0_0_1px_rgba(59,130,246,0.3),0_18px_52px_rgba(59,130,246,0.24)]",
      hoverGlow:
        "hover:shadow-[0_0_0_1px_rgba(59,130,246,0.42),0_30px_76px_rgba(59,130,246,0.34)]",
      buttonText: "text-[#60a5fa]",
      buttonFill:
        "group-hover:from-[#60a5fa] group-hover:to-[#2563eb] group-hover:text-white",
      iconGlow: "text-[#60a5fa]",
      stripe: "from-[#60a5fa]/30 via-[#2563eb]/80 to-[#60a5fa]/30",
    },
  ];

  const trustLogos = [
    {
      name: "Figma",
      src: "https://cdn.simpleicons.org/figma/FFFFFF",
      alt: "Figma",
    },
    {
      name: "React",
      src: "https://cdn.simpleicons.org/react/FFFFFF",
      alt: "React",
    },
    {
      name: "Next.js",
      src: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      alt: "Next.js",
    },
    {
      name: "Tailwind CSS",
      src: "https://cdn.simpleicons.org/tailwindcss/FFFFFF",
      alt: "Tailwind CSS",
    },
    {
      name: "Vercel",
      src: "https://cdn.simpleicons.org/vercel/FFFFFF",
      alt: "Vercel",
    },
    {
      name: "TypeScript",
      src: "https://cdn.simpleicons.org/typescript/FFFFFF",
      alt: "TypeScript",
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
            Wybierz swój <span className="text-[#00F0FF]">sektor</span>
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
                  className={`group relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-[30px] border bg-zinc-900/45 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.05] hover:backdrop-blur-3xl ${card.border} ${card.glow} ${card.hoverGlow}`}
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
                    className={`mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:translate-x-1 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:shadow-[0_14px_36px_rgba(0,0,0,0.45)] ${card.buttonText} ${card.buttonFill}`}
                  >
                    Eksploruj
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mx-auto mt-20 max-w-6xl rounded-3xl border border-white/10 bg-zinc-900/40 px-6 py-8 backdrop-blur-xl sm:px-10">
          <p className="mb-7 text-center text-sm font-medium tracking-[0.18em] text-zinc-400 uppercase">
            Technologie napędzające Twoją wizję:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
            {trustLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-3 opacity-40 transition-opacity duration-300 hover:opacity-70"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-6 object-contain"
                />
                <span className="text-xs font-semibold tracking-[0.16em] text-zinc-300 uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <footer className="mx-auto mt-24 max-w-5xl py-20 text-center">
          <h3 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
            Twoja wizja zasługuje na najlepszy kod.
          </h3>

          <a
            href="/#contact"
            className="mx-auto mt-10 inline-flex items-center justify-center rounded-full bg-[#00F0FF] px-10 py-4 text-base font-bold text-zinc-950 shadow-[0_0_0_1px_rgba(0,240,255,0.5),0_0_48px_rgba(0,240,255,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_0_1px_rgba(0,240,255,0.65),0_0_64px_rgba(0,240,255,0.6)]"
          >
            Napisz do mnie
          </a>

          <p className="mt-8 text-sm text-zinc-400">danielsony28@gmail.com</p>
          <div className="mt-4 flex items-center justify-center gap-8 text-xs tracking-[0.16em] uppercase text-zinc-500">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-zinc-300">
              LinkedIn
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-zinc-300">
              Discord
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
