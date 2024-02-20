import React from 'react'
import '../pages/Loginsignup.css'
const LoginSingup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsingup-agree">
        <input type="checkbox" name='' id='' />
        <p>By Continuing, I agree to the terms & privacy polices.</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default LoginSingup
