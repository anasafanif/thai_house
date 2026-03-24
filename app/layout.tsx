import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppFab from "@/components/WhatsAppFab";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Thai House Massage & Spa | Maroc",
  description:
    "Massage thaï et spa haut de gamme au Maroc. Bien-être fusion maroco-thaïlandais dans un cadre zen de luxe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans min-h-screen bg-cream antialiased" data-site-version="luxury-spa">
        <Navbar />
        <main>{children}</main>
        <WhatsAppFab />
      </body>
    </html>
  );
}
