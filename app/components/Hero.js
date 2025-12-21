import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#0056D2] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            Welcome to SS Associate
          </h1>
          <p className="mt-4 text-lg text-white">
            We provide professional, reliable and affordable services to support your business growth.
          </p>

          <a
            href="/services"
            className="inline-block mt-6 bg-white text-[#0056D2] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Explore Our Services
          </a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/images/homepage_new.png"
            alt="Business"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
