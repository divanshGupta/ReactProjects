import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {apiLink} from '../../config.js';

const LogIn = () =>{

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorMessages, setErrorMessages] = useState('');

    const navigate = useNavigate();

    let signup = false;

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const email = Email;
        const password = Password;
    
        const response = await fetch(`${apiLink}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
    
        const data = await response.json();
    
        const clearError = () => {
          setEmailError('');
          setPasswordError('');
          setErrorMessages('');
        };
    
        if (response.status === 400) {
          clearError();
    
          data.errors.forEach(error => {
            if (error.path === 'email') {
              setEmailError('Incorrect email');
            } else if (error.path === 'password') {
              setPasswordError(error.msg);
            } else if (error.msg === 'Please enter correct credentials.') {
              setErrorMessages('Incorrect credentials.');
            } else {
              setErrorMessages('Something went wrong');
            }
          });
    
        } else {
          clearError();
    
          console.log(data.message);
          setTimeout(function () {
            const token = data.authtoken;
            localStorage.setItem('authtoken', token);
            if (data.success === true) {
              navigate("/web-internal/home");
            } else {
              alert("No redirection address present.");
            }
          }, 100);
        }
      };
    
    
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('login-form');
            form.addEventListener('submit', handleSubmit);
          });

    return(
        <>
        <div className="flex h-screen bg-slate-800">
            <div className="flex bg-slate-400 w-72 h-64 justify-center m-auto rounded-md">
                <div className="flex flex-col m-auto">
                    <h2 className="font-sans text-base font-medium justify-center text-center">
                    {
                        !signup ? <p>New User?<br></br> Go to <Link to='/signup' className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-0.5 px-2 rounded">Sign Up</Link></p> : <p>Already have an account?<br></br> Go to <Link to='/login' className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-0.5 px-2 rounded">Log In</Link></p>
                    }    
                    </h2>
                    <form id="login-form" className="flex flex-col" onSubmit={handleSubmit}>
                    <input 
                    className="justify-center p-2 m-2 mt-4 mb-0 rounded-md" 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={Email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    autoComplete="username" 
                    required/>
                    <div id="email-error" className="error-message text-red-600 text-sm font-semibold m-2">{emailError}</div>

                    <input 
                    className="justify-center p-2 m-2 mt-0 mb-0 rounded-md" 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={Password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    autoComplete="current-password" 
                    required/>
                    <div id="password-error" className="error-message text-red-600 text-sm font-semibold m-2">{passwordError}</div>
                    
                    <button className="bg-cyan-700 text-white text-xs justify-end fitems-end m-2 p-2 rounded-md" type="submit">Log In</button>
                    </form>
                <div id="error-messages" className="error-message flex flex-col text-red-600 text-sm font-semibold justify-center text-center" style={{ color: 'red' }}>{errorMessages}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LogIn;