import React from "react";
import { useNavigate } from "react-router-dom";
import "./FootwearSection.css";

const FootwearSection = () => {
  const navigate = useNavigate();

  return (
    <div className="footwear-section" onClick={() => navigate("/footwear")}>
      
      <div className="footwear-left">
        <h2>FOOTWEAR</h2>
        <p>Shop Stylish Shoes</p>
      </div>

      <div className="footwear-right">
        <img
          src="https://unze.com.pk/cdn/shop/files/cs12300a.jpg?v=1698482847"
          alt="Footwear"
        />
      </div>

    </div>
  );
};

export default FootwearSection;
