import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navigationbar from "./Navigationbar";
const baseUrl = 'https://ecommerceshopping-3.onrender.com'
function SearchResults() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
 const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(baseUrl +`/api/product/product/search/${name}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [name]);
  const handleBuyNowClick = (itemId) => {
    console.log(`in product ${itemId}`);
    navigate(`/product/${itemId}`);
  };
  return (
    <>
     <Navigationbar />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 ml-20">Search Results for: {name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 p-6 w-11/12 m-auto">
        {products.length > 0 ? (
          products.map((item,index) => (
           <div
          
            className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 "
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
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SearchResults;
