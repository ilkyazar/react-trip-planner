import React, { useContext } from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import TripCard from '../trip-card/TripCard';
import TripCityGallery from '../trip-city-gallery/TripCityGallery';
import { AppContext } from '../../context/AppContext';
import { getSelectedCities } from '../../utils/StoreUtils';

const TripPlan = () => {

    const { cities, selectedCityIds } = useContext(AppContext);
    const selectedCities = getSelectedCities(cities, selectedCityIds);

    return (
        <React.Fragment>
            <div>Here are your travel plans!</div>
            <CardGroup>
                <TripCard
                    tripTitle="Plan 1"
                    tripText="3 days Paris (1500 USD) + 2 days Roma (600 USD) + 2 days Barcelona (800 USD) + 2 days İstanbul (100
                        USD) = 3000 USD"
                    tripFooter="7 days, 3000 USD" />
                <TripCard
                    tripTitle="Plan 2"
                    tripText="3 days Paris (1500 USD) + 2 days Roma (600 USD) + 2 days Barcelona (800 USD) + 2 days İstanbul (100
                        USD) = 3000 USD"
                    tripFooter="7 days, 3000 USD" />
                <TripCard
                    tripTitle="Plan 3"
                    tripText="3 days Paris (1500 USD) + 2 days Roma (600 USD) + 2 days Barcelona (800 USD) + 2 days İstanbul (100
                        USD) = 3000 USD"
                    tripFooter="7 days, 3000 USD" />
            </CardGroup>
            <ul>
                {selectedCities.map(city => (
                    <TripCityGallery
                        key={city.id}
                        name={city.name} />
                ))}
            </ul>
        </React.Fragment>
    )
}

export default TripPlan
