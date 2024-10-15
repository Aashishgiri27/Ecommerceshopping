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
      alert("welcome to friend's collection ");
    } catch (err) {
      console.log("internal error", err);
    }
  };

  return (
    <>
      <Navigationbar />

      <div className="my-12">
        <p className="text-center text-2xl text-bold my-8"> SIGN IN</p>
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
                SignIn
              </button>
            </div>
          </div>
        </div>
     <Footer/>
    </>
  );
}

export default Signin;
