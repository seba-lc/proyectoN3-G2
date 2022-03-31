import {Button, Modal, Form} from 'react-bootstrap'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ModalSurveys = ({show, handleClose}) => {
  const navigate = useNavigate()
  const redireccion =()=>{
    navigate('/admin/newSurvevys')
  } 
    return (
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Nueva encuesta</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre de la encuesta</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nombre"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Selecciona una categoria</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Categoria"
                          autoFocus
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Terminar
                    </Button>
                    <Button variant="primary" onClick={redireccion}>
                      Continuar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
     );
}
 
export default ModalSurveys;