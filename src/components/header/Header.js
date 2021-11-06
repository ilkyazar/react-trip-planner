import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Header.css';

const Header = () => {
    return (
        <Navbar>
            <Container className="header-container">
                <Navbar.Brand><h2>Trip Planner</h2></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
