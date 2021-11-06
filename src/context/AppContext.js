import { createContext } from "react";

export const initialState = {
	budget: 3000,
	cities: [
        { id: 1, name: 'Paris', cost: 500},
		{ id: 2, name: 'London', cost: 450},
		{ id: 3, name: 'Barcelona', cost: 400},
		{ id: 4, name: 'Madrid', cost: 350},
		{ id: 5, name: 'Rome', cost: 300},
		{ id: 6, name: 'Amsterdam', cost: 250},
		{ id: 7, name: 'Prague', cost: 200},
		{ id: 8, name: 'Brussels', cost: 150},
		{ id: 9, name: 'Budapest', cost: 100},
		{ id: 10, name: 'Istanbul', cost: 50},
	],
	selectedCityIds: [],
};

export const AppContext = createContext();
