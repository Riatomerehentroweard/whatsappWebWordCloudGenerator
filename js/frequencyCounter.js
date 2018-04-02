/*
 * @input:  one concatenated string containing the whole text
 * @output: an array of objects. Each containing the word and its 'size': 100 for biggest word, 1 for smallest
 *          e.g. {text: 'have', size: 102
 */

const getWordFrequency = (words) => {
    const wordsWithoutSpecialCharacters = words.replace(/[\.\?\-_$£¨!^`'=)(\/\\&%\*"+§°:;,{}]/g, '');
    const wordsWithoutTooLongOrEmptyOnes = wordsWithoutSpecialCharacters.split(' ')
        .filter((word) => word.length != 0 && word.length < 30);

    const results = {};

    wordsWithoutTooLongOrEmptyOnes.forEach((word) => {
        const lowerCaseWord = word.toLowerCase();
        if (results[lowerCaseWord]) {
            ++results[lowerCaseWord].size
        } else {
            results[lowerCaseWord] = { text: lowerCaseWord, size: 1 }
        }
    });

    const arrayOfWords = Object.values(results);

    wordsSortedByFequency = arrayOfWords.sort((first, second) => {
        return second.size - first.size;
    });

    return arrayOfWords;
}