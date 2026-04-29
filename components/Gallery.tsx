"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
    alt: "Massage thaï relaxant pour femme dans une ambiance chaleureuse",
  },
  {
    src: "https://images.unsplash.com/photo-1607008829749-c0f284a4975b?auto=format&fit=crop&w=900&q=80",
    alt: "Massage du dos pour homme dans un spa thaï haut de gamme",
  },
  {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
    alt: "Soin de relaxation thaï pour femmes et hommes",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
    alt: "Ambiance hammam et spa thaï avec bougies",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    alt: "Rituel bien-être du visage adapté aux femmes et aux hommes",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    alt: "Soins esthétiques pour toutes et tous dans un spa",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-beige overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-8 sm:mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown tracking-tight mb-3">
            Galerie
          </h2>
          <div className="h-px w-20 bg-gold rounded-full" aria-hidden />
          <p className="text-brown/70 max-w-[55ch] mt-4">
            Un aperçu de notre sanctuaire, avec des soins pensés pour femmes et hommes.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
              className="break-inside-avoid mb-4 sm:mb-6 relative group"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] min-h-[190px] shadow-card hover:shadow-cardHover transition-shadow duration-300">
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
