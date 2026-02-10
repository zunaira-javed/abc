import React from "react";
import { useNavigate } from "react-router-dom";
import footwearData from "../data/footwearData";

const Footwear = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-10">FOOTWEAR</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {footwearData.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer border rounded-xl p-4 hover:shadow-lg"
            onClick={() => navigate(`/footwear/${item.id}`)}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-[350px] object-contain"
            />
            <h4 className="mt-4 font-semibold">{item.name}</h4>
            <p className="text-gray-600">PKR {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footwear;
