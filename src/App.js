import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Breed } from 'components/Breed/Breed';
import { Profile } from './components/Profile/Profile.js'
import './App.css';

export function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/breed/" element={<Breed />} />
    </Routes>
   </BrowserRouter>
  );
}  
