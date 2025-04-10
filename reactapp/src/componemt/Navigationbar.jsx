import React from "react";
import { Link } from "react-router-dom";
import "../css/navigationbar.css";

const navitem = [
  {
    label: "HOME",
    href: "/",
  },
  // {
  //   label: "PRODUCT",
  //   href: "/product/shirt",
  // },
  {
    label: "CONTACT",
    href: "/contact",
  },
  {
    label: "CART",
    href: "/cart",
  },
 
];

const item=[
  {
    label:"Shirts",
    href:"/product/shirt"
  },
  {
     label:"Tshirts",
    href:"/product/tshirt"
  },
  {
     label:"Track Pants",
    href:"/product/Pants"
  },
  {
     label:"Jeans",
    href:"/product/jeans"
  },
  {
     label:"Trousers",
    href:"/product/Trousers"
  },
  {
    label:"Accessories",
   href:"/product/Accessories"
 }

]

function Navigationbar() {
  return (
    <div>
    <div className=" h-16 w-100% mx-auto flex flex-row justify-evenly">
      <h1 className="text-3xl font-serif">FRIEND'S COLLECTION</h1>
      <div className="flex flex-row  ">
        {/* <div className="content-center"><input type="text" placeholder="search by name" className=" border-2 border-black h-10 w-80 " /></div> */}
        {navitem.map((item, index) => (
          <div key={index} className="w-36 content-center text-center">
            <Link to={item.href} className="">
              {item.label}
            </Link>
          </div>
        ))}
        {/* <input type="text" /> */}
        <Link to="/product/login" className="w-36 content-center text-center">Login</Link>
        <Link to="/product/signin" className="w-32  content-center text-center rounded-lg text-white bg-blue-700 ">Sign-Up</Link>
      </div>
    </div>
    <div className=" h-12 flex flex-row border-t-2 border-b-2 border-black " >
    {item.map((item, index) => (
          <div key={index} className="w-60 text-lg border-l-2 content-center text-center">
            <Link to={item.href} className="">
              {item.label}
            </Link>
          </div>
        ))}
    </div>
    
    </div>
  );
}

export default Navigationbar;




{/* <nav class="flex items-center justify-between p-4 bg-background">
  <div class="flex items-center">
    <img src="https://openui.fly.dev/openui/24x24.svg?text=🛍️" alt="Shofy Logo" class="h-8 mr-2" />
    <span class="text-2xl font-bold text-foreground">Shofy.</span>
  </div>
  <ul class="flex space-x-4">
    <li><a href="#" class="text-muted hover:text-primary">Home</a></li>
    <li><a href="#" class="text-muted hover:text-primary">Shop</a></li>
    <li><a href="#" class="text-muted hover:text-primary">Products</a></li>
    <li><a href="#" class="text-muted hover:text-primary">Coupons</a></li>
    <li><a href="#" class="text-muted hover:text-primary">Blog</a></li>
    <li><a href="#" class="text-muted hover:text-primary">Contact</a></li>
  </ul>
  <div class="flex items-center space-x-4">
    <input type="text" placeholder="Search for Products..." class="p-2 border border-border rounded-md" />
    <button class="p-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
      <img src="https://openui.fly.dev/openui/24x24.svg?text=🔍" alt="Search Icon" class="h-5" />
    </button>
    <div class="flex items-center space-x-2">
      <span class="text-muted">0</span>
      <img src="https://openui.fly.dev/openui/24x24.svg?text=❤️" alt="Favorites" class="h-5" />
      <span class="text-muted">1</span>
      <img src="https://openui.fly.dev/openui/24x24.svg?text=🛒" alt="Cart" class="h-5" />
    </div>
  </div>
</nav> */}