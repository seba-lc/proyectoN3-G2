import { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
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
            <h2 className='survey-title text-center px-5 py-2'>{surveySelected.name}</h2>
            <div className='d-flex flex-column justify-content-center align-items-center survey-box'>
            {
              surveySelected.questions.map((item, index) => (
                <div className=' d-flex flex-column justify-content-center align-items-center text-center my-3' key={index}>
                  <div className='survey-question'>{item.question}</div>
                  <div className='answer-box d-flex flex-column justify-content-start'>
                    {
                      item.answers.map((answer, position) => (
                        answer.length !== 0 ? (
                          <Form>
                            <Form.Check 
                              className='px-3 answer-style'
                              type="switch"
                              id={position}
                              label={answer}
                            />
                          </Form>
                        ) : null
                      ))
                    }
                  </div>
                </div>
              ))
            }
            <Button className='boton response-btn'>Enviar Respuesta</Button>
            </div>
            
          </>
        ) : null
      }
    </div>
  );
};

export default SurveyShowed;