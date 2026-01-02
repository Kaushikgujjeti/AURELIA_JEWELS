import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import  {products}  from "../data/aureliaData"; 

const Hero = () => {
  const featuredProduct = products.find((p) => p.isFeatured);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      
      <div className="absolute inset-0 z-0">
        <video src="/VideoProject.mp4" autoPlay loop muted></video>
      </div>

      
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/50"
        animate={{ opacity: [0, 0.3, 0.5, 0.3, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center max-w-3xl px-6 text-white"
      >
        <h1 className="text-6xl font-light tracking-wide mb-6">
          AURELIA JEWELS
        </h1>

        <p className="text-[#c9a36b] tracking-widest mb-10 uppercase text-lg">
          Fine Jewelry Crafted for Eternity
        </p>

        <Link
          to="/shop"
          className="inline-block border border-[#c9a36b] px-10 py-4 tracking-widest uppercase hover:bg-[#c9a36b] hover:text-black transition"
        >
          Discover Collection
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
