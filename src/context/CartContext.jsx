import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // ✅ Load from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ ADD TO CART
  const addToCart = (product, qty = 1, size = "") => {
    const cartItem = {
      id: product.id,
      name: product.name || product.title || "No Name",
      image: product.image || product.img || "/images/placeholder.png",
      price: Number(product.price) || 0,
      qty: Number(qty) || 1,
      size,
    };

    setCartItems((prev) => {
      const exist = prev.find(
        (item) => item.id === cartItem.id && item.size === cartItem.size
      );

      if (exist) {
        return prev.map((item) =>
          item.id === cartItem.id && item.size === cartItem.size
            ? { ...item, qty: item.qty + cartItem.qty }
            : item
        );
      }

      return [...prev, cartItem];
    });
  };

  // ✅ REMOVE
  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // ✅ UPDATE QTY
const updateQty = (id, size, qty) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id && item.size === size
        ? { ...item, qty }
        : item
    )
  );
};

  // ✅ CLEAR CART
  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Cart count for badge
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
