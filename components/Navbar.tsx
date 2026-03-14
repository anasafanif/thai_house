"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ShimmerButton from "@/components/ShimmerButton";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#book-now", label: "Book Now" },
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
          ? "bg-cream-dark/90 backdrop-blur-md border-b-2 border-gold/30 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="#hero"
          className="flex items-center gap-2 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          aria-label="Thai House Massage & Spa - Home"
        >
          <Image
            src="/logo.png"
            alt="Thai House Massage & Spa"
            width={48}
            height={48}
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
            priority
          />
          <span className="font-serif text-lg md:text-xl font-semibold text-charcoal hidden sm:inline">
            Thai House
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm text-charcoal/80 hover:text-gold-dark transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold inline-block hover:scale-[1.02] transition-transform duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ShimmerButton href="#book-now" className="shrink-0 px-4 py-2 text-sm">
          Book Now
        </ShimmerButton>
      </nav>
    </motion.header>
  );
}
