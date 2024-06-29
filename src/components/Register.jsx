import React from "react";
import Img from "../assets/Sign_up.png";
import { Form, Button ,InputGroup} from "react-bootstrap";
const Register = () => {
  return (
    <div className="container">
      <div className="formContainer">
        <h1 className="px-5 mt-2">Register</h1>
        <Form>
          <Form.Control className="mt-1" type="text" placeholder="First Name" />
          <Form.Control className="mt-3" type="text" placeholder="Last Name" />
          <Form.Control className="mt-3" type="text" placeholder="Username" />
          <Form.Control
            className="mt-3"
            type="password"
            placeholder="Password"
          />
          <Form.Control className="mt-3" type="email" placeholder="Email" />
          <Form.Control
            className="mt-3"
            type="number"
            placeholder="Mobile Number"
          />
          <InputGroup className="mt-3 ">
            <Form.Check />
            <p className="mx-2">Register as Admin</p>
          </InputGroup>

          <InputGroup className="mt-2 mb-3  ">
          <Button className="btn-md rounded">Register</Button>
            <p className="mx-3 my-auto ">Already have an account? <a href="/login">Login</a></p>
          </InputGroup>

          
        </Form>
      
      </div>

      <div className="imgregister">
        <img src={Img} />
      </div>
    </div>
  );
};

export default Register;
