import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <p className="p-10 text-center">Please login</p>;
  }

  const handleLogout = () => {
    logout();
    navigate("/login"); // redirect after logout
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl mb-10 tracking-widest">My Account</h2>

      <div className="border border-[#c9a36b]/30 rounded-xl p-8 space-y-4">
        <p>
          <span className="text-gray-400">Name:</span> {user.name}
        </p>
        <p>
          <span className="text-gray-400">Email:</span> {user.email}
        </p>
        <p>
          <span className="text-gray-400">Phone:</span> {user.phone}
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
