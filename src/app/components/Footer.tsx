import React from "react";
import { motion } from "motion/react";
import { Linkedin, Disc as Behance } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900 text-zinc-500">
      <div className="container mx-auto px-5 md:px-10 xl:px-12 flex flex-col gap-6 md:flex-row md:gap-8 items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-6 md:mb-0"
        >
          <a href="/" className="text-xl font-bold tracking-tighter text-white mb-2 inline-block">
            DESIGNER<span className="text-[#00F0FF]">-</span>DEV
          </a>
          <p className="text-sm">
            © 2026 DESIGNER-DEV | Wszystkie prawa zastrzeżone.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0)] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            aria-label="Behance"
          >
            <Behance size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/designer-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0)] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
