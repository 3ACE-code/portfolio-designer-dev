import React from "react";
import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { Check, Download } from "lucide-react";

export function Pricing() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToContact = (attempt = 0) => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (attempt < 20) {
      window.setTimeout(() => scrollToContact(attempt + 1), 50);
    }
  };

  const pricingCards = [
    {
      title: "ESSENTIAL",
      subtitle: "Szybki Start",
      price: "od 1 200 PLN",
      desc: "Idealne dla prostych wizytówek i Landing Page.",
      features: ["Design w Figmie", "Wdrożenie Next.js", "Podstawowe SEO", "1-3 dni"],
      isPopular: false,
      accentColor: "#f3e7c0" // gold
    },
    {
      title: "UNIVERSE MVP",
      subtitle: "Najczęściej wybierany",
      price: "od 3 500 PLN",
      desc: "Kompletna strona firmowa z animacjami 3D.",
      features: ["Full UI/UX Design", "Animacje High-End", "SEO Premium", "Mobile First"],
      isPopular: true,
      accentColor: "#00F0FF" // cyan
    },
    {
      title: "ULTIMATE",
      subtitle: "Rozbudowane Systemy",
      price: "Wycena indywidualna",
      desc: "Sklepy, SaaS i zaawansowane aplikacje webowe.",
      features: ["Systemy CMS", "Integracje API", "Pełna skalowalność", "Support techniczny"],
      isPopular: false,
      accentColor: "#8b5cf6" // purple
    }
  ];

  return (
    <section
      ref={ref}
      className="bg-zinc-950 py-24 sm:py-32 px-5 md:px-10 xl:px-12 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={isInView ? (shouldReduceMotion ? undefined : { opacity: 1, y: 0 }) : "initial"}
          transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-[-0.02em]">
            Cennik i <span className="text-[#00F0FF]">Współpraca</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-[1.68] font-light tracking-[-0.02em]">
            Niezależnie od skali projektu, mamy rozwiązanie dopasowane do Twoich potrzeb.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {pricingCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              animate={isInView ? (shouldReduceMotion ? undefined : { opacity: 1, y: 0 }) : "initial"}
              transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.1 + idx * 0.15, ease: "easeOut" }}
              className={`relative group rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500 h-full flex flex-col ${
                card.isPopular
                  ? "bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 border-[#00F0FF]/60 shadow-[0_0_40px_rgba(0,240,255,0.25)] hover:shadow-[0_0_60px_rgba(0,240,255,0.4)]"
                  : "bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700/80 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
              }`}
            >
              {/* Popular Badge */}
              {card.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 bg-[#00F0FF] text-black text-xs font-bold rounded-full tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                    WYBRANY NAJCZĘŚCIEJ
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  <span className="text-sm text-zinc-400 font-light">{card.subtitle}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-[1.65]">{card.desc}</p>

                {/* Price */}
                <div className={`text-4xl font-extrabold mb-6 leading-tight ${
                  card.isPopular ? "text-[#00F0FF]" : "text-white"
                }`}>
                  {card.price}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10 flex-1">
                {card.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      card.isPopular ? "text-[#00F0FF]" : "text-zinc-400"
                    }`} />
                    <span className="text-zinc-300 text-sm leading-[1.6]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                onClick={() => scrollToContact()}
                className={`w-full py-3 px-6 rounded-full font-bold text-sm transition-all duration-300 ${
                  card.isPopular
                    ? "bg-[#00F0FF] text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
                    : "bg-zinc-800/60 text-white border border-zinc-700/60 hover:bg-zinc-700/80 hover:border-zinc-600/80"
                }`}
              >
                Rozmawiajmy
              </motion.button>

              {/* Decorative glow */}
              {card.isPopular && (
                <div
                  className="absolute -inset-1 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)`
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Custom Projects Section */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={isInView ? (shouldReduceMotion ? undefined : { opacity: 1, y: 0 }) : "initial"}
          transition={shouldReduceMotion ? undefined : { duration: 0.8, delay: 0.5 }}
          className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-8 md:p-12 text-center mb-16"
        >
          <p className="text-lg text-zinc-300 leading-[1.68] max-w-2xl mx-auto">
            <span className="text-[#00F0FF] font-semibold">Potrzebujesz mniejszej poprawki lub projektu niestandardowego?</span>
            {" "}Napisz do mnie – chętnie pomogę przy mniejszych zleceniach.
          </p>
        </motion.div>

        {/* PDF Download Button */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={isInView ? (shouldReduceMotion ? undefined : { opacity: 1, y: 0 }) : "initial"}
          transition={shouldReduceMotion ? undefined : { duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.a
            href="/Cennik_Designer_Dev.pdf"
            download
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zinc-900/80 to-zinc-800/60 border border-zinc-700/80 rounded-full text-white font-bold hover:border-[#00F0FF]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300"
          >
            <Download size={20} />
            <span>Pobierz Pełną Ofertę (PDF)</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
