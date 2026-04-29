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
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-3">
        <Link
          href="#hero"
          onClick={closeMobileMenu}
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
        <ShimmerButton href="#services" className="hidden sm:inline-flex shrink-0 px-5 py-2.5 text-sm !text-brown">
          Nos soins
        </ShimmerButton>
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gold/35 text-cream hover:text-gold-light hover:border-gold/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M18.3 5.71L12 12l6.3 6.29-1.41 1.42L10.59 13.4l-6.3 6.31-1.42-1.42L9.17 12 2.87 5.71 4.29 4.3l6.3 6.29 6.29-6.3z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M4 7h16v2H4zm0 4h16v2H4zm0 4h16v2H4z" />
            </svg>
          )}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gold/20 bg-brown/95 backdrop-blur-md px-4 sm:px-6 py-4">
          <ul className="space-y-2">
            {NAV_LINKS.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm text-cream/95 hover:text-gold-light hover:bg-cream/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ShimmerButton href="#services" onClick={closeMobileMenu} className="mt-4 w-full justify-center !text-brown">
            Nos soins
          </ShimmerButton>
        </div>
      )}
    </motion.header>
  );
}
