"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { Vehicle } from "@/data/inventory";

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export function VehicleDetailModal({ vehicle, onClose }: VehicleDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!vehicle) return null;

  const whatsappMessage = `Olá! Gostaria de receber a ficha completa e agendar visita para o veículo ${vehicle.brand} ${vehicle.model} (${vehicle.year}) anunciado na Prime Imports.`;
  const whatsappUrl = `https://wa.me/551123643828?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 dark:bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl bg-white dark:bg-neutral-950 border border-black/15 dark:border-white/15 overflow-hidden z-10 my-auto shadow-[0_25px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-colors"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2.5 bg-white/80 dark:bg-black/60 border border-black/15 dark:border-white/15 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors"
            aria-label="Fechar Detalhes"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left: Vehicle Image Showcase */}
            <div className="lg:col-span-6 bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-200 dark:from-neutral-900 dark:via-neutral-950 dark:to-black p-8 sm:p-12 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400">
                  {vehicle.brand}
                </span>
                {vehicle.armored && (
                  <span className="px-2.5 py-0.5 border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 text-[9px] font-mono tracking-widest text-neutral-700 dark:text-neutral-300 uppercase">
                    BLINDADO
                  </span>
                )}
              </div>

              <div className="relative w-full h-[260px] sm:h-[360px] my-6 flex items-center justify-center">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                <span>Fotografia Oficial do Showroom</span>
                <span>Laudo Cautelar 100% Aprovado</span>
              </div>
            </div>

            {/* Right: Technical Dossier and Negotiation */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between bg-white dark:bg-neutral-950 transition-colors">
              <div>
                <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-neutral-400 block mb-1">
                  Dossiê Técnico
                </span>

                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white uppercase tracking-tight mb-2">
                  {vehicle.model}
                </h2>

                <p className="text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400 uppercase mb-6">
                  {vehicle.version}
                </p>

                {/* Primary Stats Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 bg-neutral-100 dark:bg-black/60 border border-black/10 dark:border-white/10 mb-6">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block">
                      Ano
                    </span>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-wider">
                      {vehicle.year}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block">
                      Quilometragem
                    </span>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-wider">
                      {vehicle.km}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block">
                      Potência
                    </span>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-wider">
                      {vehicle.power}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block">
                      Aceleração 0-100
                    </span>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-wider">
                      {vehicle.acceleration}
                    </span>
                  </div>
                </div>

                {/* Highlight Specs */}
                {vehicle.highlightSpecs && vehicle.highlightSpecs.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 block mb-2">
                      Destaques da Configuração
                    </span>
                    {vehicle.highlightSpecs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between text-xs py-1.5 border-b border-black/5 dark:border-white/5 font-mono"
                      >
                        <span className="text-neutral-500 dark:text-neutral-400">{spec.label}</span>
                        <span className="text-neutral-950 dark:text-white font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Price & Negotiation CTA */}
              <div className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                    Investimento
                  </span>
                  <span className="font-display text-2xl font-black text-neutral-950 dark:text-white tracking-wider">
                    {vehicle.price}
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-black text-white dark:bg-white dark:text-black font-semibold text-xs font-mono tracking-[0.25em] uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group shadow-md"
                >
                  <span>Iniciar Negociação com Concierge</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
