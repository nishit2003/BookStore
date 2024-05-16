import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/ai";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((Response) => {
        setBooks(Response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
         setLoading(false);
      });
  }, []);

  return (
   <div className="p-4">
      <div className="flex justify-between items-center">
         <h1 className="text-3xl my-8"> Books List</h1>
         <Link to='/books/create'>
            <MdOutlineAddBox className="text-sky-800" text-4xl/>
         </Link>
      </div>
   </div>

   {loading ? (
      <Spinner />
   ) : (
      <table className="w-full border-separate border-spacing-2">
      <thead>
      <tr>
         <th className="border border-slate-600 rounded-md">No</th>
         <th className="border border-slate-600 rounded-md">Title</th>         
         <th className="border border-slate-600 rounded-md max-md:hidden">Title
         Author
         </th>         

      </tr>
      </thead>
      </table>

   )}
  );
};

export default Home;
