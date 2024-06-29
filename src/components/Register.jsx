import React from 'react'
import Img from '../assets/Sign_up.png'
const Register = () => {
  return (
    <div className='registerContainer'>
        <div className="formContainer">
            <h1>Register</h1>
            <form >
                <input type="text" placeholder='first name' />
                <input type="text" placeholder='last name' />
                <input type="number" placeholder='mobile' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
            </form>
            <button>Register</button>
            <p>Already have an account? <a href='/login'>Login</a></p>
        </div>
        
        
        <div className="imgregister">
            <img src={Img}  />
        </div>
    </div>
  )
}

export default Register