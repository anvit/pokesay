const generateWhiteSpace = require('./generateWhiteSpace');

module.exports = function(text, LINE_LENGTH = 30) {
    let bubble = " .";
    for(let i = 0; i < Math.min(text.length + 2, LINE_LENGTH + 2); i++) {
        bubble = bubble + "-";
    }
    const lines = parseInt(text.length / LINE_LENGTH);
    bubble = bubble + ".\n";
    for (let j = 0; j <= lines; ++j) {
        const textToAdd = text.split('').slice(j * LINE_LENGTH, j * LINE_LENGTH + LINE_LENGTH).join('');
        bubble = bubble + " | " + textToAdd;
        if (textToAdd.length < LINE_LENGTH && lines > 0) {
            bubble = bubble + generateWhiteSpace(LINE_LENGTH - textToAdd.length);
        }
        bubble = bubble +  " |\n";
    }
    bubble = bubble + " '";
    for(let i = 0; i < Math.min(text.length - 1, LINE_LENGTH - 1); i++) {
        bubble = bubble + "-";
    }
    bubble = bubble + ".  .\n";
    for(let i = 0; i < Math.min(text.length + 2, LINE_LENGTH + 2); i++) {
        bubble = bubble + " ";
    }
    bubble = bubble + "`..\\\n";
    for(let i = 0; i < Math.min(text.length + 5, LINE_LENGTH + 5); i++) {
        bubble = bubble + " ";
    }
    bubble = bubble + "`.";
    return bubble;
}