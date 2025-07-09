"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    number: "200+",
    label: "Investors Served",
    description: "Across Lagos, Abuja, and Dubai",
  },
  {
    number: "₦75B+",
    label: "Property Value",
    description: "Successfully transacted",
  },
  {
    number: "15+",
    label: "Years Experience",
    description: "In Nigerian real estate",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Based on verified reviews",
  },
];

const mediaFeatures = [
  {
    outlet: "BusinessDay",
    title:
      "How PremiumEstate is Revolutionizing Nigerian Real Estate Investment",
    date: "December 2024",
    type: "Feature Article",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    link: "#",
  },
  {
    outlet: "Channels TV",
    title: "CEO Interview: The Future of Property Investment in Nigeria",
    date: "November 2024",
    type: "TV Interview",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    link: "#",
  },
  {
    outlet: "Forbes Africa",
    title: "Top 40 Under 40: Real Estate Innovators",
    date: "October 2024",
    type: "Recognition",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    link: "#",
  },
  {
    outlet: "Nairametrics",
    title: "Land Banking: The Smart Investment Strategy for 2025",
    date: "September 2024",
    type: "Expert Opinion",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    link: "#",
  },
];

const galleryImages = [
  {
    id: 1,
    title: "Lagos Office Headquarters",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    category: "Office",
  },
  {
    id: 2,
    title: "Client Property Handover Ceremony",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    category: "Events",
  },
  {
    id: 3,
    title: "Luxury Property Showcase",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    category: "Properties",
  },
  {
    id: 4,
    title: "Team Building Retreat",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    category: "Team",
  },
  {
    id: 5,
    title: "Award Ceremony - Best Real Estate Firm",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    category: "Awards",
  },
  {
    id: 6,
    title: "Property Investment Seminar",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    category: "Events",
  },
];

