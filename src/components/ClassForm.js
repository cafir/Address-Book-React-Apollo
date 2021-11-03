import React from "react";
import {Form, Button, Row, Col} from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

function ClassForm({ setError, setToken}) {
    
    return (
        <div className="margin-contactTable">
            <Form.Label>Input your User ID</Form.Label>
            <Form>
                <Row>
                    <Col xs={8}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Search..." />
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                        <Form.Group controlId="formBasicCheckbox"/>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit">
                                <SearchIcon sx={{ fontSize: 21 }}/> Search
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default ClassForm;