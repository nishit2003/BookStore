import express from "express";
import { PORT, mongoDBURL } from "./config.js";

const app = express();

app.get("/", (req,res)=> {
   return res.status(234).send("Welcome")
});

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
   });



mongooose
   .connect(mongoDBURL)
   .then(()=>{

   })
   .catch((err)=>{
      console.log(err);
   });