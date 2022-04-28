import { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import CategoriesContext from "../../../context/categories/CategoriesContext";

const ModalNewCategory = ({ show, handleClose }) => {
  const [category, setCategory] = useState("");
  const { addCategories } = useContext(CategoriesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategories({ categoryName: category });
    handleClose();
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre Categoría</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
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
