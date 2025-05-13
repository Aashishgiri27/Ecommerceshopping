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
import { Link,  useLocation } from "react-router-dom";
import Footer from "./Footer";
import Reviws from "./Reviws";
const baseUrl = 'http://127.0.0.1:3000'


const item=[
  {
    name:"T-Shirts", 
    image:"https://m.media-amazon.com/images/I/518t+Fw6P4L.jpg",
    href:"/product/tshirt" 
  },
   {
    name: "Shirts", 
    image:"https://m.media-amazon.com/images/I/51-pLhPHoBL._AC_UL480_FMwebp_QL65_.jpg",
    href:"/product/shirt"
  },
   {
    name: "Pants",
    image:"https://m.media-amazon.com/images/I/4120-Rs51YL._AC_UL480_FMwebp_QL65_.jpg",
    href:"/product/Pants"
  },
   {
    name: "Jeans", 
    image:"https://m.media-amazon.com/images/I/71znGOpU8PL._AC_UL480_FMwebp_QL65_.jpg",
    href:"/product/jeans"
  },
   {
    name:"Trousers",
    image:"https://m.media-amazon.com/images/I/61T3EJXDOAL._AC_UL480_FMwebp_QL65_.jpg",
    href:"/product/Trousers"
  },
   {
    name:"Accessories", 
    image:"https://m.media-amazon.com/images/I/81jv56HsVOL._AC_UL480_FMwebp_QL65_.jpg",
    href:"/product/Accessories"
  },
   {
    name:"Watches", 
    image:"https://m.media-amazon.com/images/I/711NXCmUfbL._AC_UL480_FMwebp_QL65_.jpg",
    href:"/product/Accessories"
  }, {
    name:"Shoes", 
    image:"https://m.media-amazon.com/images/I/71f3BmjCwtL._SY695_.jpg",
    href:"/product/Accessories"
  },
]
function Product() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     const response = await axios.get("/product");
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data", error);
  //   }
  // };

  const handleBuyNowClick = (itemId) => {
    console.log(`in product ${itemId}`);
    navigate(`/product/${itemId}`);
  };

  return (
    <>
      <Navigationbar />
      <Banner />
      <div className="flex justify-around m-2 p-4  border-t-black border-b-black border-2 bg-gradient-to-r from-blue-600 to-indigo-400 text-white">
        <div className="flex flex-col items-center text-center">
          <img
            aria-hidden="true"
            alt="truck"
            src={truck}
            className="h-36 w-36 rounded-full"
          />
          <h3 className="mt-2 text-lg font-semibold text-primary">Free Shopping</h3>
          <p className="text-muted-foreground">Free Shopping World Wide</p>
        </div>
        <div class="flex flex-col items-center text-center ">
          <img
            aria-hidden="true"
            alt="service"
            src={hour}
            className="h-36 w-36 rounded-full"
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
            className="h-36 w-36 rounded-full"
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
            className="h-36 w-36 rounded-full"
          />
          <h3 className="mt-2 text-lg font-semibold text-primary">
            Return & Refund
          </h3>
          <p className="text-muted-foreground">Money back guarantee</p>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 p-6 w-10/12 m-auto">
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
      </div> */}
      <main className="flex-1 font-sans">


  {/* Categories Section */}
 <section className="py-16  bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {item.map((item,index) => (
              <Link to={item.href}>
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className= " h-52 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold">{item.name}</h3>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


  {/* Featured Products */}
  <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-indigo-400 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold ">Featured Products</h2>
      <p className=" mt-1 ">Our most popular men's styles based on sales</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {[...data].reverse().slice(0, 4).map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-xl transition p-4">
            <img
             src={item.img}
              alt={item.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
                onClick={() => handleBuyNowClick(item._id)}
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-bold text-blue-600">₹{item.price}</span>
              <span className="text-yellow-500 text-sm">
                {/* {'★'.repeat(Math.floor(item.rating))} {item.rating} */}
                <span className="text-yellow-500">★★★★☆</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Special Offer */}
  <section className="py-10 pl-20 ">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-bold">Men's Collection Sale</h2>
          <p className="mt-4 text-lg">Up to 50% off on selected men's apparel. Limited time offer.</p>
          <button className="mt-6 px-6 py-3 bg-blue-600  text-white font-semibold rounded-lg hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61SDTiZdvHL._AC_UL480_FMwebp_QL65_.jpg"
            alt="Sale"
            className="h-2/3 w-2/3 rounded-3xl  object-cover"
          />
        </div>
      </div>
    </div>
  </section>

  {/* AI Customization */}
  {/* <section className="w-full py-20 pl-20 bg-slate-50">
    
    <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <img
        src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-6590-61f7-ad98-5698579b528f/raw?se=2025-05-11T20%3A27%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=864daabb-d06a-46b3-a747-d35075313a83&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-11T18%3A12%3A47Z&ske=2025-05-12T18%3A12%3A47Z&sks=b&skv=2024-08-04&sig=NR1mukXkuTtUXE5dybKvLFd3OLLXwD5d1D09DL15DqU%3D"
        alt="AI Design"
        className="rounded-lg w-2/3 object-cover shadow"
      />
      <div>
        <h2 className="text-4xl font-bold text-gray-800">Design Your Perfect Fit</h2>
        <p className="mt-3 text-gray-600">
          Create custom clothing tailored to your exact preferences with our AI-powered design tool.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
          <li>Choose your fabric, color, and pattern</li>
          <li>Customize fit and measurements</li>
          <li>Add personalized details and embellishments</li>
          <li>Preview your design in 3D before ordering</li>
        </ul>
        <div className="mt-6 flex gap-4 flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Start Designing
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>
      </div>
    
    </div>
  </section> */}

  {/* Testimonials */}
  <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-indigo-400 text-white">
    <div className="container px-6 mx-auto text-center">
      <h2 className="text-4xl font-bold ">What Our Customers Say</h2>
      <p className=" mt-2">Don't just take our word for it, hear from our satisfied customers</p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          { name: "James Wilson", comment: "Exceptional shirt quality. Perfect fit!", rating: 5 },
          { name: "Michael Chen", comment: "Loved the custom design suit!", rating: 5 },
          { name: "Robert Garcia", comment: "Best jeans ever. Great service!", rating: 4 },
        ].map((t, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-lg shadow">
            <div className="text-yellow-500 text-lg mb-2">{'★'.repeat(t.rating)}</div>
            <p className="text-gray-600 italic mb-4">"{t.comment}"</p>
            <p className="font-bold text-gray-800">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Newsletter */}
  {/* <section className="w-full py-20  bg-gradient-to-r from-blue-600 to-indigo-400 text-white">
    <div className="container px-6 mx-auto text-center">
      <h2 className="text-4xl font-bold ">Join Our Newsletter</h2>
      <p className=" mt-2 mb-6">Subscribe for special offers and exclusive deals</p>
      <form className="flex justify-center gap-4 flex-wrap max-w-md mx-auto">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full sm:w-auto px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Subscribe
        </button>
      </form>
      <p className="text-sm  mt-4">
        By subscribing, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
      </p>
    </div>
  </section> */}
     </main>

      <Footer />
    </>
  );
}

export default Product;
