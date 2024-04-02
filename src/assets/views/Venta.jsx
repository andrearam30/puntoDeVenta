import React, { useState } from 'react';
import Navp from '../components/navbar';
import { Container, Row, Col, Button, Modal, Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Venta = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <Navp/>
      <Row>
        <Col lg={9} xs={12} style={{ marginTop: '20px' }}>
          <Row>
            <Col lg={9} xs={12}>
              <span style={{ marginRight: '10px' }}>Código de producto:</span>
              <input type="text" placeholder="Buscar..." style={{ marginRight: '40px', paddingRight: '90px' }} />
            </Col>
            <Col lg={3} xs={12}>
              <Button variant="success" size="sm" onClick={handleShow}>
                Agregar producto
              </Button>
              
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Producto común</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                    <Row>
                    <Col md={12}>
                      <Form.Group xs={6} md={6} className="mb-3" controlId="exampleForm.Description">
                          <Form.Label>Descripción</Form.Label>
                          <Form.Label style={{ color: 'red' }}>*</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                          />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group xs={6} md={6} className="mb-3" controlId="exampleForm.Quantity">
                          <Form.Label>Cantidad</Form.Label>
                          <Form.Label style={{ color: 'red' }}>*</Form.Label>
                          <Form.Control
                            type="number"
                          />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group xs={6} md={6} className="mb-3" controlId="exampleForm.Price">
                        <Form.Label>Precio</Form.Label>
                        <Form.Label style={{ color: 'red' }}>*</Form.Label>
                        <Form.Control
                          type="number"
                        />
                      </Form.Group>
                    </Col>
                    </Row>
                    </Form>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Registrar
                    </Button>
                  </Modal.Footer>
                </Modal>

            </Col>            
                      
            
            <Col xs={12} style={{ marginTop: '20px' }}>
              <Table striped bordered hover responsive="lg">
                <thead>
                  <tr style={{ textAlign: 'center' }}>
                    <th>Descripción del producto</th>
                    <th>Precio venta</th>
                    <th>Cantidad</th>
                    <th>Importe</th>
                    <th>Descuento</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Camiseta de algodón</td>
                    <td>$420.00</td>
                    <td>32</td>
                    <td>$1.00</td>
                    <td>$0.00</td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                  <tr>
                    <td>Lámpara de escritorio LED</td>
                    <td>$1,320.00</td>
                    <td>4</td>
                    <td>$13.00</td>
                    <td>$0.00</td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                  <tr>
                    <td>Set de herramientas de mano</td>
                    <td>$800.00</td>
                    <td>23</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                  <tr>
                    <td>Cafetera programable</td>
                    <td>$29,000.00</td>
                    <td>1</td>
                    <td>$0.00</td>
                    <td>$1,000.00</td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                  <tr>
                    <td>Mochila impermeable de senderismo</td>
                    <td>$80.00</td>
                    <td>48</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                  <tr>
                    <td>Auriculares inalámbricos Bluetooth</td>
                    <td>$399.00</td>
                    <td>2</td>
                    <td>$10.00</td>
                    <td>$0.00</td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                  <tr>
                    <td>Juego de sartenes antiadherentes</td>
                    <td>$100.00</td>
                    <td>56</td>
                    <td>$0.00</td>
                    <td>$10.00</td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            
            <Col xs={12} style={{ marginTop: '10px' }}>
              <div style={{ marginBottom: '10px' }}>
                <Button variant="success" size="sm" style={{ width: '20%' }}>
                  Ventas día y devoluciones
                </Button>
              </div>
              <div>
                <Button variant="success" size="sm" style={{ width: '20%' }}>
                  Ventas en espera
                </Button>
              </div>
              <div style={{ marginTop: '10px' }}>
                <Button variant="success" size="sm" style={{ width: '20%' }}>
                  Reimprimir último ticket
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        
        <Col lg={3} xs={12} className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#012060', minHeight: '93vh' }}>
        
        </Col>
      </Row>
    </Container>
  );
};

export default Venta;
