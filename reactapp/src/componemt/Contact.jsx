import React from "react";

import { useState } from "react";
import axios from "axios";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

function Contact() {
    const [userquery, setuserquery] = useState({
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
    });
    function handelinput(e) {
      setuserquery({
        ...userquery,
        [e.target.name]: e.target.value,
      });
    }
    const submit = async (e) => {
      e.preventDefault();
      // console.log(userquery);
      try {
        const response = await axios.post("/product/contact", userquery);
        // console.log(response)
        alert("Message Saved ");
      } catch (err) {
        console.log("internal error", err);
      }
    };
  return (
    <>
      <Navigationbar />
      <div className=" w-4/5  mx-auto p-6  flex flex-col ">
        <h1 className="text-3xl  font-bold mb-1 text-center">Sent a Message</h1>
        <div class="bg-primary p-4 rounded-lg  text-white bg-blue-950">
          <p>Keep In Touch with Us</p>
        </div>
      </div>
      <div className="w-4/5 my-5 mx-auto p-6 bg-slate-400 text-foreground rounded-lg shadow-md flex flex-row justify-between">
        <form className="w-1/2 pl-5" onSubmit={submit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" for="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              class="border border-border rounded-lg p-2 w-full"
              placeholder="Aashish Giri"
              onChange={handelinput}
            />
          </div>
          <div class="mb-4">
            <label className="block text-sm font-medium mb-1" for="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
                name="Email"
              className="border border-border rounded-lg p-2 w-full"
              placeholder="friendcollection@mail.com"
              onChange={handelinput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" for="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="Subject"
              class="border border-border rounded-lg p-2 w-full"
              placeholder="Write your subject"
              onChange={handelinput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" for="message">
              Your Message
            </label>
            <textarea
              id="message"
              className="border border-border rounded-lg p-2 w-full"
              rows="4"
              name="Message"
              placeholder="Write your message here..."
              onChange={handelinput}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue/80 p-2 rounded-lg w-40"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className=" w-1/2 pl-5 flex flex-col justify-between ">
        <h3 className="text-2xl font-bold text-center">Contact Information</h3>
          <tr className="flex flex-row justify-evenly ">
            <td><IoMdMailUnread size={60} color="f2cc8f" /></td>
            <td className="content-center text-2xl">Email: <a href="mailto:contact@shofy.com" className="text-accent">contact@gmail.com </a></td> 
          </tr>
          <tr className="flex flex-row justify-evenly ">
            
            <td><FaPhoneAlt size={60} color="e07a5f" /></td> 
            <td className=" content-center text-2xl">Phone:{" "}<a href="tel:+67041390762" className="text-accent"> +670 413 90 762</a></td>
          </tr>
          <tr className="flex flex-row justify-evenly " >
            <td><a href="https://www.scaler.com/topics/course/javascript-beginners/?event=signup_event" className="text-accent" >
              <img
                aria-hidden="true"
                alt="service"
                src={facebook}
                className="h-16 w-16"
              />
              Facebook
            </a></td>
            <td><a href="#" className="text-accent">
              <img
                aria-hidden="true"
                alt="service"
                src={twitter}
                className="h-16 w-16"
              />
              Twitter
            </a></td>
            <td> <a href="#" className="text-accent">
              <img
                aria-hidden="true"
                alt="service"
                src={instagram}
                className="h-16 w-16"
              />
              Instagram
            </a></td>
          </tr>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
