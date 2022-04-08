import {Form, Button} from 'react-bootstrap';
import styled from "styled-components";
import axios from 'axios';
import { LOGIN_VALUES, URL_USERS } from '../../constants';
import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';

export const FormContainer = styled.div`
width:100vw;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`
const LoginFormulary = () => {
  const {login, auth} = useContext(UserContext);
    return (   <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>  
      );
        };
 
export default LoginFormulary;