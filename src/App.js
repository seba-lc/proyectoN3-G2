import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewSurvey from './pages/NewSurvey';
import PendingSurveys from './pages/PendingSurveys';
import SurveysState from './context/surveys/SurveysState';
import CategoriesState from './context/categories/CategoriesState';
import PublishedSurveys from './pages/PublishedSurveys';
<<<<<<< HEAD
import Categories from './pages/Categories';
=======
>>>>>>> 6fdc06daa7bf66bbb91ac7195a26ff4cc93e8c4c
import UserProvider from "./context/UserContext";


function App() {
  return (
    <>
 <UserProvider>
    <SurveysState>
      <CategoriesState>
      <Layout>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/Categories' element={<Categories/>}/>
          <Route path='/admin' element={<Admin />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/newsurvey' element={<NewSurvey/>}/>
          <Route path='/pendingsurveys' element={<PendingSurveys/>}/>
          <Route path='/publishedsurveys' element={<PublishedSurveys/>}/>
        </Routes>
      </Layout>
      </CategoriesState>
    </SurveysState>
    </UserProvider>

    </>
  );
}

export default App;
