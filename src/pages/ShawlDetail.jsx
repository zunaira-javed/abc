import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import shawlsData from "../data/shawlsData";
import Button from "@mui/material/Button";

const ShawlDetail = () => {
  const { id } = useParams();
  const product = shawlsData.find((p) => p.id === Number(id));

  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product)
    return <p className="text-center mt-10 text-red-500">Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      
      {/* Image */}
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-[600px] object-contain"
        />
      </div>

      {/* Details */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-xl font-semibold mb-4">PKR {product.price}</p>

        <p className="text-gray-600 mb-6">
          Premium quality shawl for winter elegance.
        </p>

        {/* Color (DISPLAY ONLY) */}
        <div className="mb-2">
          <span className="font-semibold">Color:</span>{" "}
          <span className="text-gray-700">{product.color}</span>
        </div>

        {/* Fabric (DISPLAY ONLY) */}
        <div className="mb-6">
          <span className="font-semibold">Fabric:</span>{" "}
          <span className="text-gray-700">{product.fabric}</span>
        </div>

        {/* Quantity */}
        <div className="mb-6 flex items-center gap-4">
          <span className="font-semibold">Quantity:</span>
          <Button onClick={() => qty > 1 && setQty(qty - 1)}>-</Button>
          <span>{qty}</span>
          <Button onClick={() => setQty(qty + 1)}>+</Button>
        </div>

        {/* Add to Cart */}
       <Button
  fullWidth
  variant="contained"
  sx={{ backgroundColor: "#000", mb: 2 }}
  onClick={() => {
    addToCart(
      {
        ...product,
        qty: qty, // ✅ VERY IMPORTANT
        size: "Standard", // ✅ dummy size taake cart break na ho
        color: product.color,
        fabric: product.fabric,
      }
    );
    alert("Added to cart");
  }}
>
  Add To Cart
</Button>

      </div>
    </div>
  );
};

export default ShawlDetail;
