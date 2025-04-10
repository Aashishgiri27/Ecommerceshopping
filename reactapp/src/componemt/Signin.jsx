import React from "react";
import { useState } from "react";
import Navigationbar from "./Navigationbar";

import axios from "axios";
import Footer from "./Footer";

// import "../css/signin.css";
// import "../css/product.css";
function Signin() {
  const [userdata, setuserdata] = useState({
    Firstname: "",
    Email: "",
    Password: "",
    Username: "",
    Mobileno: "",
  });
  function handelinput(e) {
    setuserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  }
  const submit = async (e) => {
    e.preventDefault();
    console.log(userdata);
    try {
      const response = await axios.post("/product/signin", userdata);
      // console.log(response)
      setTimeout(() => {
        navigate("/product/login"); 
            }, 1000);
      alert("welcome to friend's collection ");

    } catch (err) {
      console.log("internal error", err);
    }
  };

  return (
    <>
      <Navigationbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">

      <div className="max-w-md w-full bg-white p-6 shadow-md rounded">
        <p className="text-center text-3xl font-bold my-4"> SIGN UP</p>
          <div className="  w-96  mx-auto my-auto flex flex-col  ">
              <input
              className="h-12  border border-black mb-5 pl-5"
                type="text"
                name="Firstname"
                id=""
                placeholder="Name" 
                onChange={handelinput}
              />
            
           
              <input
              className="h-12  border border-black mb-5 pl-5"

                type="text"
                name="Email"
                id=""
                placeholder="Email"
                onChange={handelinput}
              />
            
            

              <input
              className="h-12  border border-black mb-5 pl-5"
                type="password"
                name="Password"
                id=""
                placeholder="Password"
                onChange={handelinput}
              />
           

            
              <input
              className="h-12  border border-black mb-5 pl-5"
                type="text"
                name="Username"
                id=""
                placeholder="Username"
                onChange={handelinput}
              />
            
        
              <input
              className="h-12  border border-black mb-5 pl-5"
                type="number"
                name="Mobileno"
                id=""
                placeholder=" Mobile number"
                onChange={handelinput}
              />
        
            <div className="text-center">
              <button className="text-xl h-10 w-24 bg-blue-600 rounded-md" type="submit" onClick={submit}>
                SignUP
              </button>
            </div>
          </div>
        </div>
        </div>
     <Footer/>
    </>
  );
}

export default Signin;
