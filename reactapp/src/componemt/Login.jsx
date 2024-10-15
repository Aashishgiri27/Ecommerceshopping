// import React, { useState } from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import { useRef, useState } from "react";

function Login() {
  
  
  return (
    <>
      <Navigationbar />

      <form className=" h-96 mx-auto  flex flex-col justify-center items-center  shadow-slate-500" method="post" action="/product/login" >
        <h1 className="text-center text-2xl text-black mb-14">LOG-IN</h1>
        <input type="text" name="Username" id=""placeholder="Username" className=" w-96 h-12 mb-5 border-black  pl-5 rounded-lg border-2"/>

        <input type="password" name="Password" placeholder="Password" className="w-96 h-12 pl-5 border-black rounded-lg border-2"/>

        <div className="w-full h-10 mt-10  flex flex-row justify-center items-center ">
          <button
            className="bg-cyan-500 shadow-lg mb-5 shadow-cyan-500/50 w-20 h-10"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Login;
