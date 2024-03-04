function findSpecialWords(input) {

    const words = input.split(/\s+/);
    for (let word of words) {
        if (word.startsWith('#') && /^[a-zA-Z]+$/.test(word.slice(1))) {
            console.log(word.slice(1));
        }
    }
}

findSpecialWords('The symbol # is known #variously in English-speaking #regions as the #number sign');