import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import footwearData from "../data/footwearData";
import Button from "@mui/material/Button";

const FootwearDetail = () => {
  const { id } = useParams();
  const product = footwearData.find((p) => p.id === Number(id));

  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  if (!product)
    return <p className="text-center mt-10 text-red-500">Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-[600px] object-contain"
        />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-xl font-semibold mb-4">PKR {product.price}</p>

        <p className="text-gray-600 mb-6">
          Comfortable & stylish footwear for every occasion.
        </p>

        {/* Quantity */}
        <div className="mb-4 flex items-center gap-4">
          <span className="font-semibold">Quantity:</span>
          <Button onClick={() => qty > 1 && setQty(qty - 1)}>-</Button>
          <span>{qty}</span>
          <Button onClick={() => setQty(qty + 1)}>+</Button>
        </div>

        {/* Size */}
        <div className="mb-6">
          <div className="font-semibold mb-2">Select Size:</div>
          <div className="flex gap-3">
            {["36", "37", "38", "39", "40"].map((s) => (
              <button
                key={s}
                className={`px-4 py-2 border rounded-lg ${
                  size === s ? "bg-black text-white" : ""
                }`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "#000", mb: 2 }}
          onClick={() => {
            if (!size) return alert("Please select size");
            addToCart(product, qty, size);
            alert("Added to cart");
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default FootwearDetail;
