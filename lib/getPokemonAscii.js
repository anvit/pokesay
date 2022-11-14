const fs = require('fs');
const generateWhiteSpace = require('./generateWhiteSpace');

module.exports = function (padding, name = "pikachu") {
    try {
        const pokemonAsciiArt = fs.readFileSync(`ascii/${name}.txt`, "utf-8");
        return pokemonAsciiArt.split('\n').map(line => generateWhiteSpace(padding) + line).join('\n')
    } catch (error) {
        console.log("Could not read file");
        console.error(error);
    }
}