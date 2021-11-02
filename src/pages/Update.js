import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form, Container } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";

function Update() {
    return (
        <div>
            <NavigationBar/>
            <Container>
                <Form className="margin-top">
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name..." required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name..."/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Your City..." required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Your Address..." required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="button-create">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Update;