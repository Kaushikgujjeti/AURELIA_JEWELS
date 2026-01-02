import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const registeredUser = JSON.parse(
      localStorage.getItem("aureliaRegisteredUser")
    );

    if (
      registeredUser &&
      registeredUser.email === data.email &&
      registeredUser.password === data.password
    ) {
      // Login session (no password)
      login({
        name: registeredUser.name,
        email: registeredUser.email,
        phone: registeredUser.phone,
      });

      navigate("/account");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-[#c9a36b]/40 p-10 rounded-xl w-96"
      >
        <h2 className="text-2xl mb-8 text-center tracking-widest">
          Welcome Back
        </h2>

        <input {...register("email")} type="email" placeholder="Email" className="w-full mb-4" />

        <input {...register("password")} type="password" placeholder="Password" className="w-full mb-6" />

        <button className="w-full border border-[#c9a36b] py-3 tracking-widest hover:bg-[#c9a36b] hover:text-black transition">
          LOGIN
        </button>

        <p className="text-center text-sm mt-6 text-gray-400">
          Not registered?{" "}
          <Link to="/signup" className="text-[#c9a36b]">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
