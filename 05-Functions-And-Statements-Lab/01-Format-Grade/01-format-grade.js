function classicFormatGrade(grade) {

}


function solve(grade) {

    const result = formatGrade(grade);

    console.log(result);

    function formatGrade(grade) {
        if (grade < 3) {
            return `Fail (${Math.floor(grade)})`;
        } if (grade < 3.5) {
            return `Poor (${grade.toFixed(2)})`;
        } if (grade < 4.5) {
            return `Good (${grade.toFixed(2)})`;
        } if (grade < 5.5) {
            return `Very good (${grade.toFixed(2)})`;
        }

        return `Very Good (${grade.toFixed(2)})`;
    }

}

solve(2.99);