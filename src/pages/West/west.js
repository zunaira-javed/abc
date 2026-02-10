import React from "react";
import westernData from "./westernData";
import "./west.css";

const West = () => {
  return (
    <div className="west-page">
      <h2 className="west-title">{westernData.title}</h2>

      <div className="west-grid">
        {westernData.products.map((item) => (
          <div className="west-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>PKR {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default West;


