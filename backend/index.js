import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./modules/bookModules.js";

const app = express();
// middleware for parsing request body
app.use(express.json())

app.get("/", (req,res)=> {
   return res.status(234).send("Welcome")
});


// Route for new books
app.post("/books", async (req,res)=>{
   try{
      if (
         !req.body.title ||
         !req.body.author ||
         !req.body.publishYear
      ) {
         return res.status(400).send("All input is required");
      }
      const NewBook = {
         title: req.body.title,
         author: req.body.author,
         publishYear: req.body.publishYear,
      }
      const book = await Book.create(NewBook)
      return res.status(201).send(book)
   }
   catch(err){
      console.log(err.message)
      return res.status(500).send(err.message);
   }
});

// Route to get all books
app.get("/books", async (req,res)=>{
   try{
      const books = await Book.find({});

      return res.status(200).json({
         count : books.length,
         data: books
   });
   }
   catch(err){
      console.log(err.message)
      return res.status(500).send(err.message);
   }
});

// Route to get books BY ID
app.get("/books/:id", async (req,res)=>{
   try{
      const { id } = req.params;
      const books = await Book.findById(id);
      
      return res.status(200).json(books);
   }
   catch(err){
      console.log(err.message)
      return res.status(500).send(err.message);
   }
});

// Route to update a book
app.put("/books/:id", async (req,res)=>{
   try{
      if (
         !req.body.title ||
         !req.body.author ||
         !req.body.publishYear
      ) {
         return res.status(400).send("All input is required");
      }
      
      const { id } = req.params;
      const result = await Book.findByIdAndUpdate(id, req.body)

      if(!result){
         return res.status(404).send("Book not found")
      }
      return res.status(200).send("Updated Succesfully")

   } catch(err){
      console.log(err.message)
      return res.status(500).send(err.message);
   }
});

// Route to delete a book
app.delete("/books/:id", async (req,res)=>{
   try{
      const { id } = req.params;
      const result = await Book.findByIdAndDelete(id)

      if(!result){
         return res.status(404).send("Book not found")
      }
      return res.status(200).send("Deleted Succesfully")
   }
   catch(err){
      console.log(err.message)
      return res.status(500).send(err.message);
   }
});
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

 