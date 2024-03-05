function solve(firstNum, secondNum, operator) {
    let result = 0;
    
    if (operator == "multiply") {
        result = firstNum * secondNum;
    }else if(operator == "divide"){
        result = firstNum / secondNum;
    }else if(operator == "add"){
        result = firstNum + secondNum;
    }else if(operator == "substract"){
        result = firstNum - secondNum;
    }

    console.log(result);
}

solve(5,5,'multiply');