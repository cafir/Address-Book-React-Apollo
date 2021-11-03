import React from "react";
import ClassForm from "../components/ClassForm";
import { Container, Row, Col, Tab, Nav, Placeholder, Table } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar";
import { GET_CONTACTS} from "../utils/graphql/queries";
import { useQuery } from "@apollo/client";
import ContactTable from "../components/ContactTable";
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactFrom from "../components/ContactFrom";



function Login(props) {
    const {  loading, error, data } = useQuery(GET_CONTACTS)

    if (loading) {
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
                                                <Nav.Item className="class-form">
                                                    <Nav.Link eventKey="third">Create Contact</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <div className="text-center">
                                                <h1>
                                                    <ContactsIcon sx={{ fontSize: 40, color: "#7D1935" }}/> 
                                                    <strong style={{color: "#630000"}}> Phone Book </strong>
                                                    <ContactsIcon sx={{ fontSize: 40, color: "#7D1935" }}/>
                                                </h1>
                                            </div>
                                            <div className="margin-loading">
                                                <Table striped bordered hover size="sm">
                                                    <div className="shadow p-3 mb-1 bg-white rounded" >
                                                        <Row className="class-form">
                                                            <Col xs={10}>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={10} />
                                                                </Placeholder>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={10} />
                                                                </Placeholder>
                                                            </Col>
                                                            <Col xs={2} style={{marginTop:"22px"}}>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={12} />
                                                                </Placeholder>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Table>
                                                <Table striped bordered hover size="sm">
                                                    <div className="shadow p-3 mb-1 bg-white rounded" >
                                                        <Row className="class-form">
                                                            <Col xs={10}>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={10} />
                                                                </Placeholder>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={10} />
                                                                </Placeholder>
                                                            </Col>
                                                            <Col xs={2} style={{marginTop:"22px"}}>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={12} />
                                                                </Placeholder>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Table>
                                                <Table striped bordered hover size="sm">
                                                    <div className="shadow p-3 mb-1 bg-white rounded" >
                                                        <Row className="class-form">
                                                            <Col xs={10}>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={10} />
                                                                </Placeholder>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={10} />
                                                                </Placeholder>
                                                            </Col>
                                                            <Col xs={2} style={{marginTop:"22px"}}>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={12} />
                                                                </Placeholder>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Table>
                                                <Table striped bordered hover size="sm">
                                                    <div className="shadow p-3 mb-1 bg-white rounded" >
                                                        <Row className="class-form">
                                                            <Col xs={10}>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={10} />
                                                                </Placeholder>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={10} />
                                                                </Placeholder>
                                                            </Col>
                                                            <Col xs={2} style={{marginTop:"22px"}}>
                                                                <Placeholder as="p" animation="glow" size="lg">
                                                                    <Placeholder xs={12} />
                                                                </Placeholder>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Table>
                                            </div>
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

    if (error) {
        return <div className="task">Error!</div>
    }

    return (
        <div className="backgroud">
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
                                                <Nav.Item className="class-form">
                                                    <Nav.Link eventKey="third">Create Contact</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <div className="text-center">
                                                    <h1>
                                                        <ContactsIcon sx={{ fontSize: 40, color: "#7D1935" }}/> 
                                                        <strong style={{color: "#630000"}}> Phone Book </strong>
                                                        <ContactsIcon sx={{ fontSize: 40, color: "#7D1935" }}/>
                                                    </h1>
                                                </div>
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