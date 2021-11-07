var sumArr = [];

function backtrack(i, sum, target, plan) {
    let clonedPlan = JSON.parse(JSON.stringify(plan))
    const planCities = clonedPlan.filter(c => c.days > 0);
    sumArr[sum] = planCities;

    if (sum > target) {
        return 0;
    }
    if (i === plan.length) {
        return sum;
    }

    plan[i].days++;
    const pick = backtrack(i + 1, sum + plan[i].cost, target, plan);

    plan[i].days--;
    const leave = backtrack(i + 1, sum, target, plan);

    if (pick > leave) {
        return pick;
    }
    return leave;
}

const editCityObjArray = (cityArr) => {
    return Array.from(cityArr.reduce((acc, { cost, days, ...r }) => {
        const key = JSON.stringify(r);
        const current = acc.get(key) || { ...r, cost: 0, days: 0 };
        return acc.set(key, { ...current, cost: current.cost + cost, days: current.days + days });
    }, new Map()).values());
}

export  const createPlanString = (resultingCities) => {
    let planStr = "";
    let totalCost = 0;
    for (let i = 0; i < resultingCities.length; i++) {
        planStr += resultingCities[i].days;
        resultingCities[i].days === 1 ? planStr += " day " : planStr += " days ";
        planStr += resultingCities[i].name + " (" + resultingCities[i].cost + " USD)";
        totalCost += resultingCities[i].cost;
        if (i !== resultingCities.length - 1) planStr += " + ";
    }
    planStr += " = " + totalCost + " USD";
    return planStr;
}

export  const createPlanFooterString = (resultingCities) => {
    let totalCost = 0;
    let totalDays = 0;
    for (let i = 0; i < resultingCities.length; i++) {
        totalCost += resultingCities[i].cost;
        totalDays += resultingCities[i].days;
    }
    return totalDays + " days, " + totalCost + " USD";
}

export  const generatePlans = (budget, selectedCities) => {
    let firstPlan = selectedCities.map(obj => ({ ...obj, days: 0 }));    
    let firstMinCityCost = Math.min(...selectedCities.map(c => c.cost));
    let firstMaxCityCost = Math.max(...selectedCities.map(c => c.cost));

    let secondPlan = firstPlan.filter((city) => city.cost !== firstMinCityCost).map(obj => ({ ...obj, days: 0 }));
    let secondMinCityCost =  Math.min(...secondPlan.map(c => c.cost));
    
    let thirdPlan = firstPlan.filter((city) => city.cost !== firstMaxCityCost).map(obj => ({ ...obj, days: 0 }));
    let thirdMinCityCost =  Math.min(...thirdPlan.map(c => c.cost));

    let firstPlanCities = generatePlanHelper(budget, firstPlan, firstMinCityCost);
    let secondPlanCities = generatePlanHelper(budget, secondPlan, secondMinCityCost);
    let thirdPlanCities = generatePlanHelper(budget, thirdPlan, thirdMinCityCost);

    return [[...firstPlanCities], [...secondPlanCities], [...thirdPlanCities]];
}

const generatePlanHelper = (budget, plan, minCityCost) => {
    let spentSoFar = 0;
    let resultingCities = [];
    
    while (true) {
        let spent = backtrack(0, 0, budget - spentSoFar, plan);
    
        resultingCities = [...resultingCities, ...sumArr[spent]];
    
        spentSoFar += spent;
    
        if ((budget - minCityCost < spentSoFar) && (spentSoFar <= budget))
            break;
    }
    
    return editCityObjArray(resultingCities);
}