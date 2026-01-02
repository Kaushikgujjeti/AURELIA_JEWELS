import { Link } from "react-router-dom";
import { brand } from "../data/aureliaData";

const CTA = () => {
  return (
    <section className="py-24 text-center border-t border-[#c9a36b]/30">
      <h2 className="text-4xl mb-6 tracking-wide">
        {brand.tagline}
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        {brand.description}
      </p>

      <Link
        to="/shop"
        className="inline-block border border-[#c9a36b] px-12 py-4 uppercase tracking-widest hover:bg-[#c9a36b] hover:text-black transition"
      >
        Explore Jewellery
      </Link>
    </section>
  );
};

export default CTA;
