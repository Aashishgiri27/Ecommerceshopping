import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-12 px-6 shadow-2xl shadow-slate-500">
      <div className="container mx-auto grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">Friend's Collection</h2>
          <p className="text-muted-foreground text-sm">
            We are a team of designers and developers that create high quality fashion experiences.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-primary hover:text-primary-foreground"><FaFacebookF /></a>
            <a href="#" className="text-primary hover:text-primary-foreground"><FaTwitter /></a>
            <a href="#" className="text-primary hover:text-primary-foreground"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-lg font-semibold mb-3">My Account</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-muted-foreground hover:text-muted">Track Orders</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-muted">Wishlist</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-muted">My Account</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-muted">Order History</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-muted">Returns</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-muted-foreground hover:text-muted">Our Story</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-muted">Careers</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-muted">Privacy Policy</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-muted">Terms & Conditions</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-muted">Latest News</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-muted">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Talk To Us</h3>
          <p className="text-muted-foreground text-sm">Got Questions? Call us</p>
          <p className="text-primary font-semibold">9120024249</p>
          <p className="text-muted-foreground text-sm">friendscollection@support.com</p>
          <p className="text-muted-foreground text-sm">GIDA Sector 7, Gorakhpur, India</p>
          <div className="flex space-x-3 mt-4">
            <img src="https://openui.fly.dev/openui/paypal.svg" alt="PayPal" className="h-6" />
            <img src="https://openui.fly.dev/openui/visa.svg" alt="Visa" className="h-6" />
            <img src="https://openui.fly.dev/openui/stripe.svg" alt="Stripe" className="h-6" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-muted-foreground text-sm border-t pt-6">
        © 2024 Friend's Collection. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
