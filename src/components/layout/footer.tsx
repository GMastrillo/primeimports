"use client";

import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="location" className="relative w-full bg-neutral-100 dark:bg-black border-t border-black/10 dark:border-white/10 pt-20 pb-12 overflow-hidden text-neutral-600 dark:text-neutral-400 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-black/10 dark:border-white/10">
          {/* Brand & Concept */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <img
                  src="/logo-primeimports.svg"
                  alt="Prime Imports"
                  className="h-10 w-auto object-contain dark:brightness-0 dark:invert transition-all"
                />
              </div>
              <p className="text-[11px] font-mono tracking-wider text-neutral-500 leading-relaxed mb-6">
                Referência nacional na curadoria e comercialização de supercarros, exóticos e veículos blindados de alto padrão.
              </p>
            </div>

            <div className="text-[10px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500">
              SÃO PAULO · BRASIL
            </div>
          </div>

          {/* Showroom Addresses */}
          <div className="lg:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-950 dark:text-white block mb-4">
              Complexo Showroom
            </span>
            <div className="text-xs font-mono space-y-2 text-neutral-800 dark:text-neutral-300">
              <p>Rua Santa Gertrudes, 406</p>
              <p>Rua Santa Gertrudes, 453</p>
              <p>Rua Santa Gertrudes, 621</p>
              <p className="text-neutral-500 pt-1">Tatuapé / Anália Franco</p>
              <p className="text-neutral-500">São Paulo - SP · CEP 03408-020</p>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-950 dark:text-white block mb-4">
              Atendimento Privativo
            </span>
            <div className="text-xs font-mono space-y-2 text-neutral-800 dark:text-neutral-300">
              <p className="text-neutral-950 dark:text-white font-semibold">(11) 2364-3828</p>
              <p>contato@primeimportssp.com</p>
              <div className="pt-2 text-neutral-500 space-y-1">
                <p>Segunda a Sexta: 08h30 às 18h00</p>
                <p>Sábados: 08h30 às 15h00</p>
                <p>Domingos: Somente visita agendada</p>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-950 dark:text-white block mb-4">
              Canais Oficiais
            </span>
            <div className="flex flex-col space-y-3 text-xs font-mono">
              <a
                href="https://www.instagram.com/primeimports/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Instagram</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://www.tiktok.com/@primeimportssp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between"
              >
                <span>TikTok</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://www.youtube.com/@PRIMEIMPORTS_SP"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between"
              >
                <span>YouTube</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500 dark:text-neutral-600">
          <span>© {new Date().getFullYear()} Prime Imports SP. Todos os direitos reservados.</span>
          <span className="tracking-widest uppercase">Padrão Editorial High-End · Dev-LP</span>
        </div>
      </div>
    </footer>
  );
}
