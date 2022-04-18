import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_SURVEYS } from "../../../constants";
import SurveysContext from "../../../context/surveys/SurveysContext";
import CategoriesContext from "../../../context/categories/CategoriesContext";
import { Container, Form, Row } from "react-bootstrap";
import useForm from "../../../hooks/useForm";
import { Button } from "react-bootstrap";
import FormGroupMultipleChoice from "../FormGroupMultipleChoice/FormGroupMultipleChoice";
import FormGroupSimpleQuestion from "../FormGroupSimpleQuestion/FormGroupSimpleQuestion";
import FormGroupQuestionWithImage from "../FormGroupQuestionWithImage/FormGroupQuestionWithImage";
import ButtonsForAdmin from "../ButtonsForAdmin/ButtonsForAdmin";
import FormGroupTitleCategory from "../FormGroupTitleCategory/FormGroupTitleCategory";
import "./FormSurveyDetail.css";

const FormSurveyDetail = () => {
  const initialValues = {
    name: "",
    state: "",
    questions: [],
    category: "",
  };

  const { getSurvey, surveySelected } = useContext(SurveysContext);
  const { categories, getCategories } = useContext(CategoriesContext);
  const { setValues, values, admin } = useForm(initialValues);
  const params = useParams();

  useEffect(() => {
    getSurvey(URL_SURVEYS + params.id);
    getCategories();
    setValues(surveySelected);
  }, []);

  console.log(values);
  console.log(surveySelected);

  return admin == false ? (
    <Container className="py-3">
      <Row>
        <div className="borderM p-4">
          <FormGroupTitleCategory
            key={surveySelected.id}
            surveys={surveySelected}
            values={values}
          />
          {surveySelected.questions?.map((question, index) =>
            question.response.length > 1 ? (
              <FormGroupMultipleChoice
                key={index}
                question={question}
                values={values}
              />
            ) : question.response.length == 1 ? (
              <FormGroupQuestionWithImage
                key={index}
                question={question}
                values={values}
              />
            ) : (
              <FormGroupSimpleQuestion
                key={index}
                question={question}
                initialValues={initialValues}
              />
            )
          )}
          <div className="mt-5 me-5 d-flex justify-content-end">
            <Button>Guardar</Button>
          </div>
        </div>
      </Row>
    </Container>
  ) : (
    <Container>
      <Form>
        <div className="borderM p-4">
          <ButtonsForAdmin surveySelected={surveySelected} values={values} />
          <FormGroupTitleCategory surveySelected={surveySelected} categories={categories} />
          {surveySelected?.questions?.map((question, index) =>
            question.response.length > 1 ? (
              <FormGroupMultipleChoice key={index} question={question} />
            ) : question.response.length == 1 ? (
              <FormGroupQuestionWithImage key={index} question={question} />
            ) : (
              <FormGroupSimpleQuestion key={index} question={question} />
            )
          )}
        </div>
      </Form>
    </Container>
  );
};

export default FormSurveyDetail;
/* 
<Form>
        <div className="borderM p-4">
          <div className="d-flex justify-content-end">
            <Button
              className="m-1"
              variant="danger"
              onClick={() => deleteSurveys(surveySelected?.id)}
            >
              Eliminar
            </Button>
            <Button className="m-1" variant="primary" onClick={()=> updateSurveys(surveySelected?.id, values)}>
              Modificar
            </Button>
            <Button className="m-1" variant="secondary">
              Publicar
            </Button>
          </div>

          <div>
            <Form.Group>
              <Form.Label>
                <h5>Titulo</h5>
              </Form.Label>
              <Form.Control
                onChange={(e) => handleEdit(e)}
                name="name"
                placeholder={surveySelected?.name}
                type="text"
              ></Form.Control>
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>Categoria</h5>
              </Form.Label>
              <Form.Select
                type="text"
                name="category"
                onChange={(e) => handleEdit(e)}
              >
                <option>{surveySelected?.category}</option>
                {categories?.map((category, index) => (
                  <option key={index}>{category.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>

          {surveySelected?.questions?.map((question, index) =>
            question.response.length > 1 ? (
              <div key={`questions${index}`} className="mb-3">
                <Form.Group controlId={index} className="mb-3">
                  <Form.Label>
                    <h5>Multiple Choice</h5>
                  </Form.Label>
                  <Form.Control
                    name="questions"
                    onChange={(e) => handleEdit(e)}
                    placeholder={question.question}
                    type="text"
                  ></Form.Control>
                </Form.Group>

                <Form.Label>
                  <h6>Respuestas</h6>
                </Form.Label>
                {question.response.map((response, index) => (
                  <Form.Group
                    key={`response${index}`}
                    controlId={index}
                    className="mb-3"
                  >
                    <Form.Control
                      name="response"
                      onChange={(e) => handleEdit(e)}
                      placeholder={response}
                      type="text"
                    />
                  </Form.Group>
                ))}
              </div>
            ) : question.response.length == 1 ? (
              <Form.Group
                key={`image${index}`}
                controlId={index}
                className="mb-3"
              >
                <Form.Control label="Pregunta imagen" type="text" />
              </Form.Group>
            ) : (
              <Form.Group
                key={`questions${index}`}
                controlId={index}
                className="mb-3"
              >
                <Form.Label>
                  <h5>Pregunta Simple</h5>
                </Form.Label>
                <FormControl
                  onChange={(e) => handleEdit(e)}
                  name="questions"
                  placeholder={question.question}
                  type="text"
                ></FormControl>
              </Form.Group>
            )
          )}
        </div>
      </Form>
*/
