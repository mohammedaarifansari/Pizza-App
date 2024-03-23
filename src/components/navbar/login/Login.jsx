import React from 'react'
import './Login.css'
import { assets } from '../../../assets/assets'
import { useState } from 'react'

const Login = ({setShowLogin}) => {

  const [curstate,setCurstate] = useState("Sign up")

  return (
    <div className='login'>
      <form className='login-container'>
        <div className="login-title">
          <h2>{curstate}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross} alt="" />
        </div>
        <div className="login-input">
          {curstate==="Login"?<></>:
        <input type="text" placeholder='Your name' required/>}
        <input type="email" placeholder='Your email' required/>
        <input type="password" placeholder='Password' required/>
        </div>
        <button>{curstate==="Sign up"?"Create account":"Login"}</button>
        <div className="login-condition">
        <input type="checkbox" required/>
        <p>By continuing. i agree to the terms of use & privecy policy</p>
        </div>
        {curstate==="Login"?<p>Create a new account?<span onClick={()=>setCurstate("Sign up")}>Click here</span></p>:<p>Already have an account?<span onClick={()=>setCurstate("Login")}> Login here</span></p>}
      </form>
    </div>
  )
}

export default Login;
