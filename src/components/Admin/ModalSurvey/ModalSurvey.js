import { Button, Modal, Form } from "react-bootstrap";

const ModalSurvey = ({ handleChange, show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva pregunta</Modal.Title>
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
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
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

export default ModalSurvey;
