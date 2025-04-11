const express = require("express");
const app = express();
const passport=require("passport");
const productmodel = require("./schema/productschema");
const LocalStrategy=require("passport-local").Strategy;
const usermodel=require("./schema/userschema")
const core= require("cors")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("./db");
const bodyparser = require("body-parser");
app.use(bodyparser.json());

app.use(core({origin:"http://localhost:5173"}));
// passport.use(new LocalStrategy(async (username,password,done)=>{
//     try {
//         const user= await usermodel.findOne({Username:username})
//         if(!user)
//             return done(null,false,{message:"incorrect usernmae"})
        
//         const matchpassword=user.Password === parseInt(password) ? true:false;
//         if(matchpassword){
//             return done(null,user)
//         }
//         else{
//             return done(null,false,{message:"incoorect password"})

//         }
//       } catch (error) {
//         return done(error)
//       }
// }))
// app.use(passport.initialize())



app.get("/product", async (req, res) => {

    try {
      const data = await productmodel.find();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "internal server error" });
    }
  });
  app.get("/product/login",async(req,res)=>{
    try{
      let data= await usermodel.find();
      console.log(data)
      res.status(200).json(data)
    }catch(error){
      console.log("error", error);
      res.status(500).json({ error: "soory you are not login" });
    }  
  });

 
const Productroutes=require('./routes/Productroutes')
app.use('/api/product',Productroutes)
const cartRoutes = require("./routes/Cartroutes"); // or your file path
app.use("/api/cart", cartRoutes); // adjust prefix as needed

const Userroutes=require('./routes/Userroutes')
app.use('/api/users',Userroutes)
app.listen(3000,() =>{
  console.log( `server running in  port http://localhost:3000`);
});


