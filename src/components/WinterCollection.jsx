import React from "react";
import { Link } from "react-router-dom";

const WinterCollection = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Winter Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <Link
          to="/winter"
          className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center"
        >
          <img src="/images/winter.webp" alt="Winter" className="w-full h-80 object-cover" />
          <p className="p-4 text-lg font-semibold">KHADAR</p>
        </Link>

        <Link
          to="/embroidered"
          className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center"
        >
          <img src="/images/embroided.jpg" alt="Embroidered" className="w-full h-80 object-cover" />
          <p className="p-4 text-lg font-semibold">EMBROIDERED</p>
        </Link>

        <Link
          to="/printed"
          className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center"
        >
          <img src="/images/printed.jpg" alt="Printed" className="w-full h-80 object-cover" />
          <p className="p-4 text-lg font-semibold">PRINTED</p>
        </Link>

        <Link
          to="/velvet"
          className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center"
        >
          <img src="/images/velvet.webp" alt="Velvet" className="w-full h-80 object-cover" />
          <p className="p-4 text-lg font-semibold">VELVET</p>
        </Link>

      </div>
    </div>
  );
};

export default WinterCollection;
