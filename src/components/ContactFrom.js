import React, { useState} from "react";
import {Form, Row, Button, Col} from "react-bootstrap"
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

    const submitTask = () => {
        addContact({ variables: { first_name, last_name, phone_number, address, city } });
        setFirstName("")
        setLastName("")
        setPhoneNumber("")
        setAddress("")
        setCity("")
    }

    return (
        <div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="email" placeholder="" 
                    onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="Last" placeholder="Password" 
                    onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="1234567" 
                    onChange={(e) => setPhoneNumber(e.target.value)}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                    onChange={(e) => setCity(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                    onChange={(e) => setAddress(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={submitTask}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ContactFrom;