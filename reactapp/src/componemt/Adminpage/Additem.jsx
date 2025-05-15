import React, { useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import toast from "react-hot-toast";

const baseUrl = "http://127.0.0.1:3000";

function Form() {
  const [itemdata, setitemdata] = useState({
    name: "",
    price: "",
    rating: "",
    color: "",
    size: "",
    img: "",
    description: "",
  });

  function adminname(e) {
    setitemdata({
      ...itemdata,
      [e.target.name]: e.target.value,
    });
  }

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(baseUrl + "/api/product/product", itemdata);
      toast.success("Item is added successfully!");
    } catch (err) {
      console.error("Internal error", err);
      toast.error("Failed to add product.");
    }
  };

  return (
    <Layout>
      <div className=" bg-gray-50 px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Info Section */}
          <div className="md:w-1/2 bg-gradient-to-tr from-blue-700 to-purple-600 p-10 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to Friend's Collection</h2>
            <p className="text-sm opacity-90 mb-4">
              Please enter all the product details accurately. Make sure the <span className="font-bold">category name</span> is spelled exactly as:
            </p>
            <ul className="text-sm list-disc list-inside space-y-1 font-semibold">
              <li>"Shirt"</li>
              <li>"Jeans"</li>
              <li>"Accessories"</li>
              <li>"Pants"</li>
              <li>"Trousers"</li>
              <li>"T-Shirt"</li>
            </ul>
          </div>

          {/* Right Form Section */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Add New Product</h2>
            <form onSubmit={submit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                onChange={adminname}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                onChange={adminname}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="color"
                placeholder="Product Color"
                onChange={adminname}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="size"
                placeholder="Product Size"
                onChange={adminname}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="img"
                placeholder="Image URL"
                onChange={adminname}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="description"
                rows="3"
                placeholder="Product Description"
                onChange={adminname}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Form;
