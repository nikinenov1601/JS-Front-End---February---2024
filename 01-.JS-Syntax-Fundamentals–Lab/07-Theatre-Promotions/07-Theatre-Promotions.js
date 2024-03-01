function solve(dayOfTheWeek, age) {
    if (age >= 0 && age <= 18) {
        switch (dayOfTheWeek) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$')
                break;
            case 'Holiday':
                console.log('15$')
                break;
        }
    } else if (age > 18 && age <= 64) {

        switch (dayOfTheWeek) {
            case 'Weekday':
                console.log('18$');
                break;
            case 'Weekend':
                console.log('20$')
                break;
            case 'Holiday':
                console.log('12$')
                break;
        }
    } else {
        switch (dayOfTheWeek) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$')
                break;
            case 'Holiday':
                console.log('10$')
                break;
        }

    }
}

solve('Weekday', 42)