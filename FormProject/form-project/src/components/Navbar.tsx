import React from "react";
import { assets } from "../assets/Assets";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";
// import { CartItem } from "../Pages/Cart";

// interface NavbarProps {
//   cartItems: CartItem[];
// }

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  // const totalItems = cartItems.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <NavLink to="/ProductPage" className="left-side">
        <img src={assets.Logo} />
      </NavLink>
      <div className="right-side">
        <NavLink className="nvlink" to="/products">
          Home
        </NavLink>
        <NavLink className="nvlink" to="/about">
          About
        </NavLink>
        <NavLink className="nvlink" to="/newArrival">
          New arrival
        </NavLink>
        <NavLink className="nvlink" to="/contact">
          Contact
        </NavLink>
        <button className="logout-btn" onClick={handleLogout}>
          Log out
        </button>
        <NavLink to="/Cart" className="cart-icon-container">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          {cartItems.length > 0 && (
            <span className="cart-badge">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
