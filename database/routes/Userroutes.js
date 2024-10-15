const express = require("express");
const router=express.Router()
const usermodel = require("../schema/userschema");


router.post("/signin", async (req, res) => {
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
 

  
  router.get("/signin", async (req, res) => {
    try {
      const data = await usermodel.find();
      console.log(data);
      res.status(200).json(data);
      console.log("saurabh");
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "internal server error" });
    }
  });

  module.exports=router
// const express = require("express");
// const router = express.Router();
// const usermodel = require("../schema/userschema");

// router.post("/product/signin", async (req, res) => {
//     try {
//         const data = req.body;
//         const user = new usermodel(data);
//         const response = await user.save();
//         console.log("Data saved");
//         res.status(200).json(response);
//     } catch (error) {
//         console.log("Error", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// router.get("/product/signin", async (req, res) => {
//     try {
//         const data = await usermodel.find();
//         console.log(data);
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// module.exports = router;
