"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "https://picsum.photos/seed/thai-gallery-1/600/800", alt: "Spa interior", w: 600, h: 800 },
  { src: "https://picsum.photos/seed/thai-gallery-2/600/500", alt: "Treatment room", w: 600, h: 500 },
  { src: "https://picsum.photos/seed/thai-gallery-3/600/700", alt: "Relaxation area", w: 600, h: 700 },
  { src: "https://picsum.photos/seed/thai-gallery-4/600/400", alt: "Detail", w: 600, h: 400 },
  { src: "https://picsum.photos/seed/thai-gallery-5/600/600", alt: "Ambiance", w: 600, h: 600 },
  { src: "https://picsum.photos/seed/thai-gallery-6/600/900", alt: "Wellness space", w: 600, h: 900 },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
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
            Gallery
          </h2>
          <div className="h-0.5 w-20 bg-gold/70 rounded-full mb-4" aria-hidden />
          <p className="text-sage/90 max-w-[55ch]">
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
              className="break-inside-avoid mb-6"
            >
              <div className="relative rounded-2xl overflow-hidden bg-charcoal/5 aspect-[3/4] min-h-[200px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
