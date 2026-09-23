"use client";

import { motion } from "motion/react";
import { MessageSquare, ArrowUpRight } from "lucide-react";

interface ConciergeButtonProps {
  currentVehicleName?: string;
}

export function ConciergeButton({ currentVehicleName }: ConciergeButtonProps) {
  const message = currentVehicleName
    ? `Olá, estou no site da Prime Imports e gostaria de informações exclusivas sobre o veículo ${currentVehicleName}.`
    : `Olá, estou no site da Prime Imports e gostaria de falar com um Concierge sobre o acervo.`;

  const whatsappUrl = `https://wa.me/551123643828?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-40 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-4 py-3.5 bg-white/95 dark:bg-black/85 backdrop-blur-xl border border-black/15 dark:border-white/15 text-neutral-900 dark:text-white hover:border-black/40 dark:hover:border-white/40 hover:bg-white dark:hover:bg-black transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
      >
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/10 group-hover:bg-black dark:group-hover:bg-white text-neutral-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
          <MessageSquare size={16} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 dark:text-neutral-400 uppercase">
            Atendimento Privativo
          </span>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
            Concierge WhatsApp
          </span>
        </div>
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
          className="text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </motion.div>
  );
}
