const genString = require('./generateStringWithChars');
const splitByCount = require('./splitByCount');

function makeStringCharCountFn(text, lineLength) {
    return (stringPadding = 0) => Math.min(text.length + stringPadding, lineLength + stringPadding);
}
/*
Generate a speech bubble that looks like this 👇🏼
.--------------------------------.
| Lorem ipsum dolor sit amet, co |
| nsectetur adipiscing elit.     |
'----------------------------. .-'
                              `.\
                                `\
*/
module.exports = function(text, LINE_LENGTH = 30) {
    const getBoundCharCount = makeStringCharCountFn(text, LINE_LENGTH);

    const topRow = ` .${genString(getBoundCharCount(2), "-")}.\n`;
    const linesArray = splitByCount(text, LINE_LENGTH);
    const textRows = linesArray.map(line => ` | ${line} |\n`).join('');
    const bottomRow = ` '${genString(getBoundCharCount(-2), "-")}. .-'\n`;
    const arrow = genString(getBoundCharCount(1), " ") + "`.\\\n" + 
        genString(getBoundCharCount(3), " ") + "`\\";

    const speechBubble = topRow + textRows + bottomRow + arrow;
    return speechBubble;
}