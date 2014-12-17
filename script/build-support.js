'use strict';

/*
 * Dependencies.
 */

var fs,
    words;

fs = require('fs');
words = require('../data/dale-chall.json');

/*
 * Write.
 */

fs.writeFileSync('Support.md',
    'Supported Words\n' +
    '=================\n' +
    '\n' +

    words.map(function (word) {
        return '* “' + word + '”';
    }).join(';\n') +

    '.\n'
);
