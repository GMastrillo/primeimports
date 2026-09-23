"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Compass, CheckCircle2, ArrowRight } from "lucide-react";

export function PersonalSourcing() {
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specs, setSpecs] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!model || !name || !phone) return;

    const message = `Olá! Gostaria de encomendar um veículo através do serviço de Personal Sourcing da Prime Imports:
- Modelo Desejado: ${model}
- Nome: ${name}
- Telefone/WhatsApp: ${phone}
- Especificações: ${specs || "Padrão"}`;

    window.open(`https://wa.me/551123643828?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="sourcing" className="relative w-full py-24 bg-white dark:bg-black overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-neutral-950 p-8 sm:p-14 overflow-hidden shadow-sm">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-200/50 dark:bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and Context */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <Compass size={18} strokeWidth={1.5} className="text-neutral-900 dark:text-white" />
                <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-neutral-400">
                  Personal Broker & Sourcing
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-tight mb-4">
                Não encontrou o veículo ideal?
              </h2>

              <p className="text-xs sm:text-sm font-mono tracking-wider text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                Nossa equipe de consultores realiza busca ativa nos mercados fechados do Brasil, Europa e Estados Unidos para encontrar a configuração exata do veículo que você deseja.
              </p>

              <div className="space-y-3 pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white" />
                  <span>Importação direta e desembaraço completo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white" />
                  <span>Histórico de procedência 100% verificado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white" />
                  <span>Atendimento estritamente confidencial</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sourcing Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-900/80 text-center flex flex-col items-center justify-center shadow-md"
                >
                  <CheckCircle2 size={40} strokeWidth={1.5} className="text-neutral-950 dark:text-white mb-4" />
                  <h3 className="font-display text-xl font-bold uppercase text-neutral-950 dark:text-white tracking-wider mb-2">
                    Solicitação Encaminhada
                  </h3>
                  <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
                    Seus dados foram direcionados ao nosso Concierge VIP. Nossa equipe entrará em contato em breve com as oportunidades mapeadas.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-black/20 dark:border-white/20 text-neutral-900 dark:text-white font-mono text-xs uppercase tracking-widest hover:border-black dark:hover:border-white transition-colors"
                  >
                    Nova Solicitação
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/80 dark:bg-black/60 p-6 sm:p-8 border border-black/10 dark:border-white/10 shadow-sm"
                >
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 block mb-2">
                      Modelo ou Supercarro Desejado *
                    </label>
                    <input
                      type="text"
                      required
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="Ex: Porsche 911 GT3 RS, Ferrari Roma, Urus..."
                      className="w-full bg-neutral-100 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 px-4 py-3 text-xs font-mono tracking-wider focus:outline-none focus:border-black/40 dark:focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 block mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nome completo"
                      className="w-full bg-neutral-100 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 px-4 py-3 text-xs font-mono tracking-wider focus:outline-none focus:border-black/40 dark:focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 block mb-2">
                      Telefone / WhatsApp VIP *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-neutral-100 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 px-4 py-3 text-xs font-mono tracking-wider focus:outline-none focus:border-black/40 dark:focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 block mb-2">
                      Preferências de Cor, Ano ou Opcionais (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={specs}
                      onChange={(e) => setSpecs(e.target.value)}
                      placeholder="Descreva detalhes específicos de acabamento, pacotes ou blindagem..."
                      className="w-full bg-neutral-100 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 px-4 py-3 text-xs font-mono tracking-wider focus:outline-none focus:border-black/40 dark:focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-black text-white dark:bg-white dark:text-black font-semibold text-xs font-mono tracking-[0.25em] uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group shadow-md"
                    >
                      <span>Solicitar Busca ao Concierge</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
