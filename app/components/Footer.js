export default function Footer() {
  return (
    <footer className="w-full bg-[#0A1A3C] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold mb-3">SS Associate</h2>
            <p className="text-gray-400">
              We provide professional, reliable and affordable services to support your business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {/* <li><a href="/" className="hover:text-white">Home</a></li> */}
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-300">Email: ssassociate@gmail.com</p>
            <p className="text-gray-300">Phone: +91 8594942756</p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} SS Associate. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
