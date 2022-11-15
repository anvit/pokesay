
module.exports = function generateStringWithChars(count, defaultChar = ' ') {
    return Array(count).fill(defaultChar).join('');
}