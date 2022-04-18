import { Form } from "react-bootstrap";
import useForm from "../../../hooks/useForm";
import "./FormGroupTitleCategory.css";

const FormGroupTitleCategory = ({ surveySelected, categories }) => {
  const { handleEdit, admin } = useForm();
  return admin == false ? (
    <div>
      <h3>{surveySelected.name}</h3>
      <h5>{surveySelected.category}</h5>
    </div>
  ) : (
    <>
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
    </>
  );
};

export default FormGroupTitleCategory;
