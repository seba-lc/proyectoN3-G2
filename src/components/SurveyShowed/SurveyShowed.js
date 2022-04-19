import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SurveysContext from '../../context/surveys/SurveysContext';
import './SurveyShowed.css'

const SurveyShowed = () => {
  const {getSurvey, surveySelected} = useContext(SurveysContext);
  const params = useParams();
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    getSurvey(params.id)
  }, [])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center surveyShowed-style'>
      {
        Object.keys(surveySelected).length !== 0 ? (
          <>
            <h2 className='bg-light px-5 py-2'>{surveySelected.name}</h2>
            {
              surveySelected.questions.map((item, index) => (
                <div className='bg-light border text-center my-3' key={index}>
                  <div>{item.question}</div>
                  <div className='d-flex'>
                    {
                      item.answers.map((answer, position) => (
                        answer.length !== 0 ? (
                          <div className='px-3 answer-style' key={position}>{answer}</div>
                        ) : null
                      ))
                    }
                  </div>
                </div>
              ))
            }
            <Button variant='success' className='mt-5'>Enviar Respuesta</Button>
          </>
        ) : null
      }
    </div>
  );
};

export default SurveyShowed;