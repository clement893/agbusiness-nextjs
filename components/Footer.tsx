import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AG Business Advisory</h3>
            <p className="text-gray-300 mb-4">
              Empowering Your Farm Business with Data-Driven Decisions
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="https://www.facebook.com" className="hover:text-accent transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com" className="hover:text-accent transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  AG Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Grant Services</li>
              <li>Business Planning</li>
              <li>Financial Analysis</li>
              <li>Succession Planning</li>
              <li>Market Research</li>
              <li>Land Link Opportunities</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📞 (902) 385-1191</li>
              <li>✉️ patrick@agbusinessadvisory.com</li>
              <li>📍 21 Webster St, Suite 6<br />Kentville, NS</li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Accredited by CAFA<br />
                (Canadian Association of Farm Advisors)
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AG Business Advisory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
