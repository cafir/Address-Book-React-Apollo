import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import ContactsIcon from '@mui/icons-material/Contacts';

function NavigationBar() {
    
    return (
        <div>
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
            />
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#630000"}} variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <ContactsIcon sx={{ fontSize: 20, color:"#EEEBDD" }} /> <strong style={{color:"#EEEBDD"}}>PB</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;