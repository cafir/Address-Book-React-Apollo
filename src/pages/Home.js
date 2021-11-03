import React from "react";
import ClassForm from "../components/ClassForm";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar";
import ContactFrom from "../components/ContactForm";
import { GET_CONTACTS } from "../utils/graphql/queries";
import { useQuery } from "@apollo/client";
import ContactTable from "../components/ContactTable";
import ContactsIcon from '@mui/icons-material/Contacts';



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

            <div className="margin-home">
                <Container>
                    <Row>
                        <Col>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col sm={3}>
                                            <Nav variant="pills" className="flex-column" fixed="top">
                                                <Nav.Item className="class-form">
                                                    <Nav.Link eventKey="first">All Contact</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className="class-form">
                                                    <Nav.Link eventKey="second">Contact With Specific User ID</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">Contact With Specific User ID</Nav.Link>

                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <div className="text-center">
                                                    <h1>
                                                        <ContactsIcon sx={{ fontSize: 40 }}/> 
                                                        Phone Book
                                                    </h1>
                                                </div>
                                                <Tab.Pane eventKey="first">
                                                    {data.contacts.map((contact) => (
                                                        <ContactTable key={contact.id} contact={contact}/>
                                                    ))}
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                        <ClassForm/>
                                                        {data.contacts.map((contact) => (
                                                        <ContactTable key={contact.id} contact={contact}/>
                                                    ))}
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    <ContactFrom/>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            
        </div>
    )
    
}

export default Login;