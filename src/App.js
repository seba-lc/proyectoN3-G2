import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Admin from './pages/Admin';
import Home from './pages/Home';
import NewSurvey from './pages/NewSurvey';
import PendingSurveys from './pages/PendingSurveys';
import SurveysState from './context/surveys/SurveysState';
import CategoriesState from './context/categories/CategoriesState';
import PublishedSurveys from './pages/PublishedSurveys';
import SurveyDetail from './pages/SurveyDetail';

function App() {
  return (
    <>
    <SurveysState>
      <CategoriesState>
      <Layout>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/newsurvey' element={<NewSurvey/>}/>
          <Route path='/pendingsurveys' element={<PendingSurveys/>}/>
          <Route path='/publishedsurveys' element={<PublishedSurveys/>}/>
          <Route path='/surveydetail/:id' element={<SurveyDetail/>}/>
        </Routes>
      </Layout>
      </CategoriesState>
    </SurveysState>
    </>
  );
}

export default App;
