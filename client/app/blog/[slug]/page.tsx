import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

// Mock blog data - in real app, this would come from CMS or API
const blogPosts = {
  "smart-places-buy-land-lagos-2025": {
    id: 1,
    slug: "smart-places-buy-land-lagos-2025",
    title: "5 Smart Places to Buy Land in Lagos 2025",
    excerpt:
      "Discover the fastest-growing areas in Lagos with the highest ROI potential for land banking investments.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Investment Guide",
    author: {
      name: "Adebayo Johnson",
      image: "/placeholder.svg?height=100&width=100",
      title: "Senior Investment Analyst",
      bio: "Adebayo has over 10 years of experience in Nigerian real estate markets and has helped investors achieve over ₦50 billion in property acquisitions.",
    },
    tags: ["Lagos", "Land Banking", "Investment", "ROI"],
    content: `
      <p>Lagos continues to be Nigeria's economic powerhouse, and smart investors are positioning themselves in strategic locations that promise exceptional returns. After analyzing market trends, infrastructure development, and government policies, we've identified five areas that stand out for land banking in 2025.</p>

      <h2>1. Epe Corridor - The New Frontier</h2>
      <p>The Epe axis has emerged as one of the most promising investment destinations in Lagos. With the ongoing construction of the 4th Mainland Bridge and the proposed Epe Airport, this area is set for massive transformation.</p>
      
      <ul>
        <li><strong>Current Price Range:</strong> ₦3M - ₦8M per plot</li>
        <li><strong>Projected 18-Month ROI:</strong> 200-300%</li>
        <li><strong>Key Infrastructure:</strong> 4th Mainland Bridge, Epe Airport, Lagos-Calabar Coastal Highway</li>
        <li><strong>Investment Highlight:</strong> Government acquisition for major projects driving up land values</li>
      </ul>

      <h2>2. Ibeju-Lekki - The Established Winner</h2>
      <p>While no longer a secret, Ibeju-Lekki continues to deliver consistent returns. The presence of Dangote Refinery, Lekki Deep Sea Port, and the Free Trade Zone makes this a safe bet for conservative investors.</p>
      
      <ul>
        <li><strong>Current Price Range:</strong> ₦5M - ₦15M per plot</li>
        <li><strong>Projected 18-Month ROI:</strong> 150-250%</li>
        <li><strong>Key Infrastructure:</strong> Dangote Refinery, Deep Sea Port, Free Trade Zone</li>
        <li><strong>Investment Highlight:</strong> Proven track record with multiple success stories</li>
      </ul>

      <h2>3. Agbowa - The Hidden Gem</h2>
      <p>Located along the Lagos-Sagamu expressway, Agbowa offers excellent value for money. The area benefits from proximity to both Lagos and Ogun State, making it attractive for residential and commercial development.</p>
      
      <ul>
        <li><strong>Current Price Range:</strong> ₦2M - ₦6M per plot</li>
        <li><strong>Projected 18-Month ROI:</strong> 180-280%</li>
        <li><strong>Key Infrastructure:</strong> Lagos-Sagamu Expressway, proposed rail line</li>
        <li><strong>Investment Highlight:</strong> Low entry point with high appreciation potential</li>
      </ul>

      <h2>4. Magboro Extension - The Smart Choice</h2>
      <p>As Magboro becomes saturated, smart investors are looking at the extension areas. These locations offer the same connectivity benefits at a fraction of the cost.</p>
      
      <ul>
        <li><strong>Current Price Range:</strong> ₦4M - ₦10M per plot</li>
        <li><strong>Projected 18-Month ROI:</strong> 160-240%</li>
        <li><strong>Key Infrastructure:</strong> Lagos-Ibadan Expressway, proximity to tech hubs</li>
        <li><strong>Investment Highlight:</strong> Growing tech ecosystem driving demand</li>
      </ul>

      <h2>5. Badagry Corridor - The Long-term Play</h2>
      <p>With the Lagos-Badagry Expressway expansion and the proposed Badagry Deep Sea Port, this corridor represents excellent long-term value. Patient investors will be rewarded handsomely.</p>
      
      <ul>
        <li><strong>Current Price Range:</strong> ₦1.5M - ₦5M per plot</li>
        <li><strong>Projected 18-Month ROI:</strong> 150-200%</li>
        <li><strong>Key Infrastructure:</strong> Badagry Expressway, proposed deep sea port</li>
        <li><strong>Investment Highlight:</strong> Lowest entry point with government backing</li>
      </ul>

      <h2>Investment Tips for Success</h2>
      <p>When investing in any of these locations, consider the following:</p>
      
      <ol>
        <li><strong>Verify Documentation:</strong> Ensure all lands have proper C of O or are in the process of obtaining one</li>
        <li><strong>Check Infrastructure Timeline:</strong> Understand when proposed projects will be completed</li>
        <li><strong>Consider Accessibility:</strong> Choose plots with good road access and proximity to major highways</li>
        <li><strong>Think Long-term:</strong> Land banking requires patience - don't expect overnight returns</li>
        <li><strong>Work with Experts:</strong> Partner with reputable real estate firms who understand the market</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Lagos land banking remains one of the most reliable wealth-building strategies in Nigeria. These five locations offer varying risk-reward profiles to suit different investor appetites. Remember, the key to successful land banking is buying in the path of development and holding for the long term.</p>

      <p>Ready to start your land banking journey? Contact our investment team for personalized recommendations based on your budget and investment goals.</p>
    `,
    relatedPosts: [
      {
        slug: "c-of-o-vs-gazette-difference",
        title: "C of O vs Gazette: What's the Difference?",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        slug: "real-estate-vs-crypto-why-land-wins",
        title: "Real Estate vs Crypto: Why Land Still Wins",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  "c-of-o-vs-gazette-difference": {
    id: 2,
    slug: "c-of-o-vs-gazette-difference",
    title: "C of O vs Gazette: What's the Difference?",
    excerpt:
      "Understanding the legal documents that protect your property investment and ensure clear ownership.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Legal Guide",
    author: {
      name: "Funmi Adeyemi",
      image: "/placeholder.svg?height=100&width=100",
      title: "Legal Consultant",
      bio: "Funmi is a qualified lawyer specializing in property law with over 8 years of experience helping investors navigate Nigerian real estate regulations.",
    },
    tags: ["Legal", "Documentation", "C of O", "Property Rights"],
    content: `
      <p>When investing in Nigerian real estate, understanding the legal documentation is crucial for protecting your investment. Two of the most important documents you'll encounter are the Certificate of Occupancy (C of O) and Gazette. While both are government-issued documents, they serve different purposes and offer varying levels of security.</p>

      <h2>What is a Certificate of Occupancy (C of O)?</h2>
      <p>A Certificate of Occupancy is the highest form of land documentation in Nigeria. It's issued by the state government and grants the holder statutory right of occupancy for a specified period, typically 99 years.</p>

      <h3>Key Features of C of O:</h3>
      <ul>
        <li><strong>Legal Recognition:</strong> Recognized by all financial institutions and courts</li>
        <li><strong>Transferable:</strong> Can be easily transferred, sold, or used as collateral</li>
        <li><strong>Renewable:</strong> Can be renewed before expiration</li>
        <li><strong>Comprehensive:</strong> Contains detailed information about the land and owner</li>
        <li><strong>Government Backing:</strong> Fully backed by state government</li>
      </ul>

      <h2>What is a Gazette?</h2>
      <p>A Gazette is an official government publication that announces the acquisition or allocation of land. It's essentially a public notice that land has been acquired by the government for public use or allocated to individuals or organizations.</p>

      <h3>Key Features of Gazette:</h3>
      <ul>
        <li><strong>Public Notice:</strong> Serves as official announcement of land acquisition/allocation</li>
        <li><strong>Preliminary Document:</strong> Often precedes the issuance of C of O</li>
        <li><strong>Limited Transferability:</strong> More difficult to transfer or use as collateral</li>
        <li><strong>Temporary Nature:</strong> Usually a step toward obtaining C of O</li>
        <li><strong>Specific Purpose:</strong> Often tied to specific development projects</li>
      </ul>

      <h2>Key Differences</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Aspect</th>
            <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Certificate of Occupancy</th>
            <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Gazette</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Legal Status</strong></td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Highest form of title</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Preliminary documentation</td>
          </tr>
          <tr>
            <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Bank Acceptance</strong></td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Accepted by all banks</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Limited bank acceptance</td>
          </tr>
          <tr>
            <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Transferability</strong></td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Easily transferable</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Complex transfer process</td>
          </tr>
          <tr>
            <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Development Rights</strong></td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Full development rights</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Limited development rights</td>
          </tr>
          <tr>
            <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Duration</strong></td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">99 years (renewable)</td>
            <td style="border: 1px solid #dee2e6; padding: 12px;">Varies by purpose</td>
          </tr>
        </tbody>
      </table>

      <h2>Which Should You Choose?</h2>
      
      <h3>Choose C of O if:</h3>
      <ul>
        <li>You want maximum security and legal protection</li>
        <li>You plan to use the property as collateral for loans</li>
        <li>You need to transfer or sell the property easily</li>
        <li>You're making a long-term investment</li>
        <li>You want full development rights</li>
      </ul>

      <h3>Consider Gazette if:</h3>
      <ul>
        <li>You're working with a limited budget</li>
        <li>The land is part of a government scheme</li>
        <li>You plan to upgrade to C of O later</li>
        <li>You're comfortable with higher risk for potentially higher returns</li>
      </ul>

      <h2>The Upgrade Path</h2>
      <p>Many investors start with Gazette and later upgrade to C of O. This strategy can be cost-effective but requires careful planning:</p>

      <ol>
        <li><strong>Verify Upgrade Possibility:</strong> Ensure the Gazette can be converted to C of O</li>
        <li><strong>Understand Costs:</strong> Factor in upgrade fees and processing time</li>
        <li><strong>Check Requirements:</strong> Ensure you meet all criteria for C of O issuance</li>
        <li><strong>Timeline Planning:</strong> Allow 6-18 months for the upgrade process</li>
      </ol>

      <h2>Red Flags to Watch</h2>
      <p>When dealing with either document, be aware of these warning signs:</p>

      <ul>
        <li>Unusually low prices compared to market rates</li>
        <li>Sellers reluctant to show original documents</li>
        <li>Properties in areas with ongoing land disputes</li>
        <li>Documents that look altered or suspicious</li>
        <li>Pressure to make quick decisions without due diligence</li>
      </ul>

      <h2>Due Diligence Checklist</h2>
      <p>Before purchasing any property, complete this checklist:</p>

      <ol>
        <li>Verify document authenticity with issuing authority</li>
        <li>Conduct a search at the Land Registry</li>
        <li>Check for any encumbrances or liens</li>
        <li>Verify the seller's identity and ownership</li>
        <li>Inspect the physical property and boundaries</li>
        <li>Engage a qualified lawyer for legal review</li>
        <li>Obtain a surveyor's report</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Both C of O and Gazette have their place in Nigerian real estate investment. While C of O offers superior security and flexibility, Gazette can provide entry-level opportunities for budget-conscious investors. The key is understanding your investment goals, risk tolerance, and the specific characteristics of each document type.</p>

      <p>Remember, regardless of which document you choose, always conduct thorough due diligence and work with qualified professionals to protect your investment.</p>
    `,
    relatedPosts: [
      {
        slug: "smart-places-buy-land-lagos-2025",
        title: "5 Smart Places to Buy Land in Lagos 2025",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        slug: "property-financing-options-nigeria",
        title: "Property Financing Options in Nigeria",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  "property-financing-options-nigeria": {
    id: 3,
    slug: "property-financing-options-nigeria",
    title: "Property Financing Options in Nigeria: A Complete Guide",
    excerpt:
      "Explore the traditional and innovative financing routes available to Nigerian real-estate investors, from conventional mortgages to crowdfunding.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Finance Guide",
    author: {
      name: "Emeka Okafor",
      image: "/placeholder.svg?height=100&width=100",
      title: "Market Research Director",
      bio: "Emeka leads our research team, analysing Nigerian property trends and financing frameworks for over a decade.",
    },
    tags: ["Financing", "Mortgages", "Investment", "Banking"],
    content: `
      <p>Securing capital for real estate can be challenging, but Nigeria now offers more structured and innovative financing solutions than ever before. In this guide we break down the key options, qualifying criteria, and cost implications so you can choose the best fit for your investment strategy.</p>

      <h2>1. Conventional Mortgage Loans</h2>
      <p>Commercial banks typically offer mortgages with tenors ranging from 5-20&nbsp;years at interest rates of 18-24 % per annum. To qualify you’ll need proof of steady income, a 20-30 % down-payment, and the property’s title documents.</p>
      <h2>2. National Housing Fund (NHF)</h2>
      <p>The Federal Mortgage Bank’s NHF programme allows eligible Nigerians to access up to ₦15 million at single-digit interest rates (currently 6 %).</p>
      <h2>3. Developer Instalment Plans</h2>
      <p>Many off-plan developers now offer 12-36 month payment plans with little or no interest—an attractive option for investors seeking flexibility.</p>
      <h2>4. Pension-Backed Mortgages</h2>
      <p>Pension contributors can now unlock up to 25 % of their RSA balance towards home ownership, reducing the upfront cash requirement.</p>
      <h2>5. Crowdfunding & REITs</h2>
      <p>Fin-tech platforms allow multiple investors pool funds to acquire or construct property, lowering entry barriers. Always verify SEC registration before committing.</p>

      <h2>Final Thoughts</h2>
      <p>Selecting the right financing mix depends on your cash-flow, risk tolerance and investment horizon. Consult qualified advisors and compare total borrowing costs (including fees) before signing.</p>
    `,
    relatedPosts: [
      {
        slug: "c-of-o-vs-gazette-difference",
        title: "C of O vs Gazette: What's the Difference?",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        slug: "real-estate-vs-crypto-why-land-wins",
        title: "Real Estate vs Crypto: Why Land Still Wins",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-yellow-700">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-yellow-700">
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </div>
          </nav>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-yellow-100 text-yellow-900 px-3 py-1 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
              <span className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center mb-8">
              <Image
                src="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg"
                alt={post.author.name}
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">
                  {post.author.name}
                </div>
                <div className="text-sm text-gray-600">{post.author.title}</div>
                <div className="text-sm text-gray-500 mt-1">
                  {post.author.bio}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <Image
              src="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg"
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto md:px-4 px-2">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl  py-8 md:px-8 px-4 md:p-12 shadow-xl border border-white/20">
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-yellow-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-ul:text-black prose-ol:text-black"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {post.relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751988615/Dubai-real-estate_hawrbw.jpg"
                  alt={relatedPost.title}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-black group-hover:text-yellow-700 transition-colors">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-yellow-900 mb-6">
              Get personalized property recommendations from our expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#consultation"
                className="bg-white text-yellow-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Consultation
              </Link>
              <Link
                href="/properties"
                className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                View Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
