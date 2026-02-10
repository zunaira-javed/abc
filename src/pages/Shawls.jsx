import React from "react";
import { useNavigate } from "react-router-dom";
import shawlsData from "../data/shawlsData";

const Shawls = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
        SHAWLS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {shawlsData.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/shawls/${item.id}`)}
            className="
              cursor-pointer
              bg-white
              rounded-2xl
              overflow-hidden
              border
              transition-all
              duration-300
              hover:shadow-xl
              hover:-translate-y-1
            "
          >
            {/* Image */}
            <div className="w-full h-[380px] flex items-center justify-center bg-gray-50">
              <img
                src={item.img}
                alt={item.name}
                className="max-h-full object-contain p-6"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
              <p className="text-gray-600 text-base">
                PKR {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shawls;
