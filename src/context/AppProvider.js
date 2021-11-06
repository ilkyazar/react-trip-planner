import { useReducer } from "react";
import { AppContext, initialState } from "./AppContext";
import { AppReducer } from "./AppReducer";

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value = {{
				budget: state.budget,
				cities: state.cities,
				selectedCityIds: state.selectedCityIds,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};