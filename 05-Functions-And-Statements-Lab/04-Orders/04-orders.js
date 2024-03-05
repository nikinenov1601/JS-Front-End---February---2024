function solve(item, count) {

    const result = solution(item, count);
    console.log(result.toFixed(2));

    function solution(item, count) {
        let sum = 0;
        switch (item) {
            case 'coffee':
                sum = 1.50 * count;
                break;
            case 'water':
                sum = 1.00 * count;
                break;
            case 'coke':
                sum = 1.40 * count;
                break;
            case 'snacks':
                sum = 2.00 * count;
                break;
        }

        return sum;
    }
}

solve("water", 5);