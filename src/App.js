import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Admin from './pages/Admin';
import Home from './pages/Home';
import NewSurvey from './pages/NewSurvey';
import PendingSurveys from './pages/PendingSurveys';
import SurveysState from './context/surveys/SurveysState';
import PublishedSurveys from './pages/PublishedSurveys';

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
          <Route path='/pendingsurveys' element={<PendingSurveys/>}/>
          <Route path='/publishedsurveys' element={<PublishedSurveys/>}/>
        </Routes>
      </Layout>
    </SurveysState>
    </>
  );
}

export default App;
