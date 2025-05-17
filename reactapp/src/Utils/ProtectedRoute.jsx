import React from "react";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const verificationFromStorage = localStorage.getItem("verification");
  const h1 = "something was wrong , please check your crendiatles";
  if (verificationFromStorage === "true") {
    return children;
  } else {
    return (
      <>
        <div className="w-screen h-[100vh] flex justify-center items-center flex-col">
          <h1>Importance report</h1>
          <p>collections friends</p>

          <br />
          <br />
          <h2>Something was wrong with you!</h2>
        </div>
      </>
    );
  }
};

export default ProtectedRoute;
