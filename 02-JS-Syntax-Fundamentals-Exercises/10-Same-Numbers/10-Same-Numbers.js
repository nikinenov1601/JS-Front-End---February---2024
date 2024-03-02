
function solve(number) {
    let numberText = number.toString();
    let currentDigit = numberText[0];
    let areEqual = true;
    let sum = Number(currentDigit);

    for (let i = 1; i < numberText.length; i++) {
        if (currentDigit !== numberText[i]) {
            areEqual = false;
        }

        currentDigit = numberText[i];
        sum += Number(currentDigit);

    }
    console.log(areEqual)
    console.log(sum);
}

solve(222222);