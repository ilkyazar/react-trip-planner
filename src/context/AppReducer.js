export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        case 'ADD_SELECTED_CITY':
            return {
                ...state,
                selectedCityIds: [...state.selectedCityIds, action.payload],
            };
        case 'REMOVE_SELECTED_CITY':
            return {
                ...state,
                selectedCityIds: state.selectedCityIds.filter(city => city !== action.payload),
            };
        default:
            return state;
    }
};