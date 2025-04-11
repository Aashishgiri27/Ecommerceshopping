import { useState } from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
      setMessage("Please enter both Email and Password.");
      return;
    }

    try {
      const response = await axios.post(baseUrl +"/api/users/product/login", data); // make sure baseURL is set in axios config if you're omitting domain
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id);

      setMessage("Login successful ✅");

      // setTimeout(() => {
      //   navigate("/"); // redirect after login
      // }, 1000);

      setTimeout(() => {
        window.location.href = "/"; // 👈 forces full page reload, which re-runs useEffect
      }, 1000);
    } catch (err) {
      console.error("Login error:", err);
      setMessage("Invalid credentials or server error ❌");
    }
  };

  return (
    <>
      <Navigationbar />

      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 shadow-md rounded">
          <h2 className="text-center text-3xl font-bold mb-8 text-gray-900">
            Log in to your account
          </h2>

          <form onSubmit={submit} className="space-y-6">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="w-full h-12 border-2 border-gray-300 rounded px-4"
              onChange={inputData}
              value={data.Email}
              required
            />

            <input
              type="password"
              name="Password"
              placeholder="Password"
              className="w-full h-12 border-2 border-gray-300 rounded px-4"
              onChange={inputData}
              value={data.Password}
              required
            />

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition"
            >
              Login
            </button>
          </form>

          {message && (
            <p className="text-center mt-4 text-sm text-red-600">{message}</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
