import Image from "next/image";

export default function Hero({ title, subtitle }) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-6">
            <div className="inline-block p-2 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium px-4 py-2 bg-white/20 rounded-full">SS Associate</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {title || "Welcome to SS Associate"}
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              {subtitle || "We provide professional, reliable and affordable services to support your business growth."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl transform rotate-3"></div>
            <Image
              src="/images/banner.png"
              alt="Business Professional Services"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Trusted by 1000+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
