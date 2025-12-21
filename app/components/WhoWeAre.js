import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-[#0056D2]">
            Who We Are
          </h2>

          <p className="text-gray-700 mt-4 leading-relaxed">
            We are a team of tech enthusiasts who love to push boundaries and set new benchmarks in the realm of software development. We aim to blur the gap between imagination and innovation to remain ahead in the digital landscape.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
        <Image
          src="/images/who_section.png"
          alt="Our Team"
          width={400}
          height={300}
          className="rounded-lg w-full max-w-md"
        />
        </div>

      </div>
    </section>
  );
}
