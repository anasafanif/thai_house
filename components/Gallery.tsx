"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/gallery-1.webp", alt: "Thai massage with warm candle lighting" },
  { src: "/gallery-2.webp", alt: "Luxury Thai spa room" },
  { src: "/gallery-3.webp", alt: "Spa oils, stones and folded towels" },
  { src: "/gallery-4.webp", alt: "Relaxing massage treatment scene" },
  { src: "/gallery-5.webp", alt: "Luxury wellness still life with towels and oils" },
  { src: "/gallery-6.webp", alt: "Spa ambiance with candles and warm decor" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-beige overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown tracking-tight mb-3">
            Gallery
          </h2>
          <div className="h-px w-20 bg-gold rounded-full" aria-hidden />
          <p className="text-brown/70 max-w-[55ch] mt-4">
            A glimpse into our sanctuary.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
              className="break-inside-avoid mb-6 relative group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] min-h-[200px] shadow-card hover:shadow-cardHover transition-shadow duration-300">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
