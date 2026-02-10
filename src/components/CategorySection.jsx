import React from "react";

const categoryData = [
  { title: "Women Western", img: "/images/women-western.webp" },
  // { title: "Jewelry", img: "/images/jewelry.webp" },
  { title: "Western", img: "/images/west.webp" },
  // { title: "Boy Newborn", img: "/images/Boy_newborn.webp" },
  // { title: "Eastern", img: "/images/eastern.png" },
  // { title: "Girl Newborn", img: "/images/girl newborn.png" },

  { title: "Festive Wear", img: "/images/festive-wear.png" },
  { title: "Luxury Wear", img: "/images/luxury-wear.png" },
  { title: "Daily Wear", img: "/images/daily-wear.png" },
  { title: "Fusion", img: "/images/fashion.png" },
  { title: "Modest Wear", img: "/images/modest-wear.png" },
  { title: "Girl Eastern", img: "/images/girl-easrtern.png" }
];

const CategorySection = () => {
  return (

    <div className="category-wrapper">
      <img 
        src="/images/carousel-img1.webp" 
        alt="banner" 
        className="big-banner"
      />


      {/* Categories */}
      <div className="category-grid">
        {categoryData.map((item, index) => (
          <div className="category-box" key={index}>
            <img src={item.img} alt={item.title} className="category-img" />
            <p className="category-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
