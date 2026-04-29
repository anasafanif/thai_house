"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ServiceItem = {
  title: string;
  price: string;
  techniques?: string;
  avantages?: string;
  details?: string[];
};

type ServiceCategory = {
  title: string;
  image: string;
  items: ServiceItem[];
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Massage",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        title: "Massage d'aromathérapie relaxant",
        price: "60min/350dh - 90min/450dh - 120min/650dh",
        techniques: "Pétrir les différentes parties du corps en utilisant l'huile de massage.",
        avantages:
          "Réduit les douleurs, améliore la circulation du sang, réduit le stress et l'anxiété.",
      },
      {
        title: "Asian Massage",
        price: "60min/350dh - 90min/450dh",
        techniques:
          "Massage complet du corps avec techniques de massage thaïlandais et aromathérapie, adapté à la régénération du flux d'énergie.",
        avantages: "Anti-stress, améliore la flexibilité, améliore le système immunitaire.",
      },
      {
        title: "Tension Massage",
        price: "30min/200dh - 60min/350dh",
        techniques:
          "Massage à huile dédié aux personnes qui souffrent des douleurs dans le cou, les épaules et le dos.",
        avantages: "Soulage les muscles du cou, du dos et des épaules.",
      },
      {
        title: "Thai massage",
        price: "60min/350dh - 90min/450dh",
        techniques:
          "Massage traditionnel utilisant la technique de pression rythmique sur les lignes d'énergie du corps.",
        avantages: "Améliore la flexibilité du corps, réduit les douleurs, booste l'énergie.",
      },
      {
        title: "Medical Massage",
        price: "60min/400dh - 90min/550dh",
        techniques:
          "Massage avec les vibrations créées par des percussions soigneusement dosées.",
        avantages: "Traitement inspiré de la médecine traditionnelle thaïlandaise.",
      },
      {
        title: "Aux pochons d'herbes",
        price: "60min/400dh - 90min/550dh",
        techniques:
          "Application d'un pochon chauffé contenant des plantes aromatiques avec des mouvements de lissage et de pression.",
        avantages: "Relaxation profonde, soulage le stress et la fatigue.",
      },
      {
        title: "Aux pierres chaudes",
        price: "60min/400dh - 90min/550dh",
        techniques:
          "Thérapie de massage utilisant des pierres lisses et chauffées.",
        avantages: "Décontracte les muscles et réduit les tensions.",
      },
      {
        title: "Tête - Nuque - épaules",
        price: "30min/200dh",
        techniques: "Massage tête, nuque et épaules.",
        avantages: "Anti-stress, réduit les douleurs et la fatigue.",
      },
      {
        title: "Réflexologie plantaire",
        price: "30min/200dh - 1h/350dh",
        techniques:
          "Pression sur la plante des pieds pour ouvrir les lignes d'énergie du corps.",
        avantages: "Libère la tension et le stress depuis des points spécifiques du pied.",
      },
      {
        title: "Guasa Massage",
        price: "60min/400dh - 90min/550dh",
        techniques: "Technique de stimulation de la circulation par grattage ciblé.",
        avantages: "Favorise la relaxation et améliore la circulation sanguine.",
      },
    ],
  },
  {
    title: "Hammam",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        title: "Thai hammam",
        price: "1h/250dh",
        details: ["Sauna", "Gommage pour le corps", "Douche", "Crème pour le corps"],
      },
    ],
  },
  {
    title: "Packs",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        title: "Hammam plus massage",
        price: "Formules",
        details: [
          "30min hammam + 30min massage - 400dh",
          "1h hammam + 1h massage - 550dh",
          "1h hammam + 1h30 massage - 650dh",
        ],
      },
    ],
  },
  {
    title: "Soins",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        title: "Manicure",
        price: "100dh",
      },
      {
        title: "Pédicure",
        price: "100dh",
      },
      {
        title: "Manicure + pédicure",
        price: "150dh",
      },
      {
        title: "Épilation",
        price: "Sur consultation",
        details: [
          "Sourcils",
          "Lèvre",
          "Visage",
          "Aisselles",
          "Bras",
          "Jambes",
          "Maillot",
          "Dos",
          "Torse",
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-cream overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-12 sm:mb-16"
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
            Découvrez nos prestations pour toutes et tous, femmes et hommes, organisées par catégories avec leurs prix.
          </motion.p>
        </motion.div>
        <div className="space-y-10 sm:space-y-14">
          {SERVICE_CATEGORIES.map((category, categoryIndex) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: categoryIndex * 0.04 }}
              className="rounded-2xl sm:rounded-3xl border border-brown/10 bg-white/70 shadow-card overflow-hidden"
            >
              <div className="relative h-36 sm:h-56">
                <Image
                  src={category.image}
                  alt={`${category.title} - soins pour femmes et hommes`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brown/75 via-brown/45 to-brown/20" />
                <h3 className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 font-serif text-2xl sm:text-4xl text-cream">
                  {category.title}
                </h3>
              </div>
              <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5">
                {category.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl sm:rounded-2xl border border-brown/10 bg-cream/70 p-3.5 sm:p-5"
                  >
                    <h4 className="font-serif text-xl text-brown mb-1">{item.title}</h4>
                    <p className="text-gold-dark font-semibold mb-3">{item.price}</p>
                    {item.techniques && (
                      <p className="text-brown/75 text-sm leading-relaxed mb-2">
                        <span className="font-medium text-brown">Techniques: </span>
                        {item.techniques}
                      </p>
                    )}
                    {item.avantages && (
                      <p className="text-brown/75 text-sm leading-relaxed">
                        <span className="font-medium text-brown">Avantages: </span>
                        {item.avantages}
                      </p>
                    )}
                    {item.details && (
                      <ul className="space-y-1.5 text-sm text-brown/80">
                        {item.details.map((detail) => (
                          <li key={detail}>- {detail}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
