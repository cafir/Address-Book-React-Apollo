import React from "react";
import LoginFrom from "../components/LoginForm";
import { Container, Row, Col, Tab, Nav, Sonnet } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar";

function Login() {
    return (
        <div>
            <NavigationBar/>
            <br/>
            <Container fluid>
                <Row>
                    <Col>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                        <Nav.Link eventKey="first">Login</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="second">Sign Up</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                    <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                        <LoginFrom/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default Login;