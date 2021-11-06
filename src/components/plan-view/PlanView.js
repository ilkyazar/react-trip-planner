import React from 'react'
import Header from '../header/Header'
import TripPlan from '../trip-plan/TripPlan'
import Container from 'react-bootstrap/Container';

const PlanView = () => {
    return (
        <Container className="main-container">
            <Header />
            <TripPlan />
        </Container>
    )
}

export default PlanView
