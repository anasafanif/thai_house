import Link from "next/link";
import Image from "next/image";
import { ThaiBorderLine } from "@/components/ThaiPatterns";

export default function Footer() {
  return (
    <footer className="relative bg-brown text-[#F6F1E9] py-20 px-4 sm:px-6 lg:px-8 border-t border-gold/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center pt-2 pb-12">
          <div className="text-gold/60 w-48 h-5">
            <ThaiBorderLine className="w-full h-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <Link href="#hero" className="inline-flex items-center gap-2 mb-6">
              <Image
                src="/logo.png"
                alt="Thai House Massage & Spa"
                width={40}
                height={40}
                className="h-10 w-10 object-contain opacity-95"
              />
              <span className="font-serif text-xl font-semibold text-[#F6F1E9]">Thai House</span>
            </Link>
            <p className="text-cream/80 text-sm leading-relaxed max-w-[40ch] mb-6">
              Massage & Spa. Where Moroccan warmth meets Thai tradition.
            </p>
            <a
              href="https://www.google.com/maps/search/Kenitra,+Morocco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-cream/80 hover:text-gold-light transition-colors text-sm group"
            >
              <span className="shrink-0 mt-0.5 text-gold/80 group-hover:text-gold-light transition-colors" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>
                <span className="block">Kenitra, Morocco</span>
                <span className="text-cream/60 text-xs">Click for directions</span>
              </span>
            </a>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-cream/70 hover:text-gold-light transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream/70 hover:text-gold-light transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-cream/70 hover:text-gold-light transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-serif text-sm font-semibold text-gold-light uppercase tracking-wider mb-5">
              Quick links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-cream/80 hover:text-gold-light transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-cream/80 hover:text-gold-light transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#book-now" className="text-cream/80 hover:text-gold-light transition-colors text-sm">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h3 className="font-serif text-sm font-semibold text-gold-light uppercase tracking-wider mb-5">
              Contact
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              Reach us via the WhatsApp button or call to reserve your visit.
            </p>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t border-cream/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            Thai House Massage & Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
