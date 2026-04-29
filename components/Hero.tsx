"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThaiBorderLine } from "@/components/ThaiPatterns";
import ShimmerButton from "@/components/ShimmerButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] sm:min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-brown"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute top-16 bottom-0 right-0 w-full md:top-20 lg:inset-y-0 lg:w-[62%]">
          <Image
            src="/thai-house-hero.png"
            alt="Massage thaï traditionnel pour hommes et femmes dans une ambiance chaleureuse"
            fill
            priority
            className="object-cover object-[52%_78%] min-[480px]:object-[52%_74%] lg:object-[54%_45%]"
            sizes="(max-width: 1024px) 100vw, 62vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brown/30 via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brown/88 via-brown/38 to-transparent lg:hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_38%,rgba(246,241,233,0.98)_0%,rgba(246,241,233,0.96)_18%,rgba(246,241,233,0.88)_30%,rgba(246,241,233,0.64)_42%,rgba(246,241,233,0.18)_56%,rgba(246,241,233,0)_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,241,233,0.95)_0%,rgba(246,241,233,0.88)_22%,rgba(246,241,233,0.42)_40%,rgba(246,241,233,0)_62%)]" />
        <div className="absolute inset-y-0 left-0 w-[38%] opacity-[0.18] bg-[radial-gradient(circle_at_35%_30%,rgba(198,165,92,0.22),transparent_58%)]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[100dvh]">
          <div className="lg:col-span-6 pt-24 sm:pt-28 pb-14 sm:pb-16 lg:pt-32 lg:pb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="font-serif text-[clamp(2.3rem,5vw,4rem)] text-brown leading-none mb-4"
            >
              Thai House
            </motion.p>
            <div className="flex items-center gap-4 mb-6 text-gold/80">
              <span className="h-px w-14 bg-gold/60" />
              <ThaiBorderLine className="w-20 h-2.5" />
              <span className="h-px w-14 bg-gold/60" />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              className="font-serif text-[clamp(2.2rem,10vw,5.4rem)] leading-[0.95] tracking-[-0.03em] text-brown max-w-[18ch] mb-5 sm:mb-6"
            >
              Massage thaï authentique &amp; spa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="text-sm sm:text-base md:text-xl text-brown/80 max-w-[34ch] sm:max-w-[28ch] leading-relaxed mb-8 sm:mb-10"
            >
              Découvrez le bien-être thaï traditionnel pour femmes et hommes, prodigué par des thérapeutes qualifiés dans un spa de luxe apaisant à Kénitra.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4"
            >
              <ShimmerButton href="#services" className="w-full sm:w-auto text-center !px-6 sm:!px-9 !py-3.5 sm:!py-4 text-sm sm:text-base !bg-transparent !border !border-brown/55 !text-brown shadow-none hover:!bg-cream/20">
                Découvrir nos soins
              </ShimmerButton>
              <Link
                href="#services"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-brown/55 bg-transparent px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-brown transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/20"
              >
                Voir les soins
              </Link>
            </motion.div>
          </div>
          <div className="hidden lg:block lg:col-span-6" aria-hidden />
        </div>
      </div>
    </section>
  );
}
