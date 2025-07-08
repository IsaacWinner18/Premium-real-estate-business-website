import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import PremiumListings from "@/components/PremiumListings"
import InvestorTools from "@/components/InvestorTools"
import WhyWorkWithUs from "@/components/WhyWorkWithUs"
import BookConsultation from "@/components/BookConsultation"
import MarketInsights from "@/components/MarketInsights"
import CTAFooter from "@/components/CTAFooter"
import WhatsAppWidget from "@/components/WhatsAppWidget"

export default function HomePage() {
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
  )
}
