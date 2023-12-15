import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () =>{
  return(
    <>
    <div className="flex h-screen bg-slate-800">
    <div className="flex flex-col justify-center items-center m-auto">
    <h1 className="text-white text-2xl"><b>Hello</b></h1>
      <h4 className="text-white text-2xl"><b>Where would you like to go?</b></h4><br />
      <div className="flex justify-center items-center">
        <Link to="/signup"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">Go to SignUp</button></Link>
        <Link to="/login"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Login</button></Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Welcome