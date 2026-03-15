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
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-brown"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <Image
            src="/hero-massage-crop.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
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
          <div className="lg:col-span-6 pt-28 pb-16 lg:pt-32 lg:pb-20">
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
              className="font-serif text-[clamp(3rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.03em] text-brown max-w-[8.5ch] mb-6"
            >
              Authentic Thai Massage &amp; Spa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="text-base md:text-xl text-brown/80 max-w-[28ch] leading-relaxed mb-10"
            >
              Experience traditional Thai wellness performed by skilled Thai therapists in a calm luxury spa in Kenitra.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <ShimmerButton href="#book-now" className="!px-9 !py-4 text-base">
                Book Your Experience
              </ShimmerButton>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-gold/60 bg-cream/65 px-9 py-4 text-base font-medium text-brown shadow-[0_10px_24px_-14px_rgba(31,26,23,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/80 hover:shadow-[0_14px_30px_-12px_rgba(31,26,23,0.35)]"
              >
                View Treatments
              </Link>
            </motion.div>
          </div>
          <div className="hidden lg:block lg:col-span-6" aria-hidden />
        </div>
      </div>
    </section>
  );
}
