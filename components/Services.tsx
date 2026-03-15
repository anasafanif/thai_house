"use client";

import { motion } from "framer-motion";
import { LotusMotifSmall } from "@/components/ThaiPatterns";

const SERVICES = [
  {
    title: "Traditional Thai Massage",
    description:
      "Ancient techniques combining acupressure and assisted stretching to release tension and restore energy flow.",
  },
  {
    title: "Aromatherapy Massage",
    description:
      "Custom-blended essential oils paired with flowing strokes to soothe the mind and body.",
  },
  {
    title: "Hot Stone Therapy",
    description:
      "Heated basalt stones melt deep tension while promoting circulation and deep relaxation.",
  },
  {
    title: "Thai Herbal Compress",
    description:
      "Warm compresses filled with Thai herbs to ease muscle stiffness and invigorate the senses.",
  },
  {
    title: "Deep Tissue",
    description:
      "Focused pressure on chronic tension areas for lasting relief and improved mobility.",
  },
  {
    title: "Signature Fusion",
    description:
      "Our signature blend of Thai and Moroccan techniques in one extended journey.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-cream overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown tracking-tight mb-3">
            Our Services
          </h2>
          <div className="h-px w-20 bg-gold rounded-full" aria-hidden />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
            className="text-brown/70 max-w-[55ch] mt-6"
          >
            Six distinct experiences, each designed to restore and renew.
          </motion.p>
        </motion.div>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.li
              key={service.title}
              variants={item}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="group"
            >
              <div className="relative p-6 md:p-8 rounded-2xl border border-brown/8 bg-white/80 shadow-card hover:shadow-cardHover hover:-translate-y-1 hover:border-gold/30 transition-all duration-300 h-full flex flex-col active:scale-[0.99]">
                <div className="absolute top-4 right-4 text-gold/40">
                  <LotusMotifSmall className="w-10 h-10" opacity="0.5" />
                </div>
                <span className="text-gold font-medium text-sm mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-brown mb-3">
                  {service.title}
                </h3>
                <p className="text-brown/70 text-sm md:text-base leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
