"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const allProperties = [
  {
    id: 1,
    title: "Oceanfront Estate",
    location: "Victoria Island, Lagos",
    price: "₦450,000,000",
    type: "House",
    size: "5,200 sqft",
    bedrooms: 6,
    bathrooms: 7,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Waterfront", "Smart Home", "Private Beach", "Pool", "Gym"],
    description:
      "Luxurious oceanfront estate with panoramic views and premium amenities.",
  },
  {
    id: 2,
    title: "Premium Land Banking",
    location: "Lekki Phase 2, Lagos",
    price: "₦25,000,000",
    type: "Land",
    size: "2,000 sqm",
    image: "/placeholder.svg?height=400&width=600",
    features: ["C of O", "Gated Community", "High ROI", "Development Ready"],
    description:
      "Prime land in fast-developing area with excellent appreciation potential.",
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    location: "Ikoyi, Lagos",
    price: "₦320,000,000",
    type: "House",
    size: "3,800 sqft",
    bedrooms: 4,
    bathrooms: 5,
    image: "/placeholder.svg?height=400&width=600",
    features: ["City View", "Pool", "Gym", "Concierge", "Parking"],
    description:
      "Sophisticated penthouse with breathtaking city views and world-class amenities.",
  },
  {
    id: 4,
    title: "Commercial Complex",
    location: "Abuja CBD",
    price: "₦1,200,000,000",
    type: "Commercial",
    size: "15,000 sqft",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Prime Location", "High Yield", "Fully Leased", "Modern Design"],
    description:
      "Grade A commercial building in the heart of Abuja's business district.",
  },
  {
    id: 5,
    title: "Smart Villa",
    location: "Banana Island, Lagos",
    price: "₦850,000,000",
    type: "House",
    size: "6,500 sqft",
    bedrooms: 7,
    bathrooms: 8,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Smart Home", "Private Jetty", "Cinema", "Wine Cellar"],
    description:
      "Ultra-modern smart villa with cutting-edge technology and luxury finishes.",
  },
  {
    id: 6,
    title: "Investment Land",
    location: "Epe, Lagos",
    price: "₦15,000,000",
    type: "Land",
    size: "5,000 sqm",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Beachfront", "C of O", "Resort Potential", "Appreciation"],
    description:
      "Beachfront land perfect for resort development or long-term investment.",
  },
];

const filters = ["All", "Land", "House", "Commercial"];
const priceRanges = [
  "All",
  "Under ₦50M",
  "₦50M - ₦100M",
  "₦100M - ₦500M",
  "Above ₦500M",
];
const locations = ["All", "Lagos", "Abuja", "Port Harcourt"];

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = allProperties.filter((property) => {
    const matchesType =
      activeFilter === "All" || property.type === activeFilter;
    const matchesLocation =
      locationFilter === "All" || property.location.includes(locationFilter);
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesPrice = true;
    if (priceFilter !== "All") {
      const price = Number.parseInt(property.price.replace(/[₦,]/g, ""));
      switch (priceFilter) {
        case "Under ₦50M":
          matchesPrice = price < 50000000;
          break;
        case "₦50M - ₦100M":
          matchesPrice = price >= 50000000 && price <= 100000000;
          break;
        case "₦100M - ₦500M":
          matchesPrice = price >= 100000000 && price <= 500000000;
          break;
        case "Above ₦500M":
          matchesPrice = price > 500000000;
          break;
      }
    }

    return matchesType && matchesLocation && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-slate-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Premium <span className="text-emerald-600">Properties</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover exceptional real estate opportunities handpicked for
              discerning investors
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search properties by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
              />
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Property Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        activeFilter === filter
                          ? "bg-emerald-600 text-white shadow-lg"
                          : "bg-white/80 text-gray-700 hover:bg-emerald-50 border border-gray-200"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Price Range
                </label>
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Location
                </label>
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing {filteredProperties.length} of {allProperties.length}{" "}
              properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-3 py-1 text-sm font-semibold rounded-full">
                      {property.size}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {property.location}
                  </p>

                  {property.bedrooms && (
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span>{property.bedrooms} beds</span>
                      <span>{property.bathrooms} baths</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {property.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="bg-amber-100 text-amber-800 px-2 py-1 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">
                      {property.price}
                    </span>
                    <Link
                      href={`/properties/${property.id}`}
                      className="bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No properties found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more results
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
