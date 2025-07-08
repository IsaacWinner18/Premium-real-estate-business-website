"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Oceanfront Estate",
    location: "Victoria Island, Lagos",
    price: "₦40,000,000",
    type: "House",
    size: "5,200 sqft",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Waterfront", "Smart Home", "Private Beach"],
  },
  {
    id: 2,
    title: "Premium Land Banking",
    location: "Lekki Phase 2, Lagos",
    price: "₦5,000,000",
    type: "Land",
    size: "2,000 sqm",
    image: "/placeholder.svg?height=400&width=600",
    features: ["C of O", "Gated Community", "High ROI"],
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    location: "Ikoyi, Lagos",
    price: "₦32,000,000",
    type: "House",
    size: "3,800 sqft",
    image: "/placeholder.svg?height=400&width=600",
    features: ["City View", "Pool", "Gym"],
  },
  {
    id: 4,
    title: "Commercial Complex",
    location: "Abuja CBD",
    price: "₦8,200,000,",
    type: "Commercial",
    size: "15,000 sqft",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Prime Location", "High Yield", "Fully Leased"],
  },
];

const filters = [
  "All",
  "Land",
  "Houses",
  "Commercial",
  "Waterfront",
  "Smart Home",
];

export default function PremiumListings() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null);

  const filteredProperties =
    activeFilter === "All"
      ? properties
      : properties.filter(
          (property) =>
            property.type === activeFilter ||
            property.features.includes(activeFilter)
        );

  return (
    <section id="listings" className="py-24">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Premium <span className="text-yellow-400">Properties</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Handpicked properties with exceptional growth potential and premium
            locations
          </p>
        </div>

        {/* Filter Menu */}
        <div className="mb-12">
          {/* Desktop Filters */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 glass-strong rounded-2xl p-6 shadow-xl">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 font-semibold transition-all duration-300 rounded-lg ${
                  activeFilter === filter
                    ? "bg-yellow-600 text-white shadow-lg"
                    : "glass text-white hover:glass-strong"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Mobile Filters - Scrollable */}
          <div className="md:hidden glass-strong rounded-2xl p-4 shadow-xl">
            <div className="flex gap-3 overflow-x-auto scrollable-filters pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 font-semibold transition-all duration-300 rounded-lg whitespace-nowrap flex-shrink-0 ${
                    activeFilter === filter
                      ? "bg-yellow-600 text-white shadow-lg"
                      : "glass text-white hover:glass-strong"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-8 gap-4">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="glass-strong rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProperty(property.id)}
              onMouseLeave={() => setHoveredProperty(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={600}
                  height={400}
                  className={`w-full h-64 object-cover transition-transform duration-500 ${
                    hoveredProperty === property.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="glass-dark text-white px-3 py-1 text-sm font-semibold rounded-full">
                    {property.size}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {property.title}
                </h3>
                <p className="text-white/70 mb-4">{property.location}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-yellow-400/20 text-yellow-100 px-2 py-1 text-xs font-medium rounded-full border border-yellow-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="md:text-3xl text-xl font-bold text-white">
                    {property.price}
                  </span>
                  <Link
                    href={`/properties/${property.id}`}
                    className="bg-yellow-700 text-white md:px-6 px-4 md:py-2 py-3 font-semibold hover:glass-strong transition-all duration-300 rounded-lg"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/properties"
            className="glass-strong text-white px-8 py-4 text-lg font-semibold hover:glass transition-all duration-300 inline-block rounded-lg"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
