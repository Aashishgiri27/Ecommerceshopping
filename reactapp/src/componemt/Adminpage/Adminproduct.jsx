import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout";
const baseUrl = "https://ecommerceshopping-3.onrender.com";
function Adminproduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(baseUrl + "/product");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      console.log("hi");
      await axios.delete(baseUrl + `/api/product/product/${id}`);
      // After deletion, update the UI
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <Layout>
      <div className="max-h-[600px] overflow-y-auto p-8 bg-gradient-to-br from-white via-gray-100 to-white rounded-xl shadow-xl">
        <table className="w-full table-auto bg-white text-sm text-gray-800 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          <thead className="bg-gradient-to-r from-[#043873] to-[#2b6cb0] text-white sticky top-0 z-10">
            <tr className="h-16 text-left text-sm">
              <th className="px-6">Image</th>
              <th className="px-6">Name</th>
              <th className="px-6">Price</th>
              <th className="px-6">Status</th>
              <th className="px-6">Category</th>
              <th className="px-6">Actions</th>
            </tr>
          </thead>

          <tbody>
            {[...data].reverse().map((item, index) => (
              <tr
                key={index}
                className="hover:bg-blue-50 transition duration-200 border-b border-gray-200"
              >
                <td className="px-6 py-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-14 w-14 object-cover rounded-md border border-gray-300 shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 font-medium capitalize">
                  {item.name}
                </td>
                <td className="px-6 py-4 font-semibold">₹{item.price}</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Available
                  </span>
                </td>
                <td className="px-6 py-4 capitalize">{item.color}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this product?"
                        )
                      ) {
                        handleDelete(item._id);
                      }
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-gray-500 py-10 text-lg"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Adminproduct;
