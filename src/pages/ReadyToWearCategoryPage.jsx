import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import readyToWearData from "../data/readyToWearData";

const ReadyToWearCategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const products = readyToWearData[category]?.products || [];

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {category?.toUpperCase()}
      </h2>

      {products.length === 0 && (
        <p className="text-red-500 text-center text-lg">
          No products found
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
         <div
  key={item.id}
  className="bg-white border rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
  onClick={() =>
    navigate(`/ready-to-wear/${category}/${item.id}`)
  }
>
  {/* IMAGE BOX */}
  <div className=" h-[350px] flex items-center justify-center rounded-t-xl p-3">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>

  {/* INFO */}
  <div className="p-4">
    <p className="text-lg font-semibold mb-1">{item.name}</p>
    <p className="text-gray-700 font-medium">Rs. {item.price}</p>
  </div>
</div>


        ))}
      </div>
    </section>
  );
};

export default ReadyToWearCategoryPage;
