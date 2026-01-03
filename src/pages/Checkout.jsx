import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const { register, handleSubmit, reset } = useForm();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const onSubmit = (data) => {
    console.log("Order Details:", data);
    console.log("Cart Items:", cart);
    setOrderPlaced(true);
    reset();
  };

  const handleClose = () => {
    setOrderPlaced(false)
    navigate("/");
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl mb-10">Checkout</h2>

      {/* Order summary */}
      <div className="border mb-10 p-6">
        <h3 className="text-xl mb-4">Order Summary</h3>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mb-3 text-sm"
          >
            <span>
              {item.name} × {item.qty}
            </span>
            <span>₹{(item.price * item.qty).toLocaleString()}</span>
          </div>
        ))}

        <div className="flex justify-between font-semibold mt-4">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>

      {/* Address form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
        <h3 className="text-xl mb-2">Delivery Address</h3>

        <input
          {...register("name", { required: true })}
          placeholder="Full Name"
          className="w-full border px-4 py-2"
        />

        <input
          {...register("phone", { required: true })}
          placeholder="Phone Number"
          className="w-full border px-4 py-2"
        />

        <textarea
          {...register("address", { required: true })}
          placeholder="Full Address"
          className="w-full border px-4 py-2"
          rows="3"
        />

        <button
          type="submit"
          className="bg-black text-white w-full py-3 mt-4"
        >
          Place Order
        </button>
      </form>

      {/* Success popup */}
      {orderPlaced && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white text-black rounded-2xl p-8 text-center max-w-sm w-full">
            <h3 className="text-2xl mb-4">Order Placed 🎉</h3>
            <p className="mb-6">
              Your order has been placed successfully.
            </p>
            <button
              onClick={() => handleClose()}
              className="bg-black text-white px-6 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
