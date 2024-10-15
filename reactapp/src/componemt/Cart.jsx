import React from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
function Cart() {
  return (
    <div>
     <Navigationbar />

      <div class="container w-3/4 mx-auto p-4 ">
        <h1 class="text-3xl font-bold mb-6 text-primary">Your Shopping Cart</h1>
        <div class="bg-primary p-4 rounded-lg mb-6 text-white bg-blue-950">
          <p>
            Your cart will expire in <span class="font-bold">13:54</span>{" "}
            minutes!
          </p>
          <button class="  bg-white hover:bg-blue px-4 py-2 text-black rounded mt-2">
            Check Out
          </button>
        </div>
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
            <tr class="border-b hover:bg-zinc-100 transition">
              <td class="py-2 px-4">
                <img
                  src="https://placehold.co/100x100"
                  alt="Cotton Shirt"
                  class="rounded"
                />
              </td>
              <td class="py-2 px-4">Cotton Shirt</td>
              <td class="py-2 px-4">$63.00</td>
              <td class="py-2 px-4">1</td>
              <td class="py-2 px-4 text-red-500 cursor-pointer">Remove</td>
              <td class="py-2 px-4 text-red-500">$63.00</td>
            </tr>
            <tr class="border-b hover:bg-zinc-100 transition">
              <td class="py-2 px-4">
                <img
                  src="https://placehold.co/100x100"
                  alt="Cotton Shirt"
                  class="rounded"
                />
              </td>
              <td class="py-2 px-4">Cotton Shirt</td>
              <td class="py-2 px-4">$63.00</td>
              <td class="py-2 px-4">1</td>
              <td class="py-2 px-4 text-red-500 cursor-pointer">Remove</td>
              <td class="py-2 px-4 text-red-500">$63.00</td>
            </tr>
            <tr class="border-b hover:bg-zinc-100 transition">
              <td class="py-2 px-4">
                <img
                  src="https://placehold.co/100x100"
                  alt="Cotton Shirt"
                  class="rounded"
                />
              </td>
              <td class="py-2 px-4">Cotton Shirt</td>
              <td class="py-2 px-4">$63.00</td>
              <td class="py-2 px-4">1</td>
              <td class="py-2 px-4 text-red-500 cursor-pointer">Remove</td>
              <td class="py-2 px-4 text-red-500">$63.00</td>
            </tr>

            <tr class="border-b hover:bg-zinc-100 transition">
              <td class="py-2 px-4">
                <img
                  src="https://placehold.co/100x100"
                  alt="Cotton Shirt"
                  class="rounded"
                />
              </td>
              <td class="py-2 px-4">Cotton Shirt</td>
              <td class="py-2 px-4">$63.00</td>
              <td class="py-2 px-4">1</td>
              <td class="py-2 px-4 text-red-500 cursor-pointer">Remove</td>
              <td class="py-2 px-4 text-red-500">$63.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Cart;
