import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import FeaturedProducts from "../components/FeaturedProducts";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
      <Footer/>
    </>
  );
};

export default Home;
