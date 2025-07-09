"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

// Mock property data - in real app, this would come from API
const propertyData: {
  [key: string]: {
    id: number;
    title: string;
    location: string;
    price: string;
    type: string;
    size: string;
    bedrooms: number;
    bathrooms: number;
    parking: number;
    yearBuilt: number;
    images: string[];
    features: string[];
    description: string;
    amenities: string[];
    nearbyPlaces: { name: string; distance: string; type: string }[];
    agent: {
      name: string;
      title: string;
      phone: string;
      email: string;
      image: string;
    };
    roiProjection: {
      currentValue: number;
      projected18Months: number;
      projectedROI: string;
    };
  };
} = {
  1: {
    id: 1,
    title: "Oceanfront Estate",
    location: "Victoria Island, Lagos",
    price: "₦450,000,000",
    type: "House",
    size: "5,200 sqft",
    bedrooms: 6,
    bathrooms: 7,
    parking: 4,
    yearBuilt: 2023,
    images: [
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751909610/Davido-7_e4rqd4.jpg",
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751909610/Davido-7_e4rqd4.jpg",
    ],
    features: [
      "Waterfront",
      "Smart Home",
      "Private Beach",
      "Pool",
      "Gym",
      "Cinema",
      "Wine Cellar",
      "Elevator",
    ],
    description:
      "This magnificent oceanfront estate represents the pinnacle of luxury living on Victoria Island. Featuring panoramic ocean views, state-of-the-art smart home technology, and unparalleled amenities including a private beach, infinity pool, and world-class gym facilities.",
    amenities: [
      "24/7 Security",
      "Private Beach Access",
      "Infinity Pool",
      "Home Gym",
      "Cinema Room",
      "Wine Cellar",
      "Smart Home System",
      "Elevator",
      "Landscaped Gardens",
      "Backup Generator",
    ],
    nearbyPlaces: [
      { name: "Eko Hotel", distance: "2.5 km", type: "Hotel" },
      { name: "Lagos Business School", distance: "3.2 km", type: "Education" },
      { name: "Tafawa Balewa Square", distance: "4.1 km", type: "Landmark" },
      { name: "Murtala Muhammed Airport", distance: "25 km", type: "Airport" },
    ],
    agent: {
      name: "Adebayo Johnson",
      title: "Senior Property Consultant",
      phone: "+234 901 234 5678",
      email: "adebayo@premiumestate.ng",
      image:
        "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    },
    roiProjection: {
      currentValue: 450000000,
      projected18Months: 630000000,
      projectedROI: "40%",
    },
  },
};

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params.id as string;
  const property = propertyData[String(propertyId)];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
        <Header />
        <div className="pt-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Property Not Found
          </h1>
          <Link
            href="/properties"
            className="text-yellow-600 hover:text-yellow-700"
          >
            ← Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      <Header />

      {/* Property Header */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-yellow-600">
                Home
              </Link>
              <span>/</span>
              <Link href="/properties" className="hover:text-yellow-600">
                Properties
              </Link>
              <span>/</span>
              <span className="text-gray-900">{property.title}</span>
            </div>
          </nav>

          {/* Property Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                  {property.title}
                </h1>
                <p className="text-xl text-gray-600 flex items-center mb-4">
                  <svg
                    className="w-5 h-5 mr-2"
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
                <div className="flex items-center gap-6 text-gray-600">
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    {property.bedrooms} beds
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {property.bathrooms} baths
                  </span>
                  <span>{property.size}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-yellow-600 mb-2">
                  {property.price}
                </div>
                <div className="text-sm text-gray-600">
                  Built in {property.yearBuilt}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <div className="relative">
              <Image
                src={
                  property.images[currentImageIndex] ||
                  "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg"
                }
                alt={property.title}
                width={1200}
                height={600}
                className="w-full h-96 md:h-[500px] object-cover"
              />

              {/* Image Navigation */}
              <button
                onClick={() =>
                  setCurrentImageIndex(Math.max(0, currentImageIndex - 1))
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                disabled={currentImageIndex === 0}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    Math.min(property.images.length - 1, currentImageIndex + 1)
                  )
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                disabled={currentImageIndex === property.images.length - 1}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {property.images.map((_: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentImageIndex === index ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="p-4 flex gap-4 overflow-x-auto">
              {property.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index
                      ? "border-yellow-600"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={
                      image ||
                      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg"
                    }
                    alt={`${property.title} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="mb-12 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl  py-8 md:px-8 px-4 shadow-xl border border-white/20">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  About This Property
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {property.description}
                </p>

                {/* Features */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature: string) => (
                    <div
                      key={feature}
                      className="flex items-center bg-yellow-50 px-3 py-2 rounded-lg"
                    >
                      <svg
                        className="w-4 h-4 text-yellow-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl  py-8 md:px-8 px-4 shadow-xl border border-white/20">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Amenities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity: string) => (
                    <div key={amenity} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-600 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Places */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl  py-8 md:px-8 px-4 shadow-xl border border-white/20 mb-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Nearby Places
                </h2>
                <div className="space-y-4">
                  {property.nearbyPlaces.map(
                    (
                      place: { name: string; distance: string; type: string },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                      >
                        <div>
                          <div className="font-medium text-gray-900">
                            {place.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {place.type}
                          </div>
                        </div>
                        <div className="text-yellow-600 font-medium">
                          {place.distance}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* ROI Projection */}
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 text-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-semibold mb-4">
                  Investment Projection
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Current Value:</span>
                    <span className="font-bold">
                      ₦
                      {(property.roiProjection.currentValue / 1000000).toFixed(
                        0
                      )}
                      M
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>18-Month Projection:</span>
                    <span className="font-bold">
                      ₦
                      {(
                        property.roiProjection.projected18Months / 1000000
                      ).toFixed(0)}
                      M
                    </span>
                  </div>
                  <div className="border-t border-yellow-400 pt-3">
                    <div className="flex justify-between text-lg">
                      <span>Potential ROI:</span>
                      <span className="font-bold text-yellow-200">
                        {property.roiProjection.projectedROI}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Agent */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Agent
                </h3>
                <div className="flex items-center mb-4">
                  <Image
                    src={
                      property.agent.image ||
                      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg"
                    }
                    alt={property.agent.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {property.agent.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {property.agent.title}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="w-full bg-yellow-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-yellow-700 transition-colors flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now
                  </a>

                  <button
                    onClick={() => setShowContactForm(!showContactForm)}
                    className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>

                  <a
                    href={`https://wa.me/${property.agent.phone.replace(
                      /[^0-9]/g,
                      ""
                    )}?text=Hi, I'm interested in ${property.title}`}
                    className="w-full bg-green-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full bg-yellow-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-yellow-600 transition-colors">
                    Schedule Inspection
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                    Download Brochure
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                    Save Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Send Message
              </h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="+234 xxx xxx xxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="I'm interested in this property..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
