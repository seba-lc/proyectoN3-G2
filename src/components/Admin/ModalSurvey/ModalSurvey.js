import {Button, Modal, Form} from 'react-bootstrap'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ModalSurvey = ({show, handleClose}) => {
/*   const navigate = useNavigate()
  const redireccion =()=>{
    navigate('/admin/newSurvevys')
  }  */
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
 
export default ModalSurvey;