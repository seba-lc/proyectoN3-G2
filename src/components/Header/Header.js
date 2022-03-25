import './Header.css'
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='w-100 display-6 text-center bg-info header-style'>
         <Nav className="ms-auto">
                <Link className="nav-link" to='/Register'>
                  Registrarse
                </Link>
            </Nav>
    </div>
  );
};

export default Header;