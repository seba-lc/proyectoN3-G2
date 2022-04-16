import { Form, Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { LOGIN_VALUES, URL_USERS } from "../../constants";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { validationLogin } from "../../helpers/Validations";
import { useNavigate } from "react-router-dom";

export const FormContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginFormulary = () => {
  const [userLogged, setUserLogged] = useState({
    email: "",
    password: "",
  });
  const { login, auth } = useContext(UserContext);
  const [loginErrors, setLoginErrors] = useState({});
  const navigate = useNavigate();

  const handleKeyUp = (e) => {
    setUserLogged({
      ...userLogged,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validationLogin(userLogged);
    setLoginErrors(errors);
    if(Object.keys(errors).length === 0){
      login(userLogged);
    }
  }

  useEffect(() => {
    if(auth){
      navigate('/');
    }
  }, [auth])

  return (
    <Form className="text-light" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formLoginEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" onKeyUp={handleKeyUp} />
        <Form.Text className="text-muted">
          No compartiremos tu dirección email con nadie.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLoginPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onKeyUp={handleKeyUp} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLoginCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      {
        Object.keys(loginErrors).length === 0 ? null : (
          Object.values(loginErrors).map((error, index) => <Alert key={index} variant="danger">{error}</Alert>)
        )
      }

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginFormulary;
