import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import Reviws from "./Reviws";
import { useContext } from "react";
import { CartContext } from "../CartContext";
const baseUrl = 'https://ecommerceshopping-3.onrender.com'
function Detail() {
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState(null);
  const navigate=useNavigate()

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(baseUrl +`/api/product/products/${id}`);

        console.log(`in  ${id}`);

        setProduct(response.data);
        // console.log(product)
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  
  // const addtocart =()=>{
  //    navigate("/product/login")
  // }
  const handleAddToCart = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/product/login");
    } else {
      addToCart(product);
      // navigate("/cart");
      
    }
  };
  
  const handleBuyNow = () => {
    navigate("/buy", { state: { product } });
  };
  return (
    <div>
      <Navigationbar />
      <div className="flex flex-col md:flex-row p-6 w-9/12  m-auto bg-background">
        <div className="md:w-1/2">
          <img
            src={product.img}
            alt="Boys Graphic T-Shirt"
            className="w-full border-2 bg-slate-400 h-auto rounded-lg"
          />
          <div className="flex space-x-2 mt-4">
            <img
              src="https://placehold.co/100x100.png"
              alt="Thumbnail 1"
              className="w-16 h-16 rounded-lg cursor-pointer"
            />
            <img
              src="https://placehold.co/100x100.png"
              alt="Thumbnail 2"
              className="w-16 h-16 rounded-lg cursor-pointer"
            />
            <img
              src="https://placehold.co/100x100.png"
              alt="Thumbnail 3"
              className="w-16 h-16 rounded-lg cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 leading-8">
          <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>
          <p className="text-muted-foreground">Clothing</p>
          {/* <p className="text-red-500">out-of-stock</p> */}
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-muted-foreground ml-2">(0 Reviews)</span>
          </div>
          <p className="mt-4 text-muted-foreground">{product.description}
            {/* PLENTY OF STORAGE: There are two chest pockets on this women’s */}
            {/* hooded flannel, making it easy to bri...{" "} */}
            <a href="#" className="text-primary">
              See more
            </a>
          </p>
          <p className="mt-4 text-lg font-bold">₹{product.price}</p>
          <div className="mt-4">
            <label for="color" className="block text-muted-foreground">
              Color:
            </label>
            <select id="color" className="border border-border rounded-md p-2">
              <option value="brown">{product.color}</option>
              <option value="green">Green</option>
              <option value="orange">Orange</option>
            </select>
          </div>
          <div className="mt-4">
            <label for="quantity" className="block text-muted-foreground">
              Quantity:
            </label>
            <div className="flex items-center  bg-slate-200 w-32 space-x-2">
              <button className="bg-secondary text-secondary-foreground p-2 rounded">
                -
              </button>
              <input
                type="number"
                id="quantity"
                value="1"
                className="border border-border rounded-md w-16 text-center"
              />
              <button className="bg-secondary text-secondary-foreground p-2 rounded">
                +
              </button>
            </div>
          </div>
          <div className="mt-6">
            
            <button className="bg-primary bg-slate-700 text-primary-foreground p-3 rounded-lg w-full" onClick={handleAddToCart}>
              Add To Cart
            </button>
            <button className="bg-accent bg-blue-600 text-accent-foreground p-3 rounded-lg w-full mt-2"  onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* additional feature */}
      <div className="overflow-x-auto my-2 w-10/12 mx-auto">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-foreground">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-foreground">
                Additional Information
              </th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            <tr>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                GREAT FOR LAYERING
              </td>
              <td className="px-6 py-4 text-sm text-foreground">
                Mini waffle fabric construction
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                Colors
              </td>
              <td className="px-6 py-4 text-sm text-foreground">
                Wine Berry, Dirty Blue
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                LEGENDARY STYLING
              </td>
              <td className="px-6 py-4 text-sm text-foreground">
                Cute keyhole notch neck with custom
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                CUFF DETAILS
              </td>
              <td className="px-6 py-4 text-sm text-foreground">
                Velvet details with lace trim on the cuffs
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                FEMININE HEMLINE
              </td>
              <td className="px-6 py-4 text-sm text-foreground">
                Fashionable curved hem
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                Graphics Coprocessor
              </td>
              <td className="px-6 py-4 text-sm text-foreground">
                {/* Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz) */}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                Wireless Type
              </td>
              <td className="px-6 py-4 text-sm text-foreground">
                802.11a/b/g/n/ac, Bluetooth
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Reviws product={product}/>
      <Footer/>
    </div>
  );
}

export default Detail;
