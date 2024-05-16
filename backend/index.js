import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./modules/bookModules.js";
import booksRoute from "./routes/BooksRoutes.js";
import cors from "cors";

const app = express();

// middleware for parsing request body
app.use(express.json())

// middleware for handling CORS
app.use(cors());

// app.use( 
//    cors({
//    origin: 'http://localhost:5173/', // Allow only this origin
//    methods: ['GET', 'POST', 'PUT' , 'DELETE'], // Allow only GET and POST requests
//    allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
// }))


app.get("/", (req,res)=> {
   return res.status(234).send("Welcome")
});

app.use('/books', booksRoute)

mongoose
   .connect(mongoDBURL)
    .then(()=>{
      console.log("Connected to MongoDB");
      app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
         });
   })
   .catch((err)=>{
      console.log(err);
   });

 