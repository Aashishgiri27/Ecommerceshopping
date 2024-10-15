import React from 'react'
import "./header.css"

function Header() {
  return (
    <div>
       <header>
    <nav>
        <div className="logo"></div>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">SHOP</a></li>
            <li><a href="">CART</a></li>
            <li><a href="">CONTACT</a></li>
            <li><a href="">Sign-In</a></li>    
        </ul>
    </nav>
   </header>
    </div>
  )
}

export default Header;

