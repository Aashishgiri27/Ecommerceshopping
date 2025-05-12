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
    <div className="overflow-x-auto shadow-xl rounded-lg">
      <table className="w-full text-sm text-left text-gray-700 bg-white">
        <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white ">
          <tr>
            <th className="py-3 px-5 text-center">Image</th>
            <th className="py-3 px-5 text-center">Product Name</th>
            <th className="py-3 px-5 text-center">Price</th>
            <th className="py-3 px-5 text-center">Quantity</th>
            <th className="py-3 px-5 text-center">Action</th>
            <th className="py-3 px-5 text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          {[...cart].reverse().map((item, index) => (
            <tr
              key={item._id}
              className="border-b hover:bg-blue-50 transition duration-200"
            >
              <td className="py-3 px-5">
                <img
                  src={item.productId?.img || "/placeholder.jpg"}
                  alt={item.productId?.name || "Unknown"}
                  className="h-14 w-14 object-cover rounded shadow-md"
                />
              </td>
              <td className="py-3 px-5 font-medium">{item.productId?.name || "N/A"}</td>
              <td className="py-3 px-5">₹{item.productId?.price || 0}</td>
              <td className="py-3 px-5">{item.quantity}</td>
              <td className="py-3 text-center">
              
                <FontAwesomeIcon icon={faTrash} style={{  height:"20px",width:"20px"
                }} onClick={() => removeFromCart(item.productId?._id)} />

        

              </td>
              <td className="py-3 px-5 font-semibold text-gray-800 text-center">
                ₹{(item.productId?.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-100">
            <td colSpan="5" className="text-right py-4 px-5 font-bold text-lg">
              Grand Total:
            </td>
            <td className="py-4 px-5 font-bold text-green-600 text-lg text-center">
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
