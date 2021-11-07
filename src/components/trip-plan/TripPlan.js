import React, { useContext } from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import TripCard from '../trip-card/TripCard';
import TripCityGallery from '../trip-city-gallery/TripCityGallery';
import { AppContext } from '../../context/AppContext';
import { getSelectedCities } from '../../utils/StoreUtils';
import { generatePlans, createPlanString, createPlanFooterString } from '../../utils/PlanUtils';

const TripPlan = () => {

    const { budget, cities, selectedCityIds } = useContext(AppContext);
    const selectedCities = getSelectedCities(cities, selectedCityIds);

    const plans = generatePlans(budget, selectedCities);

    const firstPlan = plans[0];
    const firstPlanText = createPlanString(firstPlan);
    const firstPlanFooter = createPlanFooterString(firstPlan);

    const secondPlan = plans[1];
    const secondPlanText = createPlanString(secondPlan);
    const secondPlanFooter = createPlanFooterString(secondPlan);

    const thirdPlan = plans[2];
    const thirdPlanText = createPlanString(thirdPlan);
    const thirdPlanFooter = createPlanFooterString(thirdPlan);

    return (
        <React.Fragment>
            <div>Here are your travel plans!</div>
            <CardGroup>
                <TripCard
                    tripTitle="Plan 1"
                    tripText={firstPlanText} 
                    tripFooter={firstPlanFooter}/>
                <TripCard
                    tripTitle="Plan 2"
                    tripText={secondPlanText}
                    tripFooter={secondPlanFooter}/>
                <TripCard
                    tripTitle="Plan 3"
                    tripText={thirdPlanText}
                    tripFooter={thirdPlanFooter}/>
            </CardGroup>
            <div>
                {selectedCities.map(city => (
                    <TripCityGallery
                        key={city.id}
                        name={city.name} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default TripPlan
