function printMatrix(n) {
    for (i = 0; i < n; i++) {
        let row = "";
        for (j = 0; j < n; j++) {
            row += `${n} `
        }
        console.log(row);
    }
}

printMatrix(3);
