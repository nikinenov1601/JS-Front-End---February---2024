function solve(speed, zone) {
    let speedLimit = 0;

    switch (zone) {
        case 'motorway':
            speedLimit = 130;
            break;

        case 'interstate':
            speedLimit = 90;
            break;

        case 'city':
            speedLimit = 50;
            break;

        case 'residential':
            speedLimit = 20;
            break;
    }

    let speedDiff = speed - speedLimit;
    let status = '';

    if (speedDiff <= 20) {
        status = 'speeding';
    }else if(speedDiff <= 40){
        status = 'excessive speeding';
    }else{
        status = 'reckless driving';
    }


    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

solve(120, 'interstate');