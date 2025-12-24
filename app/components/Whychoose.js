export default function Whychoose() {
  const whychoose = [
    {
      icon: "👥",
      title: "Experienced Team",
      desc: "Our skilled professionals bring years of expertise to deliver top-notch solutions."
    },
    {
      icon: "⭐",
      title: "Quality Service",
      desc: "We prioritize quality in every project, ensuring reliable and efficient results."
    },
    {
      icon: "💡",
      title: "Innovative Solutions",
      desc: "Cutting-edge technology and creative approaches to solve complex challenges."
    },
    {
      icon: "🤝",
      title: "Customer Satisfaction",
      desc: "Dedicated to exceeding expectations and building long-term partnerships."
    }
  ];

  return (
    <section className="py-16 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0056D2] mb-4">
          Why Choose Us
        </h2>
        <p className="text-center mt-2 mb-12 text-black">
           Discover what sets us apart in delivering exceptional services.
         </p>

        <div className="grid md:grid-cols-4 gap-6">
          {whychoose.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-[#0056D2] text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">{f.title}</h3>
              <p className="text-black">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}