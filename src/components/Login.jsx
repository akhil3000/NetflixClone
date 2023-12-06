import React,{useState} from 'react'
import Header from './Header'
import background from '../images/background.jpg'
const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src={background} alt="Background"/>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
        {isSignInForm?"Sign In":"Sign Up"}
        </h1>
        
       {!isSignInForm&&<input 
        type="text" 
        placeholder="Full Name" 
        className="p-4 my-4 w-full bg-gray-700"
        />}

        <input 
        type="text" 
        placeholder="Email Address" 
        className="p-4 my-4 w-full bg-gray-700"/>
       
        <input 
        type="password" 
        placeholder="Password" 
        className="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="py-4" onClick={toggleSignInForm} >{isSignInForm?"New to Neflix SignUp Now?":"Already registered SignIn Now"}</p>
      </form>
    </div>


  )
}

export default Login