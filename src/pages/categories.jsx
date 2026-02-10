
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import unstitchedData from "../data/unstitchedData";

const Categories = ({ defaultCategory = "winter" }) => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [selectedType, setSelectedType] = useState("all");

  // 🔁 URL se category change ho to state update ho
  useEffect(() => {
    setSelectedCategory(defaultCategory);
    setSelectedType("all");
  }, [defaultCategory]);

  // 🔹 Selected category ka data
  const dresses = unstitchedData[selectedCategory] || [];

  // 🔹 FILTER LOGIC
  const filteredDresses = dresses.filter((item) => {
    if (selectedType === "all") return true;

    // 2 Piece logic
    if (selectedType === "2piece") {
      return (
        item.type === "shirt-dupatta" ||
        item.type === "shirt-trouser"
      );
    }

    return item.type === selectedType;
  });

  return (
    <div className="category-page">

      {/* ================= CATEGORY BUTTONS ================= */}


      <div className="top-bar">
        {["winter", "embroidered", "printed", "velvet"].map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedType("all");
              navigate(`/${cat}`); // <-- /unstitched nahi, simple /category
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>


      {/* ================= TYPE FILTER (ONLY WINTER) ================= */}
      {selectedCategory === "winter" && (
        <div className="top-bar">
          <button
            className={selectedType === "3piece" ? "active" : ""}
            onClick={() => setSelectedType("3piece")}
          >
            3 Piece
          </button>

          <button
            className={selectedType === "shirt-trouser" ? "active" : ""}
            onClick={() => setSelectedType("shirt-trouser")}
          >
            Shirt-Trouser
          </button>

          <button
            className={selectedType === "shirt-dupatta" ? "active" : ""}
            onClick={() => setSelectedType("shirt-dupatta")}
          >
            Shirt-Dupatta
          </button>


          <button
            className={selectedType === "shirt" ? "active" : ""}
            onClick={() => setSelectedType("shirt")}
          >
            Shirt
          </button>

          <button
            className={selectedType === "all" ? "active" : ""}
            onClick={() => setSelectedType("all")}
          >
            All
          </button>
        </div>
      )}

      {/* ================= PRODUCTS GRID ================= */}
      <div className="products-grid">
        {filteredDresses.length === 0 ? (
          <div className="no-products-found">
            <div className="no-products-content">
              <div className="no-products-icon">📦</div>
              <h2>No Products Found</h2>
              <p>We couldn't find any products in this category.</p>
              <a href="/" className="back-to-home-btn">
                Back to Home
              </a>
            </div>
          </div>
        ) : (
          filteredDresses.map((item) => (
            <div
              key={`${selectedCategory}-${item.id}`}
              className="product-card"
              onClick={() => navigate(`/${selectedCategory}/${item.id}`)}
            >
              <img src={item.image} alt={item.title || "product"} />
              {item.title && <h4>{item.title}</h4>}
              <p className="price">PKR {item.price}</p>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Categories;







