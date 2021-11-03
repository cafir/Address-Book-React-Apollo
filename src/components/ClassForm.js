import {Form, Button, Row, Col} from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import { GET_CONTACT_NAME, GET_CONTACTS } from '../utils/graphql/queries';
import { useQuery } from '@apollo/client';
import ContactTable from './ContactTable';

function useAlbumFilters() {
        const [contacts, setFirstName] = useState({first_name: undefined});
      
        const updateFilter = (filterType, value) => {
          setFirstName({
            [filterType]: value,
          });
        };
      
        return {
          models: { contacts },
          operations: { updateFilter },
        };
    }

function ClassForm() {
    

    const { operations, models } = useAlbumFilters();
    const { data, loading, error, refetch } = useQuery(GET_CONTACTS);

    if (loading) return <div>Loading</div>;
    if (error) return <div>error</div>;

    
    return (
        <div className="margin-contactTable" >
            
            <Form.Label>Input your User ID</Form.Label>
            <Form >
                <Row>
                    <Col xs={8}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Search..." onChange={(e) => operations.updateFilter("name", e.target.value)}
                            type="string"/>
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                        <Form.Group controlId="formBasicCheckbox"/>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" onClick={() =>
                                    refetch({
                                        albumsInput: { name: models.contacts.first_name },
                                    })
                                    }>
                            <SearchIcon sx={{ fontSize: 21 }}/> Search
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
            {data.contacts.map((contact) => (
                <ContactTable key={contact.id} contact={contact}/>
            ))}
        </div>
    )
}

export default ClassForm;