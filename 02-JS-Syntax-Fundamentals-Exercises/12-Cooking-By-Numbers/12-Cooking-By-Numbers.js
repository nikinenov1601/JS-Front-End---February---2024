function solve(number, first, second, third, fourth, fifth,) {
    result = Number(number);
    let operations = first[0] + second[0] + third[0] + fourth[0] + fifth[0]

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'c':
                result /= 2;
                break;
            case 'd':
                result = Math.sqrt(result);
                break;
            case 's':
                result += 1;
                break;
            case 'b':
                result *= 3;
                break;
            case 'f':
                result *= 0.8;
                break;
        }
        console.log(result);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');