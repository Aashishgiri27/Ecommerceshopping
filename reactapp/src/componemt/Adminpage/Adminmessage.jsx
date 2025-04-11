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
     
  <div className=" overflow-y-scroll block p-10">

  <table className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
            <thead className="bg-[#7d8597] text-white h-20 ">
      <tr>
        <th class="py-2 px-4 border-b border-border">S.No</th>
        <th class="py-2 px-4 border-b border-border">Name</th>
        <th class="py-2 px-4 border-b border-border">Email</th>
        <th class="py-2 px-4 border-b border-border">Subject</th>
        <th class="py-2 px-4 border-b border-border">Messages</th>
        <th class="py-2 px-4 border-b border-border">Date</th>
      </tr>
    </thead>

    <tbody className='h-40'>
    {data.length > 0 && [...data].reverse().map((item, index) => (
       
          <tr key={index} >
            <td class=" py-2 px-4 border-b border-border">1</td>
            <td class="py-2 px-4 border-b border-border">{item.Name} </td>
            <td class="py-2 px-4 border-b border-border">{item.Email}</td>
            <td class="py-2 px-4 border-b border-border">{item.Subject}</td>
            <td class="py-2 px-4 border-b border-border">{item.Message}</td>
            <td class="py-2 px-4 border-b border-border">{new Date(item.createdAt).toLocaleString('en-US', { year:
              'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:
              '2-digit' })}</td>
    
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
