"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "https://images.pexels.com/photos/6629548/pexels-photo-6629548.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Spa massage – therapist working on client" },
  { src: "https://images.pexels.com/photos/6629563/pexels-photo-6629563.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Massage therapy session" },
  { src: "https://images.pexels.com/photos/6629557/pexels-photo-6629557.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Relaxation and wellness treatment" },
  { src: "https://images.pexels.com/photos/6629549/pexels-photo-6629549.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Luxury spa interior" },
  { src: "https://images.pexels.com/photos/6629611/pexels-photo-6629611.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Calm treatment room" },
  { src: "https://images.pexels.com/photos/6629550/pexels-photo-6629550.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Wellness and massage ambiance" },
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
