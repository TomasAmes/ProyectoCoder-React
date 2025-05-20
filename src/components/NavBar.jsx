import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { getCategories } from "../services/products.service";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-bold text-blue-600"
        >
          <span className="text-2xl">🛍️</span>
          <span>Mi Tienda</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600 transition-colors"
            }
          >
            Inicio
          </NavLink>

          {!loading &&
            categories.map((category) => (
              <NavLink
                key={category.id}
                to={`/category/${category.id}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600 transition-colors"
                }
              >
                {category.name}
              </NavLink>
            ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <CartWidget />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
