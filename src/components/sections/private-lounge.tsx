"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Shield, Award, Truck, Lock, ArrowUpRight } from "lucide-react";

export function PrivateLounge() {
  const pillars = [
    {
      icon: <Award size={20} strokeWidth={1.5} />,
      title: "CURADORIA CIRÚRGICA",
      description:
        "Cada veículo passa por inspeção técnica detalhada de mais de 250 itens, histórico de manutenção em concessionária e laudo cautelar 100% aprovado.",
    },
    {
      icon: <Lock size={20} strokeWidth={1.5} />,
      title: "DISCRIÇÃO E CONFIDENCIALIDADE",
      description:
        "Transações estruturadas para clientes que valorizam privacidade total em todas as etapas de compra, venda ou consignação.",
    },
    {
      icon: <Truck size={20} strokeWidth={1.5} />,
      title: "TRANSPORTE PRIVATIVO NACIONAL",
      description:
        "Entregas realizadas em caminhão prancha fechado e segurado, direto na garagem do comprador em qualquer estado do Brasil.",
    },
    {
      icon: <Shield size={20} strokeWidth={1.5} />,
      title: "SHOWROOM & PRIVATE LOUNGE",
      description:
        "Três endereços estruturados na Rua Santa Gertrudes (Tatuapé / Anália Franco) preparados para atendimentos privativos com hora marcada.",
    },
  ];

  return (
    <section id="experience" className="relative w-full py-28 bg-neutral-50 dark:bg-neutral-950 border-t border-b border-black/10 dark:border-white/10 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-black/10 dark:border-white/10">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-neutral-400 block mb-3">
              A Experiência Prime Imports
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white uppercase tracking-tight">
              O Padrão Definitivo em Supercarros
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-mono tracking-wider text-neutral-600 dark:text-neutral-400">
              Não comercializamos apenas automóveis; construímos pontes para entusiastas e colecionadores que exigem excelência técnica e exclusividade absoluta.
            </p>
          </div>
        </div>

        {/* Content: Showcase Photo & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Atmospheric Showroom Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full h-[380px] sm:h-[480px] border border-black/15 dark:border-white/15 overflow-hidden shadow-lg">
              <Image
                src="https://autobusiness.com.br/assets/img/albuns/album_34316/album-Album-2-685015288f43d.webp"
                alt="Showroom Prime Imports SP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Inscription Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-300 block mb-1">
                  Private Showroom · São Paulo
                </span>
                <p className="font-display text-lg text-white font-bold uppercase tracking-wider">
                  Rua Santa Gertrudes, 406 / 453 / 621
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: The 4 Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white dark:bg-black/60 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all flex flex-col justify-between shadow-[0_4px_15px_rgba(0,0,0,0.02)] dark:shadow-none"
              >
                <div>
                  <div className="p-3 w-fit border border-black/10 dark:border-white/15 bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-wider mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 p-8 border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-none">
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg sm:text-xl font-bold text-neutral-950 dark:text-white uppercase tracking-wide">
              Deseja conhecer o showroom pessoalmente?
            </h4>
            <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 tracking-wider mt-1">
              Agende uma visita privativa com nosso time de consultores em ambiente reservado.
            </p>
          </div>

          <a
            href="https://wa.me/551123643828?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20privativa%20no%20Showroom%20da%20Prime%20Imports."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-black text-white dark:bg-white dark:text-black font-semibold text-xs font-mono tracking-[0.2em] uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>Agendar Visita</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
