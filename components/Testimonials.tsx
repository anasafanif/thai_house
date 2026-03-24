"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote:
      "La meilleure expérience de massage que j’ai vécue au Maroc. La fusion des techniques thaïes et le calme des lieux m’ont complètement régénérée.",
    name: "Laila Benali",
    role: "Casablanca",
  },
  {
    quote:
      "Je viens chaque mois. Le soin aux compresses herbales est extraordinaire — authentique et profondément relaxant.",
    name: "Omar Tazi",
    role: "Rabat",
  },
  {
    quote:
      "Un véritable sanctuaire. L’équipe est discrète et professionnelle, et l’ambiance est exactement celle que l’on attend d’un spa haut de gamme.",
    name: "Yasmine Idrissi",
    role: "Marrakech",
  },
  {
    quote:
      "Dès le premier pas à l’intérieur, j’ai senti que j’étais quelque part d’exceptionnel. La fusion signature est mon soin préféré.",
    name: "Karim Amrani",
    role: "Fès",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-beige overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown tracking-tight mb-3">
            Témoignages
          </h2>
          <div className="h-px w-20 bg-gold rounded-full" aria-hidden />
          <p className="text-brown/70 max-w-[55ch] mt-4">
            Ce que nos clients disent de nous.
          </p>
        </motion.div>
        <div className="relative min-h-[280px] md:min-h-[260px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="absolute inset-0"
            >
              <blockquote className="bg-white/90 border border-gold/25 rounded-2xl p-8 md:p-10 shadow-card">
                <p className="font-serif text-xl md:text-2xl text-brown leading-relaxed mb-8">
                  &ldquo;{TESTIMONIALS[index].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 overflow-hidden shrink-0">
                    <Image
                      src={`https://picsum.photos/seed/${TESTIMONIALS[index].name.replace(/\s/g, "")}/96/96`}
                      alt=""
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <cite className="font-medium text-brown not-italic">
                      {TESTIMONIALS[index].name}
                    </cite>
                    <p className="text-sm text-brown/65">{TESTIMONIALS[index].role}</p>
                  </div>
                </div>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-between mt-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Témoignage précédent"
            className="w-12 h-12 rounded-full border border-brown/20 flex items-center justify-center text-brown hover:border-gold hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-[0.98]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Aller au témoignage ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  i === index ? "bg-gold scale-125" : "bg-brown/25 hover:bg-brown/40 hover:scale-110"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Témoignage suivant"
            className="w-12 h-12 rounded-full border border-brown/20 flex items-center justify-center text-brown hover:border-gold hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-[0.98]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
