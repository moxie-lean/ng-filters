'use strict';

angular.module('lnFilters')
  .filter('splitChars', splitChars);

function splitChars() {
  return function(text, charNum) {
    return text.split('')[charNum];
  };
}
