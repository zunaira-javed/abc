import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize Stripe with publishable key from environment variable
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function CartPage() {
  const { cartItems, removeFromCart, updateQty, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  // Handle Stripe Checkout
  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setIsProcessing(true);

    try {
      // Call server to create checkout session
      const response = await fetch("http://localhost:5000/api/payment/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            name: item.name,
            image: item.image,
            price: item.price,
            qty: item.qty,
            size: item.size,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        console.error("Stripe error:", error);
        toast.error("Payment failed. Please try again.");
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
      setIsProcessing(false);
    }
  };

  // Check URL params for payment status
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get("success") === "true") {
      toast.success("Payment successful! Thank you for your order.");
      clearCart();
      // Clean up URL
      window.history.replaceState({}, document.title, "/cart");
    }

    if (urlParams.get("canceled") === "true") {
      toast.error("Payment was canceled. Please try again.");
      // Clean up URL
      window.history.replaceState({}, document.title, "/cart");
    }
  }, [clearCart]);

  // Empty cart UI
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some items to get started!</p>
          <a href="/" className="continue-shopping-btn">
            Continue Shopping
          </a>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="cart-container">
        {/* Left Side - Cart Items */}
        <div className="cart-items-section">
          <h2 className="cart-title">Shopping Cart</h2>
          <p className="cart-count">{cartItems.length} Item{cartItems.length > 1 ? 's' : ''}</p>

          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cart-item-card">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-size">
                    {item.size && (
                      <>
                        <span className="label">Size:</span> {item.size}
                      </>
                    )}
                  </p>
                  <p className="cart-item-price">Rs. {item.price.toLocaleString()}</p>
                </div>

                <div className="cart-item-actions">
                  {/* Quantity Controls */}
                  <div className="quantity-control">
                    <button
                      className="qty-btn"
                      onClick={() =>
                        item.qty > 1 && updateQty(item.id, item.size, item.qty - 1)
                      }
                      disabled={item.qty <= 1}
                    >
                      −
                    </button>
                    <span className="qty-display">{item.qty}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Item Total */}
                  <p className="cart-item-total">
                    Rs. {(item.price * item.qty).toLocaleString()}
                  </p>

                  {/* Remove Button */}
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id, item.size)}
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="order-summary-section">
          <div className="order-summary-card">
            <h3 className="summary-title">Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span className="free-badge">FREE</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row summary-total">
              <span>Total</span>
              <span className="total-amount">Rs. {total.toLocaleString()}</span>
            </div>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <span className="checkout-icon">→</span>
                </>
              )}
            </button>

            <div className="payment-info">
              <p>🔒 Secure payment powered by Stripe</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="shipping-info-card">
            <h4>✓ Free Shipping</h4>
            <p>On all orders</p>
          </div>

          <div className="shipping-info-card">
            <h4>✓ Easy Returns</h4>
            <p>30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
