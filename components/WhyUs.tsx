"use client";

import { motion } from "framer-motion";
import { ThaiBorderLine } from "@/components/ThaiPatterns";

const POINTS = [
  {
    title: "Moroccan–Thai Fusion",
    text: "We blend the warmth and generosity of Moroccan hospitality with the precision and depth of Thai healing arts.",
  },
  {
    title: "Expert Practitioners",
    text: "Our therapists are trained in traditional Thai techniques and bring years of experience to every session.",
  },
  {
    title: "Sanctuary Setting",
    text: "A calm, luxurious environment designed for complete escape—where every detail supports your wellness.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-cream overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-5"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown tracking-tight mb-3">
              Why Thai House
            </h2>
            <div className="h-px w-20 bg-gold rounded-full mb-4" aria-hidden />
            <p className="text-gold-dark font-medium text-lg mb-2">
              Where two traditions meet
            </p>
            <div className="mb-6 text-gold/60 w-28">
              <ThaiBorderLine className="w-full h-2.5" />
            </div>
            <p className="text-base md:text-lg text-brown/85 leading-relaxed max-w-[55ch]">
              In Morocco, hospitality is an art. In Thailand, massage is a centuries-old science. At Thai House, we honour both: a space where you are welcomed like family and cared for with time-honoured skill.
            </p>
          </motion.div>
          <div className="lg:col-span-7 space-y-8">
            {POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.06 }}
                className="flex gap-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center">
                  <span className="font-serif text-gold font-semibold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-brown mb-2">
                    {point.title}
                  </h3>
                  <p className="text-brown/75 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
