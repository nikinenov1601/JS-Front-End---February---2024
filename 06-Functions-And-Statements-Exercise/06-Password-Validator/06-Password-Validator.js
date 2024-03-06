function validatePassword(password) {

    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    let digitCount = password.replace(/[^0-9]/g, "").length;

    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false
    }


    if (isValid == true) {
        console.log("Password is valid");
    }
}

validatePassword('logIn');