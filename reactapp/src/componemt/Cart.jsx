import React, { useContext } from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import { CartContext } from "../CartContext";
import toast from 'react-hot-toast';
// After successful removal
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + (item?.productId?.price || 0) * item.quantity;
  }, 0);

  return (
    <div>
      <Navigationbar />

<div className="container min-h-screen w-11/12 md:w-4/5 lg:w-3/4 mx-auto p-4">
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
          </tr>
        </thead>
        <tbody>
          {[...cart].reverse().map((item, index) => (
            <tr
              key={item._id}
              className="border-b hover:bg-blue-50 transition duration-200"
            >
              <td className="py-4 px-5 text-center">
                <img
                  src={item.productId?.img || "/placeholder.jpg"}
                  alt={item.productId?.name || "Unknown"}
                  className="h-14 w-14 object-cover rounded shadow-md inline-block"
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
                  title="Remove from cart"
                >
                  <FontAwesomeIcon icon={faTrash} size="lg" />
                </button>
              </td>
              <td className="py-4 px-5 text-center font-bold text-gray-900">
                ₹{(item.productId?.price * item.quantity).toFixed(2)}
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



      <Footer />
    </div>
  );
}

export default Cart;
