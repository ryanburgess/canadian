module.exports = function canadian() {
  'use strict';
  var canadian = require('./canadian.json');
  var show = Math.floor((Math.random() * canadian.length) + 1);

  console.log('\n' + canadian[show].word + ' - ' + canadian[show].definition + '\n');
};