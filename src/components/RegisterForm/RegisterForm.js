import { Form, Button} from "react-bootstrap";
import { Alert } from 'react-bootstrap';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useGet from '../../hooks/useGet';
import { URL_USERS } from '../../constants'



const RegisterFormulary= () => {
  const initialValues={
    name:'',
    password:'',
    email:'',
  }
  const navigate = useNavigate()
  const users = useGet(URL_USERS);
  const chequear = async ()=>{
    const repeatedUser = users.find(user=>user.email === values.email);
    if(repeatedUser){
      alert('El mail ingresado ya existe')
    }else{
      axios.post(URL_USERS,values);
      navigate('/LoginForm');
    }
  }
  
  const { values, errors, handleKeyUp, handleSubmit, } = useForm(initialValues, chequear); 
  return (
    <Form onSubmit ={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onKeyUpCapture={handleKeyUp} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onKeyUp={handleKeyUp}/>
        <Form.Label>Repetir Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onKeyUp={handleKeyUp}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {Object.keys(errors).length===0?null:
          Object.values(errors).map((error,index)=><Alert key={index} variant='danger'>{error}</Alert>)}
    </Form>
  );
};

export default RegisterFormulary;
