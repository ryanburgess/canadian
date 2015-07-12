'use strict';
var test = require('tape');
var canadian = require('./');
var data = require('./canadian.json');

test('return a random word', function (t) {

  for (var i = 0; i < (data.length + 1); i++){
    t.notEqual(canadian(), undefined, 'Pass - Word and definition returned');
  }
  
  t.end();
});

test('return the lowercase words', function (t) {

  for (var i = 0; i < data.length; i++){
    var word = data[i].word.toLowerCase();
    var definition = data[i].definition;
    var expectedWord = data[i].word;
    var expected = '\n' + expectedWord + ' - ' + definition + '\n';
    t.equal(canadian(word), expected, 'Definition for ' + expectedWord);
  }

  t.end();
});

test('return the first uppercase words', function (t) {

  for (var i = 0; i < data.length; i++){
    var word = data[i].word.toUpperCase();
    var expectedWord = data[i].word;
    var definition = data[i].definition;
    var expected = '\n' + expectedWord + ' - ' + definition + '\n';
    t.equal(canadian(word), expected, 'Definition for ' + expectedWord);
  }

  t.end();
});
