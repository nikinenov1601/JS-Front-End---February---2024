function solve(peopleCount, typeOfGroup, dayOfTheWeek) {

    let singlePrice = 0;
    let totalPrice = 0;

    if (dayOfTheWeek == "Friday") {
        switch (typeOfGroup) {
            case 'Students':
                singlePrice = 8.45;
                break;
            case 'Business':
                singlePrice = 10.90;
                break;
            case 'Regular':
                singlePrice = 15;
                break;
        }
    } else if (dayOfTheWeek == "Saturday") {
        switch (typeOfGroup) {
            case 'Students':
                singlePrice = 9.80;
                break;
            case 'Business':
                singlePrice = 15.60;
                break;
            case 'Regular':
                singlePrice = 20;
                break;
        }
    } else if (dayOfTheWeek == "Sunday") {
        switch (typeOfGroup) {
            case 'Students':
                singlePrice = 10.46;
                break;
            case 'Business':
                singlePrice = 16;
                break;
            case 'Regular':
                singlePrice = 22.50;
                break;
        }
    }

    totalPrice = singlePrice * peopleCount;

    if (typeOfGroup === "Students" && peopleCount >= 30) {
        totalPrice *= 0.85;
    } else if (typeOfGroup === "Business" && peopleCount >= 100) {
        totalPrice -= singlePrice * 10;
    } else if (typeOfGroup === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday"
);