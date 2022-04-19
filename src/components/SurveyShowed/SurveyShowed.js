import { useContext, useEffect, useState } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../config/axiosClient';
import SurveysContext from '../../context/surveys/SurveysContext';
import { UserContext } from '../../context/UserContext';
import Navegation from '../Admin/Navegation/Navegation';
import './SurveyShowed.css'

const SurveyShowed = () => {
  const {getSurvey, surveySelected} = useContext(SurveysContext);
  const params = useParams();
  const [answers, setAnswers] = useState([]);
  const {user} = useContext(UserContext);
  const [userAnswer, setUserAnswer] = useState(null);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e, question, answer) => {
    const newAnswer = {question, answer};
    let answerSup = [];
    let change = false;
    answers.forEach(item => {
      if(item.question === question){
        answerSup = answers.filter(answer => answer.question !== question);
        change = true;
        // e.target.classList.remove('border', 'border-success');
      }
    })
    if(change){
      setAnswers([
        ...answerSup,
        newAnswer
      ])
    }else{
      setAnswers([
        ...answers,
        newAnswer
      ])
    }
    for(let i = 0; i < e.target.parentElement.children.length; i++){
      e.target.parentElement.children[i].classList.remove('answer-selected')
    }
    e.target.classList.add('answer-selected');
  }

  const sendAnswer = async () => {
    if(userAnswer !== null){
      alert('La encuesta ya fue respondida')
      return
    }
    if(user){
      if(answers.length === surveySelected.questions.length){
        const answersDB = {
          user: user.email,
          answers: answers,
          surveyName: surveySelected.name
        }
        try {
          const response = await axiosClient.post('/answers', answersDB);
          if(response.data.ok){
            navigate(`/categories/${surveySelected.category}`)
          }
        } catch (error) {
          console.log(error);
        }
      }else{
        alert('Debe contestar todas las preguntas')
      }
    }else{
      alert('Debe logearse para enviar una respuesta')
    }
  }

  const getAnswer = async () => {
    if(user){
      const dataDB = {
        email: user.email,
        surveyName: surveySelected.name
      }
      try {
        const response = await axiosClient.post('/answers/user', dataDB);
        setUserAnswer(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    getSurvey(params.id)
  }, [])

  useEffect(() => {
    getAnswer();
  }, [surveySelected])

  return (
    <>
      {user?.role === "ADMIN" ? (surveySelected.state ? null : <Navegation /> ): null}
      <div className='d-flex flex-column justify-content-center align-items-center surveyShowed-style'>
        {
          Object.keys(surveySelected).length !== 0 ? (
            <>
              <h2 className='survey-title text-center px-5 py-2'>{surveySelected.name}</h2>
              <div className='d-flex flex-column justify-content-center align-items-center survey-box'>
              {
                surveySelected.questions.map((item, index) => (
                  <div className={` text-center my-3 ${userAnswer !== null ? 'survey_answered' : null}`} key={index}>
                    <div className='survey-question'>{item.question}</div>
                    <div className='answer-box d-flex flex-column justify-content-start'>
                      {
                        item.answers.map((answer, position) => (
                          answer.length !== 0 ? (
                            <div className='px-3 answer-style' key={position} onClick={(e) => handleClick(e, item.question, answer)} >{answer}</div>
                          ) : null
                        ))
                      }
                    </div>
                  </div>
                ))
              }
              {
                userAnswer !== null ? <Alert variant='success' className='mt-3'>Encuesta Respondida! <span className='text-decoration-underline span-style' onClick={handleShow}>Ver Respuesta</span></Alert> : null
              }
              <Button className={surveySelected.state ? 'mt-3 boton response-btn' : 'd-none' } onClick={sendAnswer}>Enviar Respuesta</Button>
              </div>
            </>
          ) : null
        }
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="survey-modal" closeButton>
            <Modal.Title>Respuesta</Modal.Title>
          </Modal.Header>
          <Modal.Body className="survey-modal2">
            {
              userAnswer?.answers.map((item, index) => (
                <div key={index}>
                  <p>{item.question}</p>
                  <p>{item.answer}</p>
                </div>
              ))
            }
          </Modal.Body>
        </Modal>
    </>
  );
};

export default SurveyShowed;