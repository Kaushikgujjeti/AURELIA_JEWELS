import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <p className="p-10 text-center">Your cart is empty</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl mb-10">Shopping Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b border-[#c9a36b]/20 py-6"
        >
          <div className="flex gap-6 items-center">
            <img
              src={item.image}
              className="w-24 rounded"
              alt={item.name}
            />

            <div>
              <p className="mb-1">{item.name}</p>
              <p className="text-sm text-gray-400">
                ₹{item.price.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                dispatch({ type: "DECREASE_QTY", payload: item.id })
              }
            >
              −
            </button>

            <span>{item.qty}</span>

            <button
              onClick={() =>
                dispatch({ type: "INCREASE_QTY", payload: item.id })
              }
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="text-right mt-10">
        <p className="text-xl mb-4">
          Total: ₹{subtotal.toLocaleString()}
        </p>
        <button className="bg-[#c9a36b] text-black px-10 py-3 tracking-widest">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
