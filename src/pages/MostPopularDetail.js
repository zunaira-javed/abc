// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Button from "@mui/material/Button";
// import mostPopularData from "../data/mostPopularData";
// import { useCart } from "../context/CartContext";


// const MostPopularDetail = () => {
//   const { id } = useParams();
//   const product = mostPopularData.find(
//     (item) => item.id === Number(id)
//   );

//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");

//     const { addToCart } = useCart();


//   if (!product) return <p>Product not found</p>;

  
//   return (


//     <div className="detail-page">
//       <div className="detail-container">

//         {/* LEFT IMAGE */}
//         <div className="detail-image">
//           <img src={product.img} alt={product.title} />
//         </div>

//         {/* RIGHT INFO */}
//         <div className="detail-info">
//           <h2 className="title">{product.title}</h2>

//           <div className="price-row">
//             <span className="price">PKR {product.price}</span>
//             <span className="old-price">PKR {product.oldPrice}</span>
//             <span className="discount">-{product.discount}%</span>
//           </div>

//           <p className="description">{product.description}</p>

//           {/* Quantity */}
//                       <div className="qty">Quantity</div>

//           <div className="qty-box">
//  <Button
//   variant="outlined"
//   onClick={() => qty > 1 && setQty(qty - 1)} // decrement
//   sx={{ minWidth: "40px", borderColor: "#000", color: "#000" }}
// >
//   -
// </Button>
// <span>{qty}</span>
// <Button
//   variant="outlined"
//   onClick={() => setQty(qty + 1)} // increment, no condition
//   sx={{ minWidth: "40px", borderColor: "#000", color: "#000" }}
// >
//   +
// </Button>
          
//           </div>

//           {/* Size */}
// <div className="size-section">
//   <div className="fw-bold mb-2">Select Size</div>

//   <div className="size-box">
//     {["S", "M", "L", "XL"].map((s) => (
//       <button
//         key={s}
//         className={`size-btn ${size === s ? "active" : ""}`}
//         onClick={() => setSize(s)}
//       >
//         {s}
//       </button>
//     ))}
//   </div>
// </div>





// <Button
//   variant="contained"
//   fullWidth
//   sx={{ mt: 2, backgroundColor: "#000" }}
//   onClick={() => {
//     if (!size) {
//       alert("Please select a size");
//       return;
//     }

//     addToCart(product, qty, size);
//     alert("Product added to cart");
//   }}
// >
//   Add To Cart
// </Button>


//           <Button
//             variant="outlined"
//             fullWidth
//             sx={{ mt: 1, color: "#000", borderColor: "#000" }}
//           >
//             Buy Now
//           </Button>
//           <div className="discription">
// <div className="fw-bold mt-4">Additional Description:</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MostPopularDetail;



import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import mostPopularData from "../data/mostPopularData";
import { useCart } from "../context/CartContext";

const MostPopularDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = mostPopularData.find(
    (item) => item.id === Number(id)
  );

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size");
      return;
    }

    addToCart(product, qty, size);
    alert("Product added to cart");
  };

  return (
    <div className="detail-page">
      <div className="detail-container">
        
        {/* LEFT IMAGE */}
        <div className="detail-image">
          <img src={product.img} alt={product.title} />
        </div>

        {/* RIGHT INFO */}
        <div className="detail-info">
          <h2 className="title">{product.title}</h2>

          <div className="price-row">
            <span className="price">PKR {product.price}</span>
            <span className="old-price">PKR {product.oldPrice}</span>
            <span className="discount">-{product.discount}%</span>
          </div>

          <p className="description">{product.description}</p>

          {/* Quantity */}
          <div className="qty">Quantity</div>
          <div className="qty-box">
            <Button
              variant="outlined"
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
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
          <div className="size-section">
            <div className="fw-bold mb-2">Select Size</div>

            <div className="size-box">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  className={`size-btn ${size === s ? "active" : ""}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#000" }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>

          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 1, color: "#000", borderColor: "#000" }}
          >
            Buy Now
          </Button>

          <div className="description">
            <div className="fw-bold mt-4">
              Additional Description:
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularDetail;
