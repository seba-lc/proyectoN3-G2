import Login from './Login.css'
import { Form, Button, Alert, Container, Row, Col, TabContainer } from "react-bootstrap";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { validationLogin } from "../../helpers/Validations";
import { useNavigate } from "react-router-dom";

export const FormContainer = styled(Form)`
  width: 100vw;
  height: 100vh;
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
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validationLogin(userLogged);
    setLoginErrors(errors);
    if (Object.keys(errors).length === 0) {
      login(userLogged);
    }
  };

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
   
     <div className='login-container'>
      <Form className="text-light login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 " controlId="formLoginEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onKeyUp={handleKeyUp}
          />
          <Form.Text className="text-muted">
            No compartiremos tu dirección email con nadie.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onKeyUp={handleKeyUp}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        {Object.keys(loginErrors).length === 0
          ? null
          : Object.values(loginErrors).map((error, index) => (
              <Alert key={index} variant="danger">
                {error}
              </Alert>
            ))}

        <Button type="submit" className="glow-on-hover border-none p-2">
          Iniciar Sesión
        </Button>
      </Form>
      </div>
   
  );
};

export default LoginFormulary;
