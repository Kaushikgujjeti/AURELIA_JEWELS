import { Link } from "react-router-dom";
import { ShoppingBag, User } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [scrolled, setScrolled] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // blur after 10px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 transition-all duration-300
        ${scrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-transparent"}
      `}
    >
      <Link to="/" className="text-2xl tracking-widest font-semibold">
        AURELIA
      </Link>

      <div className="flex gap-8 items-center">
        <Link to="/shop" className="hover:text-[#c9a36b] transition">
          Shop
        </Link>

        <Link to="/cart" className="relative">
          <ShoppingBag size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#c9a36b] text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to={user ? "/account" : "/login"}>
          <User size={22} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
