import React, { useContext } from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import { CartContext } from "../CartContext";
import toast from 'react-hot-toast';
// After successful removal


function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + (item?.productId?.price || 0) * item.quantity;
  }, 0);

  return (
    <div>
      <Navigationbar />

      <div className="container min-h-screen w-3/4 mx-auto p-4">
        {cart.length === 0 ? (
          <div className="text-center text-xl font-semibold mt-20 text-zinc-600">
            Your cart is empty 🛒
          </div>
        ) : (
          <table className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
            <thead className="bg-[#7d8597] text-white">
              <tr>
                <th className="py-3 px-4 border-b text-left">IMAGE</th>
                <th className="py-3 px-4 border-b text-left">PRODUCT NAME</th>
                <th className="py-3 px-4 border-b text-left">PRICE</th>
                <th className="py-3 px-4 border-b text-left">QUANTITY</th>
                <th className="py-3 px-4 border-b text-left">ACTION</th>
                <th className="py-3 px-4 border-b text-left">TOTAL</th>
              </tr>
            </thead>
            <tbody>
            {[...cart].reverse().map((item, index) => (
                <tr className="border-b hover:bg-zinc-100 transition" key={item._id}>
                  <td className="py-2 px-4">
                    <img
                      src={item.productId?.img || "/placeholder.jpg"}
                      alt={item.productId?.name || "Unknown"}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="py-2 px-4">{item.productId?.name || "N/A"}</td>
                  <td className="py-2 px-4">${item.productId?.price || 0}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                  <td
                    className="py-2 px-4 text-red-500 cursor-pointer"
                    onClick={() => removeFromCart(item.productId?._id)}

                  >
                    Remove
                  </td>
                  <td className="py-2 px-4">
                    $
                    {(
                      (item.productId?.price || 0) * item.quantity
                    ).toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" className="text-right font-bold py-4 px-4">
                  Grand Total:
                </td>
                <td className="font-bold text-green-600 text-lg py-4 px-4">
                  ${totalPrice.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
