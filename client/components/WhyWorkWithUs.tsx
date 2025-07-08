"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Adebayo Johnson",
    title: "Tech Entrepreneur",
    content:
      "They helped me acquire 3 prime properties in Lekki. My portfolio has grown by 250% in just 2 years. Professional, trustworthy, and results-driven.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Mrs. Funmi Adeyemi",
    title: "Investment Banker",
    content:
      "Best real estate investment I've made. They guided me through the entire process and the property has already doubled in value. Highly recommended!",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Chief Emeka Okafor",
    title: "Business Owner",
    content:
      "Professional service from start to finish. They found me the perfect commercial property that generates excellent rental income. True experts!",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
]

const stats = [
  { number: "500+", label: "Properties Sold" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "340%", label: "Average ROI" },
  { number: "₦50B+", label: "Property Value Managed" },
]

export default function WhyWorkWithUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Why Work <span className="text-yellow-400">With Us</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We've built our reputation on delivering exceptional results for our
            clients
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-strong p-6 rounded-2xl"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Section */}
          <div className="relative">
            <div className="aspect-video glass-strong rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Company Video"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors duration-300">
                  <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </button>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 md:gap-4 gap-1">
              <div className="text-center p-2 glass-strong rounded-lg">
                <div className="md:text-2xl text-xl font-bold text-white">NIESV</div>
                <div className="text-sm text-white/70">Certified</div>
              </div>
              <div className="text-center p-2 glass-strong rounded-lg">
                <div className="md:text-2xl text-xl font-bold text-white">ESVARBON</div>
                <div className="text-sm text-white/70">Member</div>
              </div>
              <div className="text-center p-2 glass-strong rounded-lg">
                <div className="md:text-2xl text-xl font-bold text-white">ISO</div>
                <div className="text-sm text-white/70">Certified</div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <div className="glass-strong p-8 rounded-2xl mb-6 shadow-xl">
              <div className="flex mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  )
                )}
              </div>
              <p className="text-lg text-white mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex items-center">
                <Image
                  src={
                    testimonials[currentTestimonial].image || "/placeholder.svg"
                  }
                  alt={testimonials[currentTestimonial].name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-white/70">
                    {testimonials[currentTestimonial].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentTestimonial === index
                      ? "bg-yellow-400"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
