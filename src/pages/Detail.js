import React from "react";
import { Container, Table } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import "../App.css"
import Button from "@restart/ui/esm/Button";
import { GET_CONTACTS_DETAIL } from "../utils/graphql/queries"
import { useQuery } from "@apollo/client";


function Detail() {

    const {loading, error, data } = useQuery(GET_CONTACTS_DETAIL, {
        variables: { id: props.match.params.id }
    });

    if (loading) {
        return <div className="task">Loading...</div>
    }

    if (error) {
        return <div className="task">{error.toString()}</div>
    }


    return (
        <div>
            <div className="text-center">
            <NavigationBar/>
            <br/>
            <h1 className="layout-detail">— Detail —</h1>
            <Container>
                <Table striped bordered size="sm">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{contact.first_name}</td>
                        <td>{contact.phone_number}</td>
                        <td>{contact.city}</td>
                        <td><button type="submit" onClick={() => removeContact(contact.id)}>DELETE</button></td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
        <Container>
            <Button variant="success" className="back-detail">Back</Button>
        </Container>
        </div>
        
    )
    
}

export default Detail;