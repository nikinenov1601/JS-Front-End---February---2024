function solve(number) {

    let sumOfNumbers = 0;

    for (i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            sumOfNumbers += i;
        }
    }

    if (sumOfNumbers == number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

solve(28);