function solve(char1, char2) {

    const start = char1.charCodeAt(0);
    const end = char2.charCodeAt(0);

    let charachersInRange = "";

    for (let i = Math.min(start, end) + 1; i < Math.max(start, end); i++) {
        charachersInRange += String.fromCharCode(i) + " ";
    }

    console.log(charachersInRange)
}

solve("a", "g");