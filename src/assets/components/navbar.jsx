import React from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBagShopping, faBoxArchive, faUser, faUsers, faDollarSign, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <Container fluid>
            <div className="col">
                <Nav variant="tabs">
                    <Nav.Item>  
                        <Nav.Link href="tabVenta" active>
                            <FontAwesomeIcon icon={faCartShopping} /> Venta
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="tabProductos">
                            <FontAwesomeIcon icon={faBagShopping} /> Productos
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="tabInventario">
                            <FontAwesomeIcon icon={faBoxArchive} /> Inventario
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="tabProveedores">
                            <FontAwesomeIcon icon={faUser} /> Proveedores
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="tabClientes">
                            <FontAwesomeIcon icon={faUsers} /> Clientes
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="tabCorte">
                            <FontAwesomeIcon icon={faDollarSign} /> Corte
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="tabReportes">
                            <FontAwesomeIcon icon={faChartLine} /> Reportes
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    {/* Contenido de las pestañas */}
                </Tab.Content>
            </div>
        </Container>
    );
};

export default Navbar;