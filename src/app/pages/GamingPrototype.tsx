import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Play, Shield, Zap, Settings, User } from "lucide-react";
import { Link } from "react-router";

export function GamingPrototype() {
  const [activeColor, setActiveColor] = useState({ name: "Neon", hex: "#00F0FF", glow: "rgba(0, 240, 255, 0.5)", text: "text-[#00F0FF]", border: "border-[#00F0FF]" });
  
  const colors = [
    { name: "Neon", hex: "#00F0FF", glow: "rgba(0, 240, 255, 0.5)", text: "text-[#00F0FF]", border: "border-[#00F0FF]" },
    { name: "Cyber Purple", hex: "#a855f7", glow: "rgba(168, 85, 247, 0.5)", text: "text-purple-500", border: "border-purple-500" },
    { name: "Toxic Green", hex: "#22c55e", glow: "rgba(34, 197, 94, 0.5)", text: "text-green-500", border: "border-green-500" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-12 font-mono text-white" style={{ '--accent-hex': activeColor.hex } as React.CSSProperties}>
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-zinc-900/50 backdrop-blur-md p-4 rounded-2xl border border-zinc-800 font-sans">
          <Link to="/" className="flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Powrót do strony głównej
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-zinc-400">Energia UI:</span>
            <div className="flex space-x-2">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setActiveColor(c)}
                  className={`w-8 h-8 rounded-full border-2 transition-all`}
                  style={{ 
                    backgroundColor: c.hex, 
                    borderColor: activeColor.name === c.name ? 'white' : 'transparent',
                    boxShadow: activeColor.name === c.name ? `0 0 15px ${c.glow}` : 'none'
                  }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Prototype UI */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 mx-auto max-w-5xl shadow-2xl"
          style={{ boxShadow: `0 20px 50px -12px ${activeColor.glow}` }}
        >
          {/* Background Image / Glow */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBnYW1pbmclMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzQxMjEzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              className="w-full h-full object-cover opacity-20 mix-blend-screen"
              alt="Cyberpunk Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12 flex flex-col h-[70vh] justify-between">
            {/* Header */}
            <header className="flex justify-between items-center">
              <div className="flex items-center space-x-6">
                <div className={`text-2xl font-black tracking-widest ${activeColor.text}`}>NEXUS<span className="text-white">_UI</span></div>
                <nav className="hidden md:flex space-x-6 text-sm text-zinc-400 font-sans">
                  <a href="#" className="hover:text-white transition-colors">Biblioteka</a>
                  <a href="#" className={`text-white border-b-2 pb-1 ${activeColor.border}`}>Sklep</a>
                  <a href="#" className="hover:text-white transition-colors">Społeczność</a>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <Settings size={20} className="text-zinc-400 hover:text-white cursor-pointer" />
                <div className={`w-10 h-10 rounded-full border-2 ${activeColor.border} flex items-center justify-center overflow-hidden`}>
                  <User size={20} className={activeColor.text} />
                </div>
              </div>
            </header>

            {/* Main Content */}
            <div className="max-w-2xl">
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border ${activeColor.border} border-opacity-50 text-xs mb-6 backdrop-blur-md`}>
                <Zap size={14} className={`mr-2 ${activeColor.text}`} />
                <span className={activeColor.text}>SEZON 04 AKTYWNY</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
                Cyber <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Syndicate</span>
              </h1>
              
              <p className="text-zinc-400 text-lg mb-10 max-w-lg font-sans">
                Zanurz się w dystopijnym świecie, gdzie przetrwanie zależy od twoich modyfikacji. Rozpocznij kampanię.
              </p>

              <div className="flex items-center space-x-6">
                <button 
                  className="flex items-center space-x-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-lg hover:scale-105 transition-transform"
                  style={{ boxShadow: `0 0 20px ${activeColor.glow}` }}
                >
                  <Play size={20} fill="currentColor" />
                  <span>Graj teraz</span>
                </button>
                
                <div className="flex items-center space-x-3 text-sm font-sans text-zinc-400">
                  <Shield size={16} />
                  <span>Poziom 42</span>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 md:mt-0 font-sans border-t border-zinc-800/50 pt-8">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Czas gry</p>
                <p className="text-xl font-bold">124h 30m</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Ostatnio grano</p>
                <p className="text-xl font-bold">Dzisiaj</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Osiągnięcia</p>
                <p className={`text-xl font-bold ${activeColor.text}`}>42/50</p>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
