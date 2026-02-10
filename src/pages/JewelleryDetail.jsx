import { useParams } from "react-router-dom";
import jewelleryData from "../data/jewelleryData";
import { useCart } from "../context/CartContext";

const JewelleryDetail = () => {
  const { category, id } = useParams();
  const { addToCart } = useCart();

  const product =
    jewelleryData[category]?.find(item => item.id === Number(id));

  if (!product) return <p className="not-found">Product not found</p>;

  return (
    <section className="detail-wrapper">
      <div className="detail-container">
        
        {/* LEFT IMAGE */}
        <div className="detail-image">
          <img src={product.img} alt={product.title} />
        </div>

        {/* RIGHT INFO */}
        <div className="detail-content">
          <h2>{product.title}</h2>

          <p className="price">Rs. {product.price}</p>

          <p className="desc">
            Elegant jewellery crafted with premium quality material.
            Perfect for weddings, parties and special occasions.
          </p>

          <ul className="features">
            <li>✔ Premium Quality</li>
            <li>✔ Skin Friendly</li>
            <li>✔ Long Lasting Shine</li>
          </ul>

          <button
            className="add-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </section>
  );
};

export default JewelleryDetail;
