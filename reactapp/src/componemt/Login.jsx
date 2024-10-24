// import  { useState } from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";

import axios from "axios";

import { useRef, useState } from "react";

function Login() {
  const [data,setdata]=useState({
    Email:"",
    Password:""
  })
  function inputdata(e){
   setdata({
    ...data,
    [e.target.name]:e.target.value
   });
  }
  async function submit(e){
  e.preventDefault();
  console.log(data)
  try{
    const response = await axios.post("/product/login", data);
      console.log(response)
      alert("Login succesfully ");
   
  }catch (err) {
    console.log("internal error", err);
  }
 }

  return (
    <>
      <Navigationbar />

      <div className=" h-96 mx-auto  flex flex-col justify-center items-center  shadow-slate-500" >
        <h1 className="text-center text-2xl text-black mb-14">LOG-IN</h1>
        <input type="text" name="Email" id=""placeholder="Email" className=" w-96 h-12 mb-5 border-black  pl-5 rounded-lg border-2" onChange={inputdata}/>

        <input type="password" name="Password" placeholder="Password" className="w-96 h-12 pl-5 border-black rounded-lg border-2" onChange={inputdata}/>

        <div className="w-full h-10 mt-10  flex flex-row justify-center items-center ">
          <button
            className="bg-cyan-500 shadow-lg mb-5 shadow-cyan-500/50 w-20 h-10"
            type="submit"
            onClick={submit}
          >
            Login
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
