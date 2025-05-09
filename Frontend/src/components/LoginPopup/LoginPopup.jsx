import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Sign up")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img src={assets.cross_icon} alt='' onClick={()=>setShowLogin(false)}/>
        </div>
        <div className="login-popup-inputs">
            {currState === "Login" ? <></> : <input type='text' placeholder='Your name' required/>}
            <input type='email' placeholder='Your email' required/>
            <input type='password' placeholder='Password' required/>
        </div>
        <button className='button'>
            {currState === "Sign up" ? "Create account" : "Login"}
        </button>
        {currState === "Login" ? 
        <p>Create a new account? <span className="common" onClick={()=>setCurrState("Sign up")}>Click here</span></p> :
        <p>Already have an account? <span className="common"onClick={()=>setCurrState("Login")}>Login here</span></p> }
      </form>
    </div>
  )
}

export default LoginPopup
