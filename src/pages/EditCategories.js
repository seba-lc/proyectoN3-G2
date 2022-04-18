import useForm from "../hooks/useForm";
import Navegation from "../components/Admin/Navegation/Navegation";
import AdminEditCategories from "../components/Admin/AdminEditCategories/AdminEditCategories";
import { Container } from "react-bootstrap";

const EditCategories = () => {
    const {admin} = useForm()
    return ( 
        <>
        {admin?(<Navegation/>):(null)}
        <Container>
        <AdminEditCategories></AdminEditCategories>
        </Container>  
        </>
        
     );
}
 
export default EditCategories;