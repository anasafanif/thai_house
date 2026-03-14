"use client";

import { motion } from "framer-motion";
import { LotusMotif, LotusMotifSmall, ThaiPatternRepeat, ThaiDiagonalPattern, ThaiBorderFrame } from "@/components/ThaiPatterns";
import { FloatingLogo } from "@/components/FloatingLogo";
import ShimmerButton from "@/components/ShimmerButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden
      >
        {/* Base: warmer, less bright */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-dark via-cream to-cream-warm" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/[0.03] to-transparent" />
        {/* Repeating Thai lotus pattern across full hero */}
        <ThaiPatternRepeat id="hero-pattern" opacity="0.09" className="text-gold-dark" />
        {/* Subtle diagonal lines for depth */}
        <ThaiDiagonalPattern id="hero-diagonal" opacity="0.03" className="text-gold-dark" />
        {/* Large central lotus */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">
          <LotusMotif className="w-[min(60vw,500px)] h-[min(60vw,500px)] text-gold-dark" />
        </div>
        {/* Secondary lotus silhouette bottom-right */}
        <svg
          className="absolute bottom-0 right-0 w-[80vw] max-w-2xl h-[70vh] max-h-[600px] text-gold/[0.12]"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden
        >
          <path d="M100 20c-20 0-40 10-55 30-15 20-25 45-25 70 0 25 10 50 25 70 15 20 35 30 55 30s40-10 55-30c15-20 25-45 25-70 0-25-10-50-25-70C140 30 120 20 100 20zm0 30c12 0 22 6 32 18 10 12 16 28 16 42 0 14-6 30-16 42-10 12-20 18-32 18s-22-6-32-18c-10-12-16-28-16-42 0-14 6-30 16-42 10-12 20-18 32-18z" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="mb-8"
          >
            <FloatingLogo />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-charcoal leading-none mb-4"
          >
            Thai House
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="font-serif text-2xl md:text-3xl text-gold-dark mb-6"
          >
            Massage & Spa
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
            className="text-base md:text-lg text-charcoal/80 max-w-[45ch] mb-10"
          >
            Where Moroccan warmth meets Thai tradition. A sanctuary of wellness in the heart of Morocco.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          >
            <ShimmerButton href="#services">
              Discover Our Treatments
            </ShimmerButton>
          </motion.div>
        </div>
        <div className="lg:col-span-5 hidden lg:block" aria-hidden>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 24, delay: 0.3 }}
            className="aspect-[4/5] rounded-2xl relative"
          >
            <ThaiBorderFrame className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cream-dark to-gold/20 shadow-softGold" />
                <ThaiPatternRepeat id="hero-panel-pattern" opacity="0.12" className="rounded-2xl text-gold-dark" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <LotusMotif
                    className="w-[65%] h-[65%] text-gold-dark"
                    opacity="0.28"
                  />
                </div>
                <div className="absolute top-6 left-6">
                  <LotusMotifSmall className="w-14 h-14 text-gold-dark" opacity="0.35" />
                </div>
                <div className="absolute bottom-6 right-6">
                  <LotusMotifSmall className="w-16 h-16 text-gold-dark" opacity="0.25" />
                </div>
              </div>
            </ThaiBorderFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
