import styled from "styled-components";
import RegisterFormulary from "../components/RegisterForm/RegisterForm";

const FormContainer = styled.div`
width:100vw;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`
const Register = () => {
  return ( 
    <FormContainer>
      <RegisterFormulary/>
    </FormContainer>
   );
}
 
export default Register;