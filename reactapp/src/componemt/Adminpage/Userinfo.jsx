import React from 'react'
import Layout from './Layout'
import  { useState, useEffect } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import axios from "axios";
const baseUrl = 'https://ecommerceshopping-3.onrender.com'
function    Userinfo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(baseUrl + "/product/login");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  return (
    <>
      <Layout>
   
<div className="max-h-[600px] overflow-y-auto p-8 bg-gradient-to-br from-white via-gray-100 to-white rounded-xl shadow-xl">
  <table className="w-full border-separate border-spacing-0 rounded-lg overflow-hidden text-sm text-gray-800">
    <thead>
      <tr className="bg-gradient-to-r from-[#607d8b] to-[#90a4ae] text-white text-left">
        <th className="py-4 px-5 border border-gray-300">Image</th>
        <th className="py-4 px-5 border border-gray-300">Name</th>
        <th className="py-4 px-5 border border-gray-300">Email ID</th>
        <th className="py-4 px-5 border border-gray-300">Status</th>
        <th className="py-4 px-5 border border-gray-300">Username</th>
        <th className="py-4 px-5 border border-gray-300">Created At</th>
        <th className="py-4 px-5 border border-gray-300">Updated At</th>
      </tr>
    </thead>

    <tbody>
      {[...data].reverse().map((item, index) => {
        const createdAtDate = item.createdAt ? new Date(item.createdAt) : null;
        const updatedAtDate = item.updatedAt ? new Date(item.updatedAt) : null;

        const createdAt =
          createdAtDate && !isNaN(createdAtDate)
            ? createdAtDate.toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
            : "N/A";

        const updatedAt =
          updatedAtDate && !isNaN(updatedAtDate)
            ? updatedAtDate.toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
            : "N/A";

        return (
          <tr
            key={index}
            className="hover:bg-blue-50 transition duration-200 border-b border-gray-200"
          >
            <td className="py-3 px-5">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.Firstname}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="h-10 w-10 text-gray-400" />
              )}
            </td>
            <td className="py-3 px-5 font-medium capitalize">{item.Firstname}</td>
            <td className="py-3 px-5">{item.Email}</td>
            <td className="py-3 px-5">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold rounded-full">
                Active
              </span>
            </td>
            <td className="py-3 px-5">{item.Username}</td>
            <td className="py-3 px-5 text-gray-600">{createdAt}</td>
            <td className="py-3 px-5 text-gray-600">{updatedAt}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>


{/* </div> */}
      </Layout>
    </>
  )
}

export default Userinfo
