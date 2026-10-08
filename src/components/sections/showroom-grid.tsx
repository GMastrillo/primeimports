"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Vehicle } from "@/data/inventory";

interface ShowroomGridProps {
  vehicles: Vehicle[];
  onOpenVehicleDetail: (vehicle: Vehicle) => void;
}

export function ShowroomGrid({ vehicles, onOpenVehicleDetail }: ShowroomGridProps) {
  if (vehicles.length === 0) {
    return (
      <section id="estoque" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 text-center relative">
        <div id="showroom" className="absolute -top-24 left-0 pointer-events-none" />
        <div className="py-16 px-6 border border-black/10 dark:border-white/10 bg-neutral-100/60 dark:bg-neutral-950/60 max-w-xl mx-auto">
          <p className="text-sm font-mono tracking-[0.25em] uppercase text-neutral-600 dark:text-neutral-400 mb-4">
            Nenhum veículo encontrado com os filtros selecionados
          </p>
          <Link
            href="/#sourcing"
            className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black text-xs font-mono tracking-[0.2em] uppercase"
          >
            Solicitar Encomenda no Sourcing
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="estoque" className="max-w-7xl mx-auto px-6 sm:px-8 py-24 transition-colors relative">
      <div id="showroom" className="absolute -top-24 left-0 pointer-events-none" />
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/10 dark:border-white/10 pb-6">
        <div>
          <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-neutral-400 block mb-2">
            Acervo Selecionado
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white uppercase tracking-tight">
            Estoque Prime Imports
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="max-w-md text-xs sm:text-sm font-mono tracking-wider text-neutral-600 dark:text-neutral-400">
            Veículos periciados com laudo cautelar 100% aprovado, procedência rastreada e entrega privativa em todo o território nacional.
          </p>
          <Link
            href="/estoque"
            className="inline-flex items-center gap-2 px-4 py-2 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white text-[11px] font-mono uppercase tracking-[0.2em] text-black dark:text-white transition-colors whitespace-nowrap"
          >
            <span>Aba Estoque</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      {/* Grid of Vehicles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative flex flex-col bg-white dark:bg-neutral-950/90 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none"
          >
            {/* Card Image Container */}
            <div
              onClick={() => onOpenVehicleDetail(vehicle)}
              className="relative w-full h-[260px] bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-black overflow-hidden cursor-pointer flex items-center justify-center p-4 transition-colors"
            >
              {/* Optional Armored or Special Tag */}
              {vehicle.armored && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 bg-white/90 dark:bg-black/80 border border-black/10 dark:border-white/20 text-neutral-900 dark:text-white text-[10px] font-mono tracking-widest uppercase backdrop-blur-md shadow-sm">
                  <ShieldCheck size={12} strokeWidth={1.5} />
                  <span>BLINDADO</span>
                </div>
              )}

              {vehicle.tag && !vehicle.armored && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 dark:bg-black/80 border border-black/10 dark:border-white/20 text-neutral-900 dark:text-white text-[10px] font-mono tracking-widest uppercase backdrop-blur-md shadow-sm">
                  <span>{vehicle.tag}</span>
                </div>
              )}

              {/* Vehicle Image */}
              <div className="relative w-full h-full">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Hover Overlay with "Ver Detalhes" */}
              <div className="absolute inset-0 bg-black/30 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-mono tracking-widest uppercase shadow-md">
                  <span>Ver Detalhes</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>

            {/* Card Details */}
            <div className="p-6 flex flex-col flex-1 justify-between bg-white dark:bg-black/50 transition-colors">
              <div>
                {/* Brand */}
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 block mb-1">
                  {vehicle.brand}
                </span>

                {/* Model Title */}
                <h3
                  onClick={() => onOpenVehicleDetail(vehicle)}
                  className="font-display text-xl font-bold text-neutral-950 dark:text-white uppercase tracking-tight group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors cursor-pointer"
                >
                  {vehicle.model}
                </h3>

                {/* Subtitle / Engine Version */}
                <p className="text-[11px] font-mono tracking-wider text-neutral-500 dark:text-neutral-400 uppercase truncate mt-0.5 mb-5">
                  {vehicle.version}
                </p>

                {/* Year & Km Details */}
                <div className="grid grid-cols-2 gap-2 py-3 border-y border-black/10 dark:border-white/10 mb-5">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block">
                      Ano Modelo
                    </span>
                    <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 tracking-wider">
                      {vehicle.year}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block">
                      Quilometragem
                    </span>
                    <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 tracking-wider">
                      {vehicle.km}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                    Valor
                  </span>
                  <span className="text-lg font-extrabold text-neutral-950 dark:text-white tracking-wider">
                    {vehicle.price}
                  </span>
                </div>

                <a
                  href={`https://wa.me/551123643828?text=${encodeURIComponent(
                    `Olá, tenho interesse na ${vehicle.brand} ${vehicle.model} (${vehicle.year}) anunciada na Prime Imports.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-[10px] font-mono tracking-widest uppercase transition-all duration-300"
                >
                  Proposta
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
