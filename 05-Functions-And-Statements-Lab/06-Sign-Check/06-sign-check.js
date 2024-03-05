function solve(firstNum, secondNum, thirdNum) {

    let result = solution(firstNum, secondNum, thirdNum)
    console.log(result);

    function solution(first, second, third){
        let negativeToken = 0;

        for (const num of arguments) {
            
            if (num < 0) {
                negativeToken++;
            }
        }
    
        if (negativeToken % 2 == 0) {
           return "Positive";
        } else {
            return "Negative";
        }

    }
    
}

solve(-1,
    -2,
    -3
    );