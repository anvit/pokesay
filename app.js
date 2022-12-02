#! /usr/bin/env node
const getSpeechBubbleString = require('./lib/getSpeechBubbleString');
const getPokemonAscii = require('./lib/getPokemonAscii');

const MAX_LINE_LENGTH = 30;
const DEFAULT_PADDING = 3;
const input = process.argv[2] || "hello";
const poke = process.argv[3];

const padding = (input.length > MAX_LINE_LENGTH) ? MAX_LINE_LENGTH + DEFAULT_PADDING : (input.length + DEFAULT_PADDING);
const pokeAsciiArt = getPokemonAscii(padding, poke);
console.log(getSpeechBubbleString(input, MAX_LINE_LENGTH));
console.log(pokeAsciiArt);
