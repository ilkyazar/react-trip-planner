import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './Budget.css';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);

	return (
		<div className="edit-budget">
			<InputGroup.Text>$</InputGroup.Text>
			<input
				required='required'
				type='number'
				className='form-control'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<Button
				variant="outline-success"
				onClick={() => props.handleSaveClick(value)}>
				Save
			</Button>
		</div>
	);
};

export default EditBudget;