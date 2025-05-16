import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from './Layout';

const baseUrl = 'http://127.0.0.1:3000';

const AdminPurchaseList = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const res = await axios.get(baseUrl + "/api/admin/purchases");
        console.log("API response:", res.data);  // Inspect data shape here
        setPurchases(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching purchases:", err);
        setPurchases([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPurchases();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading purchases...</p>;
  }

  return (
    <Layout>
      <div className="max-h-[600px] overflow-y-auto p-8 bg-gradient-to-br from-white via-gray-100 to-white rounded-xl shadow-xl max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">All Purchases</h2>
        <table className="w-full table-auto bg-white text-sm text-gray-800 rounded-xl border border-gray-200 shadow-md">
          <thead className="bg-gradient-to-r from-[#043873] to-[#2b6cb0] text-white sticky top-0 z-10">
            <tr className="h-16 text-left text-sm">
              <th className="px-5 py-4">S.No</th>
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">User</th>
              <th className="px-5 py-4">Email</th>
              <th className="px-5 py-4">Phone</th>
              <th className="px-5 py-4">Price</th>
              <th className="px-5 py-4">Purchased At</th>
            </tr>
          </thead>
          <tbody>
            {[...purchases].reverse().map((purchase, index) => (
              <tr
                key={purchase._id}
                className="hover:bg-blue-50 transition border-b border-gray-200"
              >
                <td className="px-5 py-4 font-medium text-center">{index + 1}</td>

                <td className="px-5 py-4">
                  <img
                    src={purchase.product?.img || "/placeholder.jpg"}
                    alt={purchase.product?.name || "Product"}
                    className="h-12 w-12 object-cover rounded border mx-auto"
                  />
                </td>

                <td className="px-5 py-4 capitalize font-medium">{purchase.userId?.Firstname || "N/A"}</td>
                <td className="px-5 py-4 text-sm">{purchase.userId?.Email || "N/A"}</td>
                <td className="px-5 py-4 text-sm">{purchase.userId?.Mobileno || "N/A"}</td>
                <td className="px-5 py-4 text-green-700 font-bold">₹{purchase.product?.price ?? "N/A"}</td>
                <td className="px-5 py-4 text-gray-600 text-sm">
                  {purchase.purchasedAt
                    ? new Date(purchase.purchasedAt).toLocaleString("en-US", {
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

            {purchases.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-10 text-lg">
                  No purchases found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default AdminPurchaseList;
