import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
const baseUrl = 'https://ecommerceshopping-3.onrender.com'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const userId = localStorage.getItem("userId");

  // Fetch cart on mount
  useEffect(() => {
    console.log(userId,"userIdd")
    if (userId) {
      fetchUserCart(userId);
    }
  }, [userId]);

  const fetchUserCart = async (userId) => {
    try {
      const response = await axios.get(baseUrl +`/api/cart/product/cart/${userId}`);
      setCart(response.data.items || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToCart = async (product) => {
    if (!userId) return;
  
    try {
      const response = await axios.post(baseUrl +"/api/cart/product/cart/add", {
        userId,
        productId: product._id,
        quantity: 1, // <-- add this!
      });
      console.log(response)
      setCart(response.data.cart.items);
      toast.success("Item Added Into CART")
// After successful removal

 // Updated path based on backend response
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };
  

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.post(baseUrl + "/api/cart/product/cart/remove", {
        userId,
        productId,
      });
  
      // Update cart state with the returned updated cart items
      setCart(response.data.cart.items || []);
      toast.success("Item Removed Successfully")
    } catch (error) {
      console.error("Remove failed:", error);
    }
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
