import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import axios from 'axios';

const baseUrl = 'https://ecommerceshopping-3.onrender.com';

function AdminReview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(baseUrl + '/api/users/product/review');
      setData(response.data);
    } catch (error) {
      setData([]);
      console.error("Error fetching data", error);
    }
  };

  return (
    <Layout>
      <div className="max-h-[600px] overflow-y-auto p-8 bg-gradient-to-br from-white via-gray-100 to-white rounded-xl shadow-xl">
        <table className="w-full table-auto bg-white text-sm text-gray-800 rounded-xl border border-gray-200 shadow-md">
          <thead className="bg-gradient-to-r from-[#043873] to-[#2b6cb0] text-white sticky top-0 z-10">
            <tr className="h-16 text-left text-sm">
              <th className="px-5 py-4">S.No</th>
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">Reviewer</th>
              <th className="px-5 py-4">Email</th>
              <th className="px-5 py-4">Rating</th>
              <th className="px-5 py-4">Review</th>
              <th className="px-5 py-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {[...data].reverse().map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-blue-50 transition border-b border-gray-200"
              >
                <td className="px-5 py-4 font-medium text-center">{index + 1}</td>

                {/* Only show product image here */}
                <td className="px-5 py-4">
                  <img
                    src={item.product?.img || "/placeholder.jpg"}
                    alt="Product"
                    className="h-12 w-12 object-cover rounded border mx-auto"
                  />
                </td>

                <td className="px-5 py-4 capitalize font-medium">{item.name}</td>
                <td className="px-5 py-4 text-sm">{item.email}</td>

                <td className="px-5 py-4">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                    ⭐ {item.rating}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm">{item.review}</td>

                <td className="px-5 py-4 text-gray-600 text-sm">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                    : "N/A"}
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-10 text-lg">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default AdminReview;
