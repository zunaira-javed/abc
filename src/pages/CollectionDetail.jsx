import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import collectionData from "../data/collectionData";
import Button from "@mui/material/Button";

const CollectionDetail = () => {
  const { type, id } = useParams();
  const collection = collectionData[type];
  const product = collection?.products.find((p) => p.id === Number(id));

  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  if (!product) return <p className="text-center mt-10 text-red-500">Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
     <div className="md:w-1/2  rounded-xl p-4 flex items-center justify-center">
  <img
    src={product.img}
    alt={product.name}
    className="w-full h-[600px] object-contain rounded-lg"
  />
</div>

      <div className="md:w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-xl font-semibold mb-4">PKR {product.price}</p>

        <p className="text-gray-600 mb-6">
          Elegant piece, perfect for casual or formal occasions.
        </p>

        {/* Quantity */}
        <div className="mb-4 flex items-center gap-4">
          <span className="font-semibold">Quantity:</span>
          <Button
            variant="outlined"
            onClick={() => qty > 1 && setQty(qty - 1)}
            sx={{ minWidth: "40px", borderColor: "#000", color: "#000" }}
          >
            -
          </Button>
          <span>{qty}</span>
          <Button
            variant="outlined"
            onClick={() => setQty(qty + 1)}
            sx={{ minWidth: "40px", borderColor: "#000", color: "#000" }}
          >
            +
          </Button>
        </div>

        {/* Size */}
        <div className="mb-6">
          <div className="font-semibold mb-2">Select Size:</div>
          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                className={`px-4 py-2 border rounded-lg ${
                  size === s ? "bg-black text-white" : "bg-white text-black"
                }`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#000", mb: 2 }}
          onClick={() => {
            if (!size) {
              alert("Please select a size");
              return;
            }
            addToCart(product, qty, size);
            alert("Product added to cart");
          }}
        >
          Add To Cart
        </Button>

        <Button
          variant="outlined"
          fullWidth
          sx={{ borderColor: "#000", color: "#000" }}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default CollectionDetail;
