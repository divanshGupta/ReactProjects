import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Welcome from "./pages/Welcome";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Welcome/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/web-internal/home' element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default App
