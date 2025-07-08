"use client"

import type React from "react"

import { useState } from "react"

export default function BookConsultation() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    propertyType: "",
    budget: "",
    locations: [],
    timeline: "",
    name: "",
    email: "",
    phone: "",
  })

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! We'll contact you within 24 hours to schedule your consultation.")
  }

  return (
    <section id="consultation" className="py-24">
      <div className="max-w-4xl mx-auto px-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Book Your Private <span className="text-yellow-400">Consultation</span>
          </h2>
          <p className="text-xl text-white/80">Get personalized property recommendations from our experts</p>
        </div>

        <div className="glass-strong text-white rounded-2xl md:p-8 py-4 px-4 shadow-2xl">
          {/* Progress Bar */}
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step ? "bg-yellow-600 text-white" : "glass text-white/60"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-20 h-1 mx-4 ${currentStep > step ? "bg-yellow-600" : "bg-white/20"}`}></div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Property Preferences */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">What type of property interests you?</h3>

                <div>
                  <label className="block text-sm font-medium mb-3">Property Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Land", "Houses", "Commercial", "Mixed Use"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: type })}
                        className={`p-4 border-2 rounded-lg font-medium transition-all duration-300 ${
                          formData.propertyType === type
                            ? "border-yellow-400 bg-white-600/20 text-yellow-200"
                            : "border-white/20 glass hover:border-yellow-400/50"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full p-3 glass border border-white/20 rounded-lg text-white"
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="10-25M">₦10M - ₦25M</option>
                    <option value="25-50M">₦25M - ₦50M</option>
                    <option value="50-100M">₦50M - ₦100M</option>
                    <option value="100M+">₦100M+</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Location & Timeline */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Where and when?</h3>

                <div>
                  <label className="block text-sm font-medium mb-3">Preferred Locations</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Lagos Island", "Lekki", "Ikoyi", "Victoria Island", "Abuja", "Port Harcourt"].map((location) => (
                      <label key={location} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          onChange={(e) => {
                            const locations = formData.locations as string[]
                            if (e.target.checked) {
                              setFormData({ ...formData, locations: [...locations, location] })
                            } else {
                              setFormData({ ...formData, locations: locations.filter((l) => l !== location) })
                            }
                          }}
                        />
                        {location}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Timeline for Purchase</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full p-3 glass border border-white/20 rounded-lg text-white"
                    required
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (within 1 month)</option>
                    <option value="3months">Within 3 months</option>
                    <option value="6months">Within 6 months</option>
                    <option value="1year">Within 1 year</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Let's get in touch</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 glass border border-white/20 rounded-lg text-white placeholder-white/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 glass border border-white/20 rounded-lg text-white placeholder-white/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 glass border border-white/20 rounded-lg text-white placeholder-white/50"
                    required
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-3 glass border border-white/20 text-white font-semibold hover:glass-strong transition-colors duration-300 rounded-lg"
                >
                  Previous
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto px-6 py-3 bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-colors duration-300 rounded-lg"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-8 py-3 bg-yellow-400 text-white font-semibold hover:bg-yellow-300 transition-colors duration-300 rounded-lg"
                >
                  Book Consultation
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
