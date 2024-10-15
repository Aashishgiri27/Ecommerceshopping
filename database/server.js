const express = require("express");
const app = express();
const passport=require("passport");
const productmodel = require("./schema/productschema");
const LocalStrategy=require("passport-local").Strategy;
const usermodel=require("./schema/userschema")


const db = require("./db");
const bodyparser = require("body-parser");
app.use(bodyparser.json());


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


// app.get("/product",passport.authenticate('local',{session:false  }), async (req, res) => {
app.get("/product", async (req, res) => {

    try {
      const data = await productmodel.find();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "internal server error" });
    }
  });

 
const Productroutes=require('./routes/Productroutes')
app.use('/',Productroutes)

const Userroutes=require('./routes/Userroutes')
app.use('/',Userroutes)
app.listen(3000);


