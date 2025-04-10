import React from 'react'
import Layout from './Layout'
import  { useState, useEffect } from "react";

import axios from "axios";

function    Userinfo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("/product/login");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  return (
    <>
      <Layout>
      <div class="flex flex-col p-4 bg-background text-foreground">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-xl font-bold">CATEGORY</h1>
    <button class="bg-accent text-accent-foreground px-4 py-2 rounded">ADD CATEGORY</button>
  </div>
  <div class="relative mb-4">
    <input type="text" placeholder="Search..." class="border border-border rounded-lg p-2 w-full" />
  </div>
  <div className="max-h-96 overflow-y-scroll block">

  <table class=" bg-card border border-border">
    <thead className='bg-blue-600'>
      <tr>
        <th class="py-2 px-4 border-b border-border">Image</th>
        <th class="py-2 px-4 border-b border-border">Name</th>
        <th class="py-2 px-4 border-b border-border">Email ID</th>
        <th class="py-2 px-4 border-b border-border">Status</th>
        <th class="py-2 px-4 border-b border-border">Username</th>
      </tr>
    </thead>

    <tbody>
    {data.map((item, index) => (
      <tr key={index} >
        <td class="h-6 w-6 py-2 px-4 border-b border-border"><img  src={item.img} alt={item.name}/></td>
        <td class="py-2 px-4 border-b border-border">{item.Firstname} </td>
        <td class="py-2 px-4 border-b border-border">{item.Email}</td>
        <td class="py-2 px-4 border-b border-border"><span class="bg-success text-success-foreground px-2 py-1 rounded">Active</span></td>
        <td class="py-2 px-4 border-b border-border">{item.Username}</td>

      </tr>
        ))}
    
    </tbody>
  </table>
  </div>
</div>
      </Layout>
    </>
  )
}

export default Userinfo
