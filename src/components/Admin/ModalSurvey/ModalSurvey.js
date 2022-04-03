import {Button, Modal, Form} from 'react-bootstrap'

const ModalSurvey = ({handleQuestion, show, handleClose}) => { 

    return (
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Nueva pregunta</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ingresa una pregunta</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="?"
                          autoFocus
                          name="questions"
                          onChange={handleQuestion}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Guardar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
     );
}
 
export default ModalSurvey;