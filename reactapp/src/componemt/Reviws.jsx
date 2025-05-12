import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = 'http://127.0.0.1:3000';

function Reviws() {
  const [reviewData, setReviewData] = useState({
    rating: 5,
    review: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      console.log("===========>")
      await axios.post(baseUrl + "/api/users/product/review", reviewData);
      toast.success("Review submitted!");
      setReviewData({ rating: 5, review: "", name: "", email: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit review");
    }
  };

  return (
    <div className="w-11/12 md:w-8/12 mx-auto my-10 p-6 bg-white rounded-xl shadow-md border">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Customer Reviews</h2>

      <div className="space-y-3 mb-8">
        {[{ star: 5, percent: 82 }, { star: 4, percent: 30 }, { star: 3, percent: 15 }, { star: 2, percent: 6 }, { star: 1, percent: 10 }]
          .map(({ star, percent }) => (
            <div key={star} className="flex items-center gap-3">
              <span className="w-12 text-sm text-gray-700">{star} Star</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${percent}%` }}></div>
              </div>
              <span className="text-sm text-gray-500 w-10 text-right">{percent}%</span>
            </div>
          ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold mb-1 text-gray-800">Review this Product</h3>

        <label className="block text-sm font-medium text-gray-700">Your Rating:</label>
        <select
          name="rating"
          value={reviewData.rating}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          {[5, 4, 3, 2, 1].map((val) => (
            <option key={val} value={val}>{val} Star</option>
          ))}
        </select>

        <label className="block text-sm font-medium text-gray-700">Your Review:</label>
        <textarea
          name="review"
          rows="4"
          placeholder="Write your review here..."
          value={reviewData.review}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />

        <label className="block text-sm font-medium text-gray-700">Your Name:</label>
        <input
          name="name"
          type="text"
          value={reviewData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Your Name"
          required
        />

        <label className="block text-sm font-medium text-gray-700">Your Email:</label>
        <input
          name="email"
          type="email"
          value={reviewData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="you@example.com"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default Reviws;
