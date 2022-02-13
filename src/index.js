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
    let c = '';
    let arr = [];
    let lit1 = [];
    const de = {
        '11':'-',
        '10':'.'
    }
    for (let i = 0; i < expr.length/10; i++) {
        if (expr[i*10] === '*') {
            c += ' ';
            continue;
        }
        arr = expr.slice(i*10, i*10+10);
        for (let i = 0; i < 5; i++) {
            lit1.push(de[arr.slice(i*2, i*2+2)]);
        }
        c += MORSE_TABLE[lit1.join('')];
        lit1 = [];
    }
    return c
}

module.exports = {
    decode
}

module.exports = {
    decode
}
