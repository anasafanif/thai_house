import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link href="#hero" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Thai House Massage & Spa"
                width={40}
                height={40}
                className="h-10 w-10 object-contain opacity-90"
              />
              <span className="font-serif text-xl font-semibold">Thai House</span>
            </Link>
            <p className="text-cream/75 text-sm max-w-[40ch] mb-6">
              Massage & Spa. Where Moroccan warmth meets Thai tradition.
            </p>
            <p className="text-cream/60 text-sm">
              Morocco
            </p>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-serif text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Quick links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-cream/75 hover:text-gold transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-cream/75 hover:text-gold transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#book-now" className="text-cream/75 hover:text-gold transition-colors text-sm">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h3 className="font-serif text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <p className="text-cream/75 text-sm">
              Reach us via the WhatsApp button or call to reserve your visit.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            Thai House Massage & Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
