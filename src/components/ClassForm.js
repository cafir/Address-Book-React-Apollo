import React, { useEffect, useState } from "react";
import {Form, Button} from 'react-bootstrap'
import { useMutation } from "@apollo/client"



function ClassForm({ setError, setToken}) {
    
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Input your User ID</Form.Label>
                    <Form.Control type="password" placeholder="USER ID" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox"/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        
    )
}

export default ClassForm;