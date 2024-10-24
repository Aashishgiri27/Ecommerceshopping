const express = require("express");
const router=express.Router()
const usermodel = require("../schema/userschema");


router.post("/product/signin", async (req, res) => {
    try {
      const data = req.body;
      const user = new usermodel(data);
      const response = await user.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "internal server error" });
    }
  });
 

  
  router.post("/product/login", async (req, res) => {
    try {
      const { Email, Password } = req.body;
      const user = await usermodel.findOne({ Email, Password });
      if (user) {
        res.status(200).json({ message: "Login successful", user });
      } else {
        res.status(400).json({ error: "Invalid email or password" });
      }
    } catch (error) {
      console.log("Error", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // router.get("/product/login",async(req,res)=>{
  //   try{
  //     let data= await usermodel.find();
  //     console.log(data)
  //     res.status(200).json(data)
  //   }catch(error){
  //     console.log("error", error);
  //     res.status(500).json({ error: "soory you are not login" });
  //   }  
  // });

  module.exports=router

