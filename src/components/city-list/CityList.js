import React, { useContext } from 'react'
import City from '../city/City.js'
import { AppContext } from '../../context/AppContext';
import BudgetStatus from '../budget-status/BudgetStatus.js';
import { getSelectedCities, getUnselectedCities } from '../../utils/StoreUtils';

const CityList = () => {
    const { cities, selectedCityIds } = useContext(AppContext);

    const selectedCities = getSelectedCities(cities, selectedCityIds);
    const notSelectedCities = getUnselectedCities(cities, selectedCityIds);

    return (
        <React.Fragment>
            <div>
                <ul className='list-group'>
                    {selectedCities.map(city => (
                        <City
                            key={city.id}
                            id={city.id}
                            selected={true}
                            name={city.name}
                            cost={city.cost} />
                    ))}
                </ul>
            </div>
            <BudgetStatus />
            <ul className='list-group'>
                {notSelectedCities.map(city => (
                    <City
                        key={city.id}
                        id={city.id}
                        selected={false}
                        name={city.name}
                        cost={city.cost} />
                ))}
            </ul>
        </React.Fragment>
    )
}

export default CityList
