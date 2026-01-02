import { Link } from "react-router-dom";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "backdrop-blur-md bg-black/60 shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 text-white">
        
        {/* Logo */}
        <Link to="/" className="text-2xl tracking-widest font-semibold">
          AURELIA
        </Link>

        {/* Desktop links (unchanged) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/shop" className="hover:text-[#c9a36b] transition">
            Shop
          </Link>

          <Link to="/about" className="hover:text-[#c9a36b] transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-[#c9a36b] transition">
            Contact
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

        {/* Mobile right icons */}
        <div className="flex items-center gap-5 md:hidden">
          <Link to="/shop">
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

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-black/90 via-black/80 to-black/90 backdrop-blur-lg px-6 py-6 space-y-4 text-white">
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-lg hover:text-[#c9a36b]"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-lg hover:text-[#c9a36b]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
