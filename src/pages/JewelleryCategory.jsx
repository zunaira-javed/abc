import React from "react";
import { useParams, Link } from "react-router-dom";
import jewelleryData from "../data/jewelleryData";

function JewelleryCategory() {
  const { category } = useParams();

  const products = jewelleryData[category?.toLowerCase()] || [];

  return (
    <section className="cards-page">
      <h2 className="page-title">{category}</h2>

      <div className="cards-grid">
        {products.map((item) => (
          
          // ✅ LINK ADDED HERE
          <Link
            key={item.id}
            to={`/jewellery/${category}/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="product-card">
              <div className="image-box">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="card-info">
                <p className="title">{item.title}</p>
                <p className="price">Rs. {item.price}</p>
              </div>
            </div>
          </Link>

        ))}
      </div>
    </section>
  );
}

export default JewelleryCategory;
