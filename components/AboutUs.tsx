"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ThaiPatternRepeat, ThaiBorderFrame, ThaiBorderLine } from "@/components/ThaiPatterns";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-cream-dark overflow-hidden"
    >
      <ThaiPatternRepeat id="about-pattern" opacity="0.07" className="text-gold-dark" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="text-gold/60 w-40 h-4">
            <ThaiBorderLine className="w-full h-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="md:col-span-5 order-2 md:order-1"
          >
            <ThaiBorderFrame className="aspect-[4/5] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gold/10">
              <Image
                src="https://picsum.photos/seed/thai-house-about/800/1000"
                alt="Thai House Massage & Spa interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              </div>
            </ThaiBorderFrame>
          </motion.div>
          <div className="md:col-span-7 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="mb-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-tight mb-2">
                About Us
              </h2>
              <div className="h-0.5 w-20 bg-gold/70 rounded-full" aria-hidden />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
              className="text-base md:text-lg text-charcoal/85 leading-relaxed max-w-[65ch] mb-6"
            >
              Thai House Massage & Spa brings the ancient art of Thai wellness to Morocco. Our space is a bridge between the serene discipline of Thai massage and the generous hospitality of Moroccan culture.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              className="text-base md:text-lg text-charcoal/85 leading-relaxed max-w-[65ch]"
            >
              Every treatment is delivered in a calm, luxurious setting designed to restore balance. We invite you to step out of the everyday and into a world where tradition and care meet.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
