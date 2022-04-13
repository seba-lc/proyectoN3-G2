import { Modal, Form, Button } from "react-bootstrap";

const ModalMultipleChoice = ({ handleChange, showMC, handleCloseMC }) => {
  return (
    <>
      <Modal
        show={showMC}
        onHide={handleCloseMC}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Opción Multiple</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleChange}>
            <Form.Group
              className="mb-3"
              controlId="option_input_0.ControlInput0"
            >
              <Form.Label>Ingresa una pregunta</Form.Label>
              <Form.Control
                type="text"
                placeholder="?"
                autoFocus
                name="questions"
              />
              <hr></hr>
              <h5>Posibles respuestas</h5>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="option_input_1.ControlInput1"
            >
              <Form.Label>Opcion A</Form.Label>
              <Form.Control
                type="text"
                placeholder="Respuesta"
                autoFocus
                name="response"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="option_input_2.ControlInput2"
            >
              <Form.Label>Opción B</Form.Label>
              <Form.Control
                type="text"
                placeholder="Respuesta"
                autoFocus
                name="response"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="option_input_3.ControlInput3"
            >
              <Form.Label>Opción C</Form.Label>
              <Form.Control
                type="text"
                placeholder="Respuesta"
                autoFocus
                name="response"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="option_input_4.ControlInput4"
            >
              <Form.Label>Opción D</Form.Label>
              <Form.Control
                type="text"
                placeholder="Respuesta"
                autoFocus
                name="response"
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseMC}>
                Cancelar
              </Button>
              <Button variant="primary" type="submit" onClick={handleCloseMC}>
                Guardar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalMultipleChoice;
