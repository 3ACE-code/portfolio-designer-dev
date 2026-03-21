import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ShoppingCart, Heart, Search, Menu } from "lucide-react";
import { Link } from "react-router";

export function EcommercePrototype() {
  const [activeColor, setActiveColor] = useState({ name: "Klasyczny", hex: "#000000", bg: "bg-black", text: "text-black" });
  
  const colors = [
    { name: "Klasyczny", hex: "#000000", bg: "bg-black", text: "text-black" },
    { name: "Różowy", hex: "#be123c", bg: "bg-rose-700", text: "text-rose-700" },
    { name: "Szałwia", hex: "#4d7c0f", bg: "bg-green-700", text: "text-green-700" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 pt-24 pb-12 font-serif" style={{ '--theme-color': activeColor.hex } as React.CSSProperties}>
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 font-sans">
          <Link to="/" className="flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Powrót do strony głównej
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-zinc-500">Kolor motywu:</span>
            <div className="flex space-x-2">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setActiveColor(c)}
                  className={`w-8 h-8 rounded-full ${c.bg} border-2 transition-all ${activeColor.name === c.name ? 'border-zinc-400 scale-110' : 'border-transparent hover:scale-105'}`}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Prototype UI */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-zinc-100 mx-auto max-w-5xl"
        >
          {/* Nav */}
          <header className="flex justify-between items-center p-6 border-b border-zinc-100">
            <Menu className="text-zinc-400" />
            <div className={`text-xl font-bold tracking-widest ${activeColor.text}`}>LUMIÈRE</div>
            <div className="flex space-x-4">
              <Search size={20} className="text-zinc-600" />
              <ShoppingCart size={20} className="text-zinc-600" />
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="bg-zinc-100 relative h-[60vh] lg:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1769107805412-90d9191d53e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHByb2R1Y3R8ZW58MXx8fHwxNzc0MTIxMzU1fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Product"
                className="w-full h-full object-cover object-center"
              />
              <button className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-zinc-400 hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>

            {/* Details */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className={`text-sm font-semibold tracking-widest uppercase mb-4 ${activeColor.text}`}>Kolekcja Wiosenna</span>
              <h1 className="text-4xl md:text-5xl font-light text-zinc-900 mb-6 leading-tight">Minimalistyczna Forma</h1>
              <p className="text-zinc-500 mb-8 font-sans leading-relaxed">
                Rzemieślnicza precyzja spotyka się z nowoczesnym minimalizmem. Zaprojektowane, by przetrwać lata i pasować do każdego wnętrza z elegancką gracją.
              </p>
              
              <div className="text-3xl font-light text-zinc-900 mb-10">
                1 299 PLN
              </div>

              <div className="space-y-4 font-sans">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Rozmiar</span>
                  <span className="text-zinc-400 underline cursor-pointer">Tabela rozmiarów</span>
                </div>
                <div className="flex space-x-3 mb-8">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button key={size} className="w-12 h-12 border border-zinc-200 rounded-lg flex items-center justify-center hover:border-zinc-900 transition-colors">
                      {size}
                    </button>
                  ))}
                </div>

                <button 
                  className={`w-full py-4 rounded-xl text-white font-medium tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-1`}
                  style={{ backgroundColor: activeColor.hex }}
                >
                  Dodaj do koszyka
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
