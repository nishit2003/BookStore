import React,{useState} from 'react';
import axios from 'axios';
import BackButton from '../components/backButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';


const CreateBooks = () => {
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [publishYear, setPublishYear] = useState('');
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const handleSaveBook = () => {
      const data = {
         title,
         author,
         publishYear
      };
      setLoading(true);
      axios
         .post('http://localhost:5555/books', data)
         .then(() => {
            setLoading(false);
            navigate('/');
         })
         .catch((error)=>{
            setLoading(false);
            alert("Error Occured, Check Console");
            console.log(error)
         });
   };
   
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'> Create Book </h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
         <div className='my-4'>
            <label className='text-xl mr-4'> </label>

         </div>
      </div>
      
    </div>
  )
}

export default CreateBooks
