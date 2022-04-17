import { Button, Modal, Form } from "react-bootstrap";

const ModalSurvey = ({ handleChange, showMS, handleCloseMS }) => {
  return (
    <>
      <Modal
        show={showMS}
        onHide={handleCloseMS}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Pregunta simple</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleChange}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingresa una pregunta</Form.Label>
              <Form.Control
                type="text"
                placeholder="?"
                autoFocus
                name="questions"
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseMS}>
                Cancelar
              </Button>
              <Button variant="primary" type="submit" onClick={handleCloseMS}>
                Guardar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSurvey;
