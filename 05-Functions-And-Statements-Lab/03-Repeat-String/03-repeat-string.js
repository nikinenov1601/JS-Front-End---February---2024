function solve(input, times){

    let result = "";

    while(times > 0){
        result+=input;
        times--;
    }

    console.log(result);
}

solve("abc", 3);