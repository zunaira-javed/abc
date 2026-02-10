import React from "react";


const storeData = [
  { title: "Women", img: "/images/women.jpg" },
  // { title: "Men", img: "/images/men.webp" },
  // { title: "Kids", img: "/images/baby.jpeg" },
  { title: "West", img: "/images/west.webp" },
  { title: "Jewelry", img: "/images/jewelry.jpg" },
  { title: "Retail", img: "/images/Retail.webp" }
];

const ShopStores = () => {
  return (
    <div className="stores-wrapper">
      <h2 className="stores-heading">Unstitched</h2>

      <div className="stores-container">
        {storeData.map((item, index) => (
          <div className="store-box" key={index}>
            <img src={item.img} alt={item.title} className="store-img" />
            <p className="store-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopStores;
