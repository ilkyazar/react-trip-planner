export const getSelectedCities = (cities, selectedCityIds) =>
    cities.filter(city => selectedCityIds.includes(city.id));

export const getUnselectedCities = (cities, selectedCityIds) =>
    cities.filter(city => !selectedCityIds.includes(city.id));

export const getTotalExpenses = (selectedCities) =>
    selectedCities.reduce((total, city) => {
        return (total += city.cost);
    }, 0);