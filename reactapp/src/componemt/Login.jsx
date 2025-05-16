import { useState } from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Modal from "react-modal";

const baseUrl = "http://127.0.0.1:3000";

function Login() {
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });

  const navigate = useNavigate();

  const inputData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!data.Email || !data.Password) {
      toast.error("Please enter both Email and Password.");
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrl}/api/users/product/login`,
        data
      );
      const { token, user } = response.data;
     console.log(response)
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id);
       localStorage.setItem('verification', response.data.user.isverifyed);
      toast.success("Login successful ✅");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      toast.error("Invalid credentials ❌");
    }
  };

  // Modal & forgot password related states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [showResetFields, setShowResetFields] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendOtp = async () => {
    if (!forgotEmail) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      await axios.post(`${baseUrl}/api/otp/sendotp`, {
        email: forgotEmail,
      });
      toast.success("OTP sent to your email 📩");
      setShowOtpInput(true);
      setShowResetFields(false);
    } catch (err) {
      toast.error("Error sending OTP ❌");
    }
  };

  const handleConfirmOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/api/otp/verifyotp`, {
        email: forgotEmail,
        otp,
      });

      if (response.data.success) {
        toast.success("OTP verified ✅");
        setShowResetFields(true);
      } else {
        toast.error("Incorrect OTP ❌");
      }
    } catch (err) {
      toast.error("Verification failed ❌");
    }
  };

  const handlePasswordReset = async () => {
    if (!newPassword || !confirmPassword) {
      return toast.error("Please fill in both fields.");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    try {
      await axios.post(`${baseUrl}/api/otp/resetpassword`, {
        email: forgotEmail,
        newPassword,
      });

      toast.success("Password reset successfully ✅");
      setIsModalOpen(false);
      setForgotEmail("");
      setOtp("");
      setNewPassword("");
      setConfirmPassword("");
      setShowOtpInput(false);
      setShowResetFields(false);
    } catch (err) {
      toast.error("Failed to reset password ❌");
    }
  };

  return (
    <>
      <Navigationbar />

      <div className="bg-gray-50 px-4 pt-16 pb-8 min-h-[85vh]">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left section */}
          <div className="md:w-1/2 bg-gradient-to-tr from-cyan-700 to-blue-500 text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="mb-6 opacity-90">
              Log in to access your personalized fashion dashboard and track
              your orders.
            </p>

            <ul className="space-y-2 text-sm opacity-90">
              <li>✓ Track orders in real-time</li>
              <li>✓ Get fashion recommendations</li>
              <li>✓ Save your favorites</li>
              <li>✓ Early access to exclusive drops</li>
            </ul>
          </div>

          {/* Right section - Login */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
              Log in to your account
            </h2>

            <form onSubmit={submit} className="space-y-4">
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

              <div
                onClick={() => {
                  setIsModalOpen(true);
                  setShowOtpInput(false);
                  setShowResetFields(false);
                  setForgotEmail("");
                  setOtp("");
                  setNewPassword("");
                  setConfirmPassword("");
                }}
                className="text-right text-sm text-cyan-700 hover:underline cursor-pointer"
              >
                Forgot password?
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
              >
                Login
              </button>
            </form>

            <p className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?
              <span
                onClick={() => navigate("/product/signin")}
                className="text-cyan-700 font-medium hover:underline ml-1 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto mt-40"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        ariaHideApp={false}
      >
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
        {!showOtpInput && !showResetFields && (
          <>
            <p className="mb-3 text-gray-600">Enter your email to receive an OTP</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSendOtp}
                className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
              >
                Get OTP
              </button>
            </div>
          </>
        )}

        {showOtpInput && !showResetFields && (
          <>
            <p className="mb-2 text-gray-600">Enter the OTP sent to your email</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setShowOtpInput(false);
                  setForgotEmail("");
                  setOtp("");
                }}
                className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmOtp}
                className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
              >
                Confirm OTP
              </button>
            </div>
          </>
        )}

        {showResetFields && (
          <>
            <p className="mb-2 text-gray-600">Enter your new password</p>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setShowResetFields(false);
                  setForgotEmail("");
                  setOtp("");
                  setNewPassword("");
                  setConfirmPassword("");
                }}
                className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordReset}
                className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
              >
                Reset Password
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}

export default Login;
