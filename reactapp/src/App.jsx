import { useState } from "react";
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

import "./App.css";
import Adminproduct from "./componemt/Adminpage/Adminproduct";
import Adminorder from "./componemt/Adminpage/Adminorder"
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
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
       <Toaster position="top-center" reverseOrder={false} />
      <CartProvider>
      <Routes>
      <Route path="/admin">
          <Route path="products" element={<Adminproduct/>}></Route>
          <Route path="order" element={<Adminorder/>}></Route>
          <Route path="additem" element={<Additem/>}></Route>
          <Route path="Users" element={<Userinfo/>}></Route>
          <Route path="messages" element={<Adminmessage/>}></Route>
          
        </Route>
        <Route path="/" element={<Product />}></Route>
        <Route path="/product/:id" element={<Detail/>} ></Route>
        <Route path="/:product/:name/:id" element={<Detail/>} ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Messages" element={<Messages />}></Route>
        <Route path="/product/shirt" element={<Shirts />}></Route>
        <Route path="/product/tshirt" element={<TShirts />}></Route>
        <Route path="/product/Pants" element={<Trackpants />}></Route>
        <Route path="/product/Trousers" element={<Trousers />}></Route>
        <Route path="/product/Accessories" element={<Accessories />}></Route>
        <Route path="/product/search/:name" element={<SearchResults />} ></Route>

        <Route path="/product/jeans" element={<Gens />}></Route>
        <Route path="/product/signin" element={<Signin />}></Route>
        <Route path="/product/login" element={<Login />}></Route>
      </Routes>
    </CartProvider>
     
     
    </div>
  );
}

export default App;
