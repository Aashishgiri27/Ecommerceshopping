import React, { useState, useEffect } from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = 'http://127.0.0.1:3000';

function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/product/signin");
    } else {
      getData();
    }
  }, []);

  const getData = async () => {
    const userid = localStorage.getItem("userId");
    if (!userid) {
      console.error("User ID not found in localStorage");
      return;
    }

    try {
      const response = await axios.get(`${baseUrl}/api/users/${userid}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      <Navigationbar />

      {/* Gradient Background with Centered Card */}
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-4 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 transition transform hover:scale-[1.01] duration-300">

          {/* Avatar + Title */}
          <div className="text-center mb-10">
            <div className="mx-auto w-24 h-24 rounded-full bg-purple-200 flex items-center justify-center text-4xl text-purple-700 mb-4 border-4 border-purple-400 shadow-md">
              👤
            </div>
            <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
              User Profile
            </h2>
            <p className="text-sm text-gray-500 mt-1">Welcome to your account dashboard</p>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
            <div>
              <span className="font-bold text-purple-600">Full Name:</span> {data.Firstname}
            </div>
            <div>
              <span className="font-bold text-purple-600">Email:</span> {data.Email}
            </div>
            <div>
              <span className="font-bold text-purple-600">Username:</span> {data.Username}
            </div>
            <div>
              <span className="font-bold text-purple-600">Mobile:</span> {data.Mobileno}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
