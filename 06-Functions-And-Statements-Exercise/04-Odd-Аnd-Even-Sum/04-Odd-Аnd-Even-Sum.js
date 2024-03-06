
function calculateDigitSum(number, filter) {
    const digits = number.toString().split('').map(Number).filter(filter).reduce((acc, digit) => acc + digit, 0);
    return digits;
}

function solve(number) {

    let evenSum = calculateDigitSum(number, x => x % 2 === 0);
    let oddSum = calculateDigitSum(number, x => x % 2 !== 0);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);