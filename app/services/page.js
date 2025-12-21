import Hero from "../components/Hero";
import ServicesHome from "../components/ServicesHome";

export default function ServicesPage() {
  return (
    <main>
      <Hero 
        title="Our Services"
        subtitle="What we offer to our customers"
      />
      <ServicesHome />
    </main>
  );
}
