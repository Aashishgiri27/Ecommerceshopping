import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../adminpagecss/layout.css";

const navitem = [
  {
    label: "Product",
    href: "/admin/products",
  },
  // {
  //   label: "Order",
  //   href: "/admin/order",
  // },
  // {
  //   label: "Payment",
  //   href: "/admin/payment",
  // },
  {
    label: "Add item",
    href: "/admin/additem",
  },
  {
    label:"Users",
    href:"/admin/Users"
  },{
    label:"Messages",
    href:"/admin/messages"
  }

];

function Layout({ children }) {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="admincontainer">
        <section className="verticalheader primary-background-color white-color">
          {navitem.map((item, index) => (
            <div key={index} className="verticalheaderitem">
              <Link
                to={item.href}
                className="adminheaderitem"
                style={{
                  backgroundColor: location.pathname === item.href ? '#eec643' : 'transparent',
                  color: location.pathname === item.href ? 'white' : 'white', 
                  borderBottom: location.pathname === item.href ? '1px solid black' : ' transparent', 
                  borderTop: location.pathname === item.href ? '1px solid black' : ' transparent',
                  borderRadius:location.pathname === item.href ?'5px': 'none'
                  // boxShadow: location.pathname === item.href ? 'rgba((43, 44, 170,1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' : ' transparent',
     // Add color change
                  // Add color change
                  // Add color change
                  
                }}
              >
                <p>{item.label}</p>
              </Link>
            </div>
          ))}
        </section>
        <section>
          <div className="adminheader">
            <p>FRIEND'S COLLECTION</p>
          </div>
          <div className="bg-[#F5F7FA]">{children}</div>
        </section>
      </div>
    </>
  );
}

export default Layout;
