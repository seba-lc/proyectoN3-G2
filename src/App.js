import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router-dom";
import Admin from './pages/Admin';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
