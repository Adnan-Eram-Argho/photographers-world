import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
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
                                {
                                    user ? <button className='btn' onClick={handleSignOut}>Sign Out</button> : <Nav.Link as={Link} to="/login">Sign up</Nav.Link>
                                }

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