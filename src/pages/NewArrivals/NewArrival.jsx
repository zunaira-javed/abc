import React from "react";
import NewArrivalData from "./NewArrivalData";
import "./NewArrival.css"; // CSS file import

const NewArrival = () => {
  return (
    <div className="newarrival-page">
      <h2 className="newarrival-title">{NewArrivalData.title}</h2>

      <div className="newarrival-grid">
        {NewArrivalData.products.map((item) => (
          <div className="newarrival-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>PKR {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
