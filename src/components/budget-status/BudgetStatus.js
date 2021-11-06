import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getSelectedCities, getTotalExpenses } from '../../utils/StoreUtils';

const BudgetStatus = () => {
    const { budget, cities, selectedCityIds } = useContext(AppContext);

    const selectedCities = getSelectedCities(cities, selectedCityIds);
	const totalExpenses = getTotalExpenses(selectedCities);
    
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    const navigate = useNavigate();

    const handleClick = path => {
        navigate(path);
    }

    return (
        <React.Fragment>
            <div className={`alert p-4 ${alertType}`}>
                <span>Remaining: £{budget - totalExpenses}</span>
            </div>
            {budget - totalExpenses >= 0 && selectedCities.length >= 3 &&
                <div className="d-grid gap-2">
                    <Button
                        onClick={() => handleClick('/trip')}
                        className="plan-btn"
                        variant="success"
                        size="lg">
                        Plan Your Trip!
                    </Button>
                </div>}
        </React.Fragment>
    )
}

export default BudgetStatus
