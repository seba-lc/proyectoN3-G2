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
import SurveyDetail from './pages/SurveyDetail';
import Categories from './pages/Categories';
import UserProvider from "./context/UserContext";
import Error404 from './pages/Error404';
import Landing from './pages/Landing';
import EditCategories from './pages/EditCategories';
import AdminRoute from './routes/AdminRoute';


function App() {
  return (
    <>
 <UserProvider>
    <SurveysState>
      <CategoriesState>
      <Layout>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/categories/:category' element={<Categories/>}/>
          <Route path='/admin' element={<AdminRoute><Admin /></AdminRoute>} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/newsurvey' element={<NewSurvey/>}/>
          <Route path='/pendingsurveys' element={<PendingSurveys/>}/>
          <Route path='/publishedsurveys' element={<PublishedSurveys/>}/>
          <Route path='/surveydetail/:id' element={<SurveyDetail/>}/>
          <Route path='/editcategories' element={<EditCategories/>}/>
          <Route path='/error404' element={<Error404/>}/>
        </Routes>
      </Layout>
      </CategoriesState>
    </SurveysState>
    </UserProvider>

    </>
  );
}

export default App;
