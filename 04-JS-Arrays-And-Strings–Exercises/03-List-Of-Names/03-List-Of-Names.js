function solve(arrayInput) {
    arrayInput.sort();

    for (let i = 0; i < arrayInput.length; i++) {
        console.log(`${i + 1}.${arrayInput[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);