import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-primary/90 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering Your Farm Business<br />with Data-Driven Decisions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert agricultural business consulting in Nova Scotia
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Initial Consultation</h3>
                <p className="text-gray-600">
                  We meet to understand your farm's unique challenges and goals
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Customized Plan</h3>
                <p className="text-gray-600">
                  We develop a tailored strategy based on data and industry best practices
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Implementation</h3>
                <p className="text-gray-600">
                  We support you through execution and help secure funding opportunities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-primary">
              Our Services
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Comprehensive agricultural business solutions tailored to your farm's needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Grant Services",
                  description: "Navigate funding opportunities and maximize your grant applications",
                  icon: "💰"
                },
                {
                  title: "Business Planning",
                  description: "Strategic plans to grow and sustain your agricultural business",
                  icon: "📊"
                },
                {
                  title: "Financial Analysis",
                  description: "In-depth financial reviews to optimize profitability",
                  icon: "💹"
                },
                {
                  title: "Succession Planning",
                  description: "Smooth generational transitions for family farms",
                  icon: "👨‍👩‍👧‍👦"
                },
                {
                  title: "Market Research",
                  description: "Data-driven insights into agricultural markets and trends",
                  icon: "📈"
                },
                {
                  title: "Land Link Opportunities",
                  description: "Connect with land and partnership opportunities",
                  icon: "🌾"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/services" className="text-accent hover:text-accent-dark font-semibold">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Why Choose AG Business Advisory
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Opportunity Identification</h3>
                <p className="text-gray-200">
                  We help you discover and capitalize on growth opportunities and funding programs
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Risk Mitigation</h3>
                <p className="text-gray-200">
                  Strategic planning to protect your farm from market volatility and uncertainties
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Generational Legacy</h3>
                <p className="text-gray-200">
                  Ensure your farm thrives for generations through proper succession planning
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-xl text-gray-700 italic mb-6">
                "AG Business Advisory helped us navigate complex grant applications and develop a solid business plan. Their expertise was invaluable to our farm's growth."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-primary">Kraig Porter</p>
                  <p className="text-gray-600">efficiencyNS</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Grow Your Farm Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your farm's goals and challenges
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-accent px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
