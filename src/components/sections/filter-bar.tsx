"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  totalResults: number;
}

const CATEGORIES = [
  "TODOS",
  "SUPERESPORTIVOS",
  "SUVS DE LUXO",
  "BLINDADOS",
  "0 KM",
];

const BRANDS = [
  "TODAS AS MARCAS",
  "FERRARI",
  "PORSCHE",
  "MCLAREN",
  "AUDI",
  "MERCEDES-BENZ",
  "CADILLAC",
  "GMC",
  "CHEVROLET",
];

export function FilterBar({
  selectedCategory,
  onSelectCategory,
  selectedBrand,
  onSelectBrand,
  searchTerm,
  onSearchChange,
  totalResults,
}: FilterBarProps) {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 -mt-6">
      <div className="bg-white/95 dark:bg-neutral-950/90 backdrop-blur-xl border border-black/10 dark:border-white/10 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-colors">
        {/* Top: Category Tabs */}
        <div className="flex items-center justify-between gap-4 pb-5 border-b border-black/10 dark:border-white/10 flex-wrap">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((category) => {
              const isActive =
                category === "TODOS"
                  ? selectedCategory === "TODOS"
                  : selectedCategory.toLowerCase() === category.toLowerCase();

              return (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={`px-4 py-2 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black font-bold shadow-sm"
                      : "bg-neutral-100 dark:bg-white/[0.03] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-white/[0.08] border border-black/5 dark:border-white/5"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono tracking-[0.25em] text-neutral-500 dark:text-neutral-400 uppercase">
            {totalResults} {totalResults === 1 ? "Veículo no Acervo" : "Veículos no Acervo"}
          </div>
        </div>

        {/* Bottom: Search Input & Brand Selector */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-5 items-center">
          {/* Search Input */}
          <div className="md:col-span-7 relative">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar por modelo, motor ou especificação..."
              className="w-full bg-neutral-100 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-500 pl-11 pr-4 py-3 text-xs tracking-wider font-mono focus:outline-none focus:border-black/40 dark:focus:border-white/40 transition-colors"
            />
          </div>

          {/* Brand Selector */}
          <div className="md:col-span-5 relative">
            <div className="relative">
              <select
                value={selectedBrand}
                onChange={(e) => onSelectBrand(e.target.value)}
                className="w-full bg-neutral-100 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white pl-4 pr-10 py-3 text-xs tracking-[0.2em] font-mono uppercase appearance-none focus:outline-none focus:border-black/40 dark:focus:border-white/40 cursor-pointer"
              >
                {BRANDS.map((brand) => (
                  <option key={brand} value={brand} className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
                    {brand}
                  </option>
                ))}
              </select>
              <SlidersHorizontal
                size={14}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
