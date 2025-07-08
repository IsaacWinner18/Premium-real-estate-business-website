"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/Dubai-real-estate.jpg)", opacity: 0.9 }}
        aria-hidden="true"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 w-full h-full z-10 bg-black opacity-60 pointer-events-none" />
      {/* Content */}
      <div
        className={`relative z-20 text-center text-white px-4 max-w-6xl mx-auto transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ">
          Own a Piece of <span className="bg-yellow-400">Tomorrow</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-serif mb-8">
          Invest in Premium Real Estate Today
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto font-light">
          We connect ambitious{" "}
          <span className="text-yellow-400">investors</span> with high-value
          properties that appreciate{" "}
          <span className="text-yellow-400">fast</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link
            href="#listings"
            className="glass-strong text-white px-8 py-4 text-lg font-semibold hover:glass transition-all duration-300 transform hover:scale-105 rounded-lg"
          >
            View Premium Listings
          </Link>
          <Link
            href="#consultation"
            className="border-2 border-white/30 glass text-white px-8 py-4 text-lg font-semibold hover:glass-strong transition-all duration-300 rounded-lg"
          >
            Request Consultation
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <span className="text-sm font-medium">AS SEEN IN:</span>
          <div className="flex gap-8 items-center">
            <span className="text-lg font-serif">Forbes</span>
            <span className="text-lg font-serif">BusinessDay</span>
            <span className="text-lg font-serif">Nairametrics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
