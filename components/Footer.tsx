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
            <p className="text-cream/60 text-sm">
              Kenitra, Morocco
            </p>
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
