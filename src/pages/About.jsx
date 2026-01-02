import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-light tracking-wide mb-6">
          About Aurelia
        </h1>
        <p className="text-[#c9a36b] tracking-widest uppercase">
          Crafted for Eternity
        </p>
      </motion.div>

      {/* Brand Story */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-light mb-6">Our Story</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Founded in 2021, <span className="text-white">Aurelia Jewels</span> was
            born from a passion for timeless design and exceptional
            craftsmanship. Each creation reflects a perfect harmony of heritage
            artistry and modern elegance.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We believe jewellery is not just an accessory, but an expression of
            emotion, identity, and legacy — pieces meant to be cherished today
            and passed on for generations.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="https://images.pexels.com/photos/16274923/pexels-photo-16274923.jpeg"
          alt="Luxury Jewelry"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Values */}
      <div className="mt-28">
        <h2 className="text-3xl font-light mb-12 text-center">
          Our Philosophy
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Timeless Design",
              text: "Inspired by classic elegance and refined modern aesthetics.",
            },
            {
              title: "Exceptional Craft",
              text: "Handcrafted by skilled artisans using ethically sourced materials.",
            },
            {
              title: "Enduring Quality",
              text: "Designed to last, preserving beauty and brilliance for a lifetime.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-[#c9a36b]/20 rounded-xl p-8 text-center"
            >
              <h3 className="text-xl mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;