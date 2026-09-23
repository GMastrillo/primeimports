"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";

interface NavbarProps {
  visible?: boolean;
}

export function Navbar({ visible = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-black/85 backdrop-blur-xl border-b border-black/10 dark:border-white/10 py-3 sm:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-white/90 via-white/40 to-transparent dark:from-black/80 dark:via-black/30 dark:to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/logo-primeimports.svg"
            alt="Prime Imports"
            className="h-9 sm:h-12 w-auto object-contain transition-all duration-300 dark:brightness-0 dark:invert"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#showroom"
            className="text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors font-medium py-1"
          >
            Showroom
          </a>
          <a
            href="#experience"
            className="text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors font-medium py-1"
          >
            Experience
          </a>
          <a
            href="#sourcing"
            className="text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors font-medium py-1"
          >
            Personal Sourcing
          </a>
          <a
            href="#location"
            className="text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors font-medium py-1"
          >
            Showroom Físico
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5 rounded-full transition-colors border border-black/10 dark:border-white/10"
            title={theme === "light" ? "Alternar para Modo Dark" : "Alternar para Modo Light"}
            aria-label="Alternar Tema"
          >
            {theme === "light" ? (
              <Moon size={16} strokeWidth={1.5} />
            ) : (
              <Sun size={16} strokeWidth={1.5} />
            )}
          </button>

          {/* Concierge Button */}
          <a
            href="https://wa.me/551123643828?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20exclusivo%20pelo%20Concierge%20Prime%20Imports."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all text-[11px] font-semibold tracking-[0.2em] uppercase rounded-none border border-black dark:border-white"
          >
            <span>Concierge VIP</span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10"
            aria-label="Alternar Tema"
          >
            {theme === "light" ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          <a
            href="#showroom"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.25em] text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            Showroom
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.25em] text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            Experience
          </a>
          <a
            href="#sourcing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.25em] text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            Personal Sourcing
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.25em] text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            Showroom Físico
          </a>
          <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
            <a
              href="https://wa.me/551123643828?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20exclusivo%20pelo%20Concierge%20Prime%20Imports."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black text-xs font-semibold tracking-widest uppercase"
            >
              <span>Concierge VIP</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
