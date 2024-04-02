import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Lógica de inicio de sesión...

        // Verifica si el inicio de sesión es exitoso
        
    };

    return (
        <Container fluid>
            <Row>
                <Col lg={8}>
                    <h3 style={{ color: '#3B5C92', textAlign: 'center', marginTop: '20px' }}>INICIO SESIÓN</h3>
                    <div style={{ margin: '120px 70px 70px 70px' }}>
                        <Form>
                            <Form.Group className="mb-5">
                                <Form.Control
                                    type="text"
                                    placeholder="Usuario"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <Form.Text className="text-danger">{usernameError}</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-5">
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Form.Text className="text-danger">{passwordError}</Form.Text>
                            </Form.Group>
                            <div className="d-grid">
                                <Button
                                    style={{ marginTop: '70px', backgroundColor: '#3B5C92', borderColor: '#3B5C92'}}
                                    onClick={handleLogin}
                                >
                                    ACCEDER
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col lg={4} className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#3B5C92', height: '100vh' }}>
                    <img src="iconic.png" alt="Iconic Management" style={{ height: '200px', width: '200px', alignItems: 'center' }} />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;