"use client"
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PremiumListings from "@/components/PremiumListings";
import InvestorTools from "@/components/InvestorTools";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import BookConsultation from "@/components/BookConsultation";
import MarketInsights from "@/components/MarketInsights";
import CTAFooter from "@/components/CTAFooter";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 700);
    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.7)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PremiumListings />
      <InvestorTools />
      <WhyWorkWithUs />
      <BookConsultation />
      <MarketInsights />
      <CTAFooter />
      <WhatsAppWidget />
    </main>
  );
}
