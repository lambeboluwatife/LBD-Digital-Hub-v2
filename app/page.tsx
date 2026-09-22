import CoreServices from "./Pages/Home/CoreServices";
import CTABanner from "./Pages/Home/CTABanner";
import FeaturedProjects from "./Pages/Home/FeaturedProjects";
import Hero from "./Pages/Home/Hero";
import Testimonials from "./Pages/Home/Testimonials";
import TheProcess from "./Pages/Home/TheProcess";
import Trusted from "./Pages/Home/Trusted";

export default function Home() {
  return (
    <div>
      <Hero />
      <Trusted />
      <CoreServices />
      <TheProcess />
      <FeaturedProjects />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
