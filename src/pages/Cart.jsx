import { useCart } from "../context/CartContext";
import React from "react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Cart is empty</h2>;
  }

  return (
    <div style={{ padding: "40px 160px" }}>
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={`${item.id}-${item.size}`}
          style={{
            display: "flex",
            gap: "20px",
            borderBottom: "1px solid #ddd",
            padding: "20px 0",
          }}
        >
          <img src={item.image} width="100" alt={item.name} />

          <div>
            <h4>{item.name}</h4>
            <p>Size: {item.size}</p>

            {/* Quantity */}
            <p>Quantity</p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                onClick={() =>
                  item.qty > 1 && updateQty(item.id, item.size, item.qty - 1)
                }
              >
                −
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() =>
                  updateQty(item.id, item.size, item.qty + 1)
                }
              >
                +
              </button>
            </div>

            <p>Price: Rs {item.price * item.qty}</p>

            <button onClick={() => removeFromCart(item.id, item.size)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: Rs {total}</h3>
    </div>
  );
};

export default Cart;
