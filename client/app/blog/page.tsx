import Header from "@/components/Header"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    slug: "smart-places-buy-land-lagos-2025",
    title: "5 Smart Places to Buy Land in Lagos 2025",
    excerpt:
      "Discover the fastest-growing areas in Lagos with the highest ROI potential for land banking investments. Our expert analysis reveals the top locations for maximum returns.",
    content:
      "Lagos continues to be Nigeria's economic powerhouse, and smart investors are positioning themselves in strategic locations...",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Investment Guide",
    author: {
      name: "Adebayo Johnson",
      image: "/placeholder.svg?height=50&width=50",
      title: "Senior Investment Analyst",
    },
    tags: ["Lagos", "Land Banking", "Investment", "ROI"],
  },
  {
    id: 2,
    slug: "c-of-o-vs-gazette-difference",
    title: "C of O vs Gazette: What's the Difference?",
    excerpt:
      "Understanding the legal documents that protect your property investment and ensure clear ownership. A comprehensive guide to Nigerian property documentation.",
    content:
      "When investing in Nigerian real estate, understanding the legal documentation is crucial for protecting your investment...",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Legal Guide",
    author: {
      name: "Funmi Adeyemi",
      image: "/placeholder.svg?height=50&width=50",
      title: "Legal Consultant",
    },
    tags: ["Legal", "Documentation", "C of O", "Property Rights"],
  },
  {
    id: 3,
    slug: "real-estate-vs-crypto-why-land-wins",
    title: "Real Estate vs Crypto: Why Land Still Wins",
    excerpt:
      "A comprehensive analysis of why real estate remains the most stable wealth-building investment compared to volatile cryptocurrency markets.",
    content:
      "In an era of digital assets and cryptocurrency volatility, traditional real estate investment continues to prove its worth...",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "Market Analysis",
    author: {
      name: "Emeka Okafor",
      image: "/placeholder.svg?height=50&width=50",
      title: "Market Research Director",
    },
    tags: ["Investment", "Comparison", "Market Analysis", "Wealth Building"],
  },
  {
    id: 4,
    slug: "luxury-property-trends-2025",
    title: "Luxury Property Trends Shaping 2025",
    excerpt:
      "From smart home technology to sustainable design, discover the trends driving luxury real estate demand in Nigeria's premium markets.",
    content:
      "The luxury real estate market in Nigeria is evolving rapidly, with new trends emerging that cater to affluent buyers...",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024-12-28",
    readTime: "6 min read",
    category: "Market Trends",
    author: {
      name: "Adebayo Johnson",
      image: "/placeholder.svg?height=50&width=50",
      title: "Senior Investment Analyst",
    },
    tags: ["Luxury", "Trends", "Smart Homes", "Sustainability"],
  },
  {
    id: 5,
    slug: "abuja-property-investment-guide",
    title: "The Complete Abuja Property Investment Guide",
    excerpt:
      "Everything you need to know about investing in Nigeria's capital city, from prime locations to expected returns and market dynamics.",
    content:
      "Abuja, as Nigeria's capital and seat of power, offers unique investment opportunities for discerning real estate investors...",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024-12-20",
    readTime: "12 min read",
    category: "Location Guide",
    author: {
      name: "Funmi Adeyemi",
      image: "/placeholder.svg?height=50&width=50",
      title: "Legal Consultant",
    },
    tags: ["Abuja", "Investment Guide", "Capital City", "Property Market"],
  },
  {
    id: 6,
    slug: "property-financing-options-nigeria",
    title: "Property Financing Options in Nigeria: A Complete Guide",
    excerpt:
      "Explore various financing options available to property investors in Nigeria, from traditional mortgages to innovative funding solutions.",
    content:
      "Securing financing for property investment in Nigeria has become more accessible with various options now available...",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Finance Guide",
    author: {
      name: "Emeka Okafor",
      image: "/placeholder.svg?height=50&width=50",
      title: "Market Research Director",
    },
    tags: ["Financing", "Mortgages", "Investment", "Banking"],
  },
]

const categories = [
  "All",
  "Investment Guide",
  "Legal Guide",
  "Market Analysis",
  "Market Trends",
  "Location Guide",
  "Finance Guide",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-slate-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Market <span className="text-emerald-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert analysis, investment strategies, and market intelligence to help you make informed real estate
              decisions
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full font-medium transition-all duration-300 bg-white/80 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-medium rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={blogPosts[0].author.image || "/placeholder.svg"}
                      alt={blogPosts[0].author.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{blogPosts[0].author.name}</div>
                      <div className="text-sm text-gray-600">{new Date(blogPosts[0].date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={post.author.image || "/placeholder.svg"}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full mr-2"
                      />
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">{post.author.name}</div>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
