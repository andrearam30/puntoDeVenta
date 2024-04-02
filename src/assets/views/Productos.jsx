import React, { useState } from 'react';
import Navp from '../components/navbar';
import { Container, Row, Col, Button, Modal, Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Productos = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <Navp/>
      <Row>
        <Col lg={12} xs={12} style={{ marginTop: '20px' }}>
          <Row>
            <Col xs={12}>
              <span style={{ marginRight: '10px' }}>Búsqueda:</span>
              <input type="text" placeholder="Buscar..." style={{ marginRight: '40px', paddingRight: '90px' }} />
              <Button variant="success" size="sm" onClick={handleShow} style={{ marginRight: '40px'}}>
                Agregar producto
              </Button>

              <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                  <Modal.Title>Nuevo producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Row>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="exampleForm.Description">
                          <Form.Label>Descripción <span style={{ color: 'red' }}>*</span></Form.Label>
                          <Form.Control type="text" autoFocus />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.Code">
                          <Form.Label>Código</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ArticleNumber">
                          <Form.Label>Número de artículo</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.PurchasePrice">
                          <Form.Label>Precio de compra</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.MinimumStock">
                          <Form.Label>Stock mínimo</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>

                      <Col md={4}>
                      <Form.Group className="mb-3" controlId="exampleForm.SalePrice1">
                          <Form.Label>Precio de venta 1</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.SalePrice2">
                          <Form.Label>Precio de venta 2</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.SalePrice3">
                          <Form.Label>Precio de venta 3</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.SalePrice4">
                          <Form.Label>Precio de venta 4</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.CurrentExistence">
                          <Form.Label>Existencia actual</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>

                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="exampleForm.Units">
                          <Form.Label>Unidades</Form.Label>
                          <Form.Select>
                            <option value="">Seleccione una opción</option>
                            <option value="pieza">Pieza</option>
                            <option value="caja">Caja</option>
                            <option value="metro">Metro</option>
                            <option value="kilogramo">Kilogramo</option>
                            <option value="litro">Litro</option>
                            <option value="paquete">Paquete</option>
                            <option value="bolsa">Bolsa</option>
                            <option value="calzadoguantes">Pares de calzado y guantes</option>
                            <option value="bulto">Bulto</option>
                            <option value="metrocuadrado">Metro cuadrado</option>
                            <option value="metrocubico">Metro cúbico</option>
                            <option value="galon">Galón</option>
                            <option value="unidadservicio">Unidad de servicio</option>
                            <option value="barril">Barril</option>
                            <option value="megabitsegundo">Megabit por segundo</option>
                            <option value="lote">Lote</option>
                            <option value="tonelada">Tonelada</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.Category">
                          <Form.Label>Categoría</Form.Label>
                          <Form.Select>
                            <option value="">Seleccione una opción</option>
                            <option value="antisepticos">Antisépticos</option>
                            <option value="soluciones">Soluciones</option>
                            <option value="mobiliariomedico">Mobiliario médico</option>
                            <option value="medicamentos">Medicamentos</option>
                            <option value="ortopedia">Ortopedia</option>
                            <option value="materialcuracion">Material de curación</option>
                            <option value="hipodermicos">Hipodérmicos</option>
                            <option value="desechables">Desechables</option>
                            <option value="roperia">Roperia</option>
                            <option value="instrumental">Instrumental</option>
                            <option value="cateter">Cateter I.V.</option>
                            <option value="laboratorio">Laboratorio</option>
                            <option value="diagnostico">Diagnóstico</option>
                            <option value="hospitalario">Hospitalario</option>
                            <option value="infusion">Infusión</option>
                            <option value="suturas">Suturas</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.Subcategory">
                        <Form.Label>Subcategoría</Form.Label>
                        <Form.Select>
                          <option value="">Seleccione una opción</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.SelectImage">
                          <Form.Label>Seleccionar imagen</Form.Label>
                          <Form.Control type="file" />
                        </Form.Group>

                        <Row>
                          <Col md={6}>
                          <Form.Group className="mb-3" controlId="exampleForm.IVA">
                          <Form.Label>IVA</Form.Label>
                          <div key={`inline-radio-iva`} className="mb-3">
                            <Form.Check inline label="Sí" name="IVAOptions" type="radio" id={`inline-radio-yes`} value="si" />
                            <Form.Check inline label="No" name="IVAOptions" type="radio" id={`inline-radio-no`} value="no" />
                          </div>
                          </Form.Group>
                          </Col>

                          <Col md={6}>
                          <Form.Group className="mb-3" controlId="exampleForm.Decimals">
                          <Form.Label>A granel (decimales)</Form.Label>
                          <div key={`inline-radio-decimals`} className="mb-3">
                            <Form.Check inline label="Sí" name="decimalsOptions" type="radio" id={`inline-radio-yes`} value="si" />
                            <Form.Check inline label="No" name="decimalsOptions" type="radio" id={`inline-radio-no`} value="no" />
                          </div>
                          </Form.Group>
                          </Col>
                        </Row>
                        
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

                
              <Button variant="success" size="sm" style={{ marginRight: '40px'}}>
                Cambio de precio masivo
              </Button>
              <Button variant="success" size="sm" style={{ marginRight: '40px'}}>
                Exportar
              </Button>
            </Col>            
            
            <Col xs={12} style={{ marginTop: '20px' }}>
              <Table striped bordered hover responsive="lg">
                <thead>
                  <tr style={{ textAlign: 'center' }}>
                    <th>Código</th>
                    <th>Producto</th>
                    <th>Compra</th>
                    <th>Venta</th>
                    <th>Categoría</th>
                    <th>Subcategoría</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CA87</td>
                    <td>Camiseta de algodón</td>
                    <td>$1.00</td>
                    <td>$1.00</td>
                    <td>Ropa</td>
                    <td></td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                  <tr>
                    <td>LED84</td>
                    <td>Lámpara de escritorio LED</td>
                    <td>$13.00</td>
                    <td>$13.00</td>
                    <td>Soluciones</td>
                    <td></td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                  <tr>
                    <td>SH02</td>
                    <td>Set de herramientas de mano</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                    <td>Soluciones</td>
                    <td></td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                  <tr>
                    <td>CP72</td>
                    <td>Cafetera programable</td>
                    <td>$1,000.00</td>
                    <td>$1,000.00</td>
                    <td>Cocina</td>
                    <td></td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                  <tr>
                    <td>MIS82</td>
                    <td>Mochila impermeable de senderismo</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                    <td>Escolares</td>
                    <td></td>
                    <td style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faTrashCan} /></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Productos;