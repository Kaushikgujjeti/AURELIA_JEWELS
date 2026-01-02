import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../data/aureliaData";

const Hero = () => {
  const featuredProduct = products.find((p) => p.isFeatured);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/VideoProject.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black/60"
        animate={{ opacity: [0.2, 0.4, 0.6, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center max-w-3xl px-6 text-white"
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-6">
          AURELIA JEWELS
        </h1>

        <p className="text-sm md:text-lg text-[#c9a36b] tracking-widest mb-10 uppercase">
          Fine Jewelry Crafted for Eternity
        </p>

        <Link
          to="/shop"
          className="inline-block border border-[#c9a36b] px-8 md:px-10 py-3 md:py-4 tracking-widest uppercase hover:bg-[#c9a36b] hover:text-black transition"
        >
          Discover Collection
        </Link>
      </motion.div>

    </section>
  );
};

export default Hero;
