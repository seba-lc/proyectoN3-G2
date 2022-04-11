import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL_SURVEYS } from "../../../constants";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { Row, Col, Container, Form, FormControl } from "react-bootstrap";
import useForm from "../../../hooks/useForm";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import FormGroupMultipleChoice from "../FormGroupMultipleChoice/FormGroupMultipleChoice"
import FormGroupSimpleQuestion from "../FormGroupSimpleQuestion/FormGroupSimpleQuestion"
import FormGroupQuestionWithImage from "../FormGroupQuestionWithImage/FormGroupQuestionWithImage"
import ButtonsForAdmin from "../ButtonsForAdmin/ButtonsForAdmin"
import FormGroupTitleCategory from "../FormGroupTitleCategory/FormGroupTitleCategory"

const FormSurveyDetail = () => {
  const { surveys, getSurveys, deleteSurveys } = useContext(SurveysContext);
  const params = useParams();
  useEffect(() => {
    getSurveys(URL_SURVEYS + params.id);
    initialValues()
  }, []);
  //initialValues = surveys
  const navigate = useNavigate()
  const location = useLocation()

  const initialValues = ()=>{
    return {
      name: surveys.name,
      state: surveys.state,
      questions: surveys.questions,
      category: surveys.category,
    };
  }

  
  
  const { values, edit, handleEdit, handleEditt } = useForm(initialValues);

  return edit == false && location.pathname!="/admin"? (
    <>
    <p>Hola</p>
    </>
  ) : (
    <Form onSubmit={(e)=>handleEditt(e)}>
    <div className="border border-dark p-4">
      <div className="d-flex justify-content-end">
        <Button
          className="m-1"
          variant="danger"
          onClick={() => deleteSurveys(surveys.id)}
        >
          E
        </Button>
        <Button
          className="m-1"
          variant="primary"
          type="submit"
        >
          M
        </Button>
        <Button className="m-1" variant="secondary">
          P
        </Button>
      </div>
      
      <div>
        <Form.Group>
          <Form.Label>
            <h5>Titulo</h5>
          </Form.Label>
          <Form.Control name="name" placeholder={surveys.name}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <h5>Categoria</h5>
          </Form.Label>
          <Form.Control name="category" placeholder={surveys.category}></Form.Control>
        </Form.Group>
      </div>
      {surveys.questions?.map((question, index) =>
        question.response.length > 1 ? (
          <div className="mb-3">
            <Form.Group controlId="question" className="mb-3">
              <Form.Label>
                <h5>Multiple Choice</h5>
              </Form.Label>
              <Form.Control
                name="questions"
                placeholder={question.question}
                onChange={(e) => handleEditt(e)}
              ></Form.Control>
            </Form.Group>

            <Form.Label>
              <h6>Respuestas</h6>
            </Form.Label>
            {question.response.map((response, index) => (
              <Form.Group controlId="response" key={index} className="mb-3">
                <Form.Control
                  name="response"
                  onChange={(e) => handleEditt(e)}
                  key={index}
                  placeholder={response}
                  type="text"
                />
              </Form.Group>
            ))}
          </div>
        ) : question.response.length == 1 ? (
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Can't check this" disabled />
          </Form.Group>
        ) : (
          <Form.Group className="mb-3 ps-5" key={index}>
            <Form.Label>
              <h5>Pregunta Simple</h5>
            </Form.Label>
            <FormControl
            name="question"
              placeholder={question.question}
            ></FormControl>
          </Form.Group>
        )
      )}
    </div>
    </Form>
  );
};

export default FormSurveyDetail;
/* {
<Container className="py-3">
    <Row>
      <div className="border border-dark p-4">
        <ButtonsForAdmin  id={surveys.id} />
        <FormGroupTitleCategory key={surveys.id} surveys={surveys} edit={edit} values={values}/>
        {surveys.questions?.map((question, index) =>
          question.response.length > 1 ? (
            <FormGroupMultipleChoice
              key={index}
              question={question}
              edit={edit}
              values={values}
            />
          ) : question.response.length == 1 ? (
            <FormGroupQuestionWithImage
              key={index}
              question={question}
              edit={edit}
              values={values}
            />
          ) : (
            <FormGroupSimpleQuestion
              key={index}
              question={question}
              edit={edit}
              initialValues={initialValues}
            />
          )
        )}
      </div>
    </Row>
    </Container>
} */


{}