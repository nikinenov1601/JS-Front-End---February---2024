function solve(start, end){

    let result = '';
    let sum = 0;
    for(i = start; i<=end; i++){
        sum+=i;
        result += i + ' ';
    }

    console.log(result.trim());
    console.log(`Sum: ${sum}`)
}

solve(5, 10);