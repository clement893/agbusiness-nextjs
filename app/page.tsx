import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Modern & Impactful */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-4xl">
              <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
                <span className="text-emerald-200 text-sm font-medium">🌾 Agricultural Business Consulting</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Empowering Your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-300">
                  Farm Business
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-2xl leading-relaxed">
                Data-driven decisions for sustainable growth in Nova Scotia's agricultural sector
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 text-emerald-950 rounded-lg text-lg font-semibold hover:bg-lime-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Free Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-emerald-700/50">
                <div>
                  <div className="text-4xl font-bold text-lime-400 mb-2">15+</div>
                  <div className="text-emerald-200">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-lime-400 mb-2">200+</div>
                  <div className="text-emerald-200">Farms Helped</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-lime-400 mb-2">$5M+</div>
                  <div className="text-emerald-200">Grants Secured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Modern Cards */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tailored agricultural business services to help your farm thrive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Grant Services",
                  description: "Navigate funding opportunities and maximize your grant applications with expert guidance",
                  icon: "💰",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Business Planning",
                  description: "Strategic plans to grow and sustain your agricultural business for long-term success",
                  icon: "📊",
                  color: "from-blue-500 to-cyan-600"
                },
                {
                  title: "Financial Analysis",
                  description: "In-depth financial reviews to optimize profitability and identify growth opportunities",
                  icon: "💹",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Succession Planning",
                  description: "Smooth generational transitions for family farms with comprehensive planning",
                  icon: "👨‍👩‍👧‍👦",
                  color: "from-orange-500 to-red-600"
                },
                {
                  title: "Market Research",
                  description: "Data-driven insights into agricultural markets and emerging trends",
                  icon: "📈",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  title: "Land Link Opportunities",
                  description: "Connect with land and partnership opportunities to expand your operations",
                  icon: "🌾",
                  color: "from-amber-500 to-yellow-600"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Timeline Style */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600">
                A proven approach to agricultural business success
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-lime-500 hidden md:block"></div>

                {[
                  {
                    step: "01",
                    title: "Initial Consultation",
                    description: "We meet to understand your farm's unique challenges, goals, and opportunities for growth"
                  },
                  {
                    step: "02",
                    title: "Customized Plan",
                    description: "We develop a tailored strategy based on data analysis and industry best practices"
                  },
                  {
                    step: "03",
                    title: "Implementation & Support",
                    description: "We guide you through execution and help secure funding opportunities"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-0 md:pl-24 mb-12 last:mb-0">
                    <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg hidden md:flex">
                      {item.step}
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-3 md:hidden">
                        <span className="text-4xl font-bold text-emerald-500 mr-4">{item.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <svg className="w-16 h-16 mx-auto text-lime-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                "AG Business Advisory helped us navigate complex grant applications and develop a solid business plan. Their expertise was invaluable to our farm's growth."
              </p>
              <div>
                <p className="font-bold text-xl text-lime-400">Kraig Porter</p>
                <p className="text-emerald-300">efficiencyNS</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-lime-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6">
              Ready to Grow Your Farm Business?
            </h2>
            <p className="text-xl text-emerald-900 mb-10 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your farm's goals and challenges
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-emerald-950 text-white rounded-lg text-lg font-semibold hover:bg-emerald-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Contact Us Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
