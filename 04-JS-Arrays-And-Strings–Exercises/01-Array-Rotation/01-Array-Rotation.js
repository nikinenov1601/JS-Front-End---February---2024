function solve(arrayInput, number) {

    for (let i = 0; i < number; i++) {
        arrayInput.push(arrayInput.shift());
    }

    console.log(arrayInput.join(" "));
}

solve([51, 47, 32, 61, 21], 2);