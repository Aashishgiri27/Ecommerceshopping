import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import axios from "axios";
const baseUrl = "http://127.0.0.1:3000";
function Buynow() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    toast.error("Product data not available");
    navigate("/");
    return null;
  }

  const handleBuy = async () => {
    try {
      const userId = localStorage.getItem("userId"); // Or get from AuthContext
      if (!userId) {
        toast.error("User not logged in");
        return;
      }

      await axios.post(baseUrl + "/api/purchase", {
        userId,
        productId: product._id,
      });

      
      setTimeout(() => {
        toast.success("Shopkeeper Contact with You after 5 min...");
        toast.success('Check Purchase Product in "Buy Products"');
      }, 1000);
    setTimeout(()=>{navigate("/cart")},2000)
      
    } catch (error) {
      toast.error("Failed to place order");
      console.error(error);
    }
  };

  return (
    <>
      <Navigationbar />
 <div className="max-w-5xl mx-auto p-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Buy Now</h2>

  <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
    {/* Product Image */}
    <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Product Info */}
    <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p>
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>
          <p>
            <span className="font-semibold">Size:</span> {product.size}
          </p>
          <p className="text-xl font-bold text-green-700 mt-2">
            ₹ {product.price}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-4">
        <button className="bg-green-100 text-green-800 font-medium py-2 px-4 rounded-lg shadow hover:bg-green-200 transition">
          Cash On Delivery
        </button>
        <button
          onClick={handleBuy}
          className="mt-3 sm:mt-0 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
        >
          Confirm Purchase
        </button>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}

export default Buynow;
