import React, { useState } from "react";
import "../adminpagecss/form.css";
import axios from "axios";
import Layout from "./Layout";
import toast from 'react-hot-toast';
const baseUrl = 'http://127.0.0.1:3000'

function Form({ additem }) {
  const [itemdata, setitemdata] = useState({
    name: "",
    price: "",
    rating: "",
    color: "",
    size: "",
    img: "",
    description:"",
  });

  function adminname(e) {
    setitemdata({
      ...itemdata,
      [e.target.name]: e.target.value,
      // 'id':Math.random()*10
    });
  }

  const submit = async (e) => {
    e.preventDefault();

    try {
      console.log(itemdata)
      const response = await axios.post(baseUrl +"/api/product/product", itemdata);
      console.log(response);
      toast.success("Item is added Sucessfully");
    } catch (err) {
      console.log("internal error", err);
    }
  };
  return (
    < >
      <Layout>
         
           <h1 className="p-8 text-2xl text-center">ADD PRODUCT</h1>
            <div className="formadmin">
            <div className="mb-4">
            
            <input
              type="text"
              id="name"
              name="name"
              class="border-2 border-black rounded-lg p-2 w-full"
              placeholder="Product Name"
              onChange={adminname}
            />
          </div>
          <div className="mb-4">
         
            <input
              type="text"
              id="name"
              name="price"
              class="border-2 border-black rounded-lg p-2 w-full"
              placeholder="Product Price"
              onChange={adminname}
              required
            />
          </div>

          <div className="mb-4">
            
            <input
              type="text"
              id="name"
              name="color"
              class="border-2 border-black rounded-lg p-2 w-full"
              placeholder=" Product Color"
              onChange={adminname}
            />
          </div>
          <div className="mb-4">
          
            <input
              type="text"
              id="name"
              name="size"
              class="border-2 border-black rounded-lg p-2 w-full"
              placeholder="  Product Size"
              onChange={adminname}
            />
          </div>
          <div className="mb-4">
            
            <input
              type="text"
              id="name"
              name="img"
              class="border-2 border-black rounded-lg p-2 w-full"
              placeholder=" Product Image "
              onChange={adminname}
            />
          </div>
              
              <div className="mb-4">
            <label className="block text-sm font-medium mb-1" for="message">
              Description 
            </label>
            <textarea
              id="message"
              class="border-2 border-black rounded-lg p-2 w-full"
              rows="4"
              name="description"
              placeholder="Write your message here..."
              onChange={adminname}
            ></textarea>
          </div>
              <div className="text-center">
                <button 
                 className="bg-cyan-500 shadow-lg mb-5 shadow-cyan-500/50 w-40 h-10"

                onClick={submit}>
                  Add
                </button>
              </div>
            </div>
        
      </Layout>
    </>
  );
}

export default Form;
