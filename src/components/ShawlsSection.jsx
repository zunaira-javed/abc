import React from "react";
import { useNavigate } from "react-router-dom";

const ShawlsSection = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/shawls")}
      className="
        max-w-7xl mx-auto
        flex items-center
        bg-gray-100
        overflow-hidden
        cursor-pointer
        mt-[50px]
        px-6
        h-[550px]     /* 👈 SAME HEIGHT AS SHOES */
        hover:shadow-lg
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="flex-1 h-full w-[400px] flex items-center justify-center bg-gray-20 rounded-2xl overflow-hidden">
        <img
          src="https://image.made-in-china.com/202f0j00lCcbyjOMivoi/Classic-Plaid-Stripe-Scarf-Warm-Winter-Width-Shawl-Women-Ladies-Lovely-Fashion-Casual-Scarves.webp"
          alt="Shawls"
          className="
            h-[550px], 
           w-[500px]
            object-contain  
             ml-[80px] 
          "
        />
      </div>

      {/* Text */}
      <div className="flex-1 pl-6 ml-[120px] text-left">
        <h2 className="text-3xl font-bold mb-2">SHAWLS</h2>
        <p className="text-gray-600 text-lg">
          Elegant Winter Collection
        </p>
      </div>
    </div>
  );
};

export default ShawlsSection;
