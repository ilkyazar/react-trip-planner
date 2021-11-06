import React from 'react'
import Header from '../header/Header'
import Budget from '../budget/Budget'
import CityList from '../city-list/CityList'
import Container from 'react-bootstrap/Container';
import './Home.css';

const Home = () => {
    return (
        <Container className="main-container">
            <Header />
            <Budget />
            <CityList />
        </Container>
    )
}

export default Home
