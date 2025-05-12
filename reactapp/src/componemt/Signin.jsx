import React from "react";
import { useState } from "react";
import Navigationbar from "./Navigationbar";
import { Link, useNavigate,useLocation  } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from "axios";
import Footer from "./Footer";
const baseUrl = 'http://127.0.0.1:3000'

// import "../css/signin.css";
// import "../css/product.css";
function Signin() {
  const [userdata, setuserdata] = useState({
    Firstname: "",
    Email: "",
    Password: "",
    Username: "",
    Mobileno: "",
  });
  const navigate = useNavigate();
  function handelinput(e) {
    setuserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  }
  const submit = async (e) => {
    e.preventDefault();
    console.log(userdata);
    try {
      const response = await axios.post(baseUrl +"/api/users/product/signin", userdata);
      console.log(response)
      // const { token, user } = response.data.userdata;
      
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user.id);
      setTimeout(() => {
        navigate("/"); 
            }, 2000);
      toast.success(response.data.message)
      toast.success("welcome to friend's collection 🙏");

    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <Navigationbar />
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 pt-16">
  <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
    
    {/* Left Side - Image or Text */}
    <div className="md:w-1/2 bg-gradient-to-tr from-blue-600 to-purple-500 p-8 text-white flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Friend's Collection</h2>
      <p className="text-sm opacity-90">Sign up to explore premium fashion and stay updated with our latest trends.</p>
    </div>

    {/* Right Side - Sign Up Form */}
    <div className="md:w-1/2 p-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Create Your Account</h2>
      <form onSubmit={submit} className="space-y-4">
        <input
          type="text"
          name="Firstname"
          placeholder="Full Name"
          onChange={handelinput}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="Email"
          placeholder="Email"
          onChange={handelinput}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={handelinput}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="Username"
          placeholder="Username"
          onChange={handelinput}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="Mobileno"
          placeholder="Mobile Number"
          onChange={handelinput}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</div>

     <Footer/>
    </>
  );
}

export default Signin;
