import React ,{ useState, useEffect } from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import { useLocation,useNavigate } from "react-router-dom";
const baseUrl = 'http://127.0.0.1:3000'
import axios from "axios";

function Gens() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(baseUrl +"/api/product/product/Jeans");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  const navigate = useNavigate();
  const location=useLocation();
  const handleBuyNowClick = (itemId) => {
    console.log(`in product ${itemId}`);
    console.log(location)
    console.log(`${location.pathname}/${itemId}`);

    navigate(`${location.pathname}/${itemId}`);
  };

  return (
    <>
     <Navigationbar />
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 p-6 w-11/12 m-auto">
      {data.map((item, index) => (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 " key={index}  onClick={() => handleBuyNowClick(item._id)}>
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-60 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-2 text-primary">{item.name}</h3>
          <p className="text-sm text-muted-foreground">{item.color}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-bold text-accent">₹{item.price}</span>
            <span className="text-yellow-500">★★★★☆</span>
          </div>
          
        </div>
         ))}
      </div>
      <Footer/>
     
  </>
  );
}

export default Gens
