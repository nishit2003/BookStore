import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {CreateBook} from './pages/CreateBooks'
import {EditBooks} from './pages/EditBooks'
import {DeleteBook} from './pages/DeleteBook'
import {ShowBooks} from './pages/ShowBooks'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/books/create" element = {<CreateBook/>} />
      <Route path="/books/details/:id " element = {<ShowBooks/>} />
      <Route path="/books/edit/:id " element = {<EditBooks/>} />
      <Route path="/books/delete/:id" element = {<DeleteBook/>} />
    </Routes>
  )
};

export default App;