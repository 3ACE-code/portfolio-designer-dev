import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_9llexhp";
const EMAILJS_TEMPLATE_ID = "template_jylbovh";
const EMAILJS_PUBLIC_KEY = "AIMEyWbZhPugMsBOh";

type SubmitStatus = "idle" | "success" | "error";

export function Contact() {
  const [isSending, setIsSending] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<SubmitStatus>("idle");
  const shouldReduceMotion = useReducedMotion();
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;

    const formData = new FormData(e.currentTarget);
    const from_name = String(formData.get("name") || "").trim();
    const reply_to = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!from_name || !reply_to || !message) return;

    setIsSending(true);
    setSubmitStatus("idle");

    const templateParams = { from_name, reply_to, message };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus("success");
      formRef.current?.reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F0FF]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-5 md:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, x: -50 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={shouldReduceMotion ? undefined : { duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Designer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-purple-400">nowej ery</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
              Łączę estetykę z najnowszymi technologiami, aby dostarczać projekty z prędkością światła. Błyskawiczna jakość bez kompromisów.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Mail className="text-[#00F0FF]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Napisz do mnie</p>
                  <p className="font-medium text-white">hello@designer-dev.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/50 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/20 blur-[50px] rounded-full"></div>
            
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 flex flex-col items-center justify-center py-16 text-center"
                >
                  <p className="text-2xl font-bold" style={{ color: "#00f2ff" }}>
                    🚀 Wiadomość wysłana! Odpowiem wkrótce.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" initial={false}>
                  <form ref={formRef} className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Imię i nazwisko</label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <input 
                          name="name"
                          type="text" 
                          autoComplete="name"
                          placeholder="Jan Kowalski"
                          required
                          className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all placeholder:text-zinc-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Adres e-mail</label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <input 
                          name="email"
                          type="email" 
                          autoComplete="email"
                          inputMode="email"
                          placeholder="jan@example.com"
                          required
                          className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all placeholder:text-zinc-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Twoja wiadomość</label>
                      <div className="relative">
                        <MessageSquare size={18} className="absolute left-4 top-4 text-zinc-500" />
                        <textarea 
                          name="message"
                          rows={4}
                          autoComplete="off"
                          placeholder="Opowiedz mi o swoim projekcie..."
                          required
                          className="w-full min-h-32 bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all placeholder:text-zinc-700 resize-y"
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-white text-zinc-950 font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-[#00F0FF] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span>{isSending ? "Wysyłanie..." : "Wyślij wiadomość"}</span>
                      <Send size={18} />
                    </button>
                  </form>

                  {submitStatus === "error" && (
                    <motion.p
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-5 text-center text-sm font-medium text-red-400"
                    >
                      Ups! Coś przerwało połączenie. Spróbuj ponownie.
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>          </motion.div>
        </div>
      </div>
    </section>
  );
}
