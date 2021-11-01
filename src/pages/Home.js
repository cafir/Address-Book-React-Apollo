import React from "react";
import ClassForm from "../components/ClassForm";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar";
import { GET_CONTACTS, ADD_CONTACT } from "../utils/graphql/queries";
import { useQuery } from "@apollo/client";
import ContactTable from "../components/ContactTable";


function Login(props) {
    const {  loading, error, data } = useQuery(GET_CONTACTS)

    if (loading) {
        return <div className="task">Loading...</div>
    }

    if (error) {
        return <div className="task">Error!</div>
    }

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
                                        <Nav.Link eventKey="first">All Contact</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="second">Contact With Specific User ID</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                    <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                        {data.contacts.map((contact) => (
                                        <ContactTable key={contact.id} contact={contact}/>
                                        ))}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        <ClassForm/>
                                        <br/>
                                        {data.contacts.map((contact) => (
                                        <ContactTable key={contact.id} contact={contact}/>
                                        ))}
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