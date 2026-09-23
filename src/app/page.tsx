"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroHybrid } from "@/components/sections/hero-hybrid";
import { FilterBar } from "@/components/sections/filter-bar";
import { ShowroomGrid } from "@/components/sections/showroom-grid";
import { PrivateLounge } from "@/components/sections/private-lounge";
import { PersonalSourcing } from "@/components/sections/personal-sourcing";
import { Footer } from "@/components/layout/footer";
import { ConciergeButton } from "@/components/layout/concierge-button";
import { VehicleDetailModal } from "@/components/modals/vehicle-detail-modal";
import { INVENTORY_VEHICLES, SHOWCASE_VEHICLES, Vehicle } from "@/data/inventory";

export default function HomePage() {
  const [selectedVehicleForModal, setSelectedVehicleForModal] = useState<Vehicle | null>(null);
  const [currentVehicleForConcierge, setCurrentVehicleForConcierge] = useState<Vehicle>(SHOWCASE_VEHICLES[0]);
  const [audioActive, setAudioActive] = useState<boolean>(false);

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
    <main className="relative min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Dynamic Luxury Navigation Bar */}
      <div className="intro-hide transition-opacity duration-700">
        <Navbar visible={true} />
      </div>

      {/* Hero Showcase Híbrido: Cold Open Cinemático + Showcase Avantgarde Style */}
      <HeroHybrid
        onOpenVehicleDetail={(vehicle) => setSelectedVehicleForModal(vehicle)}
        onVehicleChange={(vehicle) => setCurrentVehicleForConcierge(vehicle)}
        audioActive={audioActive}
      />

      {/* Showroom Content Sections */}
      <div className="intro-hide transition-opacity duration-700">
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

        {/* The Private Lounge / Experiência Prime Imports */}
        <PrivateLounge />

        {/* Personal Sourcing / Encomenda de Veículos Exclusivos */}
        <PersonalSourcing />

        {/* Footer Editorial com Dados Oficiais */}
        <Footer />

        {/* Botão Flutuante de Concierge WhatsApp */}
        <ConciergeButton currentVehicleName={currentVehicleForConcierge?.model} />
      </div>

      {/* Modal de Dossiê Técnico do Veículo */}
      <VehicleDetailModal
        vehicle={selectedVehicleForModal}
        onClose={() => setSelectedVehicleForModal(null)}
      />
    </main>
  );
}
