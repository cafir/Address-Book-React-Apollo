import React, { useState} from "react";
import {Form, Row, Button, Col, Container} from "react-bootstrap"
import {useMutation } from "@apollo/client"
import {GET_CONTACTS, ADD_CONTACT } from "../utils/graphql/queries"

const updateCache = (cache, { data }) => {
    const existingContacts = cache.readQuery({
        query: GET_CONTACTS
    });

    const newContact = data.insert_contacts;
    cache.writeQuery({
        query: GET_CONTACTS,
        data: {contacts: [...existingContacts.contacts, newContact]}
    })
}

function ContactFrom() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const[addContact] = useMutation(ADD_CONTACT, { update: updateCache });
    const [validated, setValidated] = useState(false);

    const submitTask = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
        addContact({ variables: { first_name, last_name, phone_number, address, city } });
        setFirstName("")
        setLastName("")
        setPhoneNumber("")
        setAddress("")
        setCity("")
    }



    return (
            <div>
                <Container style={{backgroundColor:"#EEEBDD"}}>

            <Form noValidate validated={validated} onSubmit={submitTask} style={{padding:"20px"}}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="First Name"
                            className="taskInput"
                            value={first_name}
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please input First Name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Last Name"
                            className="taskInput"
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                        required
                        type="number"
                        placeholder="Phone Number"
                        className="taskInput"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please input Phone Number.
                    </Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="City"
                            className="taskInput"
                            value={city}
                            required
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please input City.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Address"
                            className="taskInput"
                            value={address}
                            required
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please input Address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                </Container>
        </div>
        
    )
}

export default ContactFrom;