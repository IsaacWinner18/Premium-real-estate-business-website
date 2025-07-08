import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "PremiumEstate - Luxury Real Estate Investment",
  description:
    "Own a piece of tomorrow. Invest in premium real estate today. We connect ambitious investors with high-value properties that appreciate fast.",
  keywords:
    "real estate, luxury properties, land banking, property investment, Lagos, Abuja",
  openGraph: {
    title: "Own a Piece of Tomorrow | PremiumEstate",
    description:
      "Invest in premium real estate today. We connect ambitious investors with high-value properties that appreciate fast.",
    type: "website",
    images: [
      {
        url: "/Dubai-real-estate.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Dubai Real Estate - PremiumEstate",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
