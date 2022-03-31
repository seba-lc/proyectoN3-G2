import {Button, Modal, Form} from 'react-bootstrap'

const ModalQuestions = ({show, handleClose}) => {

    return ( 
        <>
        <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Agregar preguntas</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Escribe la pregunta</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Cuantos años tienes?"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Escribe la pregunta</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Cuantos años tienes?"
                          autoFocus
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Terminar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Continuar
                    </Button>
                  </Modal.Footer>
                </Modal>
        </>
     );
}
 
export default ModalQuestions;