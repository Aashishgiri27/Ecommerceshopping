import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/navigationbar.css";
import "../App.css";
import toast from "react-hot-toast";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";

const navitem = [
  { label: "HOME", href: "/" },
  { label: "CONTACT", href: "/Messages" },
  { label: "CART", href: "/cart" },
];

const productItems = [
  { label: "Shirts", href: "/product/shirt" },
  { label: "Accessories", href: "/product/Accessories" },
  { label: "Tshirts", href: "/product/tshirt" },
  { label: "Track Pants", href: "/product/Pants" },
  { label: "Jeans", href: "/product/jeans" },
  { label: "Trousers", href: "/product/Trousers" },
];

function Navigationbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [verification, setVerification] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const verificationFromStorage = localStorage.getItem("verification");

    setIsLoggedIn(!!token);
    setUserEmail(email || "");
    setVerification(verificationFromStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("verification"); // also clear email on logout
    setIsLoggedIn(false);
    setUserEmail("");
    toast.success("Logout Successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/product/search/${search.trim()}`);
    }
  };

  return (
    <div>
      {/* Top Nav */}
      <div className="h-16 w-full px-6 flex justify-between items-center primary-background-color shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="w-14 h-14 rounded-full" />
          <h1 className="text-2xl font-bold font-serif text-white">
            FRIEND'S COLLECTION
          </h1>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white text-black rounded-lg overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-1 w-64 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className=" text-black px-3">
            <FaSearch />
          </button>
        </form>

        {/* Navigation & Auth Buttons */}
        <div className="flex items-center gap-4">
          {navitem.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`px-3 py-1 rounded-xl text-white ${
                location.pathname === item.href
                  ? "bg-blue-700"
                  : "hover:bg-blue-500"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Show Admin button only for specific email */}
          {isLoggedIn && verification === "true" && (
            <Link
              to="/admin/products"
              className="px-3 py-1 rounded-xl bg-green-600 text-white hover:bg-green-700"
            >
              Admin
            </Link>
          )}

          {!isLoggedIn ? (
            <>
              <Link
                to="/product/login"
                className={`px-3 py-1 rounded-xl text-white ${
                  location.pathname === "/product/login"
                    ? "bg-blue-700"
                    : "bg-blue-600"
                }`}
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link to="/user/profile" className="text-white text-2xl">
                <FaUserCircle />
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-500 text-white rounded-xl"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Product Category Nav */}
      <div className="h-12 flex flex-row border-t-2 border-b-2 border-black">
        {productItems.map((item, index) => (
          <div
            key={index}
            className="w-60 text-lg border-l-2 text-center flex items-center justify-center"
          >
            <Link
              to={item.href}
              className={`px-10 py-1 rounded-xl hover:bg-blue-200 ${
                location.pathname === item.href ? "bg-blue-600 text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigationbar;
