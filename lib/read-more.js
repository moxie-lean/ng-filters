'use strict';

angular.module('lnFilters')
  .filter('readMore', readMore);

function readMore() {
  return function(text) {
    return text || 'Read more';
  };
}
