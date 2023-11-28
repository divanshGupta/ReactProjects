import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';
// import EditBook from './pages/EditBook';
import EditSponsor from "./pages/EditBook";

const App = () =>{
  return(
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<LogIn/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/add' element={<CreateBook/>} />
      <Route path='/details/:id' element={<ShowBook/>} />
      <Route path='/edit/:id' element={<EditSponsor/>} />
      <Route path='/delete/:id' element={<DeleteBook/>} />
    </Routes>
  )
}

export default App



/* 
///////////Default App.css code

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
 */