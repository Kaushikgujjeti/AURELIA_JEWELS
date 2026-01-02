import { useForm } from "react-hook-form";

const Checkout = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-md mx-auto">
      <input {...register("name")} placeholder="Name" className="input" />
      <input {...register("address")} placeholder="Address" className="input" />
      <button className="mt-4 bg-black text-white w-full py-2">
        Place Order
      </button>
    </form>
  );
};

export default Checkout;
