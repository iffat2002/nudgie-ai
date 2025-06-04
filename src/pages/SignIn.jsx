import React from 'react'
import '../styles/app.scss';
import mobile from "../images/signin.png"
import logo from "../images/logo.png"
import fb from "../images/fb.png"
import google from "../images/google.png"
import apple from "../images/apple.png"
const SignIn = () => {
  return (
    <div className='signin-page'>
      
            <div className="signin-content">
            <div className="si-left">
        
                <img src={mobile} alt="mobile chat" width={706} height={550} />
            </div>
            <div className="si-right">
                  <div className="login-box">
         
                <img src={logo}  alt="logo" className="logo" width={200} height={50} />
          
          <div>
              <h2>Sign In</h2>
              <p>Welcome to nudgie AI</p>
</div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
              </div>

              <div className="options">
                <label>
                  <input type="checkbox" /><span> Remember me</span>
                </label>
                <a href="#">Forgot Password?</a>
              </div>

              <button className="login-btn">LOGIN</button>

              <div className="divider"><span>or</span></div>

              <div className="social-icons">
                <div><img src={fb} width={25} height={25} alt="fb" /></div>
                <div><img src={google} width={25} height={25} alt="google" /></div>
                <div><img src={apple} width={25} height={25}alt="apple" /></div>
              </div>

              <p className="signup-msg">
                Already have an account? <a href="#">Sign in</a>
              </p>
            </div>
          
            </div>
            </div>
      
    </div>
  )
}

export default SignIn