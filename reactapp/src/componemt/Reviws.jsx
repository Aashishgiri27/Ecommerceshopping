import React from "react";

function Reviws() {
  return (
    <>
      <div className="w-8/12 mx-auto my-8  p-4 bg-card text-card-foreground rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Customer reviews</h2>
        <div className="flex items-center mb-2">
          <span className="text-2xl font-semibold">4.5</span>
          <span className="text-yellow-500 ml-2">★★★★★</span>
          <span className="text-muted-foreground ml-2">(0 Reviews)</span>
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <span className="mr-2">5 Star</span>
            <div className="flex-1 bg-zinc-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full"></div>
            </div>
            <span className="ml-2">82%</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">4 Star</span>
            <div className="flex-1 bg-zinc-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full"></div>
            </div>
            <span className="ml-2">30%</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">3 Star</span>
            <div className="flex-1 bg-zinc-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full"></div>
            </div>
            <span className="ml-2">15%</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">2 Star</span>
            <div className="flex-1 bg-zinc-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full"></div>
            </div>
            <span className="ml-2">6%</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">1 Star</span>
            <div className="flex-1 bg-zinc-200 rounded-full h-2">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                // style="width: 10%;"
              ></div>
            </div>
            <span className="ml-2">10%</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">Rating & Review</h3>
        <p className="text-muted-foreground mb-4">No Reviews Found</p>
        <div>
        <h3 className="text-lg font-semibold mb-2">Review this product</h3>
        <p className="text-muted-foreground mb-2">
          Your email address will not be published. Required fields are marked *
        </p>

        <label className="block mb-1">Your Rating:</label>
        <div className="mb-4">
          <span className="text-yellow-500">★★★★★</span>
        </div>

        <label className="block mb-1">Your Review:</label>
        <textarea
          className="w-full p-2 border border-border rounded-md mb-4"
          rows="4"
          placeholder="Write your review here..."
        ></textarea>

        <label className="block mb-1">Your Name:</label>
        <input
          type="text"
          className="w-full p-2 border border-border rounded-md mb-4"
          placeholder="Your Name"
        />

        <label className="block mb-1">Your Email:</label>
        <input
          type="email"
          className="w-full p-2 border border-border rounded-md mb-4"
          placeholder="Your Email"
        />

        <div className="flex items-center mb-4">
          <input type="checkbox" id="save-info" className="mr-2" />
          <label for="save-info" className="text-muted-foreground">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg">
          Submit
        </button>
        </div>
        
      </div>
    </>
  );
}

export default Reviws;
