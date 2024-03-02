function solve(fruitType, weightInGrams, pricePerKG){
    let weighInKG = weightInGrams / 1000;

    let moneyNeeded = weighInKG * pricePerKG;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weighInKG.toFixed(2)} kilograms ${fruitType}.`);
}

solve('orange', 2500, 1.80);