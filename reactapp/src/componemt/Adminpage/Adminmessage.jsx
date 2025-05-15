import React from 'react'
import Layout from './Layout'
import  { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = 'http://127.0.0.1:3000'

function Adminmessage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
       const response = await axios.get(baseUrl + '/api/users/product/messages/');
      console.log("messages------->")
   
      setData(response.data);
    } catch (error) {
        setData([])
      console.error("Error fetching data", error);
    }
  };
  return (
    <>
      <Layout>
     
<div className="max-h-[600px] overflow-y-scroll block p-10 bg-gray-100 rounded-xl shadow-inner">
  <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
    <thead className="bg-gradient-to-r from-[#6a85b6] to-[#bac8e0] text-white text-left text-sm">
      <tr className="h-16">
        <th className="py-3 px-6 border-b">S.No</th>
        <th className="py-3 px-6 border-b">Name</th>
        <th className="py-3 px-6 border-b">Email</th>
        <th className="py-3 px-6 border-b">Subject</th>
        <th className="py-3 px-6 border-b">Message</th>
        <th className="py-3 px-6 border-b">Date</th>
      </tr>
    </thead>

    <tbody>
      {data.length > 0 &&
        [...data].reverse().map((item, index) => (
          <tr
            key={index}
            className="hover:bg-blue-50 transition duration-200 text-sm text-gray-800"
          >
            <td className="py-4 px-6 border-b">{index + 1}</td>
            <td className="py-4 px-6 border-b font-medium capitalize">{item.Name}</td>
            <td className="py-4 px-6 border-b">{item.Email}</td>
            <td className="py-4 px-6 border-b">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                {item.Subject}
              </span>
            </td>
            <td className="py-4 px-6 border-b">{item.Message}</td>
            <td className="py-4 px-6 border-b text-gray-600">
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
    </tbody>
  </table>
</div>


      </Layout>
    </>
  )
}

export default Adminmessage
