import React from 'react'
import Img from '../assets/Mobile_login.png'
import { Form ,Button} from 'react-bootstrap'

const Login = () => {
  return (
    <div className='container'>
        <div className="imglogin">
            <img src={Img}  />
        </div>
        <div className="formContainer">
            <h1>Login</h1>
            <Form>
                <Form.Control  className = "mt-3" type='email' placeholder='name@example.com'/>
                <Form.Control className = "mt-3" type='password' placeholder='*******'/>

                <Button className = "mt-4">Login</Button>
            </Form>
            <p className='mt-2'>Don't have an account? <a href='/register'>Register</a></p>
        </div>
        
        
    </div>
  )
}

export default Login