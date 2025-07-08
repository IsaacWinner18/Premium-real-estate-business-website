import Link from "next/link"

export default function CTAFooter() {
  return (
    <footer className="text-white">
      {/* Main CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-2 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Build Your <span className="text-yellow-400">Wealth</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful investors who trust us with their real estate portfolio
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="#consultation"
              className="bg-yellow-400 text-black px-8 py-4 text-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 rounded-lg"
            >
              Schedule Free Consultation
            </Link>
            <button className="glass-strong text-white px-8 py-4 text-lg font-semibold hover:glass transition-colors duration-300 rounded-lg">
              Download Property Catalog
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Get Real Estate Alerts</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 glass border border-white/20 text-white rounded-lg placeholder-white/50"
              />
              <button className="bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-300 transition-colors duration-300 rounded-lg">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white/60 mt-2">Get new listings, investment tips, and market insights weekly</p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-4">PremiumEstate</h3>
              <p className="text-white/70 mb-4">
                Nigeria's leading luxury real estate investment firm, connecting investors with premium properties.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  Facebook
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  Instagram
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Property Sales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Land Banking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Investment Advisory
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Property Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Locations</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Lagos Properties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Abuja Properties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Port Harcourt
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    International
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>📍 Victoria Island, Lagos</li>
                <li>📞 +234 901 234 5678</li>
                <li>✉️ invest@premiumestate.ng</li>
                <li>🕒 Mon-Fri: 9AM-6PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© 2025 PremiumEstate. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-white/60 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
