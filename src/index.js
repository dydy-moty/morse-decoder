const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let phrase  = [];

    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }

    for (let elem of arr) {
        elem === '**********'? phrase.push(' ') : phrase.push(match(elem));
    }
    return phrase.join('');
}

function match (str) {
    let result = [];
    let string = '';

    for (let key of str.match(/\d{2}/g)) {
        if (key === '10') {
            result.push('.');
        } else if (key === '11') {
            result.push('-');
        }
    }
    return string = MORSE_TABLE[result.join('')];
}

module.exports = {
    decode
}