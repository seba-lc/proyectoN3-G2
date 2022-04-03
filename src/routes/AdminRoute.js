import { Navigate } from "react-router-dom";
const AdminRoute = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return ( 
      user? (user.role==='ADMIN'? children :<Navigate to='/home'/>): <Navigate to='/'/>
     );
}
 
export default AdminRoute;