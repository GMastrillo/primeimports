"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { SHOWCASE_VEHICLES, Vehicle } from "@/data/inventory";

interface HeroHybridProps {
  onOpenVehicleDetail: (vehicle: Vehicle) => void;
  onVehicleChange?: (vehicle: Vehicle) => void;
  audioActive?: boolean;
}

export function HeroHybrid({ onOpenVehicleDetail, onVehicleChange }: HeroHybridProps) {
  // Intro stages: "video" | "brand_reveal" | "done"
  const [introStage, setIntroStage] = useState<"video" | "brand_reveal" | "done">("video");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVehicle = SHOWCASE_VEHICLES[currentIndex];

  // Notify parent of vehicle change for concierge message contextualization
  useEffect(() => {
    if (onVehicleChange) {
      onVehicleChange(currentVehicle);
    }
  }, [currentIndex, currentVehicle, onVehicleChange]);

  // Check if intro has already been shown in this browser session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const alreadyShown = sessionStorage.getItem("prime_intro_shown");
      if (alreadyShown === "true") {
        setIntroStage("done");
        document.documentElement.classList.remove("intro-pending");
        document.documentElement.classList.add("intro-done");
      } else {
        document.documentElement.classList.add("intro-pending");
        document.documentElement.classList.remove("intro-done");
      }
    }
  }, []);

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
      videoRef.current.play().catch(() => {
        // Fallback for browser autoplay policies
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
    }
  };

  const handleVideoEnded = () => {
    setIntroStage("brand_reveal");
  };

  const handleVideoError = () => {
    setIntroStage("brand_reveal");
  };

  const finishIntro = () => {
    setIntroStage("done");
    if (typeof window !== "undefined") {
      sessionStorage.setItem("prime_intro_shown", "true");
      document.documentElement.classList.remove("intro-pending");
      document.documentElement.classList.add("intro-done");
    }
  };

  // When brand_reveal stage is reached, hold the screen for ~2.8s then smoothly transition to main showcase
  useEffect(() => {
    if (introStage === "brand_reveal") {
      const timer = setTimeout(() => {
        finishIntro();
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [introStage]);

  // Showcase slide automatic progress timer (6 seconds per slide)
  useEffect(() => {
    if (introStage !== "done" || isPaused) return;

    const interval = 60;
    const duration = 6000;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % SHOWCASE_VEHICLES.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [introStage, isPaused, currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SHOWCASE_VEHICLES.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_VEHICLES.length);
    setProgress(0);
  };

  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-black transition-colors duration-500 overflow-hidden flex flex-col justify-between pt-24 pb-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0 intro-hide transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-100 dark:from-neutral-900/30 dark:via-black dark:to-black opacity-90" />
        {/* Avantgarde-style Brand Emblem Watermark in Background */}
        {currentVehicle.watermarkLogo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVehicle.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] opacity-[0.16] dark:opacity-[0.09] dark:brightness-0 dark:invert transition-all"
              >
                <Image
                  src={currentVehicle.watermarkLogo}
                  alt={`${currentVehicle.brand} Emblem`}
                  fill
                  priority
                  sizes="(max-width: 768px) 340px, (max-width: 1200px) 500px, 650px"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* INTRO SEQUENTIAL OVERLAY (Plays once per session) */}
      <AnimatePresence>
        {introStage !== "done" && (
          <motion.div
            id="intro-overlay-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          >
            {/* STAGE 1: INTRO VIDEO (/introprime.mp4) */}
            {introStage === "video" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                <video
                  ref={videoRef}
                  src="/introprime.mp4"
                  playsInline
                  autoPlay
                  onLoadedData={handleVideoLoaded}
                  onEnded={handleVideoEnded}
                  onError={handleVideoError}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none" />
              </motion.div>
            )}

            {/* STAGE 2: BRAND REVEAL SCREEN (Exact visual from user image) */}
            {introStage === "brand_reveal" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 text-center px-6 max-w-4xl"
              >
                <span className="text-xs font-mono tracking-[0.4em] uppercase text-neutral-400 mb-3 block">
                  SÃO PAULO · BRASIL
                </span>
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-[0.16em] uppercase mb-4">
                  PRIME IMPORTS
                </h1>
                <p className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-neutral-400">
                  A COLEÇÃO DEFINITIVA DE SUPERCARROS
                </p>
              </motion.div>
            )}

            {/* [ PULAR INTRO ] BUTTON */}
            <button
              onClick={finishIntro}
              className="absolute bottom-8 right-8 z-20 px-3.5 py-1.5 border border-white/20 bg-black/60 backdrop-blur-md text-white/80 hover:text-white text-[10px] font-mono tracking-[0.3em] uppercase transition-all hover:border-white/60"
            >
              [ PULAR INTRO ]
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SHOWCASE INTERATIVO ESTILO AVANTGARDE */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col justify-between my-auto intro-hide transition-opacity duration-700"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Center Stage: Split between Car Visual and Technical Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 sm:py-10">
          {/* Left Column: Brand, Title, Slogan and Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVehicle.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                {/* Brand */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-neutral-400">
                    {currentVehicle.brand}
                  </span>
                  <div className="h-[1px] w-8 bg-neutral-300 dark:bg-neutral-700" />
                </div>

                {/* Model Title */}
                <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-none mb-3">
                  {currentVehicle.model}
                </h2>

                {/* Slogan */}
                <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-neutral-600 dark:text-neutral-400 uppercase mb-6">
                  {currentVehicle.slogan}
                </p>

                {/* Telemetry Grid (Ano, Km, Potência, Valor) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 p-5 bg-neutral-100/90 dark:bg-neutral-950/70 border border-black/10 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
                      Ano
                    </span>
                    <span className="text-sm font-bold text-neutral-900 dark:text-white tracking-wider mt-0.5">
                      {currentVehicle.year}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
                      Quilometragem
                    </span>
                    <span className="text-sm font-bold text-neutral-900 dark:text-white tracking-wider mt-0.5">
                      {currentVehicle.km}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
                      Potência
                    </span>
                    <span className="text-sm font-bold text-neutral-900 dark:text-white tracking-wider mt-0.5">
                      {currentVehicle.power}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
                      Valor
                    </span>
                    <span className="text-base font-black text-neutral-950 dark:text-white tracking-wider mt-0.5">
                      {currentVehicle.price}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenVehicleDetail(currentVehicle)}
                    className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-semibold text-xs tracking-[0.25em] uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center gap-2 group shadow-md"
                  >
                    <span>Conhecer Veículo</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>

                  <a
                    href={`https://wa.me/551123643828?text=${encodeURIComponent(
                      `Olá! Gostaria de negociar a compra da ${currentVehicle.brand} ${currentVehicle.model} (${currentVehicle.year}) anunciada na Prime Imports.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white text-neutral-900 dark:text-white font-mono text-xs tracking-[0.2em] uppercase transition-colors"
                  >
                    Negociar com Concierge
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Supercar Photography */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[320px] sm:min-h-[460px] order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVehicle.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-[320px] sm:h-[460px] flex items-center justify-center"
              >
                <div className="relative w-full h-full max-w-[680px]">
                  <Image
                    src={currentVehicle.image}
                    alt={`${currentVehicle.brand} ${currentVehicle.model}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 680px"
                    className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
                  />
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Navigation: Avantgarde Linear Progress Bars & Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-black/10 dark:border-white/10">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {SHOWCASE_VEHICLES.map((vehicle, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={vehicle.id}
                  onClick={() => goToSlide(idx)}
                  className="group flex flex-col gap-1.5 flex-1 sm:w-44 text-left py-1"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    <span>0{idx + 1}</span>
                    <span className="uppercase">{vehicle.brand}</span>
                  </div>

                  <div className="w-full h-[2px] bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
                    <div
                      className="h-full bg-black dark:bg-white transition-all duration-75"
                      style={{
                        width: isActive ? `${progress}%` : idx < currentIndex ? "100%" : "0%",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 border border-black/15 dark:border-white/15 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors"
              aria-label="Veículo Anterior"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 border border-black/15 dark:border-white/15 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors"
              aria-label="Próximo Veículo"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
