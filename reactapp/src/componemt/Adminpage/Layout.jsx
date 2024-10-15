import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../adminpagecss/layout.css";

const navitem = [
  {
    label: "Product",
    href: "/admin/products",
  },
  {
    label: "Order",
    href: "/admin/order",
  },
  {
    label: "Payment",
    href: "/admin/payment",
  },
  {
    label: "Add item",
    href: "/admin/additem",
  },
];

function Layout({ children }) {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="admincontainer">
        <section className="verticalheader">
          {navitem.map((item, index) => (
            <div key={index} className="verticalheaderitem">
              <Link
                to={item.href}
                className="adminheaderitem"
                style={{
                  backgroundColor: location.pathname === item.href ? 'red' : 'transparent',
                  color: location.pathname === item.href ? 'white' : 'black', 
                  borderBottom: location.pathname === item.href ? '2px solid white' : ' transparent', 
                  borderTop: location.pathname === item.href ? '2px solid white' : ' transparent',
                  boxShadow: location.pathname === item.href ? 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' : ' transparent',
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
          <div>{children}</div>
        </section>
      </div>
    </>
  );
}

export default Layout;
