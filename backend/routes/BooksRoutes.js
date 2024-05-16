import express from "express";
import { Book } from "../modules/bookModules.js";

const router = express.Router()

// Route for new books
router.post("/", async (req,res)=>{
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
router.get("/", async (req,res)=>{
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
router.get("/:id", async (req,res)=>{
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
router.put("/:id", async (req,res)=>{
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
router.delete("/:id", async (req,res)=>{
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


export default router