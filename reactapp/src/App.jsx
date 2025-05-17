import { useState, useEffect } from "react";
import "animate.css";
// import Navigationbar from "./componemt/Navigationbar";
import Product from "./componemt/Product";
import Shirts from "./componemt/Shirts";
import TShirts from "./componemt/T-Shirts";
import Gens from "./componemt/Gens";
import Signin from "./componemt/Signin";
import Login from "./componemt/Login";
import Cart from "./componemt/Cart";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import React from "react";
import Profile from "./componemt/Profile";
import "./App.css";
import Adminproduct from "./componemt/Adminpage/Adminproduct";
import Adminorder from "./componemt/Adminpage/Adminorder";
import Additem from "./componemt/Adminpage/Additem";
import Detail from "./componemt/Detail";
import Messages from "./componemt/Messages";
import Userinfo from "./componemt/Adminpage/Userinfo";
import Trackpants from "./componemt/Trackpants";
import Trousers from "./componemt/Trousers";
import Accessories from "./componemt/Accessories";
import { CartProvider } from "./CartContext";
import Adminmessage from "./componemt/Adminpage/Adminmessage";
import SearchResults from "./componemt/SearchResults";
import { Toaster } from "react-hot-toast";
import AdminReview from "./componemt/Adminpage/AdminReview";
import Buynow from "./componemt/Buynow";
import AdminPurchaseList from "./componemt/Adminpage/AdminPurchaseList";
import ProtectedRoute from "./Utils/ProtectedRoute";
function App() {
  const [verification, setVerification] = useState(null);
  useEffect(() => {
    const verificationFromStorage = localStorage.getItem("verification");

    setVerification(verificationFromStorage);
  });
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <CartProvider>
        <Routes>
          <Route path="/admin">
            <Route
              path="products"
              element={
                <ProtectedRoute>
                  <Adminproduct />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="order"
              element={
                <ProtectedRoute>
                  {" "}
                  <Adminorder />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="additem"
              element={
                <ProtectedRoute>
                  <Additem />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="Users"
              element={
                <ProtectedRoute>
                  <Userinfo />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="messages"
              element={
                <ProtectedRoute>
                  <Adminmessage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="reviews"
              element={
                <ProtectedRoute>
                  <AdminReview />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="purchase"
              element={
                <ProtectedRoute>
                  <AdminPurchaseList />
                </ProtectedRoute>
              }
            ></Route>
          </Route>

          <Route path="/" element={<Product />}></Route>
          <Route path="/product/:id" element={<Detail />}></Route>
          <Route path="/:product/:name/:id" element={<Detail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/Messages" element={<Messages />}></Route>
          <Route path="/product/shirt" element={<Shirts />}></Route>
          <Route path="/product/tshirt" element={<TShirts />}></Route>
          <Route path="/product/Pants" element={<Trackpants />}></Route>
          <Route path="/product/Trousers" element={<Trousers />}></Route>
          <Route path="/product/Accessories" element={<Accessories />}></Route>
          <Route
            path="/product/search/:name"
            element={<SearchResults />}
          ></Route>
          <Route path="/user/profile" element={<Profile />}></Route>
          <Route path="/product/jeans" element={<Gens />}></Route>
          <Route path="/product/signin" element={<Signin />}></Route>
          <Route path="/product/login" element={<Login />}></Route>
          <Route path="/buy" element={<Buynow />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
