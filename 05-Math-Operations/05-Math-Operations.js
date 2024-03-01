function solve(numberOne, numberTwo, operator) {
    if (operator == '+') {
        console.log(numberOne + numberTwo);
    } else if (operator == '-') {
        console.log(numberOne - numberTwo);
    } else if(operator == '*'){
        console.log(numberOne * numberTwo);
    }else if(operator == '/'){
        console.log(numberOne / numberTwo);
    }else if(operator == '%'){
        console.log(numberOne % numberTwo);
    }else if(operator == '**'){
        console.log(numberOne ** numberTwo);
    }
}

solve(2, 3, '**');