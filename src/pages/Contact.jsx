import { motion } from "framer-motion";

const Contact = () => {
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
          Contact Us
        </h1>
        <p className="text-[#c9a36b] tracking-widest uppercase">
          We’d Love to Hear From You
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-light mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Whether you’re seeking guidance, custom designs, or support with an
            order, our team is here to assist you.
          </p>

          <div className="space-y-4 text-gray-400">
            <p>
              <span className="text-white">Email:</span> support@aureliajewels.com
            </p>
            <p>
              <span className="text-white">Phone:</span> +91 9XXXXXXXXX
            </p>
            <p>
              <span className="text-white">Location:</span> India
            </p>
            <p>
              <span className="text-white">Hours:</span> Mon – Sat, 10AM – 7PM
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border border-[#c9a36b]/30 rounded-xl p-10 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="border border-[#c9a36b] px-10 py-3 tracking-widest uppercase hover:bg-[#c9a36b] hover:text-black transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;