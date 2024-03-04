function revealWords(wordsString, templateString) {
    const words = wordsString.split(', ');
    const template = templateString.split(' ');

    const result = template.map(word => {
        if (word.includes('*')) {
            return words.shift();
        }
        return word;
    }).join(' ');

    return result;
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
);