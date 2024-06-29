import React from 'react'
import Img from '../assets/Mobile_login.png'
import { Form ,Button,InputGroup} from 'react-bootstrap'

const Login = () => {
  return (
    <div className='container'>
        <div className="imglogin">
            <img src={Img}  />
        </div>
        <div className="formContainer">
            <h1 className="px-5 mt-2">Login</h1>
            <Form>
                <Form.Control  className = "mt-2" type='email' placeholder='name@example.com'/>
                <Form.Control className = "mt-4" type='password' placeholder='*******'/>

                <InputGroup className="mt-4 mb-3  ">
                    <Button className="rounded">Login</Button>
                    <p className='mx-4 my-auto'>Don't have an account? <a href='/register'>Register</a></p>
                  </InputGroup>
            </Form>
            
        </div>
        
        
    </div>
  )
}

export default Login