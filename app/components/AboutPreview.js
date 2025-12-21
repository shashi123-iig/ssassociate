import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-16 bg-[#F3F7FF]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl font-bold text-[#0056D2]">About SS Associate</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            SS Associate is committed to providing reliable, transparent and 
            affordable financial and business services. With professional experience,
            we help individuals and businesses manage compliance and growth effectively.
          </p>

          <a
            href="/about"
            className="inline-block mt-6 text-[#0056D2] font-semibold hover:underline"
          >
            Read More →
          </a>
        </div>

        <Image src="/images/about_us.jpg" alt="About SS Associate" width={500} height={300} className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
}
