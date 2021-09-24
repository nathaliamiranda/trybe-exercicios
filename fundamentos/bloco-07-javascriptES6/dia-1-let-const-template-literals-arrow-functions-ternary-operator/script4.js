const longestWord = text => {
    let words = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));