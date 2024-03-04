function solve(word, text) {
    
    const lowercaseWord = word.toLowerCase();
    const lowercaseText = text.toLowerCase();

    const words = lowercaseText.split(/\s+/);

    for (let word of words) {

        if (word === lowercaseWord) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}

solve('javascript', 'JavaScript is the best programming language');