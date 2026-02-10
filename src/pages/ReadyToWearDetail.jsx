import { useState } from "react";
import { useParams } from "react-router-dom";
import readyToWearData from "../data/readyToWearData";
import { useCart } from "../context/CartContext";
import Button from "@mui/material/Button";

const ReadyToWearDetail = () => {
  const { category, id } = useParams();
  const { addToCart } = useCart();

  const product = readyToWearData[category]?.products.find(
    (item) => item.id === Number(id)
  );

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  if (!product)
    return <p className="text-red-500 text-center mt-10">Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-10">

      {/* IMAGE SECTION */}
      <div className="md:w-1/2  rounded-xl p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[600px] object-contain rounded-lg"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="md:w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-xl font-semibold mb-4">PKR {product.price}</p>

        <p className="text-gray-600 mb-6">
          Elegant ready-to-wear outfit perfect for casual & formal occasions.
          Premium fabric with comfortable stitching.
        </p>

        {/* QUANTITY */}
        <div className="mb-5 flex items-center gap-4">
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

        {/* SIZE */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Select Size:</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                className={`px-4 py-2 border rounded-lg transition ${
                  size === s
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <ul className="list-disc pl-5 mb-6 text-gray-600">
          <li>✔ Premium Fabric</li>
          <li>✔ Comfortable Fit</li>
          <li>✔ Trendy Design</li>
        </ul>

        {/* ADD TO CART */}
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

export default ReadyToWearDetail;
