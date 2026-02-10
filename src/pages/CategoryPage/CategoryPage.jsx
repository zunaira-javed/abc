import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../categories";

const CategoryPage = () => {
  const { category } = useParams(); // winter / embroidered / printed / velvet

  return (
    <div className="category-page">
      <Categories defaultCategory={category} />
    </div>
  );
};

export default CategoryPage;
