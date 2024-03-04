function sortSpecialArray(arr) {

    let result = [];

    let sortedArr = arr.sort((a,b) => a - b);

    while (sortedArr.length > 0) {
        let firstNumber = sortedArr.shift();
        let lastNumber = sortedArr.pop();

        result.push(firstNumber, lastNumber);
    }

    return result;
}

sortSpecialArray([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);