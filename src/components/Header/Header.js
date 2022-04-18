import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
                                <Nav.Link href="/#services">services</Nav.Link>

                                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/checkout">CheckOut</Nav.Link>
                                <Nav.Link as={Link} to="/about">About me</Nav.Link>
                                {
                                    user ? <button className='btn' onClick={handleSignOut}>Sign Out</button> : <Nav.Link as={Link} to="/login">Sign up</Nav.Link>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Zoom>
        </div >
    );
};

export default Header;