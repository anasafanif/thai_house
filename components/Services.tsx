"use client";

import { motion } from "framer-motion";

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
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-tight mb-2">
            Our Services
          </h2>
          <div className="h-0.5 w-20 bg-gold-dark/80 rounded-full" aria-hidden />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
          className="text-sage/90 max-w-[55ch] mb-12 -mt-8"
        >
          Six distinct experiences, each designed to restore and renew.
        </motion.p>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.li
              key={service.title}
              variants={item}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="group"
            >
              <div className="p-6 md:p-8 rounded-2xl border border-charcoal/10 bg-cream-warm hover:border-gold/40 hover:border-l-4 hover:border-l-gold-dark hover:shadow-softGold transition-all duration-300 h-full flex flex-col active:scale-[0.98]">
                <span className="text-gold-dark font-medium text-sm mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/75 text-sm md:text-base leading-relaxed flex-1">
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