const videos = [
  {
    id: 1,
    title: "CEO Vision: The Future of Nigerian Real Estate",
    description:
      "Our founder shares insights on market trends and investment opportunities",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    duration: "12:45",
  },
  {
    id: 2,
    title: "Client Success Stories: From Investment to Profit",
    description:
      "Real testimonials from investors who achieved exceptional returns",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    duration: "8:30",
  },
  {
    id: 3,
    title: "Behind the Scenes: Property Acquisition Process",
    description: "Take a look at how we identify and secure premium properties",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    duration: "15:20",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg)",
          opacity: 0.9,
        }}
        aria-hidden="true"
      />
      {/* Dark Overlay */}
      <div className="fixed inset-0 w-full h-full z-10 bg-black opacity-60 pointer-events-none" />

      <div className="relative z-20">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                About <span className="text-yellow-400">PremiumEstate</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                We've helped 200+ investors acquire property in Lagos, Abuja,
                and Dubai, building wealth through strategic real estate
                investments
              </p>
            </div>
          </div>
        </section>

        {/* CEO Profile Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="glass-strong rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751909610/Davido-7_e4rqd4.jpg"
                    alt="Adebayo Johnson - CEO & Founder"
                    width={500}
                    height={600}
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 glass-dark text-white p-4 rounded-lg">
                    <h3 className="text-xl font-bold">Adebayo Johnson</h3>
                    <p className="text-yellow-400">CEO & Founder</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-serif font-bold text-white mb-6">
                    Meet Our{" "}
                    <span className="text-yellow-400">Visionary Leader</span>
                  </h2>
                  <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                    <p>
                      With over 15 years of experience in Nigerian real estate,
                      Adebayo Johnson has built PremiumEstate into one of the
                      most trusted names in luxury property investment. His
                      vision of democratizing access to high-value real estate
                      has helped hundreds of investors build generational
                      wealth.
                    </p>
                    <p>
                      Before founding PremiumEstate, Adebayo worked as a Senior
                      Investment Analyst at Goldman Sachs Lagos, where he
                      specialized in emerging market real estate. He holds an
                      MBA from Lagos Business School and is a certified member
                      of the Nigerian Institution of Estate Surveyors and
                      Valuers (NIESV).
                    </p>
                    <p>
                      "My mission is simple: to help every Nigerian investor
                      access the same premium real estate opportunities that
                      were once reserved for the ultra-wealthy. Real estate
                      remains the most reliable path to building lasting wealth
                      in Nigeria."
                    </p>
                  </div>
                </div>

                {/* CEO Achievements */}
                <div className="glass-strong rounded-2xl md:p-8 px-4 py-8 shadow-xl">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Key Achievements
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-200">
                        Led ₦75+ billion in successful property transactions
                        across Nigeria and Dubai
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-200">
                        Featured in Forbes Africa "40 Under 40" list for real
                        estate innovation
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-200">
                        Keynote speaker at major real estate conferences across
                        West Africa
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-200">
                        Established PremiumEstate's international expansion into
                        Dubai market
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                These numbers represent real people whose lives we've
                transformed through strategic real estate investment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center glass-strong rounded-2xl p-8 border border-white/20"
                >
                  <div className="text-5xl font-bold text-yellow-400 mb-4">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-200 text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold text-white mb-8">
                Our Story
              </h2>
              <div className="space-y-8 text-lg text-gray-200 leading-relaxed">
                <p>
                  PremiumEstate was born from a simple observation: while
                  Nigeria's real estate market offered incredible opportunities,
                  most investors lacked access to the premium properties that
                  generated the highest returns. Founded in 2009, we set out to
                  bridge this gap.
                </p>
                <p>
                  Starting with a small office in Victoria Island and a vision
                  to democratize luxury real estate investment, we've grown into
                  Nigeria's premier property investment firm. Our success is
                  measured not just in transactions, but in the generational
                  wealth we've helped our clients build.
                </p>
                <p>
                  Today, we operate across three major markets - Lagos, Abuja,
                  and Dubai - offering our clients access to the most exclusive
                  properties and investment opportunities. Our expansion into
                  Dubai has opened new frontiers for Nigerian investors seeking
                  international diversification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Media Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                Media <span className="text-yellow-400">Recognition</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Our expertise and market insights have been featured in leading
                publications and media outlets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mediaFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="glass-strong rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-yellow-400 font-semibold text-sm">
                        {feature.outlet}
                      </span>
                      <span className="bg-yellow-400/20 text-yellow-400 px-2 py-1 text-xs rounded-full">
                        {feature.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-white mb-2 line-clamp-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{feature.date}</p>
                    <Link
                      href={feature.link}
                      className="text-yellow-400 font-medium text-sm hover:text-yellow-300 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Content Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                Video <span className="text-yellow-400">Content</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Get insights from our CEO and see our work in action through our
                video content
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="glass-strong rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative group cursor-pointer">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => {
                          // Open YouTube video in modal or new tab
                          window.open(
                            `https://www.youtube.com/watch?v=${video.youtubeId}`,
                            "_blank"
                          );
                        }}
                        className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                      >
                        <svg
                          className="w-6 h-6 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                Company <span className="text-yellow-400">Gallery</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                A glimpse into our office, team, events, and the premium
                properties we manage
              </p>
            </div>

            {/* Gallery Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["All", "Office", "Events", "Properties", "Team", "Awards"].map(
                (category) => (
                  <button
                    key={category}
                    className="px-6 py-3 glass text-white font-medium rounded-full border border-white/20 hover:glass-strong hover:text-yellow-400 transition-all duration-300"
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group glass-strong rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.image}
                      alt={image.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 text-sm font-medium rounded-full">
                        {image.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg
                          className="w-6 h-6 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="glass-strong rounded-2xl py-8 md:px-8 px-4 shadow-xl border border-white/20">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  To democratize access to premium real estate investment
                  opportunities, helping every Nigerian build generational
                  wealth through strategic property acquisition. We believe that
                  exceptional real estate should be accessible to all serious
                  investors, not just the ultra-wealthy.
                </p>
              </div>

              <div className="glass-strong rounded-2xl  py-8 md:px-8 px-4 shadow-xl border border-white/20">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  To become Africa's leading real estate investment platform,
                  expanding across major African cities and international
                  markets. We envision a future where every African investor has
                  access to world-class property investment opportunities that
                  generate exceptional returns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Ready to Join Our{" "}
              <span className="text-yellow-400">Success Story</span>?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let us help you build generational wealth through strategic real
              estate investment
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/#consultation"
                className="bg-yellow-400 text-black px-8 py-4 text-lg font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/properties"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              >
                View Properties
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
