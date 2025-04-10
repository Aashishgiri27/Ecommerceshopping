import React from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import { useContext } from "react";
import { CartContext } from "../CartContext";
function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div>
     <Navigationbar />

      <div class="container min-h-screen w-3/4 mx-auto p-4 ">
      
        <table class=" bg-white shadow-lg rounded-lg overflow-hidden">
          <thead class="bg-zinc-200">
            <tr className="">
              <th class="py-3 text-black px-4 border-b text-left">IMAGE</th>
              <th class="py-3 text-black px-4 border-b text-left">
                PRODUCT NAME
              </th>
              <th class="py-3 text-black px-4 border-b text-left">PRICE</th>
              <th class="py-3 text-black px-4 border-b text-left">QUANTITY</th>
              <th class="py-3 text-black px-4 border-b text-left">ACTION</th>
              <th class="py-3 text-black px-4 border-b text-left">TOTAL</th>
            </tr>
          </thead>
          <tbody>

          {cart.map((item) => (

            <tr class="border-b hover:bg-zinc-100 transition"  key={item.id}>

              <td class="py-2 px-4">
                <img
                  src={item.img}
                  alt={item.name}
                  class="h-8 w-8"
                />
              </td>
              <td class="py-2 px-4">{item.name}</td>
              <td class="py-2 px-4">{item.prce}</td>
              <td class="py-2 px-4">1</td>
              <td class="py-2 px-4 text-red-500 cursor-pointer">Remove</td>
              <td class="py-2 px-4 text-red-500">$63.00</td>
              <td
                  className="text-red-500 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </td>
            </tr>
                       ))}

          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Cart;