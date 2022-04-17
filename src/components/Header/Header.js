import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='navigation '>
            <Zoom top>
                <Navbar collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand as={Link} to="/">Photographers World</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">


                            </Nav>
                            <Nav>
                                <Nav.Link href="#services">services</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Zoom>
        </div >
    );
};

export default Header;