import Button from "@restart/ui/esm/Button";
import React, { useState} from "react";
import { Col, Container, Form, Modal, Nav, Row } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import SearchIcon from '@mui/icons-material/Search';
import ContactsIcon from '@mui/icons-material/Contacts';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import PhoneIcon from '@mui/icons-material/Phone';
function Contact() {
    const [show, setShow] = useState(false);
    const [showDel, setShowDel] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseDel = () => setShowDel(false);
    const handleShow = () => setShow(true);
    const handleShowDel = () => setShowDel(true);
    return(
        <div>
            <NavigationBar/>
            <Container>
                <div className="margin-contact">
                    <div className="text-center">
                        <h1>
                            <ContactsIcon sx={{ fontSize: 40 }}/> 
                              Phone Book
                        </h1>
                    </div>

                    <Container>
                        <Button variant="primary" type="submit" className="button-create">
                            Add Contact
                        </Button>
                        <div className="margin-top">
                            <Row>
                                <Col xs={10}>
                                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                                        <Form.Control type="text" placeholder="Search..." required/>
                                    </Form.Group>
                                </Col>
                                <Col xs={2}>
                                    {/* <div className="searchInput">
                                        <div className="justify-content-end">
                                            <SearchIcon sx={{ fontSize: 40 }}/>
                                        </div>
                                    </div> */}
                                    
                                    <Nav className="justify-content-center">
                                    <SearchIcon sx={{ fontSize: 40 }}/>
                                        
                                    </Nav>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    
                    <div className="modal-detail">
                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                            <Modal.Title>Farhan Ismail</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>City    : Indonesia</Modal.Body>
                            <Modal.Body>Address : Dirumah Ngab</Modal.Body>
                            <Modal.Body>Phone   : 097281678576</Modal.Body>
                        </Modal>
                    </div>

                    <div className="modal-delete">
                        <Modal show={showDel} onHide={handleCloseDel} centered>
                            <Modal.Header closeButton>
                            <Modal.Title>Delete This Contact?</Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                                <Button className="icon-delete" onClick={handleCloseDel}>
                                    Delete <DeleteIcon sx={{ fontSize: 40 }}/>
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <Container className="content-contact">
                        <div className="shadow-sm p-3 mb-1 bg-white rounded" onClick={handleShow}>
                            <Row>
                                <Col xs={8}>
                                    <h4>Farhan Ismail</h4>
                                    <text><PhoneIcon sx={{fontSize:20}}/> 017982698</text>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-flex justify-content-end">
                                        <div className="icon-delete">
                                            <DeleteIcon sx={{ fontSize: 40 }} onClick={handleShowDel}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="shadow-sm p-3 mb-1 bg-white rounded" onClick={handleShow}>
                            <Row>
                                <Col xs={8}>
                                    <h4>Farhan Ismail</h4>
                                    <text><PhoneIcon sx={{fontSize:20}}/> 017982698</text>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-flex justify-content-end">
                                        <div className="icon-delete">
                                            <DeleteIcon sx={{ fontSize: 40 }} onClick={handleShowDel}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="shadow-sm p-3 mb-1 bg-white rounded" onClick={handleShow}>
                            <Row>
                                <Col xs={8}>
                                    <h4>Farhan Ismail</h4>
                                    <text><PhoneIcon sx={{fontSize:20}}/> 017982698</text>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-flex justify-content-end">
                                        <div className="icon-delete">
                                            <DeleteIcon sx={{ fontSize: 40 }} onClick={handleShowDel}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="shadow-sm p-3 mb-1 bg-white rounded" onClick={handleShow}>
                            <Row>
                                <Col xs={8}>
                                    <h4>Farhan Ismail</h4>
                                    <text><PhoneIcon sx={{fontSize:20}}/> 017982698</text>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-flex justify-content-end">
                                        <div className="icon-delete">
                                            <DeleteIcon sx={{ fontSize: 40 }} onClick={handleShowDel}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="shadow-sm p-3 mb-1 bg-white rounded" onClick={handleShow}>
                            <Row>
                                <Col xs={8}>
                                    <h4>Farhan Ismail</h4>
                                    <text><PhoneIcon sx={{fontSize:20}}/> 017982698</text>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-flex justify-content-end">
                                        <div className="icon-delete">
                                            <DeleteIcon sx={{ fontSize: 40 }} onClick={handleShowDel}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="shadow-sm p-3 mb-1 bg-white rounded" onClick={handleShow}>
                            <Row>
                                <Col xs={8}>
                                    <h4>Farhan Ismail</h4>
                                    <text><PhoneIcon sx={{fontSize:20}}/> 017982698</text>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-flex justify-content-end">
                                        <div className="icon-delete">
                                            <DeleteIcon sx={{ fontSize: 40 }} onClick={handleShowDel}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </Container>
                </div>
            </Container>
            
        </div>
    )
}
export default Contact;