import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import EditBudget from './EditBudget';
import { RiEdit2Fill } from 'react-icons/ri';
import './Budget.css';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEditing(false);
    };

    return (
        <div className="budget-container">
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                <div className='alert alert-secondary show-budget' onClick={handleEditClick}>
                    <span>Budget: £{budget}</span>
                    <RiEdit2Fill size="1.75em" />
                </div>
            )}
        </div>
    )
}

export default Budget
