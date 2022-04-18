import { useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CategoriesContext from "../../../context/categories/CategoriesContext";
import useForm from "../../../hooks/useForm";

const ModalNewCategory = ({ show, handleClose }) => {
  const initialValues = {
    name: "",
    state: false,
  };
  const location = useNavigate()
  const { addCategories } = useContext(CategoriesContext);
  const sendData = () => {
    addCategories(values);
    //location('/admin')
  };

  const { values, handleChange, handleSubmit } = useForm(
    initialValues,
    sendData
  );
  console.log(values);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Switch
              type="switch"
              name="state"
              id="custom-switch"
              label="Publicar"
              onMouseUp={handleChange}
            />
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default ModalNewCategory;
