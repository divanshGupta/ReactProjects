import React, {useState} from "react";
import { Link } from "react-router-dom";
import {apiLink} from '../../config.js';

const SignUp = () => {

    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    let signup = false;

    // useEffect(() => {
    //     // Get the current URL
    //     const currentUrl = window.location.href;
    
    //     // Now, you can use the currentUrl in a condition
    //     if (currentUrl === 'http://localhost:5173/signup') {
    //       // Do something when the URL matches a specific condition
    //       signup=true;
    //     //   console.log(`Page is : ${currentUrl}`);
    //     //   console.log(`signup is : ${signup}`);
    //     }
    //   }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = e.target;
        // const usernameError = form.querySelector('#username-error');
        // const emailError = form.querySelector('#email-error');
        // const passwordError = form.querySelector('#password-error');
        // const errorMessages = form.querySelector('#error-messages');
    
        // const username = form.elements.username.value;
        // const email = form.elements.email.value;
        // const password = form.elements.password.value;
        
        const username = Username;
        const email = Email;
        const password = Password;
    
        const response = await fetch(`${apiLink}/auth/create-user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
    

        const displayError = (error, errorElement) => {
            errorElement.innerHTML = error.msg;
            errorElement.style.visibility = 'visible';
            errorElement.style.padding = '2px 0 2px 2px';
            errorElement.style.margin = '5px';
            // errorElement.style.color = 'red';
          };
        
          const clearError = () => {
            setUsernameError('');
            setEmailError('');
            setPasswordError('');
          };

        const data = await response.json();
    
        if (response.status === 400) {
          clearError();
    
          data.errors.forEach(error => {
            if (error.path === 'email') {
              setEmailError(error.msg);
            } else {
              if (error.path === 'username') {
                setUsernameError(error.msg);
              } else if (error.path === 'email') {
                setEmailError(error.msg);
              } else if (error.path === 'password') {
                setPasswordError(error.msg);
              }
            }
          });
    
        } else {
          clearError();
    
          setTimeout(function() {
            alert(data.message);
            // Redirect to a new page if needed: window.location.href = '/new-page';
          }, 100);
        }
      };
      
    return(
        <>
        <div className="flex h-screen">
            <div className="flex bg-slate-400 w-72 justify-center m-auto">
                <div className="flex flex-col">
                    <h2 className="font-sans text-base font-medium justify-center text-center">
                    {
                        signup ? <p>New User? Go to <Link to='/signup' className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-0.5 px-2 rounded">Sign Up</Link></p> : <p>Already have an account?<br></br> Go to <Link to='/login' className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-0.5 px-2 rounded">Log In</Link></p>
                    }    
                    </h2>
                    <form id="signup-form" className="flex flex-col" onSubmit={handleSubmit}>
                    <input 
                    className="justify-center p-2 m-2" 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={Username} 
                    onChange={(e)=>{setUsername(e.target.value)}}
                    required/>
                    
                    <div id="username-error" className="error-message text-red-600 text-sm font-semibold">{usernameError}</div>

                    <input 
                    className="justify-center p-2 m-2" 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={Email} 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    autoComplete="current-email" 
                    required/>
                    <div id="email-error" className="error-message text-red-600 text-sm font-semibold">{emailError}</div>

                    <input 
                    className="justify-center p-2 m-2" 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={Password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    autoComplete="current-password" 
                    required/>
                    <div id="password-error" className="error-message text-red-600 text-sm font-semibold">{passwordError}</div>

                    <button className="bg-cyan-700 text-white text-xs justify-end fitems-end m-2 p-2" type="submit">Sign Up</button>
                    </form>

                    <div id="error-messages"></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;