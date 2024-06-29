import React from 'react'
import Img from '../assets/Sign_up.png'
import { Form ,Button} from 'react-bootstrap'
const Register = () => {
  return (
    <div className='container'>
        <div className="formContainer">
            <h1>Register</h1>
            <Form>
                <Form.Control className='mt-1' type='text' placeholder='First Name'/>
                <Form.Control className='mt-3' type='text' placeholder='Last Name'/>
                <Form.Control className='mt-3' type='number' placeholder='Mobile Number'/>
                <Form.Control className='mt-3' type='text' placeholder='Username'/>
                <Form.Control className='mt-3' type='email' placeholder='Email'/>
                <Form.Control className='mt-3' type='password' placeholder='Password'/>
                <Form.Control className='mt-3' type='text' placeholder='Role'/>

                <Button className='mt-4' >Register</Button>
            </Form>
            <p className='mt-3'> Already have an account? <a href='/login'>Login</a></p>
        </div>
        
        
        <div className="imgregister">
            <img src={Img}  />
        </div>
    </div>
  )
}

export default Register