import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import Button from 'react-bootstrap/Button';
import { getSelectedCities, getTotalExpenses } from '../../utils/StoreUtils';

const City = (props) => {
	const { budget, cities, selectedCityIds, dispatch } = useContext(AppContext);

	const selectedCities = getSelectedCities(cities, selectedCityIds);
	const totalExpenses = getTotalExpenses(selectedCities);

	const handleAdd = () => {
		if (totalExpenses + props.cost > budget) {
			alert("Above your budget! You cannot add this city.");
		}
		else {
			dispatch({
				type: 'ADD_SELECTED_CITY',
				payload: props.id,
			});
		}
	}

	const handleRemove = () => {
		dispatch({
			type: 'REMOVE_SELECTED_CITY',
			payload: props.id,
		});
	}

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.selected ?
				<Button onClick={handleRemove} variant="danger">Remove</Button>
				: <Button onClick={handleAdd}>Add</Button>}
			{props.name}
			<div>
				<span className="badge rounded-pill bg-success mx-8">
					${props.cost}
				</span>
			</div>
		</li>
	)
}

export default City
