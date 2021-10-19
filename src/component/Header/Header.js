import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {logOut , user} = useAuth();

    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><h1 className="supports-Name">Medi-Help</h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/about">AboutUs</Nav.Link>
                        {
                            user?.email && user.displayName
                        }
                        {
                            user?.email ? 
                                <Button className="ms-2" variant="success" onClick={logOut}>LogOut </Button>

                            : <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                        } 
                        
                        <Navbar.Text>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;