
function isPalindrome(number) {

    const forwardNumber = number.toString();
    const backwardNumber = forwardNumber.split('').reverse().join('');

    return forwardNumber === backwardNumber;
}

function printPalindromeResult(number){
    console.log(isPalindrome(number));
}

function solve(numbers) {
    numbers.forEach(printPalindromeResult);
}

solve([123, 323, 421, 121]);