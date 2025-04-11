import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/navigationbar.css";

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/"); // redirect after logout
  };

  return (
    <div>
      {/* Top Nav */}
      <div className="h-16 w-full mx-auto flex flex-row justify-evenly items-center primary-background-color ">
        <h1 className="text-3xl font-serif">FRIEND'S COLLECTION</h1>
        <div className="flex flex-row gap-4 items-center">
          {navitem.map((item, index) => (
            <Link key={index} to={item.href}  className="w-24 text-center hover:secondary-background-color  ">
              {item.label}
            </Link>
          ))}

          {!isLoggedIn ? (
            <>
              <Link to="/product/login" className="w-24 text-center">Login</Link>
              <Link
                to="/product/signin"
                className="w-24 text-center rounded-lg text-white bg-blue-700 py-1 px-2"
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
          <Link
            key={index}
            to={item.href}
            className="w-60 text-lg border-l-2 text-center flex items-center justify-center"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navigationbar;
