import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import { CartContext } from "../CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const baseUrl = "http://127.0.0.1:3000";
function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState("cart");
  const navigate = useNavigate();
  const [buyNowData, setBuyNowData] = useState([]);

  useEffect(() => {
    const fetchBuyNowData = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Or get from context
        const res = await axios.get(baseUrl + `/api/purchases/${userId}`);
        setBuyNowData(res.data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };

    if (activeTab === "buy") {
      fetchBuyNowData();
    }
  }, [activeTab]);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + (item?.productId?.price || 0) * item.quantity;
  }, 0);

  return (
    <div>
      <Navigationbar />

      {/* Toggle Tab */}
      <div className="flex m-2 h-12 text-center">
        <h1
          className={`w-1/2 cursor-pointer rounded-lg py-2 ${
            activeTab === "cart" ? "bg-blue-700 text-white" : "bg-blue-100"
          }`}
          onClick={() => setActiveTab("cart")}
        >
          Cart
        </h1>
        <h1
          className={`w-1/2 cursor-pointer rounded-lg py-2 ${
            activeTab === "buy" ? "bg-blue-700 text-white" : "bg-blue-100"
          }`}
          onClick={() => setActiveTab("buy")}
        >
          Buy Products
        </h1>
      </div>

      {/* Cart Section */}
      {activeTab === "cart" && (
        <div className="container w-11/12 md:w-4/5 lg:w-3/4 mx-auto p-4 min-h-screen">
          {cart.length === 0 ? (
            <div className="text-center text-xl font-semibold mt-20 text-zinc-600">
              Your cart is empty 🛒
            </div>
          ) : (
            <div className="overflow-x-auto shadow-2xl rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm text-left text-gray-800">
                <thead className="bg-gradient-to-r from-[#043873] to-[#1A73E8] text-white sticky top-0 z-10">
                  <tr>
                    <th className="py-4 px-5 text-center">Image</th>
                    <th className="py-4 px-5 text-center">Product Name</th>
                    <th className="py-4 px-5 text-center">Price</th>
                    <th className="py-4 px-5 text-center">Quantity</th>
                    <th className="py-4 px-5 text-center">Action</th>
                    <th className="py-4 px-5 text-center">Total</th>
                    <th className="py-4 px-5 text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {[...cart].reverse().map((item) => (
                    <tr key={item._id} className="border-b hover:bg-blue-50">
                      <td className="py-4 px-5 text-center">
                        <img
                          src={item.productId?.img || "/placeholder.jpg"}
                          alt={item.productId?.name || "Unknown"}
                          className="h-14 w-14 object-cover rounded shadow-md mx-auto"
                        />
                      </td>
                      <td className="py-4 px-5 font-medium text-center capitalize">
                        {item.productId?.name || "N/A"}
                      </td>
                      <td className="py-4 px-5 text-center font-semibold">
                        ₹{item.productId?.price || 0}
                      </td>
                      <td className="py-4 px-5 text-center">{item.quantity}</td>
                      <td className="py-4 px-5 text-center">
                        <button
                          onClick={() => removeFromCart(item.productId?._id)}
                          className="text-red-600 hover:text-red-800 transition"
                        >
                          <FontAwesomeIcon icon={faTrash} size="lg" />
                        </button>
                      </td>
                      <td className="py-4 px-5 text-center font-bold text-gray-900">
                        ₹{(item.productId?.price * item.quantity).toFixed(2)}
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            navigate("/buy", {
                              state: { product: item.productId },
                            })
                          }
                          className="bg-blue-600 hover:bg-blue-700 text-white h-10 w-20 rounded-lg text-xs font-semibold"
                        >
                          BUY NOW
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-100 border-t">
                    <td
                      colSpan="5"
                      className="text-right py-5 px-5 font-bold text-lg text-gray-700"
                    >
                      Grand Total:
                    </td>
                    <td className="py-5 px-5 font-extrabold text-green-600 text-lg text-center">
                      ₹{totalPrice.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Buy Now Section */}
      {/* Product Details */}

      {activeTab === "buy" && (
        <div className="container w-11/12 md:w-4/5 lg:w-3/4 mx-auto p-4 min-h-screen bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-6">Your Previous Orders</h2>

          {buyNowData.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              No previous orders found.
            </div>
          ) : (
            buyNowData.map((order, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg mb-6 p-4 shadow-sm"
              >
                <p className="text-sm text-gray-600 mb-4 font-semibold">
                  Order Date: {new Date(order.purchasedAt).toLocaleString()}
                </p>

                {/* Product Details Table */}
                <div className="overflow-x-auto border rounded-lg">
                  <table className="w-full text-sm text-gray-700">
                    <thead className="bg-gradient-to-r from-[#043873] to-[#2b6cb0]">
                      <tr>
                        <th className="p-3 text-center">Image</th>
                        <th className="p-3 text-center">Product</th>
                        <th className="p-3 text-center">Price</th>
                        <th className="p-3 text-center">Qty</th>
                        <th className="p-3 text-center">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 text-center">
                          <img
                            src={order.product?.img}
                            alt={order.product?.name}
                            className="h-12 w-12 object-cover rounded mx-auto"
                          />
                        </td>
                        <td className="p-3 text-center capitalize">
                          {order.product?.name || "Unknown Product"}
                        </td>
                        <td className="p-3 text-center">
                          ₹{order.product?.price ?? 0}
                        </td>
                        <td className="p-3 text-center">1</td>
                        <td className="p-3 text-center">
                          ₹{order.product?.price ?? 0}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Total Paid */}
                <p className="mt-4 text-right text-blue-800 font-bold text-lg">
                  Total Paid: ₹{order.product?.price ?? 0}
                </p>
              </div>
            ))
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Cart;
