import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShoppingBag, Gamepad2, Cpu } from "lucide-react";
import { Link } from "react-router";

export function Portfolio() {
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      id: "ecommerce",
      title: "E-COMMERCE",
      category: "E-commerce / Fashion",
      icon: <ShoppingBag size={24} className="text-zinc-900" />,
      description: "Minimalistyczny sklep internetowy zaprojektowany dla butików premium. Skupia się na bezszwowej ekspozycji produktu, budowaniu luksusowego wizerunku marki oraz intuicyjnym procesie zakupowym. Projekt udowadnia, że 'mniej znaczy więcej'.",
      features: ["Responsywny interfejs", "Zarządzanie stanem koszyka", "Konfigurator wariantów"],
      image: "https://images.unsplash.com/photo-1738229114998-e7599e9e6610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbHV4dXJ5JTIwZmFzaGlvbiUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0MTI2MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/universe/ecommerce",
      color: "bg-zinc-100",
      accent: "text-zinc-900",
      border: "border-zinc-200"
    },
    {
      id: "gaming",
      title: "GAMING UI/UX",
      category: "Gaming / Launcher",
      icon: <Gamepad2 size={24} className="text-[#00F0FF]" />,
      description: "Futurystyczny interfejs klienta gry osadzony w cyberpunkowych klimatach. Mroczna estetyka, dynamiczne neony i ostre, geometryczne kształty tworzą unikalne, immersyjne doświadczenie dla graczy, już od momentu uruchomienia aplikacji.",
      features: ["Dark Mode", "Efekty Glow i Neon", "Złożony Grid System"],
      image: "https://images.unsplash.com/photo-1664092815283-19c6196f5319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwZ2FtaW5nfGVufDF8fHx8MTc3NDA4MDE5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/universe/gaming",
      color: "bg-[#09090b]",
      accent: "text-[#00F0FF]",
      border: "border-zinc-800",
      textWhite: true
    },
    {
      id: "startup",
      title: "STARTUP & DIGITAL PRODUCTS",
      category: "Startup / SaaS",
      icon: <Cpu size={24} className="text-blue-500" />,
      description: "Zaawansowany panel analityczny (Dashboard) zaprojektowany z myślą o ergonomii pracy z dużą ilością danych. Czysty, przejrzysty interfejs z inteligentnymi mechanizmami raportowania, pozwalający na błyskawiczne generowanie analiz biznesowych.",
      features: ["Wizualizacja danych", "Czat AI", "Złożona Architektura Panelu"],
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwc3RhcnR1cCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzQxMjU4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/universe/startup",
      color: "bg-blue-50/50",
      accent: "text-blue-600",
      border: "border-blue-100"
    }
  ];

  return (
    <section className="pt-28 sm:pt-32 pb-20 sm:pb-24 min-h-screen bg-white font-sans selection:bg-[#00F0FF] selection:text-black">
      <div className="container mx-auto px-5 md:px-10 xl:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <motion.h1 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-zinc-900 tracking-tight"
          >
            Wybrane <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-[#00F0FF]">Projekty</span>
          </motion.h1>
          <motion.p 
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            transition={shouldReduceMotion ? undefined : { delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-600 leading-relaxed"
          >
            Poniżej znajduje się zestawienie trzech zróżnicowanych ekosystemów cyfrowych. Od e-commerce, przez gaming, aż po zaawansowane narzędzia analityczne. Poznaj moje kompetencje architektoniczne na żywych organizmach.
          </motion.p>
        </div>

        {/* Project List */}
        <div className="space-y-18 sm:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              id={project.id}
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={shouldReduceMotion ? undefined : { duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2">
                <Link to={project.link} className="block group relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Subtle overlay that reveals on hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  
                  <motion.img 
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                    transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: "easeOut" }}
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full aspect-[4/3] object-cover object-center bg-zinc-100"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold tracking-wider text-zinc-900 shadow-lg border border-white/20">
                    KLIKNIJ ABY URUCHOMIĆ PROTOTYP
                  </div>
                </Link>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${project.border} ${project.color} shadow-sm`}>
                    {project.icon}
                  </div>
                  <span className={`text-sm font-semibold tracking-wider uppercase ${project.accent}`}>
                    {project.category}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                  {project.title}
                </h2>
                
                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Features list */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.features.map((feature, i) => (
                    <span key={i} className="px-4 py-2 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-lg border border-zinc-200">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link 
                  to={project.link}
                  className="inline-flex items-center space-x-3 text-zinc-900 font-bold hover:text-[#00F0FF] transition-colors group w-fit"
                >
                  <span className="text-lg border-b-2 border-transparent group-hover:border-[#00F0FF] pb-1 transition-all">Zobacz pełny prototyp</span>
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-[#00F0FF] group-hover:text-white transition-colors">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
