module.exports = function canadian(word) {
  'use strict';
  var canadian = require('./canadian.json');

  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  if(word !== undefined){
    var def;
    word = word.toLowerCase().capitalizeFirstLetter();
    canadian.forEach(function(entry) {
      if(word === entry.word){
        def = '\n' + entry.word.capitalizeFirstLetter() + ' - ' + entry.definition + '\n';
      }
    });
    return def;
  }else{
    var show = Math.floor((Math.random() * canadian.length));
    return '\n' + canadian[show].word + ' - ' + canadian[show].definition + '\n';
  }
};