import React from 'react';
import BasicButton from './form/BasicButton';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate=useNavigate()

  return (
    <div className='grid place-items-center h-full gap-6 text-black/80 pt-12 text-center p-4'>
      <h1 className='text-5xl font-bold'>404 - Page Not Found</h1>
      <p className='text-xl'>Sorry, the page you are looking for doesn't exist.</p>
      <BasicButton onClick={()=>navigate("/")}>Home page</BasicButton>
    </div>
  );
};

export default NotFound;
