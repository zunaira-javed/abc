import React from "react";
import summerData from "../../data/summerData";
import "./summer.css";

const Summer = () => {
  return (
    <div className="summer-page">
      <h2 className="summer-title">{summerData.title}</h2>

      <div className="summer-grid">
        {summerData.products.map((item) => (
          <div className="summer-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>PKR {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summer;
