import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import { UPDATE_CONTACT, GET_CONTACTS_BY_ID } from "../utils/graphql/queries";
import { useQuery, useMutation } from "@apollo/client";
import {Row, Col} from "react-bootstrap"

const updateCache = (cache, { data }) => {
    const existingContacts = cache.readQuery({
        query: GET_CONTACTS_BY_ID
    });

    const newContact = data.update_contacts_by_pk;
    cache.writeQuery({
        query: GET_CONTACTS_BY_ID,
        data: {contacts: [...existingContacts.contacts, newContact]}
    })
}

function Update(props) {
    const {loading, error, data } = useQuery(GET_CONTACTS_BY_ID, {
        variables: { id: props.match.params.id }
    });

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const[addContact] = useMutation(UPDATE_CONTACT, { update: updateCache });

    const submitTask = () => {
        addContact({ variables: { first_name, last_name, phone_number, address, city } });
        setFirstName("")
        setLastName("")
        setPhoneNumber("")
        setAddress("")
        setCity("")
    }

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
            <br/>
            <br/>
            <br/>
            
                    
                
            <Container>
                <Form onSubmit={submitTask}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="email" placeholder=""
                        value={data.contacts_by_pk.first_name} 
                        onChange={(e) => setFirstName({
                            contacts_by_pk: {...data.contacts_by_pk, first_name: e.target.value}
                        })}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="Last" placeholder="Password"
                        value={data.contacts_by_pk.last_name}  
                        onChange={(e) => setLastName(e.target.value)}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder="1234567" 
                        value={data.contacts_by_pk.phone_number} 
                        onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                        value={data.contacts_by_pk.city} 
                        onChange={(e) => setCity(e.target.value)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                        value={data.contacts_by_pk.address} 
                        onChange={(e) => setAddress(e.target.value)}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Container>
         
        </div>
    )
}

export default Update;