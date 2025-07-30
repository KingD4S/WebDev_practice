import axios from 'axios';
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Show from './components/Show';
import Home from './components/Home';
const App = () => {
  
  
  return (
    <div className='p-5 bg-zinc-200 min-h-screen'>
      <nav className='flex justify-center space-x-5 mb-5'>
        <Link to={'/'}>Home</Link>
        <Link to={'/Show'}>Show</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Show" element={<Show/>}></Route>
      </Routes>
    </div>
  );
};

export default App;

    

   