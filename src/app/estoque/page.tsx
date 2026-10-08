"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { FilterBar } from "@/components/sections/filter-bar";
import { ShowroomGrid } from "@/components/sections/showroom-grid";
import { Footer } from "@/components/layout/footer";
import { ConciergeButton } from "@/components/layout/concierge-button";
import { VehicleDetailModal } from "@/components/modals/vehicle-detail-modal";
import { INVENTORY_VEHICLES, Vehicle } from "@/data/inventory";
import { ShieldCheck, Compass, ArrowRight } from "lucide-react";

export default function EstoquePage() {
  const [selectedVehicleForModal, setSelectedVehicleForModal] = useState<Vehicle | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("intro-pending");
      document.documentElement.classList.add("intro-done");
    }
  }, []);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>("TODOS");
  const [selectedBrand, setSelectedBrand] = useState<string>("TODAS AS MARCAS");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Memoized Filter Logic
  const filteredVehicles = useMemo(() => {
    return INVENTORY_VEHICLES.filter((vehicle) => {
      // Category Filter
      if (selectedCategory !== "TODOS") {
        if (selectedCategory === "BLINDADOS" && !vehicle.armored) return false;
        if (selectedCategory === "0 KM" && !vehicle.tag?.includes("0 KM") && vehicle.km !== "0 km") return false;
        if (
          selectedCategory !== "BLINDADOS" &&
          selectedCategory !== "0 KM" &&
          vehicle.category.toLowerCase() !== selectedCategory.toLowerCase()
        ) {
          return false;
        }
      }

      // Brand Filter
      if (selectedBrand !== "TODAS AS MARCAS") {
        if (vehicle.brand.toLowerCase() !== selectedBrand.toLowerCase()) return false;
      }

      // Search Query
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        const matchesBrand = vehicle.brand.toLowerCase().includes(query);
        const matchesModel = vehicle.model.toLowerCase().includes(query);
        const matchesVersion = vehicle.version.toLowerCase().includes(query);
        const matchesYear = vehicle.year.toLowerCase().includes(query);
        if (!matchesBrand && !matchesModel && !matchesVersion && !matchesYear) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedBrand, searchTerm]);

  return (
    <main className="relative min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white transition-colors duration-500">
      {/* Luxury Navigation Bar */}
      <Navbar visible={true} />

      {/* Estoque Editorial Header */}
      <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 bg-neutral-50 dark:bg-neutral-950 border-b border-black/10 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-neutral-500 mb-6">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-black dark:text-white font-semibold">Estoque de Veículos</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-neutral-400 block mb-3">
                Catálogo Oficial &bull; Pronta Entrega
              </span>
              <h1 className="font-display text-4xl sm:text-6xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-none mb-4">
                Estoque de Veículos
              </h1>
              <p className="text-xs sm:text-sm font-mono tracking-wider text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Curadoria minuciosa de supercarros, exóticos e veículos blindados de altíssimo padrão. Cada unidade periciada com laudo cautelar 100% aprovado, revisada e disponível para visitação ou entrega privativa em todo o território nacional.
              </p>
            </div>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-white dark:bg-black/60 border border-black/10 dark:border-white/10 flex flex-col justify-center">
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500 block">
                  Disponíveis
                </span>
                <span className="font-mono text-lg font-bold text-neutral-950 dark:text-white">
                  {INVENTORY_VEHICLES.length} Unidades
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-black/60 border border-black/10 dark:border-white/10 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck size={12} strokeWidth={1.5} className="text-neutral-950 dark:text-white" />
                  <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500">
                    Laudo
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-neutral-950 dark:text-white uppercase">
                  100% Aprovado
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 bg-white dark:bg-black/60 border border-black/10 dark:border-white/10 flex flex-col justify-center">
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500 block">
                  Logística
                </span>
                <span className="font-mono text-xs font-bold text-neutral-950 dark:text-white uppercase">
                  Entrega Nacional
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Engine: Seletores de Categoria & Marcas */}
      <FilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalResults={filteredVehicles.length}
      />

      {/* Showroom Curado da Prime Imports */}
      <ShowroomGrid
        vehicles={filteredVehicles}
        onOpenVehicleDetail={(vehicle) => setSelectedVehicleForModal(vehicle)}
      />

      {/* Personal Sourcing Banner for vehicles not in stock */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <div className="p-8 sm:p-12 border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8 transition-colors">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Compass size={16} strokeWidth={1.5} className="text-neutral-900 dark:text-white" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400">
                Personal Broker & Sourcing
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-neutral-950 dark:text-white tracking-wide mb-2">
              Não encontrou a configuração ideal em estoque?
            </h3>
            <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Realizamos busca ativa nos mercados fechados do Brasil, Europa e Estados Unidos para encontrar ou importar a especificação exata que você deseja.
            </p>
          </div>

          <Link
            href="/#sourcing"
            className="px-6 py-3.5 bg-black text-white dark:bg-white dark:text-black font-semibold text-xs font-mono tracking-[0.2em] uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors whitespace-nowrap flex items-center gap-2 shadow-sm"
          >
            <span>Encomendar Veículo</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Footer Editorial com Dados Oficiais */}
      <Footer />

      {/* Botão Flutuante de Concierge WhatsApp */}
      <ConciergeButton currentVehicleName="Estoque Prime Imports" />

      {/* Modal de Dossiê Técnico do Veículo */}
      <VehicleDetailModal
        vehicle={selectedVehicleForModal}
        onClose={() => setSelectedVehicleForModal(null)}
      />
    </main>
  );
}
