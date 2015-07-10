module.exports = function canadian(word) {
  'use strict';
  var canadian = require('./canadian.json');

  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  if(word !== undefined){
    word = word.capitalizeFirstLetter();
    canadian.forEach(function(entry) {
      if(word === entry.word){
        console.log('\n' + entry.word + ' - ' + entry.definition + '\n');
      }
    });
  }else{
    var show = Math.floor((Math.random() * canadian.length) + 1);
    console.log('\n' + canadian[show].word + ' - ' + canadian[show].definition + '\n');
  }
};