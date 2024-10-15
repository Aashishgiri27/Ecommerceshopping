import React from 'react'

function Footer() {
  return (
    <footer class="bg-card text-card-foreground py-8 shadow-2xl shadow-slate-500">
  <div class="container mx-auto flex flex-col md:flex-row justify-between">
    <div class="mb-6 md:mb-0">
      <h2 class="text-lg font-bold">Friend's collection</h2>
      <p class="text-muted-foreground">We are a team of designers and developers that create high quality</p>
      <div class="flex space-x-4 mt-4">
        <a href="#" class="text-primary hover:text-primary-foreground">Facebook</a>
        <a href="#" class="text-primary hover:text-primary-foreground">Twitter</a>
        <a href="#" class="text-primary hover:text-primary-foreground">LinkedIn</a>
      </div>
    </div>
    <div class="mb-6 md:mb-0">
      <h3 class="text-lg font-semibold">My Account</h3>
      <ul class="space-y-2">
        <li><a href="#" class="text-muted-foreground hover:text-muted">Track Orders</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Wishlist</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">My Account</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Order History</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Returns</a></li>
      </ul>
    </div>
    <div class="mb-6 md:mb-0">
      <h3 class="text-lg font-semibold">Information</h3>
      <ul class="space-y-2">
        <li><a href="#" class="text-muted-foreground hover:text-muted">Our Story</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Careers</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Privacy Policy</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Terms & Conditions</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Latest News</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-lg font-semibold">Talk To Us</h3>
      <p class="text-muted-foreground">Got Questions? Call us</p>
      <p class="text-primary">9120024249</p>
      <p class="text-muted-foreground">friendscollection@support.com</p>
      <p class="text-muted-foreground">gida sector 7<br />Gorakhpur , India</p>
      <div class="flex space-x-2 mt-4">
        <img src="https://openui.fly.dev/openui/paypal.svg" alt="PayPal" class="h-6" />
        <img src="https://openui.fly.dev/openui/visa.svg" alt="Visa" class="h-6" />
        <img src="https://openui.fly.dev/openui/stripe.svg" alt="Stripe" class="h-6" />
      </div>
    </div>
  </div>
  <div class="text-center mt-8 text-muted-foreground">
    <p>© 2024 All Rights Reserved | Angular Template by Themepure.</p>
  </div>
</footer>
  )
}

export default Footer
