import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="group border border-[#c9a36b]/30 rounded-xl p-6 hover:shadow-xl transition">
      <div className="overflow-hidden">
        <img
          src={product.image}
          className="h-48 mx-auto group-hover:scale-105 transition duration-500"
        />
      </div>

      <h3 className="mt-4 text-sm tracking-wide">
        {product.name}
      </h3>

      <p className="mt-2 text-[#c9a36b] font-medium">
        ₹{product.price.toLocaleString()}
      </p>

      <Link
        to={`/product/${product.id}`}
        className="block mt-4 text-center border border-[#c9a36b] py-2 uppercase text-xs tracking-widest hover:bg-[#c9a36b] hover:text-black transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
