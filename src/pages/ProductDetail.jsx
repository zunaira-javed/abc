


import { useState } from "react";
import { useParams } from "react-router-dom";
import unstitchedData from "../data/unstitchedData";
import { useCart } from "../context/CartContext";
// import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


const ProductDetail = () => {
  const { category, id } = useParams();
  const { addToCart } = useCart();

  const product = unstitchedData[category]?.find(
    (item) => item.id === Number(id)
  );

  const [selectedImg, setSelectedImg] = useState(
    product?.images?.[0] || product?.image
  );
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const navigate = useNavigate();


  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  // Ensure images array exists
  const productImages = product.images || (product.image ? [product.image] : []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-10">

      {/* LEFT THUMBNAILS */}
      {productImages.length > 1 && (
        <div className="md:col-span-2 flex md:flex-col gap-3">
          {productImages.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setSelectedImg(img)}
              className={`w-20 h-28 object-cover rounded-lg cursor-pointer border
                ${selectedImg === img ? "border-black" : "border-gray-300"}`}
              alt=""
            />
          ))}
        </div>
      )}

      {/* CENTER BIG IMAGE */}
      <div className={`${productImages.length > 1 ? 'md:col-span-6' : 'md:col-span-8'} flex justify-center`}>
        <img
          src={selectedImg || product.image || '/images/placeholder.png'}
          className="h-[580px] object-contain rounded-lg"
          alt={product.title}
        />
      </div>

      {/* RIGHT DETAILS */}
      <div className="md:col-span-4">
        <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
        <p className="text-xl font-bold mb-2">Price. {product.price}</p>
 <p className="font-semibold mb-2">Color: <span className="font-medium">{product.color || "N/A"}</span></p>

       {/* SIZE */}
<div className="mb-6">
  <p className="font-semibold mb-2">Size</p>

  <div className="flex gap-3 flex-wrap">
    {product.sizes && product.sizes.length > 0 ? (
      product.sizes.map((s) => (
        <button
          key={s}
          onClick={() => setSize(s)}
          className={`px-4 py-2 border rounded-full
            ${size === s ? "bg-black text-white" : "hover:bg-gray-100"}`}
        >
          {s}
        </button>
      ))
    ) : (
      <p className="text-gray-500">Free Size</p>
    )}
  </div>
</div>



        {/* QUANTITY */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Quantity</p>
          <div className="flex items-center gap-4 border w-fit rounded-lg px-3 py-1">
            <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>
        </div>


{/* ADD TO CART & BUY NOW */}
<div className=" flex  gap-2">

  {/* ADD TO CART */}
  <button 
    onClick={() => {
      if (!size) {
        alert("Please select size");
        return;
      }
      addToCart({
        ...product,
        qty,
        size,
        img: selectedImg,
      });
      alert("Added to cart");
    }}
    className="w-full py-3 rounded-xl border border-black
      text-black font-semibold tracking-wide
      transition-all duration-300"
  >
    ADD TO CART
  </button>

  {/* BUY NOW */}
  <button
    onClick={() => {
      if (!size) {
        alert("Please select size");
        return;
      }

      addToCart({
        ...product,
        qty,
        size,
        img: selectedImg,
      });

      navigate("/cart");
    }}
    className="w-full py-3 rounded-xl
      bg-black text-white font-semibold tracking-wide
      hover:bg-gray-900
      transition-all duration-300 shadow-md"
  >
    BUY NOW
  </button>

</div>


 {/* PRODUCT DETAILS */}
<div className="mt-8">
  <h3 className="font-bold text-lg mb-3">Product Details</h3>

  {product.description ? (
    <div className="border rounded-lg overflow-hidden text-sm">
      
      <div className="grid grid-cols-2 border-b">
        <div className="p-3 font-semibold bg-gray-50">Color Type</div>
        <div className="p-3">{product.description.colour}</div>
      </div>

      <div className="grid grid-cols-2 border-b">
        <div className="p-3 font-semibold bg-gray-50">Number of Pieces</div>
        <div className="p-3">{product.description.pieces}</div>
      </div>

      <div className="grid grid-cols-2 border-b">
        <div className="p-3 font-semibold bg-gray-50">Dupatta Fabric</div>
        <div className="p-3">{product.description.dupattaFabric}</div>
      </div>

<div className="grid grid-cols-2 border-b">
        <div className="p-3 font-semibold bg-gray-50">Top Style</div>
        <div className="p-3">{product.description.topStyle}</div>
      </div>

 <div className="grid grid-cols-2 border-b">
        <div className="p-3 font-semibold bg-gray-50">Shirt Fabric</div>
        <div className="p-3">{product.description.shirtFabric}</div>
      </div>

      <div className="grid grid-cols-2 border-b">
        <div className="p-3 font-semibold bg-gray-50">Bottom Style</div>
        <div className="p-3">{product.description.bottomStyle}</div>
      </div>
      
       <div className="grid grid-cols-2 border-b">
        <div className="p-3 font-semibold bg-gray-50">Trouser Fabric</div>
        <div className="p-3">{product.description.trouserFabric}</div>
      </div>

        <div className="grid grid-cols-2">
        <div className="p-3 font-semibold bg-gray-50">Work Technique</div>
        <div className="p-3">{product.description.work}</div>
      </div>

      <div className="grid grid-cols-2 border-b">
        <div className="p-3 font-semibold bg-gray-50">Season</div>
        <div className="p-3">{product.description.season}</div>
      </div>

     

      

     

    

    </div>
  ) : (
    <p className="text-gray-500">No description available</p>
  )}
</div>


<div
  style={{
    marginTop: "24px",
    padding: "12px 16px",
    background: "#fafafa",
    borderLeft: "4px solid #999",
    fontSize: "13px",
    color: "#555",
    borderRadius: "6px",
    lineHeight: "1.6",
  }}
>
  <strong>Disclaimer:</strong> Actual product colour may vary slightly from the image shown due to lighting and screen resolution.
</div>
        
      </div>

      
    </div>
  );
};

export default ProductDetail;
