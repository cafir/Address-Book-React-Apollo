import React from "react";
import { Container, Table } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import "../App.css"
import Button from "@restart/ui/esm/Button";


function About() {
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
                        <th>Phone Number</th>
                        <th>City</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Farhan Ismail</td>
                            <td>0879862678</td>
                            <td>Indonesia</td>
                            <td>Dirumah</td>
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

export default About;