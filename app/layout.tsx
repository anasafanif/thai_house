import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppFab from "@/components/WhatsAppFab";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Thai House Massage & Spa | Morocco",
  description:
    "Premium Thai massage and spa in Morocco. Moroccan-Thai fusion wellness in a luxury zen setting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-sans min-h-screen bg-cream" data-site-version="premium-redesign">
        <Navbar />
        <main>{children}</main>
        <WhatsAppFab />
      </body>
    </html>
  );
}
