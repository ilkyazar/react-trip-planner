import React, { useState, useEffect } from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import './TripCityGallery.css';

const TripCityGallery = (props) => {

    const [firstImg, setFirstImg] = useState(false);
    const [secondImg, setSecondImg] = useState(false);
    const [thirdImg, setThirdImg] = useState(false);

    const query = props.name;

    useEffect(() => {
        axios.get(`https://api.pexels.com/v1/search`, {
            headers: {
                authorization: "563492ad6f91700001000001b68de3026efe4285afa7c113bb10384e"
            },
            params: {
                query: query,
                per_page: 3,
            }
        })
            .then(res => res.data.photos)
            .then(res => {
                setFirstImg(res[0].src.medium);
                setSecondImg(res[1].src.medium);
                setThirdImg(res[2].src.medium);
            })
            .catch(err => console.log(err))
    });

    return (
        <React.Fragment>
            <h4>{query}</h4>
            <CardGroup>
                <Card>
                    <Card.Img className="card-img" variant="top" src={firstImg} />
                </Card>
                <Card>
                    <Card.Img className="card-img" variant="top" src={secondImg} />
                </Card>
                <Card>
                    <Card.Img className="card-img" variant="top" src={thirdImg} />
                </Card>
            </CardGroup>
        </React.Fragment>
    )
}

export default TripCityGallery
