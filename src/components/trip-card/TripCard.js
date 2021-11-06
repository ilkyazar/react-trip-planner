import React from 'react'
import Card from 'react-bootstrap/Card';

const TripCard = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.tripTitle}</Card.Title>
                <Card.Text>
                    {props.tripText}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.tripFooter}</small>
            </Card.Footer>
        </Card>
    )
}

export default TripCard
