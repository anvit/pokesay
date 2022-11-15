const generateString = require('./generateStringWithChars');

module.exports = function(str, count) {
    const result = [];
    const lines = parseInt(str.length / count);
    for(let i = 0; i <= lines; ++i) {
        const startIndex = i * count;
        const endIndex = i * count + count;
        let textToAdd = str.split('').slice(startIndex, endIndex).join('');
        if (lines > 0 && textToAdd.length < count) {
            textToAdd += generateString(count - textToAdd.length);
        }
        result.push(textToAdd);
    }
    return result;
}