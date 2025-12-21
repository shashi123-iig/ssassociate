export default function ServicesHome() {
  const services = [
    {
      title: "GST Filing",
      image: "/images/about_us.jpg",
    },
    {
      title: "IT Return Filing",
      image: "/images/about_us.jpg",
    },
    {
      title: "Business Registration",
      image: "/images/about_us.jpg",
    },
    {
      title: "Accounting Services",
      image: "/images/about_us.jpg",
    },
    {
      title: "Digital Marketing",
      image: "/images/about_us.jpg",
    },
    {
      title: "Cyber Security",
      image: "/images/about_us.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#0056D2]">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Complete business & financial solutions under one roof.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              {/* Title */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
