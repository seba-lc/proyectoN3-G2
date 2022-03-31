import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, Router } from "react-router-dom";
import Navegation from './components/Admin/Navegation/Navegation';
import Admin from './pages/Admin';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
      </Routes> 
    </>
  );
}

export default App;
