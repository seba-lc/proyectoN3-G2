import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center homePage-style'>
      <span className='display-6 mb-5'>Soy el Home/Landing</span>
      <Link to='/admin'>Página de Admin</Link>
    </div>
  );
};

export default HomePage;