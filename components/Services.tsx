"use client";

import { motion } from "framer-motion";
import { LotusMotifSmall } from "@/components/ThaiPatterns";

const SERVICES = [
  {
    title: "Massage thaï traditionnel",
    description:
      "Techniques ancestrales mêlant acupression et étirements assistés pour libérer les tensions et relancer la circulation de l’énergie.",
  },
  {
    title: "Massage à l’aromathérapie",
    description:
      "Huiles essentielles sur mesure associées à des mouvements fluides pour apaiser l’esprit et le corps.",
  },
  {
    title: "Thérapie aux pierres chaudes",
    description:
      "Des pierres de basalte chauffées dissolvent les tensions profondes tout en favorisant la circulation et une relaxation intense.",
  },
  {
    title: "Compresses herbales thaï",
    description:
      "Compresses tièdes garnies d’herbes thaïlandaises pour détendre les muscles et stimuler les sens.",
  },
  {
    title: "Tissus profonds",
    description:
      "Pression ciblée sur les zones de tension chronique pour un soulagement durable et une meilleure mobilité.",
  },
  {
    title: "Fusion signature",
    description:
      "Notre combinaison signature des techniques thaïlandaises et marocaines en un voyage prolongé.",
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
            Nos services
          </h2>
          <div className="h-px w-20 bg-gold rounded-full" aria-hidden />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
            className="text-brown/70 max-w-[55ch] mt-6"
          >
            Six expériences distinctes, chacune pensée pour vous restaurer et vous régénérer.
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
