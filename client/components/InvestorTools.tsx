"use client"

import { useState } from "react"

export default function InvestorTools() {
  const [calculatorData, setCalculatorData] = useState({
    purchasePrice: "",
    location: "Lagos",
    timeframe: "18",
  })
  const [projectedValue, setProjectedValue] = useState<number | null>(null)

  const calculateROI = () => {
    const price = Number.parseFloat(calculatorData.purchasePrice)
    if (!price) return

    // Simple ROI calculation based on location and timeframe
    const locationMultiplier =
      {
        Lagos: 1.6,
        Abuja: 1.4,
        "Port Harcourt": 1.3,
        Kano: 1.2,
      }[calculatorData.location] || 1.4

    const timeMultiplier = Number.parseInt(calculatorData.timeframe) / 12
    const projected = price * locationMultiplier * timeMultiplier
    setProjectedValue(projected)
  }

  return (
    <section id="investor-tools" className="py-24">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Investor <span className="text-yellow-400">Tools</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Make informed decisions with our professional investment tools and
            insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ROI Calculator */}
          <div className="glass-strong p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">
              ROI Calculator
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Purchase Price (₦)
                </label>
                <input
                  type="number"
                  value={calculatorData.purchasePrice}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      purchasePrice: e.target.value,
                    })
                  }
                  className="w-full p-3 glass border border-white/20 rounded-lg text-white placeholder-white/50"
                  placeholder="25,000,000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Location
                </label>
                <select
                  value={calculatorData.location}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      location: e.target.value,
                    })
                  }
                  className="w-full p-3 glass border border-white/20 rounded-lg text-black"
                >
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Port Harcourt">Port Harcourt</option>
                  <option value="Kano">Kano</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Investment Timeframe (months)
                </label>
                <select
                  value={calculatorData.timeframe}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      timeframe: e.target.value,
                    })
                  }
                  className="w-full p-3 glass border border-white/20 rounded-lg text-black"
                >
                  <option value="12">12 months</option>
                  <option value="18">18 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                </select>
              </div>

              <button
                onClick={calculateROI}
                className="w-full bg-yellow-400 text-white py-3 font-semibold hover:bg-yellow-300 transition-colors duration-300 rounded-lg"
              >
                Calculate Projected Value
              </button>

              {projectedValue && (
                <div className="bg-emerald-600/20 border border-emerald-400/30 p-4 rounded-lg mt-4">
                  <p className="text-sm text-emerald-300">Projected Value:</p>
                  <p className="text-2xl font-bold text-white">
                    ₦{projectedValue.toLocaleString()}
                  </p>
                  <p className="text-sm text-emerald-300 mt-2">
                    Potential ROI:{" "}
                    {(
                      ((projectedValue -
                        Number.parseFloat(calculatorData.purchasePrice)) /
                        Number.parseFloat(calculatorData.purchasePrice)) *
                      100
                    ).toFixed(1)}
                    %
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Land Banking Info */}
          <div className="space-y-8">
            <div className="glass-strong p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Land Banking Success Stories
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-400 pl-4">
                  <p className="font-semibold text-white">
                    Lekki Phase 2 Investment
                  </p>
                  <p className="text-white/70 text-sm">
                    Bought at ₦8M in 2022, now worth ₦32M
                  </p>
                  <p className="text-emerald-400 font-bold">
                    400% ROI in 24 months
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-4">
                  <p className="font-semibold text-white">
                    Abuja Gwarinpa Estate
                  </p>
                  <p className="text-white/70 text-sm">
                    Bought at ₦15M in 2021, now worth ₦45M
                  </p>
                  <p className="text-emerald-400 font-bold">
                    300% ROI in 36 months
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-strong p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Free Investment Guides
              </h3>
              <div className="space-y-4">
                <button className="w-full glass text-white p-3 text-left hover:glass-strong transition-colors duration-300 rounded-lg">
                  📊 Top 10 Fast-Appreciating Areas in Lagos
                </button>
                <button className="w-full glass text-white p-3 text-left hover:glass-strong transition-colors duration-300 rounded-lg">
                  📋 C of O vs Gazette: Complete Guide
                </button>
                <button className="w-full glass text-white p-3 text-left hover:glass-strong transition-colors duration-300 rounded-lg">
                  💰 Real Estate Investment Masterclass
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
