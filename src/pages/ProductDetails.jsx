import { useParams } from "react-router-dom";
import { products } from "../data/aureliaData";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) return <p className="p-10">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl"
      />

      <div>
        <h1 className="text-3xl mb-4">{product.name}</h1>
        <p className="text-gray-400 mb-6">{product.description}</p>

        <div className="mb-6 space-y-2 text-sm">
          <p>Material: {product.material}</p>
          <p>Purity: {product.purity}</p>
          <p>Weight: {product.weight}</p>
        </div>

        <p className="text-2xl mb-8">
          ₹{product.price.toLocaleString()}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: product })
            }
            className="border border-[#c9a36b] px-8 py-3 tracking-widest hover:bg-[#c9a36b] hover:text-black transition"
          >
            ADD TO CART
          </button>

          <button
            onClick={() => navigate("/checkout")}
            className="bg-[#c9a36b] text-black px-8 py-3 tracking-widest"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
