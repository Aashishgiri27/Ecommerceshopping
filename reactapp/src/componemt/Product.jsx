import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import axios from "axios";
import Banner from "./Banner";
import "../css/product.css";
import truck from "../images/truck_15309735.gif";
import hour from "../images/hour.gif";
import dollar from "../images/dollar.gif";
import festival from "../images/festival.gif";

import Footer from "./Footer";
import Reviws from "./Reviws";
const baseUrl = 'http://127.0.0.1:3000'
function Product() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("/product");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleBuyNowClick = (itemId) => {
    console.log(`in product ${itemId}`);
    navigate(`/product/${itemId}`);
  };

  return (
    <>
      <Navigationbar />
      <Banner />
      <div className="flex justify-around m-2 p-4 bg-background border-t-black border-b-black border-2">
        <div className="flex flex-col items-center text-center">
          <img
            aria-hidden="true"
            alt="truck"
            src={truck}
            className="h-36 w-36"
          />
          <h3 className="mt-2 text-lg font-semibold text-primary">Free Shopping</h3>
          <p className="text-muted-foreground">Free Shopping World Wide</p>
        </div>
        <div class="flex flex-col items-center text-center ">
          <img
            aria-hidden="true"
            alt="service"
            src={hour}
            className="h-36 w-36"
          />
          <h3 className="mt-2 text-lg font-semibold text-primary">
            24 X 7 Service
          </h3>
          <p className="text-muted-foreground">Online Service For New Customer</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            aria-hidden="true"
            alt="offer"
            src={festival}
            className="h-36 w-36"
          />
          <h3 className="mt-2 text-lg font-semibold text-primary">
            Festival Offer
          </h3>
          <p className="text-muted-foreground">New Online Special Festival Offer</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            aria-hidden="true"
            alt="service"
            src={dollar}
            className="h-36 w-36"
          />
          <h3 className="mt-2 text-lg font-semibold text-primary">
            Return & Refund
          </h3>
          <p className="text-muted-foreground">Money back guarantee</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 p-6 w-10/12 m-auto">
        {[...data].reverse().map((item, index) => (
          <div
          
            className="bg-card p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 "
            key={index}
            onClick={() => handleBuyNowClick(item._id)}
          > 
        
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2 text-primary">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground">{item.color}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-bold text-accent">
                ₹{item.price}
              </span>
              <span className="text-yellow-500">★★★★☆</span>
            </div>
          
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Product;
