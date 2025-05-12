import React from "react";
import toast from 'react-hot-toast';
import { useState } from "react";
import axios from "axios";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
const baseUrl = 'http://127.0.0.1:3000'

function Messages() {
    const [userquery, setuserquery] = useState({
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
    });
    function handelinput(e) {
      setuserquery({
        ...userquery,
        [e.target.name]: e.target.value,
      });
    }
    const submit = async (e) => {
      e.preventDefault();
      // console.log(userquery);
      try {
        const response = await axios.post(baseUrl + "/api/users/product/messages", userquery);
        console.log(response)
        setTimeout(()=>{
          toast.success("Message Send");
        },1000)

      } catch (err) {
        console.log("internal error", err);
      }
    };
  return (
    <>
      <Navigationbar />
     <div className="w-11/12 mx-auto my-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-400 text-white rounded-xl shadow-xl flex flex-col gap-8">
  <h1 className="text-4xl font-bold text-center ">Get in Touch</h1>

  <div className="flex flex-col md:flex-row gap-6">
    {/* Form */}
    <form onSubmit={submit} className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
      {["Name", "Email", "Subject", "Message"].map((field, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-semibold mb-1">{field}</label>
          {field === "Message" ? (
            <textarea
              name={field}
              rows="4"
              placeholder={`Write your messages here...`}
              onChange={handelinput}
              className="w-full border border-gray-300 rounded-md text-black p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ) : (
            <input
              type={field === "Email" ? "email" : "text"}
              name={field}
              placeholder={field === "Name" ? "Aashish Giri" : `Write your ${field.toLowerCase()}`}
              onChange={handelinput}
              className="w-full border border-gray-300 rounded-md p-2  text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
        </div>
      ))}
      <div className="text-center">
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition">
          Send Message
        </button>
      </div>
    </form>

    {/* Contact Info */}
    <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg flex flex-col justify-between">
  <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact Information</h3>

  {/* Email */}
  <div className="flex items-center gap-4 mb-4">
    <IoMdMailUnread size={32} className="text-yellow-500" />
    <div>
      <p className="text-base font-medium text-gray-800">Email</p>
      <a href="mailto:contact@gmail.com" className="text-blue-700 underline">contact@gmail.com</a>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-4 mb-4">
    <FaPhoneAlt size={28} className="text-red-500" />
    <div>
      <p className="text-base font-medium text-gray-800">Phone</p>
      <a href="tel:+67041390762" className="text-blue-700 underline">+670 413 90 762</a>
    </div>
  </div>

  {/* Address */}
  <div className="flex items-start gap-4 mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-4.243 4.243z" /></svg>
    <div>
      <p className="text-base font-medium text-gray-800">Address</p>
      <p className="text-gray-700">Gorakhpur, India</p>
    </div>
  </div>

  {/* Working Hours */}
  <div className="flex items-start gap-4 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <div>
      <p className="text-base font-medium text-gray-800">Working Hours</p>
      <p className="text-gray-700">24 Hours</p>
    </div>
  </div>

  {/* Social Media */}
  <div className="flex justify-center gap-6">
    <a href="#" className="transform hover:scale-110 transition">
      <img src={facebook} alt="Facebook" className="h-10 w-10" />
    </a>
    <a href="#" className="transform hover:scale-110 transition">
      <img src={twitter} alt="Twitter" className="h-10 w-10" />
    </a>
    <a href="#" className="transform hover:scale-110 transition">
      <img src={instagram} alt="Instagram" className="h-10 w-10" />
    </a>
  </div>
</div>

  </div>
</div>

      <Footer />
    </>
  );
}

export default Messages;
