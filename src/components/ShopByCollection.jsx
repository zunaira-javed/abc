


import React from "react";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    title: "Embroided-Velvet",
    img: "https://www.limelight.pk/cdn/shop/files/W1868ST-SML-227-VelourCo-ordSet-Embroidered_5.jpg?v=1765799157&width=533",
    path: "Embroided-Velvet",
  },
  {
    title: "SILK",
    img: "/images/silk.webp",
    path: "silk",
  },
  {
    title: "CO-ORDS",
    img: "/images/co-ords.webp",
    path: "co-ords",
  },
  {
    title: "western-wear",
    img:"https://www.limelight.pk/cdn/shop/files/W2189ST-SML-014_2.jpg?v=1765880856&width=533",
    path: "western",
  },
];

const ShopByCollection = () => {
  const navigate = useNavigate();

  return (
    <div className="collection-wrapper">
      <h2 className="collection-heading">SHOP BY COLLECTION</h2>

      <div className="collection-grid">
        {collections.map((item, index) => (
          <div
            key={index}
            className="collection-card"
            onClick={() => navigate(`/collection/${item.path}`)}
          >
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCollection;
