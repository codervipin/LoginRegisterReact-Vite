import React from 'react'
import Img from '../assets/Mobile_login.png'
const Login = () => {
  return (
    <div className='loginContainer'>
        <div className="imglogin">
            <img src={Img}  />
        </div>
        <div className="formContainer">
            <h1>Login</h1>
            <form >
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
            </form>
            <button>Login</button>
            <p>Don't have an account? <a href='/register'>Register</a></p>
        </div>
        
        
    </div>
  )
}

export default Login