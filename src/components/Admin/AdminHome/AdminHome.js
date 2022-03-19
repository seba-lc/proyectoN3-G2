import { Link } from 'react-router-dom';
import './AdminHome.css'

const AdminHome = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center adminHome-style'>
      <span className='display-6 mb-5'>Soy el Home de Admin</span>
      <Link to='/'>Volver</Link>
    </div>
  );
};

export default AdminHome;