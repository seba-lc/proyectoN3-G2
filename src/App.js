import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Admin from './pages/Admin';
import Home from './pages/Home';
import NewSurvey from './pages/NewSurvey';
import AllSurveys from './pages/AllSurveys';
import SurveysState from './context/surveys/SurveysState';

function App() {
  return (
    <>
    <SurveysState>
      <Layout>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/newsurvey' element={<NewSurvey/>}/>
          <Route path='/allsurveys' element={<AllSurveys/>}/>
        </Routes>
      </Layout>
    </SurveysState>
    </>
  );
}

export default App;
