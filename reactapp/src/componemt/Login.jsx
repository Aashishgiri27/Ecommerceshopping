import { useState } from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
const baseUrl = 'http://127.0.0.1:3000'
function Login() {
  const [data, setData] = useState({
    Email: "",
    Password: ""
  });

  const [message, setMessage] = useState("");
  // const navigate = useNavigate();

  const inputData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!data.Email || !data.Password) {
      toast.error("Please enter both Email and Password.");
      return;
    }

    try {
      const response = await axios.post(baseUrl +"/api/users/product/login", data); // make sure baseURL is set in axios config if you're omitting domain
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id);

      toast.success("Login successful ✅");

      // setTimeout(() => {
      //   navigate("/"); // redirect after login
      // }, 1000);

      setTimeout(() => {
        window.location.href = "/"; // 👈 forces full page reload, which re-runs useEffect
      }, 1000);
    } catch (err) {
      toast.error("Invalid credentials ❌");
    }
  };

  return (
  <>
  <Navigationbar />

  <div className="bg-gray-50 px-4 pt-16 pb-8 min-h-[80vh]">
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
      
      {/* Left section - Enhanced with feature highlights */}
      <div className="md:w-1/2 bg-gradient-to-tr from-cyan-700 to-blue-500 text-white p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
        <p className="mb-6 opacity-90">
          Log in to access your personalized fashion dashboard and track your orders.
        </p>

        <ul className="space-y-2 text-sm opacity-90">
          <li>✓ Track orders in real-time</li>
          <li>✓ Get fashion recommendations</li>
          <li>✓ Save your favorites</li>
          <li>✓ Early access to exclusive drops</li>
        </ul>
      </div>

      {/* Right section - Login Form */}
      <div className="md:w-1/2 p-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Log in to your account</h2>

        <form onSubmit={submit} className="space-y-5">
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
            onChange={inputData}
            value={data.Email}
            required
          />

          <input
            type="password"
            name="Password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
            onChange={inputData}
            value={data.Password}
            required
          />

          <div className="text-right text-sm text-cyan-700 hover:underline cursor-pointer">
            Forgot password?
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>

  <Footer />
</>

  );
}

export default Login;
