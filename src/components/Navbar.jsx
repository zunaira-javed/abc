import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar({ searchHandler }) {
  const { cartItems } = useCart();

  // ✅ SAFE cart count (NaN kabhi nahi aayega)
  const totalItems = cartItems.reduce(
    (sum, item) => sum + Number(item.qty || 1),
    0
  );

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="nav-left">
        <img src="/images/logo.jpg" alt="Logo" className="nav-logo" />
      </Link>

      {/* Search */}
      <div className="nav-center">
        <img className="search-icon" src="/images/srch-icon.png" alt="Search" />
        <input
          type="text"
          placeholder="Search fashion"
          className="search-input"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </div>

      {/* Right */}
      <div className="nav-right">
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <div style={{ position: "relative", cursor: "pointer" }}>
            🛒

            {/* ✅ Badge sirf tab show ho jab items > 0 hon */}
            {totalItems > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  background: "black",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  minWidth: "18px",
                  textAlign: "center",
                }}
              >
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
