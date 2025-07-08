import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    slug: "smart-places-buy-land-lagos-2025",
    title: "5 Smart Places to Buy Land in Lagos 2025",
    excerpt:
      "Discover the fastest-growing areas in Lagos with the highest ROI potential for land banking investments.",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "Investment Guide",
  },
  {
    id: 2,
    slug: "c-of-o-vs-gazette-whats-the-difference",
    title: "C of O vs Gazette: What's the Difference?",
    excerpt:
      "Understanding the legal documents that protect your property investment and ensure clear ownership.",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    category: "Legal Guide",
  },
  {
    id: 3,
    slug: "real-estate-vs-crypto-why-land-still-wins",
    title: "Real Estate vs Crypto: Why Land Still Wins",
    excerpt:
      "A comprehensive analysis of why real estate remains the most stable wealth-building investment.",
    image:
      "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg",
    date: "Jan 5, 2025",
    readTime: "10 min read",
    category: "Market Analysis",
  },
];

export default function MarketInsights() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Market <span className="text-yellow-400">Insights</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Stay ahead with expert analysis, investment tips, and market trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="glass-strong rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-white/60 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-3 hover:text-yellow-400 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-white/70 mb-4">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="glass-strong text-white px-8 py-4 text-lg font-semibold hover:glass transition-all duration-300 inline-block rounded-lg"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  )
}
