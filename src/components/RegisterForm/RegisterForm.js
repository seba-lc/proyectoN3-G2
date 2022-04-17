import { Form, Button} from "react-bootstrap";
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { validationRegister } from "../../helpers/Validations";
import axiosClient from "../../config/axiosClient";
import Spinner from "../Spinner/Spinner";


const RegisterFormulary= () => {
  const [newUser, setNewUser] = useState({
    name:'',
    email:'',
    password1:'',
    password2:''
  })
  const [registerErrors, setRegisterErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleKeyUp = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validationRegister(newUser);
    setRegisterErrors(errors)
    if(Object.keys(errors).length === 0){
      const newUserDB = {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password1
      }
      try {
        const response = await axiosClient.post('/users/register', newUserDB);
        if(response.status === 200){
          console.log('Usuario generado exitosamente');
          setSuccess(true)
          setTimeout(() => navigate('/'), 2000)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Form onSubmit ={handleSubmit} className="position-relative">
      {
        success ? (
          <div className="success-submit d-flex align-items-center justify-content-center">
            <Spinner />
          </div>
        ) : null
      }
      <Form.Group className="mb-3 mx-5" controlId="formName">
        <Form.Label className="mt-5">Nombre</Form.Label>
        <Form.Control name="name" type="name" placeholder="Ingresá tu nombre" onKeyUp={handleKeyUp} />
      </Form.Group>
      <Form.Group className="mb-3 mx-5" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Ingresá un email" onKeyUp={handleKeyUp} />
        <Form.Text className="text-muted">
          No compartiremos tu contraseña con nadie
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 mx-5" controlId="formPassword1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control name="password1" type="password" placeholder="Contraseña (al menos 8 dígitos)" onKeyUp={handleKeyUp}/>
      </Form.Group>
      <Form.Group className="mb-3 mx-5" controlId="formPassword2">
        <Form.Label>Repetir contraseña</Form.Label>
        <Form.Control name="password2" type="password" placeholder="Contraseña" onKeyUp={handleKeyUp}/>
      </Form.Group>

      {
        Object.keys(registerErrors).length === 0 ? null : (
          Object.values(registerErrors).map((error, index)=><Alert key={index} variant='danger'>{error}</Alert>)
        )
      }

      <Button type="submit" className="mb-5 mx-5 glow-on-hover">
        Registrarme
      </Button>
    </Form>
  );
};

export default RegisterFormulary;
