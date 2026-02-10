import React from "react";
import WinterData from "./WinterData";
import "./Winter.css";


const Winter = () => {
  return (
    <div className="Winter-page">
      <h2 className="Winter-title">{WinterData.title}</h2>

      <div className="Winter-grid">
        {WinterData.products.map((item) => (
          <div className="Winter-card" key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>PKR {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Winter;
