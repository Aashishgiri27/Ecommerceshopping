import React, { useEffect, useState } from "react";
import { Link, useNavigate,useLocation  } from "react-router-dom";
import "../css/navigationbar.css";
import "../App.css";
import toast from 'react-hot-toast';
const navitem = [
  { label: "HOME", href: "/" },
  { label: "CONTACT", href: "/Messages" },
  { label: "CART", href: "/cart" },
];

const productItems = [
  { label: "Shirts", href: "/product/shirt" },
  { label: "Tshirts", href: "/product/tshirt" },
  { label: "Track Pants", href: "/product/Pants" },
  { label: "Jeans", href: "/product/jeans" },
  { label: "Trousers", href: "/product/Trousers" },
  { label: "Accessories", href: "/product/Accessories" },
];

function Navigationbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setTimeout(() => {
      window.location.href = "/"; // 👈 forces full page reload, which re-runs useEffect
    }, 1000);
    toast.success("Logout Successfully ")
    navigate("/"); // redirect after logout
  };

  return (
    <div>
      {/* Top Nav */}
      <div className="h-16 w-full mx-auto flex flex-row justify-evenly items-center primary-background-color ">
        <h1 className="text-3xl font-serif">FRIEND'S COLLECTION</h1>
        <div className="flex flex-row gap-4 items-center">
          {navitem.map((item, index) => (
            <Link key={index} to={item.href}  className={`w-24 py-1 rounded-xl text-center   ${
              location.pathname === item.href ? "bg-blue-600 text-white" : ""
            }`}>
              {item.label}
            </Link>
          ))}

          {!isLoggedIn ? (
            <>
              <Link to="/product/login" className={`w-24 text-center py-1 rounded-xl  ${ location.pathname === "/product/login" ? "bg-blue-600 text-white" : ""
            }`}>Login</Link>
              <Link
                to="/product/signin"
                className="w-24 text-center rounded-lg text-white bg-blue-800 py-1 px-2"
              >
                Sign-Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="w-24 text-center text-white bg-red-500 rounded-lg py-1 px-2"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Product Category Nav */}
      <div className="h-12 flex flex-row border-t-2 border-b-2 border-black">
        {productItems.map((item, index) => (
          <div className="w-60 text-lg border-l-2 text-center flex items-center justify-center">
          <Link
            key={index}
            to={item.href}
            className={`px-10 py-1 rounded-xl  hover:bg-blue-200  ${
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
