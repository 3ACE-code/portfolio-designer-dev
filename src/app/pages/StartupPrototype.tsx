import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, LayoutDashboard, BarChart3, Users, MessageSquare, Plus, Bell, Search, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function StartupPrototype() {
  const [activeColor, setActiveColor] = useState({ name: "Blue", hex: "#3b82f6", bg: "bg-blue-500", text: "text-blue-500", light: "bg-blue-50" });
  
  const colors = [
    { name: "Blue", hex: "#3b82f6", bg: "bg-blue-500", text: "text-blue-500", light: "bg-blue-50" },
    { name: "Indigo", hex: "#6366f1", bg: "bg-indigo-500", text: "text-indigo-500", light: "bg-indigo-50" },
    { name: "Emerald", hex: "#10b981", bg: "bg-emerald-500", text: "text-emerald-500", light: "bg-emerald-50" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
          <Link to="/" className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Powrót do strony głównej
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-slate-500">Kolor wiodący:</span>
            <div className="flex space-x-2">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setActiveColor(c)}
                  className={`w-8 h-8 rounded-full ${c.bg} border-2 transition-all ${activeColor.name === c.name ? 'border-slate-800 scale-110' : 'border-transparent hover:scale-105'}`}
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
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 mx-auto max-w-6xl flex"
          style={{ minHeight: '70vh' }}
        >
          {/* Sidebar */}
          <aside className="w-64 border-r border-slate-200 p-6 hidden lg:flex flex-col">
            <div className="flex items-center space-x-2 font-bold text-xl mb-10 text-slate-900">
              <div className={`w-8 h-8 rounded-lg ${activeColor.bg} flex items-center justify-center text-white`}>
                <Sparkles size={18} />
              </div>
              <span>DataNova One</span>
            </div>

            <nav className="space-y-2 flex-grow">
              <a href="#" className={`flex items-center space-x-3 px-4 py-3 rounded-xl ${activeColor.light} ${activeColor.text} font-medium`}>
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <BarChart3 size={20} />
                <span>Analityka</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <Users size={20} />
                <span>Użytkownicy</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <MessageSquare size={20} />
                <span>Wiadomości systemowe</span>
              </a>
            </nav>

            <div className={`mt-auto p-4 rounded-xl ${activeColor.light} border border-${activeColor.name.toLowerCase()}-100`}>
              <p className="text-sm font-semibold text-slate-900 mb-1">Plan Pro</p>
              <p className="text-xs text-slate-500 mb-3">Wykorzystano 80% zasobów</p>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div className={`h-full ${activeColor.bg} w-4/5`}></div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow flex flex-col bg-slate-50/50">
            {/* Topbar */}
            <header className="h-20 border-b border-slate-200 bg-white flex items-center justify-between px-8">
              <div className="relative w-64 hidden md:block">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Szukaj..." 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-300"
                />
              </div>
              <div className="flex items-center space-x-4 ml-auto">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors relative">
                  <Bell size={20} />
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>
                </button>
                <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Avatar" />
                </div>
              </div>
            </header>

            {/* Dashboard Content */}
            <div className="p-8 flex-grow overflow-y-auto">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Przegląd systemu</h1>
                  <p className="text-slate-500 mt-1">Oto podsumowanie twoich danych wygenerowane przez system analityczny.</p>
                </div>
                <button className={`hidden md:flex items-center space-x-2 px-4 py-2 ${activeColor.bg} text-white rounded-lg text-sm font-medium shadow-sm hover:opacity-90 transition-opacity`}>
                  <Plus size={16} />
                  <span>Nowy raport</span>
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "Aktywni użytkownicy", value: "24,592", trend: "+12.5%" },
                  { title: "Przetworzone zapytania", value: "1.2M", trend: "+4.2%" },
                  { title: "Zaoszczędzony czas", value: "850h", trend: "+25.0%" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-slate-500 text-sm font-medium mb-2">{stat.title}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                      <span className={`text-sm font-medium text-emerald-500 bg-emerald-50 px-2 py-1 rounded`}>{stat.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat / Graph area */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-900">Centrum Analiz</h3>
                  <button className={`text-sm font-medium ${activeColor.text}`}>Wyczyść historię</button>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6 mb-4 font-mono text-sm text-slate-700">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-8 h-8 rounded bg-slate-200 flex-shrink-0"></div>
                    <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 shadow-sm">
                      Wygeneruj wykres porównujący konwersję z ostatnich 30 dni z podziałem na kanały mobilne i desktop.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 flex-row-reverse space-x-reverse">
                    <div className={`w-8 h-8 rounded ${activeColor.bg} flex-shrink-0 flex items-center justify-center text-white`}><Sparkles size={14} /></div>
                    <div className="bg-white p-4 rounded-xl rounded-tr-none border border-slate-200 shadow-sm w-3/4">
                      <p className="font-sans mb-4">Oto wygenerowane dane. Zauważono znaczny wzrost w kanale mobilnym.</p>
                      {/* Fake graph */}
                      <div className="h-32 flex items-end justify-between space-x-2 px-4 border-b border-slate-100">
                        {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                          <div key={i} className={`w-full rounded-t-sm ${i % 2 === 0 ? 'bg-slate-200' : activeColor.bg}`} style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Zadaj pytanie o swoje dane..." 
                    className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-slate-300 shadow-sm"
                  />
                  <button className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 ${activeColor.bg} text-white rounded-lg flex items-center justify-center`}>
                    <ArrowLeft size={16} className="rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </motion.div>

      </div>
    </div>
  );
}
