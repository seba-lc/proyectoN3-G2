import useForm from "../hooks/useForm";
import Navegation from "../components/Admin/Navegation/Navegation";
import AdminEditCategories from "../components/Admin/AdminEditCategories/AdminEditCategories";

const EditCategories = () => {
    const {admin} = useForm()
    return ( 
        <>
        {admin?(<Navegation/>):(null)}
        <AdminEditCategories></AdminEditCategories>
        </>
        
     );
}
 
export default EditCategories;