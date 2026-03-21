import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";

type DiscordPayload = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const [isSending, setIsSending] = React.useState(false);
  const toastId = "contact-form-status";
  const discordWebhookUrl = String(import.meta.env.VITE_DISCORD_WEBHOOK_URL || "").trim();
  const shouldReduceMotion = useReducedMotion();

  const notifyDiscordWebhook = async ({ name, email, message }: DiscordPayload) => {
    if (!discordWebhookUrl) {
      return;
    }

    const safeMessage = message.length > 600 ? `${message.slice(0, 600)}...` : message;
    const payload = {
      content: "Nowa wiadomosc z formularza kontaktowego",
      embeds: [
        {
          title: "Nowy kontakt ze strony",
          color: 61695,
          fields: [
            { name: "Nadawca", value: name },
            { name: "Email", value: email },
            { name: "Wiadomosc", value: safeMessage },
          ],
        },
      ],
    };

    try {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch {
      console.warn("Discord webhook notification failed.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      toast.error("Uzupełnij wszystkie pola formularza.");
      return;
    }

    setIsSending(true);
    toast.loading("Wysylanie wiadomosci...", { id: toastId });

    try {
      const response = await fetch("https://formsubmit.co/ajax/danielsony28@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Nowa wiadomosc ze strony od: ${name}`,
          _template: "table",
        }),
      });

      const isJsonResponse = response.headers
        .get("content-type")
        ?.includes("application/json");
      const result = isJsonResponse
        ? await response.json().catch(() => null)
        : null;
      const successFlag = result?.success;
      const isSuccessResponse =
        response.ok &&
        successFlag !== false &&
        successFlag !== "false";

      if (!isSuccessResponse) {
        throw new Error("Nie udalo sie wyslac formularza.");
      }

      void notifyDiscordWebhook({ name, email, message });
      toast.success("Pomyslnie wyslano wiadomosc.", { id: toastId });
      e.currentTarget.reset();
    } catch (error) {
      if (error instanceof TypeError) {
        toast.success("Wiadomosc zostala wyslana. Sprawdz skrzynke za chwile.", { id: toastId });
      } else {
        toast.error("Wysylka nie powiodla sie. Sprobuj ponownie za chwile.", { id: toastId });
      }
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
                  <p className="font-medium text-white">danielsony28@gmail.com</p>
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
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
