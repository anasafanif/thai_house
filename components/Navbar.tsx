"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ShimmerButton from "@/components/ShimmerButton";

const NAV_LINKS = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Pourquoi nous" },
  { href: "#gallery", label: "Galerie" },
  { href: "#testimonials", label: "Témoignages" },
  { href: "#book-now", label: "Réserver" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-brown/95 backdrop-blur-md border-b border-gold/40 shadow-soft"
          : "bg-brown/90 backdrop-blur-sm border-b border-gold/20"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="#hero"
          className="flex items-center gap-2 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          aria-label="Thai House Massage & Spa - Accueil"
        >
          <Image
            src="/logo.png"
            alt="Thai House Massage et Spa"
            width={48}
            height={48}
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
            priority
          />
          <span className="font-serif text-lg md:text-xl font-semibold hidden sm:inline text-cream">
            Thai House
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold inline-block hover:scale-[1.02] transition-transform duration-200 text-cream/95 hover:text-gold-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ShimmerButton href="#book-now" className="shrink-0 px-5 py-2.5 text-sm !text-brown">
          Réserver
        </ShimmerButton>
      </nav>
    </motion.header>
  );
}
