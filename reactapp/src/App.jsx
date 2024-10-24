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
import Contact from "./componemt/Contact";
function App() {
  return (
    <div>
      
     
      <Routes>
      <Route path="/admin">
          <Route path="products" element={<Adminproduct/>}></Route>
          <Route path="order" element={<Adminorder/>}></Route>
          <Route path="additem" element={<Additem/>}></Route>

        </Route>
        <Route path="/" element={<Product />}></Route>
        <Route path="/product/:id" element={<Detail/>} ></Route>
        <Route path="/:product/:name/:id" element={<Detail/>} ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/shirt" element={<Shirts />}></Route>
        <Route path="/product/tshirt" element={<TShirts />}></Route>
        <Route path="/product/gens" element={<Gens />}></Route>
        <Route path="/product/signin" element={<Signin />}></Route>
        <Route path="/product/login" element={<Login />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
