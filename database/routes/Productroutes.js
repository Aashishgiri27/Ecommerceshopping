const express = require("express");
const router=express.Router()
const productmodel = require("../schema/productschema");


router.get('/products/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await productmodel.findById(id);
    res.status(200).json(data);
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: 'Internal server error' });
  }
});



router.post("/product", async (req, res) => {
    try {
      const data = req.body;
      const product = new productmodel(data);
      const response = await product.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "internal server error" });
    }
  });
  
  // api for get the data from the item name
  
router.get("/product/:name", async (req, res) => {
    try {
      const name = req.params.name;
      //this below line comment due if we don't fetch the data from condition
      // if(name=="Shirt"|| name=="t-Shirt" || name=="gens"){
      const data = await productmodel.find({ name: name });
      res.status(200).json(data);
      // }
      // else{
      //   res.status(404).json({error:"invaild name given"})
      // }
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "internal server error" });
    }
  });
  // api for get the data from the item price
  
  router.get("/product/color/:color", async (req, res) => {
    try {
      const color = req.params.color;
  
      const data = await productmodel.find({ color: color });
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "internal server error" });
    }
  });

 


  module.exports=router

