import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Whychoose from "./components/Whychoose";
import ServicesHome from "./components/ServicesHome";
import AboutPreview from "./components/AboutPreview";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre/>
      <Whychoose/>
      <ServicesHome />
      <AboutPreview />
      <CTA />
    </main>
  );
}
