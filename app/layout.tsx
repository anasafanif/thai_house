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
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans min-h-screen bg-cream antialiased" data-site-version="luxury-spa">
        <Navbar />
        <main>{children}</main>
        <WhatsAppFab />
      </body>
    </html>
  );
}
