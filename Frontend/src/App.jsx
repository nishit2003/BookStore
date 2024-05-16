import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {CreateBook} from './pages/CreateBooks'
import {EditBooks} from './pages/UpdateBooks'
import {DeleteBooks} from './pages/DeleteBooks'
import {ShowBooks} from './pages/ListBooks'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/books/create" element = {<CreateBook/>} />
      <Route path="/books/details/:id " element = {<ShowBooks/>} />
      <Route path="/books/edit/:id " element = {<EditBooks/>} />
      <Route path="/books/delete/:id" element = {<DeleteBooks/>} />
    </Routes>
  )
};

export default App;