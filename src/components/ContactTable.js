import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { useMutation } from "@apollo/client";

import { GET_CONTACTS, REMOVE_CONTACT } from "../utils/graphql/queries"
import { Table, Row, Col, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Link } from "react-router-dom";

const ContactTable = ({ contact }) => {

    const [removeContactMutation] = useMutation(REMOVE_CONTACT)
    const removeContact = (id) => {
        removeContactMutation({
            variables: { id },
            optimisticResponse: true,
            update: (cache) => {
                const existingContacts = cache.readQuery( { query: GET_CONTACTS });
                const contacts = existingContacts.contacts.filter((t) => t.id !== id);
                cache.writeQuery({
                    query: GET_CONTACTS,
                    data: { contacts }
                })  
            }
        })
    }

    const [show, setShow] = useState(false);
    const [showDel, setShowDel] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseDel = () => setShowDel(false);
    const handleShow = () => setShow(true);
    const handleShowDel = () => setShowDel(true);


    return (
        <div key={contact.id} className="margin-contactTable">
            <div className="modal-detail">
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton style={{backgroundColor:"#D8B6A4"}}>
                    <Modal.Title>{contact.first_name} {contact.last_name}</Modal.Title>
                    </Modal.Header>
                    <Row>
                        <Col></Col>
                    </Row>
                    <Modal.Body className="modal-detail">
                        <Row>
                            <Col xs={2}>City</Col>
                            <Col>: {contact.city}</Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Body className="modal-detail">
                        <Row>
                            <Col xs={2}>Address</Col>
                            <Col>: {contact.address}</Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Body className="modal-detail">
                        <Row>
                            <Col xs={2}>Phone</Col>
                            <Col>: {contact.phone_number}</Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </div>

            <div className="modal-delete">
                <Modal show={showDel} onHide={handleCloseDel} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Delete This Contact?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button style={{backgroundColor:"red", borderRadius:"5px"}} className="icon-delete" type="submit" onClick={() => removeContact(contact.id)}>
                            <text style={{marginLeft:"10px", color:"white"}}>Delete</text> <DeleteIcon sx={{ fontSize: 40, color:"white" }}/>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Table striped bordered hover size="sm">
                <div>
                    <div className="shadow m-3 mb-1 bg-white rounded" >
                        <Row className="class-form" style={{backgroundColor:"#fffdf6", borderRadius:"5px"}}>
                            <Col xs={10} onClick={handleShow} style={{marginTop:"10px", marginBottom:"10px"}}>
                                <div className="margin-left-contactTable">
                                    <h4>{contact.first_name} {contact.last_name}</h4>
                                    <text><PhoneIcon sx={{fontSize:20, color:"#E97878"}}/> {contact.phone_number}</text>
                                </div>
                            </Col>
                            <Col xs={1} style={{marginTop:"10px", marginBottom:"10px"}}>
                                <div className="d-flex justify-content-end">
                                    <Link to="/about">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Update!</Tooltip>}>
                                            <div className="icon-edit">
                                                <ModeEditOutlineOutlinedIcon sx={{ fontSize: 40 }} />
                                            </div>
                                        </OverlayTrigger>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={1} onClick={handleShowDel} style={{marginTop:"10px", marginBottom:"10px"}}>
                                <div className="d-flex justify-content-end">
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete!</Tooltip>}>
                                        <div className="icon-delete">
                                            <DeleteIcon sx={{ fontSize: 40 }} />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Table>
        </div>
        
    )
}

export default ContactTable;