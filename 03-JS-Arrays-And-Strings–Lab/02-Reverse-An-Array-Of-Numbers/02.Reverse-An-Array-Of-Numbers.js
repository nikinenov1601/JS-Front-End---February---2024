function solve(n, inputArr) {

    let newArr = inputArr.slice(0, n);
    let reversedArr = newArr.reverse();

    console.log(reversedArr.join(" "));
}

solve(3, [10, 20, 30, 40, 50]);